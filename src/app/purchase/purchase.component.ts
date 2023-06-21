import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserRegistrationService } from '../user-registration.service';
import { Policy } from './Policy';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  form:any;
  temp:any;
  data:any=['SBI Life Saral Pension','Medical Insurance','LIC Shubh Vikas'];
  policy:Policy=new Policy();
  msg:any;
  date1:string=new Date().toJSON().slice(0,10).replace(/-/g,'/');

  constructor(private fb:FormBuilder,private userSer:UserRegistrationService,
    private dialog:MatDialog
    ,private router:Router) { 
    this.form=this.fb.group({
      PolicySelect:[''],
      amount:['']
    })
  
  }

  ngOnInit(): void {
  }

  change(e:any){
    this.temp=e.target.value;
    console.log("newwwww");
    
      if(this.temp==e.target.value ){
        this.policy.policy_type=this.temp;
        //this.amountType.Credit=this.temp;
       // this.amountType.UPI=this.temp;
      }
     //this.amountType=this.temp;
     console.log(this.policy.policy_type);
    //  console.log(this.amountType.Credit);
    //  console.log(this.amountType.UPI);
     console.log("aaaaaaa");
    //alert(e.target.value);
  }
  purchase(d:any){
    this.policy.policy_type=this.temp;
    this.policy.amount=d.amount;
 this.policy.user_name =this.userSer.getUser();
// console.log(this.policy.user_name);
 //this.userSer.setAmountAfterPolicy(this.policy);

//this.policy.amount=this.userSer.getWalletAmountUpdate();
console.log(this.policy.amount);
console.log("ss");

this.policy.date=this.date1;
console.log(this.policy);
//window.location.reload();
// this.policy.amount=this.userSer.getWalletAmount();
console.log(this.policy.date);
    this.userSer.policysend(this.policy).subscribe(data=>{
      console.log(data);
      this.dialog.closeAll();
      Swal.fire("Congrats You're Now Ours Valuable User")
      this.router.navigate(['/home']);
    
    },error=>{
    this.msg="Something Went Wrong!!"
    // Swal.fire("Congrats You're Now Ours Valuable User")
      console.log(error);
    })

  }
}
