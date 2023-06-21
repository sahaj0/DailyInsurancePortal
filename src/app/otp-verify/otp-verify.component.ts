import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { group } from 'console';
import { send } from 'process';
import Swal from 'sweetalert2';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {


  formotp:any;
  otp:any;
  msg:any;
  constructor(private fb:FormBuilder,private UserSer:UserRegistrationService,private router:Router) {
    this.formotp=this.fb.group({
     otp:['']
    })
   }

  ngOnInit(): void {
  }
verifyotp(data:any){
 this.otp=data.otp;
 alert(this.otp);
this.UserSer.verify(this.otp).subscribe((data:any)=>{
  console.log(data);
 // this.msg="Verifying.....";
  Swal.fire("Verified");
  this.formotp.reset();
this.router.navigate(['/forget']);

  console.log("heyyy");
},(error:any)=>{
  Swal.fire("Something went wrong");
console.log(error);
console.log("byyyyyyy");
this.msg="Something went wrong";
})

}
}
