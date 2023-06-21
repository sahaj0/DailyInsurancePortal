import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Policy } from '../purchase/Policy';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  form:any;
  temp:any;
  msg:any;
  PolicyName:any=['SBI Life Saral Pension','Medical Insurance','LIC Shubh Vikas'];

  policy:Policy=new Policy();

  constructor(private fb:FormBuilder,private userSer:UserRegistrationService,
    private dialog:MatDialog,
    private router:Router) {
    this.form=this.fb.group({
      PolicySelect:[''],
      date:[''],
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
      
      }
     console.log(this.policy.policy_type);
 
     console.log("aaaaaaa");
    //alert(e.target.value);
  }
  claim(d:any){
this.policy.date=d.date;
this.policy.amount=d.amount;
this.policy.policy_type=this.temp;
this.policy.user_name=this.userSer.getUser();
console.log(this.policy);

if(d.amount>10000){

  this.msg="You Can Claim Amount Upto 10,000.";

}else{
  this.userSer.sendclaim(this.policy).subscribe(data=>{
    console.log(data);
    this.dialog.closeAll();
    Swal.fire("Your Amount Will Be Credit Soon In Your Wallet!")
  this.router.navigate(['/home']);
  },error=>{
    if(error instanceof HttpErrorResponse){
      if(error.status==404){
        this.msg="Please Check Your Purchase Date and Policy" ;
        console.log(error);
        console.log(this.msg);
       
      }
    }
   
  })
}


  }
}
