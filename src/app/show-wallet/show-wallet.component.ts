import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eWallet } from '../eWallet';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-show-wallet',
  templateUrl: './show-wallet.component.html',
  styleUrls: ['./show-wallet.component.css']
})
export class ShowWalletComponent implements OnInit {

  //userdata: any=[];
userdata:eWallet=new eWallet();
  temp!:any;
  msg!:string;
  username!:String;
  constructor(private userSer:UserRegistrationService,private route:ActivatedRoute) {
    this.username=this.userSer.getUser();
   }

  ngOnInit(): void {
  if(this.username!=null){
    this.userSer.showEwallet1(this.username).subscribe(data=>{
      console.log(data);
      this.temp=data;
      
        this.userdata.id=data.id;
        this.userdata.user_name=data.user_name;
        this.userdata.type=data.type;
        this.userdata.amount=data.amount;
     },error=>{
       if(error instanceof HttpErrorResponse){
         if(error.status==404){
           this.msg="Something Went Wrong!"
         }
       }
     })
  }else{
    this.msg="Please Login To Check!"
  }
   

   
//     this.userdata.user_name=this.userSer.getUser();
//     this.userdata.amount=this.userSer.getWalletAmount();
//     if(this.userdata.amount!=null){
//       this.userdata.amount=this.userSer.getWalletAmountUpdate();
//     }
//     this.userdata.type=this.userSer.geteWalletType();
//     console.log(this.userdata);
//  this.userSer.showEwallet(this.userdata).subscribe(data=>{
//    console.log(data);
//   //  this.temp=data;
   
//   //    this.userdata.id=data.id;
//   //    this.userdata.user_name=data.user_name;
//   //    this.userdata.type=data.type;
//   //    this.userdata.amount=data.amount;
//   //   console.log(this.userdata)
   
  
 
//   //  console.log(this.userdata)
//  },error=>{

//  })
  }

 

}
