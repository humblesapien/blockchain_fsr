import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {EncrDecrService} from '../encr-decr-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('file') file;

  public files: Set<File> = new Set();

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService: UploadService, public EncrDecr: EncrDecrService) {
      }
  
  ngOnInit() {}

  pswd = "";
  progress;
  canBeClosed = false;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  pswdFlag = true;
  uploadSuccessful = false;
  encryptedFiles: Set<string> = new Set();

  checkPassword(event){
    if(this.pswd.length === 8){
      this.pswdFlag = false;
    }
    else this.pswdFlag = true;
  }

  onFilesAdded(event) {
    console.log(this.pswd);
    let reader = new FileReader();
    
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        //console.log(JSON.stringify(files)+" "+JSON.stringify(files[key]));
        this.files.add(files[key]);
      }
    }

    if(event.target.files && event.target.files.length) {
      this.files.forEach(file=>{
        console.log(file.name.split(".")[1]);
        if(file.name.split(".")[1] === "jpeg" || file.name.split(".")[1] === "png" || file.name.split(".")[1] === "jpg" || file.name.split(".")[1] === "pdf"){
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
              var text = reader.result;
              console.log(text);
              this.encryptedFiles.add(this.EncrDecr.set(this.pswd,text));
              //console.log(this.EncrDecr.get("password",encrypted_text));
            };
        }
        else {
            const [file] = event.target.files;
            reader.readAsText(file);
            reader.onload = () => {
              var text = reader.result;
              console.log(text);
              this.encryptedFiles.add(this.EncrDecr.set(this.pswd,text));
              //console.log(this.EncrDecr.get("password",encrypted_text));
            };
        }
      });
    }
  }

  addFiles() {
    if(this.pswd != null)
      this.canBeClosed = true
    else this.canBeClosed = false;
    this.file.nativeElement.click();
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files,this.encryptedFiles);
    console.log(this.progress);
    //console.log(this.files);
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
    //console.log(JSON.stringify(allProgressObservables));

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;
      // ... and the component is no longer uploading
      this.uploading = false;
    
    // When all progress-observables are completed...
    /*forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;
      // ... and the component is no longer uploading
      this.uploading = false;
    });*/
  }
}