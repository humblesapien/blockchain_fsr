import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';
const Web3 = require('web3');
import { AppService } from '../app.service';
declare var window: any;
declare var require: any;
import * as $ from 'jquery';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
	
	provider: any;
    account: any;
    accounts: any;
    web3: any;
    m_pub_key="";
  	title = 'project2';
    is_signed_up:any;
    url = "http://localhost:8080/";
    val	= new BehaviorSubject<boolean>(true);

	constructor(private _appService: AppService, private zone: NgZone, private router: Router){}

   	public onReady():Observable<boolean> {
        // get initial account balance so it can be displayed
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


     	this.web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            console.log(err);
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert('You are not connected to an Ethereum client.');
            return;
          }
          this.m_pub_key=accs[0];
          console.log(this.m_pub_key);
          // this.isSigned();
        });
     	setTimeout(()=>{
        let data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key
        });
        	console.log(data_send);
	        console.log("here mofo");
	        this._appService.post_method(this.url+"check_account", data_send).subscribe(
	          data => {
	              this.is_signed_up=data["is_signed_up"];
	              console.log(this.is_signed_up+"***************8");
	              if(this.is_signed_up==1){
	                console.log("navigating to dash");
	                this.router.navigate(['/dashboard']);
	                //this.http.get("/dashboard");
	                //this.val = of(false);
	                this.val.next(false);
	              }
	              else{
	                console.log("navigating to signup");
	                this.router.navigate(['/signup']);
	                //this.http.get("/signup");
	                //this.val = of(true);
	                this.val.next(true);
	              }
	          },
	          	    // console.log(this.val);
	          error => {
	              console.log('error');
	          });
	 },300);
     	return this.val.asObservable();

// onReady():Observable<boolean> {
// // get initial account balance so it can be displayed
//         if (typeof window.web3 !== 'undefined') {
//             console.warn('Using injected web3');
//             this.web3 = new Web3(window.web3.currentProvider);
//         } else {
//             // when running in browser, use incognito mode or log out of metamask
//             console.warn('No web 3 detected, falling back to Ganache');
//             this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
//             this.web3 = new Web3(this.provider);
//         }
//         window.ethereum.enable();

//   const getAccountsAsObservable = Observable.bindNodeCallback(
//     callback => this.web3.eth.getAccounts(callback));

//   return getAccountsAsObservable()
//     .pipe(
//       switchMap(accs => {
//         if (accs.length === 0) {
//           alert('You are not connected to an Ethereum client.');
//           // throw an error to skip to "cathError" pipe
//           return throwError(new Error('You are not connected to an Ethereum client.'));
//         }
//         const m_pub_key=accs[0];
//         console.log(this.m_pub_key);
//         const data_send = JSON.stringify({
//           'm_pub_key': m_pub_key
//         });
//         return of(data_send);
//       }),
//       switchMap(data_send => { 
//         this._appService.post_method(this.url+"check_account", data_send)
//       }),
//       map(data => {
//         this.is_signed_up=data["is_signed_up"];
//         console.log(this.is_signed_up+"***************8");
//         if(this.is_signed_up==1){
//           console.log("navigating to dash");
//           //this.router.navigate(['/dashboard']);
//           //this.http.get("/dashboard");
//           return false;
//           // this.router.navigate(['/dashboard']);
//         } else {
//           console.log("navigating to signup");
//           //this.router.navigate(['/signup']);
//           //this.http.get("/signup");
//           return true;
//           // this.router.navigate(['/signup']);
//         }
//       }),
//       catchError(err => {
//         //handle error of getAccounts or post_method here
//         console.log(err);
//         alert('There was an error fetching your accounts.');
//         return of(false);
//       })
//     )
// }
}
}