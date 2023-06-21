import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { OtpVerifyComponent } from '../otp-verify/otp-verify.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  send:any;
  data:any;
  user:User= new User();
  msg:any;
  btn:boolean=false;
  timeLeft: any;
  interval:any;

  constructor(private formbulider: FormBuilder,
    private userSer:UserRegistrationService,private router:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.send=this.formbulider.group({
      email:['']
    })
  }

  sendotp(data:any){
   // alert(data.email);
     this.user.email_id=data.email;
     alert(this.user.email_id);
     this.msg="Please wait you will get otp soon!! "
     this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
      }
    },1000)
     this.userSer.resetPassword(this.user).subscribe( (data:any) =>{

    
  
  
       console.log("success");
       Swal.fire("OTP has been sent to yours account");
       this.send.reset();
       this.dialog.closeAll();
       this.router.navigate(['/otp-verify'])
     },(error)=>{
      console.log(error);
      this.msg="wrong";
     });
    
  }

}
