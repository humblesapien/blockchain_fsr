import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
const Web3 = require('web3');
declare var window: any;
declare var require: any;


@Injectable()
export class UploadService {
	constructor(private http: HttpClient) {
      this.checkAndInstantiateWeb3();
  }

web3: any;
provider:any;
m_pub_key="";
public checkAndInstantiateWeb3 = () => {
 if (typeof window.web3 !== 'undefined') {
     console.warn('Using injected web3');
     this.web3 = new Web3(window.web3.currentProvider);
 } else {
     // when running in browser, use incognito mode or log out of metamask
     console.warn('No web 3 detected, falling back to Ganache');
     this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
     this.web3 = new Web3(this.provider);
 }
 window.ethereum.enable();
}  

public upload(files: Set<File>,encryptedFiles: Set<string>): 
    { [key: string]: { progress: Observable<number> } } {
	
	var showFileHash = false;
	var fHash;
  var m_pub_key

    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {

      encryptedFiles.forEach(efile => {

      var fname = new String(file.name);
      console.log(efile);
      var encryptedObj = {
      	fileName: fname, 
      	encryptedText: efile
      };
      //console.log(encryptedObj+" "+typeof encryptedObj);

      const req = new HttpRequest('POST', "https://swarm-gateways.net/bzz-raw:/", encryptedObj, {
        reportProgress: true,
        responseType: 'text' as 'json'
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates

      this.http.request(req).subscribe(res => {
      //console.log(res.type);
        if (res.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          const percentDone = Math.round(100 * res.loaded / res.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (res instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
        //console.log(res);
        if(res.type === HttpEventType.Response){
        	showFileHash = true;
        	fHash = res.body;
        	console.log(fHash);

          this.web3.eth.getAccounts((err, accs) => {
           if (err != null) {
             alert('There was an error fetching your accounts.');
             return;
           }

           if (accs.length === 0) {
             alert('You are not connected to an Ethereum client.');
             return;
           }
           this.m_pub_key=accs[0];
           console.log(this.m_pub_key);
           let transaction_data = {
               m_pub_key: this.m_pub_key,
               fileName: fname,
               fileHash: fHash
           };
           this.web3.eth.sendTransaction({
               from: this.m_pub_key,
               to: '0x73239859996e1b0d661514df665368695c9b9683',
               data: this.web3.toHex(transaction_data),
               gas : 300000 // deploying a contract
           }, function(error, hash){
               console.log("transaction"+error);
               console.log("hash: "+hash);
         });

   //this.checkAccount();
       });   
    	}
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });
  });
    return status;
  }
}