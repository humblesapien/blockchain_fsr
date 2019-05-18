//geth --testnet --syncmode=light --ws --wsorigins=mychat --shh --wsapi=web3,shh,net 
import { Component, OnInit, ViewEncapsulation, ViewChild, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
const Web3 = require('web3');
import { AppService } from './app.service';
declare var window: any;
declare var require: any;
import * as $ from 'jquery';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
	provider: any;
    account: any;
    accounts: any;
    web3: any;
    m_pub_key="";
  title = 'project2';
    is_signed_up:any;
    url = "http://localhost:8080/";

  constructor(private router: Router,private _appService: AppService, private zone: NgZone, private http: HttpClient, private route: ActivatedRoute){
    console.log("inside app component constructor");
  	this.checkAndInstantiateWeb3();
  	this.onReady();

  }

  checkAccount(){
    let data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key
        });

      this.zone.runOutsideAngular(()=>{
        this._appService.post_method(this.url+"check_account", data_send).subscribe(
          data => {
              this.is_signed_up=data["is_signed_up"];
              console.log(this.is_signed_up+"***************8");
              if(this.is_signed_up==1){
                console.log("navigating to dash");
                this.router.navigate(['/dashboard']);
                //this.http.get("/dashboard");
              }
              else{
                console.log("navigating to signuo");
                this.router.navigate(['/signup']);
                //this.http.get("/signup");
              }
          },
          error => {
              // console.log('post error');
          });
});
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
          //this.checkAccount();
        });
      }
}