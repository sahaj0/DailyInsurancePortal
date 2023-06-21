import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { ConfirmedValidator } from './confirmed.validator';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User= new User();
 Form:any;
 msg:any;
// form:FormGroup=new FormGroup({})
// constructor(private fb:FormBuilder){
//   this.form=fb.group({
//     password:['',[Validators.required]],
//     cpass:['',[Validators.required]]
//   },{
//     validator:ConfirmedValidator('password','cpass')
//   })

// }
// get f(){
//   return this.form.controls;
// }
constructor(private userR:UserRegistrationService,
  private snack:MatSnackBar,
  private formbulider: FormBuilder,
  private router:Router){}

  ngOnInit(): void {
    this.Form=this.formbulider.group({
      fname: [''],
      lname:[''],
      email:[''],
      password:[''],
      cpass:[''],
      username:[''],

    })
    
  }
 

//simple with {[ngModule]}
//   userRegister(){


  
//     // console.log(this.user);
//     // alert(this.user.user_name);
//     this.userR.register(this.user).subscribe(data =>{
//       // this.snack.open("success","",{
//       //   duration:3000
//       // })
//      Swal.fire("Success");
// // alert("success");
//     },error=>alert("sorry"));
    
//   }

//formGroup
userRegister(details:any){
  this.user.first_name=details.fname;
  this.user.user_name=details.username;
  this.user.last_name=details.lname;
  this.user.password=details.password;
  this.user.cpass=details.cpass;
  this.user.email_id=details.email;
 this.userR.register(this.user).subscribe(data=>{
   
  Swal.fire("Success");
  this.Form.reset();
  this.router.navigate(['/login'])

 },error=>{
  if(error instanceof HttpErrorResponse){
   // const errorMessage=new Array<{propName:String; errors:String}>();
    if(error.status==404){
      this.msg=this.user.user_name+" "+"is already present Try with another Username!";
    }
  }
  this.snack.open(this.msg,"",{
    duration:3000
 })
//  this.msg="Invalid Credentials";
});
 
  console.log(this.user);//  this.snack.open("fail","",{
    //     duration:3000
    //  }
}

}
