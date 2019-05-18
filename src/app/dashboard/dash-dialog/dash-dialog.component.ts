import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AppService } from '../../app.service';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
//import { AlertsService } from 'angular-alert-module';

const Web3 = require('web3');
declare var window: any;
declare var require: any;

@Component({
  selector: 'app-dash-dialog',
  templateUrl: './dash-dialog.component.html',
  styleUrls: ['./dash-dialog.component.css']
})
export class DashDialogComponent implements OnInit {

	web3: any;
    m_pub_key:string;
    url = "http://localhost:8080/";
    provider: any;

  constructor(private router: Router, private _appService: AppService, public dialogRef: MatDialogRef<DashDialogComponent>) {
  	this.checkAndInstantiateWeb3();
  	this.onReady();
  }

  ngOnInit() {
  	this.fn=()=>{alert("Password Incorrect error");}
  }

  public fn:Function;
  password='';

  submit(){
  	let data_send = JSON.stringify({
            'pass': this.password,
            'm_pub_key': this.m_pub_key
        });

      this._appService.post_method(this.url+"check_password", data_send).subscribe(
          data => {
              console.log(data); 
              if(data.status == 0){
                console.log("the password is incorrect");
				        this.fn();
                this.router.navigate(['/dashboard']);
              }
              else if(data.status == 1){
                this.dialogRef.close();
              }
          },
          error => {
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
