import { Component, OnInit, ViewEncapsulation, ViewChild, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'
import { AppService } from '../app.service';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

const Web3 = require('web3');
declare var window: any;
declare var require: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	provider: any;
    account: any;
    accounts: any;
    web3: any;
    m_pub_key="";
  title = 'project2';
    is_signed_up:any;
    url = "http://localhost:8080/";
  constructor(private router: Router,private _appService: AppService, private http: HttpClient, private zone: NgZone){
  	console.log("inside signup constructor");
    this.checkAndInstantiateWeb3();
  	this.onReady();

  }
  username="";
  email="";
  password="";

  ngOnInit() {
  }

  signup(){
  	 let data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key,
            'email':this.email,
            'username':this.username,
            'pass': this.password
        });

      this._appService.post_method(this.url+"signup", data_send).subscribe(
          data => {
            	console.log(data); 
            	if(data["status"]==1){
            		this.router.navigate(['/dashboard']);
            	}else{
            		this.router.navigate(['/signup']);
            	} 
          },
          error => {
               console.log(error);
               console.log('post error');
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
