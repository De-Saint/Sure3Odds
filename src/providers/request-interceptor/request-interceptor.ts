import { Observable } from 'rxjs/Observable';
import { AuthenicationProvider } from './../authenication/authenication';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestInterceptorProvider {

  constructor(public auth: AuthenicationProvider) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = this.addToken(request);
    return next.handle(cloneRequest);
  }


  // Adds the token to your headers if it exists
  private addToken(request: HttpRequest<any>) {
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
      const token = currentUser.token;
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
      return clone;
    }
    return request;
  }

}
