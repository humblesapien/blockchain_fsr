import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';
import { DashDialogComponent } from './dash-dialog/dash-dialog.component';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { tap, delay, map, switchMap } from 'rxjs/operators';

const Web3 = require('web3');
declare var window: any;
declare var require: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  received_messages =[];
  files_data=[];
  email="";
  receiver_w_pub_key="";
  message="";
  hash="";
  password="";
  provider: any;
    web3: any;
    m_pub_key:string;
    url = "http://localhost:8080/";
    local_storage_data=[];

  constructor(public dialog: MatDialog, private router: Router,private _appService: AppService, private http: HttpClient){
    this.checkAndInstantiateWeb3();
    this.onReady();
    this.refresh();
  }

  ngOnInit() {
    this.checkPassword();
  }

  checkPassword(){
    this._appService.get_method(this.url+"check_session").subscribe(
          data => {
              console.log(data); 
              if(data.status == 0){
                //open popup
                let dialogRef = this.dialog.open(DashDialogComponent, {width: '50%', height: '50%', disableClose: true});             
                 }
          },
          error => {
               console.log(error);
          });
    
  }

    messageComposer(fileHash){
       this.hash=fileHash;
       this.step=1;
       console.log("Hash"+fileHash);
     }

     copyToClipboard(item) {
       document.addEventListener('copy', (e: ClipboardEvent) => {
         e.clipboardData.setData('text/plain', (item));
         e.preventDefault();
         document.removeEventListener('copy', null);
       });
       document.execCommand('copy');
     }

     step = 0;

     setStep(index: number) {
       this.step = index;
     }

     nextStep() {
       this.step++;
     }

     prevStep() {
       this.step--;
     }

  send(){

    let data_send = JSON.stringify({
            'email': this.email,
            'm_pub_key': this.m_pub_key,
            'message':this.message,
            'hash': this.hash,
            'password': this.password
        });

      this._appService.post_method(this.url+"send", data_send).subscribe(
          data => {
              console.log(data); 
              if(data.status == 0){
                //open popup
                //this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
              }
          },
          error => {
               console.log('post error');
          });
      this.email = null;
      this.message = null;
      this.hash = null;
      this.password = null;
      this.step=0;
  }

  receive(){
    let data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key
        });

      this._appService.post_method(this.url+"check_messages", data_send).subscribe(
          data => {
              console.log(data);
              this.received_messages=data.messages;
              for(var i=0;i < this.received_messages.length;i++){
                localStorage.setItem((localStorage.length+i)+"",JSON.stringify(this.received_messages[i]));
              }
              this.refresh();
              console.log("******** " + this.received_messages + " *******");
          },
          error => {
               console.log('post error');
          });
  }

  refresh(){
    this.local_storage_data=[];
    for(var i=0;i<localStorage.length;i++){
      this.local_storage_data.push(JSON.parse(localStorage.getItem(i+"")));
      console.log(this.local_storage_data);
    }
  }

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

  public onReady = () => {
        // get initial account balance so it can be displayed
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
    //this.checkAccount();

          var get_url = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address="+this.m_pub_key+"&startblock=0&endblock=99999999&sort=asc&apikey=0xeD8cBe4a6ABe9BDbe2e6457aae4464ab844b1753"
          console.log("url"+get_url);
          this._appService.get_method(get_url).subscribe(
            data=>{
                let values = [];

                 for(let i=0; i<data.result.length; i++){
                   if(data.result[i].to == "0x73239859996e1b0d661514df665368695c9b9683"){
                     values.push(data.result[i]);
                   } //use i instead of 0
                     
                 }
                 for(let i=0;i<values.length;i++){
                   //console.log(this.web3.toAscii(values[i].input));
                   this.files_data.push(JSON.parse(this.web3.toAscii(values[i].input)));
                 }
                 console.log(this.files_data);
                 //console.log(files_data)  
            },
            error=>{
              console.log(error);
            }
            );
        });
         // var get_url = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address="+this.m_pub_key+"&startblock=0&endblock=99999999&sort=asc&apikey=0xeD8cBe4a6ABe9BDbe2e6457aae4464ab844b1753"
         // console.log("url"+get_url);
         // this.http.get(get_url).pipe(map((response: Response) => {
         //   //console.log(response.result);
         //   var resp = JSON.parse(JSON.stringify(response));
         //   let values = [];

         //   for(let i=0; i<resp.result.length; i++){
         //     if(resp.result[i].to == "0x73239859996e1b0d661514df665368695c9b9683"){
         //       values.push(resp.result[i]);
         //     } //use i instead of 0
               
         //   }
         //   for(let i=0;i<values.length;i++){
         //     //console.log(this.web3.toAscii(values[i].input));
         //     this.files_data.push(JSON.parse(this.web3.toAscii(values[i].input)));
         //   }
         //   console.log(this.files_data);
         //   //console.log(files_data)

         // })).subscribe();
}

}