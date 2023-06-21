import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ActivateGuard } from './activate.guard';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { ForgetComponent } from './forget/forget.component';
import { ShowWalletComponent } from './show-wallet/show-wallet.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
  // {path:"",component:AppComponent},
  {
    path:"home",component:HomeComponent
  },
  {path:"register",component:RegistrationComponent},
   {path:"login",component:LoginComponent},
   {path:"",component:HomeComponent},
   {path:"showamount",component:ShowWalletComponent},
   {path:"showamount/:username",component:ShowWalletComponent},
   {path:"history/:username",component:HistoryComponent},
   {path:"otp-verify",component:OtpVerifyComponent},
   {path:"forget",component:ForgetComponent},
   {path:"admin",component:AdminComponent,canActivate:[ActivateGuard]}
  // {path:"",redirectTo:'app-root', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
