import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, MatProgressBarModule, FormsModule, MatExpansionModule, MatCardModule],
  declarations: [UploadComponent, DialogComponent],
  exports: [UploadComponent],
  entryComponents: [DialogComponent], // Add the DialogComponent as entry component
  providers: [UploadService]
})
export class UploadModule {}
