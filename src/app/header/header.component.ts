import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddWalletComponent } from '../add-wallet/add-wallet.component';
import { HistoryComponent } from '../history/history.component';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer:UserRegistrationService,private router:Router,
    private dialog:MatDialog) { }
    
  user1=this.userSer.getUser();

  ngOnInit(): void {
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

  logout(){
    this.userSer.logout();
    window.location.reload();
  }

  clickMe(d:any){
    alert("heyy");
    
    if(!this.userSer.isLoggedIn()){
     
      Swal.fire("Please Login First For More Details");
      
    }
    if(this.userSer.isLoggedIn()){this.router.navigate(['/showamount/'+this.user1]);}

}

History(d:any){
  alert("heyy");
  
  if(!this.userSer.isLoggedIn()){
   
    Swal.fire("Please Login First To Check");
    
  }
  if(this.userSer.isLoggedIn()){
    this.dialog.open(HistoryComponent,{width:'60%',height:'70%'});
    //this.router.navigate(['/History/'+this.user1]);
  }

}
}
