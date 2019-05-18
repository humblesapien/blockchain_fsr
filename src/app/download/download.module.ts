import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { DownDialogComponent } from './down-dialog/down-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DownloadService } from './download.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FileSaverModule} from 'ngx-filesaver';
import { AlertsModule } from 'angular-alert-module';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule,AlertsModule.forRoot(), HttpClientModule, BrowserAnimationsModule, MatProgressBarModule, FormsModule, FileSaverModule, MatExpansionModule, MatCardModule],
  declarations: [DownloadComponent, DownDialogComponent],
  exports: [DownloadComponent],
  entryComponents: [DownDialogComponent], // Add the DialogComponent as entry component
  providers: [DownloadService]
})
export class DownloadModule {}
