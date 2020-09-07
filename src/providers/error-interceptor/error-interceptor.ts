import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ErrorInterceptorProvider {

  constructor(public events: Events) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return <any>next.handle(request).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log(error.error.message);
    if (parseInt(error.error.status) === 401 || error.error.status === 500) {
      this.events.publish('user:logout');
    }
    return _throw(error);
  }

}
