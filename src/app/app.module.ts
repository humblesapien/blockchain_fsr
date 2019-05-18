import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './upload/dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
//import { UploadModule } from './upload/upload.module';
//import { DownloadModule } from './download/download.module';
import { HttpClientModule } from '@angular/common/http';
import {FileSaverModule} from 'ngx-filesaver';
import {angularFileSaver} from 'angular-file-saver';
import { AlertsModule } from 'angular-alert-module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {AppService} from './app.service';
import {EncrDecrService} from './upload/encr-decr-service.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatListModule } from '@angular/material';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

// const routes: Routes = [
//     { path: 'signup', component: SignupComponent },
//     { path: '', component: SignupComponent },
//     { path: 'dashboard', component: DashboardComponent },
// ];

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [AppRoutingModule,/*RouterModule.forRoot(routes), */FormsModule, BrowserModule, HttpClientModule, FileSaverModule, AlertsModule.forRoot(), MatExpansionModule, MatCardModule,PerfectScrollbarModule, MatListModule, BrowserAnimationsModule, DashboardModule],
  providers: [EncrDecrService, AppService,
   {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
