import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack:MatSnackBar,
    private userService:UserRegistrationService,
    private formbulider: FormBuilder,
    private router:Router,
    private dialog:MatDialog) { }
    
  user:User= new User();
  add:any;
  msg='';
  user1!:any;
 // showModal:any;

  ngOnInit(): void {
    this.add=this.formbulider.group({
     
      username:[''],
      password:['']

    })
  }
login(detail:any){
 
 
  this.user.user_name=detail.username;
  // alert(this.user.user_name);
  // alert(detail.username);
  this.user.password=detail.password;
  // if(this.user.user_name.trim()=='' || this.user.user_name==null){
  //   this.snack.open("Username required","",{
  //     duration:3000
  //  });
  //   return;
  // }
  
  this.userService.login(this.user).subscribe(data => {
     Swal.fire(
       "Success" ,"Now YOU'RE REDICTED TO HOME PAGE!!");
    console.log("success");
// this.userService.getUser
 this.userService.setUser(this.user);
 this.user1=this.userService.getUser();
 

     this.router.navigate(['/home'])
  }
  ,error=>{
    if(error instanceof HttpErrorResponse){
     // const errorMessage=new Array<{propName:String; errors:String}>();
      if(error.status==404){
        this.msg="Invalid username and password";
//           this.snack.open(this.msg,"",{
//     duration:3000
//  })
      }
    }
//   this.snack.open("Invalid Credentials","",{
//     duration:3000
//  }),
//  this.msg="Invalid Credentials";
});
  

}

forget(){
  this.dialog.open(ModalPopupComponent,{width:'60%',height:'200px'});
  // alert("heyy");
}
}
