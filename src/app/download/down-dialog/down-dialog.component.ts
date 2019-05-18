import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
//import { DownloadService } from '../download.service'
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';;
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {EncrDecrService} from '../../upload/encr-decr-service.service';
import {FileSaverService} from 'ngx-filesaver';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-down-dialog',
  templateUrl: './down-dialog.component.html',
  styleUrls: ['./down-dialog.component.css']
})
export class DownDialogComponent implements OnInit {

public fn:Function;
display = 0;
  constructor(private alerts: AlertsService, public FileSaverService: FileSaverService, private http: HttpClient,public dialogRef: MatDialogRef<DownDialogComponent>, public EncrDecr: EncrDecrService) { }

  ngOnInit() {
  	this.fn=()=>{this.alerts.setMessage("Password Incorrect","error");}
  	this.display = 0;
  }

  fileHash="";
  passwd="";
  public fname;
  pswdFlag = true;
  public progress = new Subject<number>();
  public downloading = false;
  reqOngoing = false;

  checkPassword(event){
    if(this.passwd.length === 8){
      this.pswdFlag = false;
    }
    else this.pswdFlag = true;
  }
  
  downloadFiles(){
	var url = "https://swarm-gateways.net/bzz-raw:/"+this.fileHash;
	const req = new HttpRequest('GET', url, {
        reportProgress: true,
        responseType: 'text' as 'json'
    });

	this.http.request(req).subscribe(res=>{
		//console.log(res);
		this.downloading = true;
		if(res.type === HttpEventType.Response){
			var downloadedObj = JSON.parse(res.body.toString());
			this.fname = downloadedObj.fileName;

			if(this.fname.search("jpg") != -1 || this.fname.search("png") !=-1 || this.fname.search("jpeg") != -1 || this.fname.search("pdf") != -1){
				//console.log("an image file");
				console.log(downloadedObj.encryptedText);
				try{
					var base64Text = this.EncrDecr.get(this.passwd,downloadedObj.encryptedText);
					var extension = base64Text.split(";")[0].substring(5);
					var imageBlob = this.dataURItoBlob(base64Text.split(",")[1],extension);
					this.FileSaverService.save(imageBlob, downloadedObj.fileName);
				}catch(e){
					console.log("the password is incorrect");
					this.fn();
				}
			}
			else{
				//console.log("NOT an image file");
				console.log(downloadedObj.encryptedText);
				try{
				var decryptedText = this.EncrDecr.get(this.passwd,downloadedObj.encryptedText);
				console.log(decryptedText);
				var data = new Blob([decryptedText]);
				this.FileSaverService.save(data, downloadedObj.fileName);
				}
				catch(e){
					console.log("the password is incorrect");
					this.fn();
				}	
			}
		}	

		if(res.type === HttpEventType.DownloadProgress){
			this.display = 1;
			const percentDone = Math.round(100 * res.loaded / res.total);
			this.reqOngoing = true;
          	console.log(percentDone);
          	this.progress.next(percentDone);
        } else if (res instanceof HttpResponse) {
          	this.progress.complete();
          	this.downloading = false;
          	this.reqOngoing = false;
        }
	});
	}

	dataURItoBlob(dataURI,extension){
	   var byteString = atob(dataURI);
	   var arrayBuffer = new ArrayBuffer(byteString.length);
	   var int8Array = new Uint8Array(arrayBuffer);
	   for (let i = 0; i < byteString.length; i++) {
	     int8Array[i] = byteString.charCodeAt(i);
	   }
	   var blob = new Blob([arrayBuffer], { type: extension });    
	   return blob;
	}

	close(){
		this.dialogRef.close();
	}
}
