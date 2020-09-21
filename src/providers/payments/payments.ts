import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseType } from '../../interfaces/response';

@Injectable()
export class PaymentsProvider {

  constructor(public http: HttpClient) {
    
  }


  updatePlan(userId, plantypeId, planform, transactionObject): Observable<ResponseType> {
    const params = new HttpParams()
    .set('userId', userId)
    .set('plantypeId', plantypeId)
    .set('planform', planform)
    .set('transactionObject', transactionObject);
    return this.http.post<ResponseType>(`${environment.apiUrl}/payments/plan/update`, params).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  GetPayments(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/payments/payment/get`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  SearchPayments(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/payments/payment/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  deletePayment(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/payments/payment/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
}
