import { Observable } from 'rxjs/Observable';
import { AuthenicationProvider } from './../authenication/authenication';
import { HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ErrorInterceptorProvider {

  constructor(public auth: AuthenicationProvider) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(retry(1),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log(error.error.message);
    if (parseInt(error.error.status) === 401 || error.error.status === 500) {
      this.auth.logout();
    }
    return _throw(error);
  }

}
