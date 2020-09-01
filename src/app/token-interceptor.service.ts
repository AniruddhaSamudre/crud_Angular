import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(CommonService);

    let clone = req.clone({
      setHeaders: {
        token: `${authService.getToken()}`
      }
    })

    return next.handle(clone)
  }
}
