import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { eWallet } from './eWallet';
import { Observable } from 'rxjs';
import { Policy } from './purchase/Policy';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseurl="http://localhost:8080/user";
 baseurl1="http://localhost:8080/login";
 sendotp="http://localhost:8080/sendOTP";
verfiyotp="http://localhost:8080/verify-otp";
forgett="http://localhost:8080/forget";
saveAmount="http://localhost:8080/wallet";
showAmount="http://localhost:8080/eWallet";
his="http://localhost:8080/history";
sendP="http://localhost:8080/policy";
lastUrl="http://localhost:8080/claim";


 username!:any;
 user1!:any;
 otpEmail:any;
 otpEmailFromSession:any
 user_id:any;
 eWalletAmount:any;
 eWalletAmountUpdate:any;
 eWalletType:any;
eWalletId:any;

geteWalletAmount:any;

geteWalletAmountUpdate:any;
 geteWalletTyp:any;
getWalletId:any;
  constructor(private Httpclient:HttpClient) { }

  login(user:User){
    return this.Httpclient.post(`${this.baseurl1}`,user);
  }

  register(user:User){
    
    return this.Httpclient.post(`${this.baseurl}`,user);

  }

  resetPassword(user:User){
    return this.Httpclient.post(`${this.sendotp}`,user);

  }

  verify(user:any){
   return this.Httpclient.post(`${this.verfiyotp}`,user);
  }

  forget(user:User){
    return this.Httpclient.post(`${this.forgett}`,user);

  }
  myPost={walle:eWallet,user:User}

  sendAmount(walle:any,user:any):Observable<any>{
    return this.Httpclient.post(`${this.saveAmount}`,walle,user);
  
  }

  showEwallet(u:eWallet):Observable<any>{
    return this.Httpclient.post(`${this.showAmount}`,u);
  }
  showEwallet1(username:String):Observable<any>{
    return this.Httpclient.get(`${this.showAmount}/${username}`);  
  }

  History(username:String):Observable<any>{
    return this.Httpclient.get(`${this.his}/${username}`);  
  }
  
policysend(p:Policy){
  return this.Httpclient.post(`${this.sendP}`,p);
}

sendclaim(p:Policy){
 return this.Httpclient.post(`${this.lastUrl}`,p);
}

  public isLoggedIn(){

  this.user1=sessionStorage.getItem('user');
  if(this.user1!=null ){
    return true;
  } else 
  return false;

  }

public  getUser(){
 this.user1=sessionStorage.getItem('user');
 return JSON.parse(this.user1);
 }


 
 public logout(){
   sessionStorage.removeItem('user');
  sessionStorage.removeItem('type');
  sessionStorage.removeItem('amount');
  window.location.reload();
   return true;
 }

 public setUser(user:User){
 this.username= sessionStorage.setItem('user',JSON.stringify(user.user_name));

 }




//  public seteWalletAmount(e:eWallet){
// this.eWalletAmount=sessionStorage.setItem('amount',JSON.stringify(e.amount));
//  }

//  public setAmountAfterPolicy(e:Policy){
//    this.eWalletAmountUpdate=sessionStorage.setItem('amount',JSON.stringify(e.amount));
//  }

//  public seteWalletType(e:eWallet){
//   this.eWalletType=sessionStorage.setItem('type',JSON.stringify(e.type));
//    }

//    public seteWalletId(e:eWallet){
//     this.eWalletId=sessionStorage.setItem('e',JSON.stringify(e.id));
//     }


// public getWalletAmount(){
//   this.geteWalletAmount=sessionStorage.getItem('amount');
//   return JSON.parse(this.geteWalletAmount);

// }

// public getWalletAmountUpdate(){
//   this.geteWalletAmountUpdate=sessionStorage.getItem('amount');
//   return JSON.parse(this.geteWalletAmount);

// }
 
// public geteWalletType(){
//   this.geteWalletTyp=sessionStorage.getItem('type');
//   return JSON.parse(this.geteWalletTyp);

// }




 public setUserId(user:User){
this.user_id=sessionStorage.setItem('user',JSON.stringify(user.email_id))
 }

//  public isForget(user:User){
//    this.otpEmail=sessionStorage.setItem('user',JSON.stringify(user.email_id));
// }

getEmail():boolean{
   this.otpEmailFromSession=sessionStorage.getItem('user')
  if(this.otpEmailFromSession!=null){
    return true;
  }
  return false;
}

//  public getUser(){
//    this.user1=sessionStorage.getItem('user');
//    if(this.user1!=null){
     
//      return JSON.parse(this.user1);
//    }else{
//      this.logout();
//      return null;
//    }
//  }



  isAdmin():boolean{
    this.username=sessionStorage.getItem('user');
    if(this.username!=null){
      return true;
    }
return false;
  }

  
}
