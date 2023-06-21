import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Policy } from '../purchase/Policy';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  username:String;
  policy:Policy=new Policy();
  list?:Policy[];
 msg!:string;
  // Data:any=[];
  
  constructor(private userSer:UserRegistrationService) {
    this.username=this.userSer.getUser();
   }

  ngOnInit(): void {
    if(this.username!=null){
     
      this.userSer.History(this.username).subscribe((data=>{
        // if(data.result==null && data.result===0){
          // this.msg="No Records";
        // }else{
          console.log(data);
          this.list=data;
          console.log(this.list);
        // }
       
        // this.Data.push(data);
        // console.log(this.Data);
        // this.policy.user_name=data.user_name;
        // this.policy.policy_type=data.type;
        // this.policy.date=data.date;
  
      }),error=>{
        if(error instanceof HttpErrorResponse){
          if(error.status==404){
            console.log("faiiil");
           // this.msg="Something Went Wrong!"
          }
        }
  
      })
    }
   

  }

}
