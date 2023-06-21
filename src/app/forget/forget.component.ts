import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  user:User= new User();
  forget:any;
  msg:any;
  constructor(private formBuilder:FormBuilder,private UserSer:UserRegistrationService,
    private router:Router) { }

  ngOnInit(): void {
   this.forget= this.formBuilder.group({
      password:[''],
      cpass:['']
    })
  }

  forgetPass(dat:any){
    this.user.password=dat.password;
    this.user.cpass=dat.cpass;

    if(this.user.password!=this.user.cpass){

      this.msg="Password and Confirm Password Should Match! "
      return this.msg;
    }

    this.UserSer.forget(this.user).subscribe((data:any)=>{
      console.log("Done");
      // this.UserSer.isForget(this.user);
     // localStorage.clear();
      Swal.fire("Your Password has been updated");
      this.forget.reset();
  this.router.navigate(['/login'])
    },
      (error:any)=>{
        // this.UserSer.isForget(this.user);
        //Swal.fire("Your Password has been updated");
       console.log("fail");
      //  this.forget.reset();
      //  this.router.navigate(['/login'])
    })

  }

}
