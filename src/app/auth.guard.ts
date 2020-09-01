import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _service: CommonService, private router: Router) { }


  canActivate():boolean {
    if(this._service.getToken()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
