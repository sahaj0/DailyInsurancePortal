import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import{MatDialogModule} from '@angular/material/dialog';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ForgetComponent } from './forget/forget.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowWalletComponent } from './show-wallet/show-wallet.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ClaimComponent } from './claim/claim.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ModalPopupComponent,
    ForgetComponent,
    OtpVerifyComponent,
    AddWalletComponent,
    HeaderComponent,
    FooterComponent,
    ShowWalletComponent,
    PurchaseComponent,
    ClaimComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
