import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: 'signup', component: SignupComponent, canActivate:[AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }