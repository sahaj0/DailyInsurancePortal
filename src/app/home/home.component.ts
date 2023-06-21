import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddWalletComponent } from '../add-wallet/add-wallet.component';
import { Router } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
import { ClaimComponent } from '../claim/claim.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   form:any;
 details:any=['Add Wallet Balance','Purchase Insurance','Request Claim']
 types:any;
 next:any=[];
 temp!:string;
 dim=true;
  constructor(public userSer:UserRegistrationService,private fb:FormBuilder,
    private dialog:MatDialog ,private router:Router){ }

  

  ngOnInit(): void {
    this.form = this.fb.group({  
    walletSelect:['']  
    });
   
  }
  user1=this.userSer.getUser();
 
  logout(){
    this.userSer.logout();
    window.location.reload();
  }

  show(){
    
    Swal.fire({
      text :"Hii" +" "+ this.user1+" ",
    position: 'top-end',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200
    
  });
  }
  // Swal.fire({
  //   title: 'Custom animation with Animate.css',
  //   showClass: {
  //     popup: 'animate__animated animate__fadeInDown'
  //   },
  //   hideClass: {
  //     popup: 'animate__animated animate__fadeOutUp'
  //   }
  // });

  wallet(){
    this.temp=this.types;
    //  this.temp.replace(" ","");
    if(this.temp=='Add Wallet Balance'){
      console.log(this.temp);
      this.next.push(this.temp);
      this.dialog.open(AddWalletComponent,{width:'80%',height:'70%'});
 console.log(this.next);
    }
    
    else if(this.temp=='Purchase Insurance'){
      this.next.push(this.temp);
      this.dialog.open(PurchaseComponent,{width:'80%',height:'70%'});
      alert(this.temp);

    }else if(this.temp=='Request Claim'){
      alert(this.temp);
      this.next.push(this.temp);
      this.dialog.open(ClaimComponent,{width:'80%',height:'90%'});
    }
  
   

   // alert(this.types);

  }
  change(e:any) {  
this.types=e.target.value;
    console.log(e.target.value);  
  }

clickMe(d:any){
  alert("heyy");
  
  if(!this.userSer.isLoggedIn()){
    alert("heyy");
    Swal.fire("Please Login First For More Details");
    this.router.navigate(['/login']);
  }
  if(this.userSer.isLoggedIn()){this.router.navigate(['/register']);}
  
  
   
   
  
}

}
