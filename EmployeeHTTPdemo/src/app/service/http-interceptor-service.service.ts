import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor{

  constructor() { }

  intercept(req : HttpRequest<any> , next : HttpHandler): Observable<HttpEvent<any>> 
  {
    console.log(req);
    let editedReq = req.clone({ withCredentials : true});
    return next.handle(editedReq).pipe();
  }
}
