import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatIconModule } from '@angular/material';
import { DashDialogComponent } from './dash-dialog/dash-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//import { AlertsModule } from 'angular-alert-module';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {AppService} from '../app.service';
import { UploadModule } from '../upload/upload.module';
import { DownloadModule } from '../download/download.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  imports: [UploadModule, DownloadModule, CommonModule, MatDialogModule, PerfectScrollbarModule, MatListModule, BrowserAnimationsModule, FormsModule, MatExpansionModule, MatCardModule, MatIconModule, MatButtonModule],
  declarations: [DashboardComponent, DashDialogComponent],
  providers: [AppService,
   {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [DashboardComponent],	
  entryComponents: [DashDialogComponent] // Add the DialogComponent as entry component
})
export class DashboardModule { }