import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { eWallet } from '../eWallet';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {

  form:any;
 methods:any=['Debit Card','UPI','Credit Card'];
temp:any;
sessionUser:any;
msg:any;
date:string=new Date().toJSON().slice(0,10).replace(/-/g,'/');
walle:eWallet=new eWallet();
user:User= new User();

  constructor(private fb:FormBuilder,private userSer:UserRegistrationService,private ro:Router,
    private dialog:MatDialog) {
    this.form=this.fb.group({
      walletSelect:[''],
      amount:['']
    })
   }
  
  

  ngOnInit(): void {
  }

  change(e:any){
    this.temp=e.target.value;
    console.log("newwwww");
    
      if(this.temp==e.target.value ){
        this.walle.type=this.temp;
        //this.amountType.Credit=this.temp;
       // this.amountType.UPI=this.temp;
      }
     //this.amountType=this.temp;
     console.log(this.walle.type);
    //  console.log(this.amountType.Credit);
    //  console.log(this.amountType.UPI);
     console.log("aaaaaaa");
    //alert(e.target.value);
  }
  
  wallet(dat:any){
    this.walle.amount=dat.amount;
    this.walle.type=this.temp;
    this.walle.date=this.date;
 
    console.log("hello");
    console.log(this.walle.type);
  // this.amountType.Debit=this.temp.value;
  console.log("hhhhh");
   console.log(this.walle);

   this.walle.user_name=this.userSer.getUser();
  // console.log(this.user.user_name);

 

   this.userSer.sendAmount(this.walle,this.user).subscribe(data=>{
    console.log(data);
    // this.userSer.seteWalletAmount(this.walle);
    // this.userSer.seteWalletType(this.walle);
    // this.walle.amount=this.userSer.getWalletAmount();
    // console.log(this.walle.amount);
    Swal.fire("Done")
    this.dialog.closeAll();
    this.ro.navigate(['/home'])
  },error=>{
   this.msg=error;
   console.log(error);

  });
   
  // this.sessionUser=this.userSer.isLoggedIn();
  // if(this.sessionUser!=null){
  //   
  //  

  //   this.user=this.userSer.getUser();
  //   console.log(this.userSer.getUser());
   
  // }
   

  }

}
