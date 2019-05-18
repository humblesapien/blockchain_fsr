import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownDialogComponent } from './down-dialog/down-dialog.component';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  constructor(public dialog: MatDialog, public downloadService: DownloadService) {}
  public openDownloadDialog() {
    let dialogRef = this.dialog.open(DownDialogComponent, { width: '50%', height: '66%' });
  }
}