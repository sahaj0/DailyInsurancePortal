import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';
import { UserRegistrationService } from './user-registration.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
constructor(private userser:UserRegistrationService,private rou:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      

    
      if(this.userser.isAdmin()){
      return true;
    }else{
      // Swal.fire("YOU HAVE NO RIGHTS TO ACCESS THIS PAGE");

      Swal.fire({
        text: 'YOU HAVE NO RIGHTS TO ACCESS THIS PAGE',
        icon: 'warning',
        showCancelButton: true,

    })
    this.rou.navigate(['/home']);

    

      // Swal.clickDeny();
    }

 


    return false;
 

   

  }

  
}
