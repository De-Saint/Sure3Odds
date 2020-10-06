import { Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResponseType } from '../../interfaces/response';

import { from } from 'rxjs/observable/from';

@Injectable()
export class NativeHttpProvider {

  constructor(public http: HttpClient, private nativeHttp: HTTP,
    private platform: Platform, ) {
  }


  GetFreeGames(matchDate): Observable<ResponseType> {
    if (this.platform.is("android") || this.platform.is("ios")) {
      const params = {
        matchDate: matchDate,
        id: 1,
      };
      let nativeCall = this.nativeHttp.get(`${environment.apiUrl}/users/member/authenticate`, params, {
        "Content-Type": "application/json"
      });
      return from(nativeCall).pipe(
        map(result => {
          return JSON.parse(result.data);
        })
      )
    } else {
      const params = new HttpParams().set("matchDate", String(matchDate)).set("id", "1");
      return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/free/get`, { params })
        .pipe(map(resp => {
          return resp;
        }));

    }
  }


  getAllPlantypes(): Observable<ResponseType> {
    if (this.platform.is("android") || this.platform.is("ios")) {
      let nativeCall = this.nativeHttp.get(`${environment.apiUrl}/payments/plantype/getall`, {}, {
        "Content-Type": "application/json"
      });
      return from(nativeCall).pipe(
        map(result => {
          return JSON.parse(result.data);
        })
      )
    } else {
      return this.http.get<ResponseType>(`${environment.apiUrl}/payments/plantype/getall`)
        .pipe(map(resp => {
          return resp;
        }));
    }
  }


  getParameter(id): Observable<ResponseType> {
    if (this.platform.is("android") || this.platform.is("ios")) {
      let nativeCall = this.nativeHttp.get(`${environment.apiUrl}/payments/parameter/get/${id}`, {}, {
        "Content-Type": "application/json"
      });
      return from(nativeCall).pipe(
        map(result => {
          return JSON.parse(result.data);
        })
      )
    } else {
      return this.http.get<ResponseType>(`${environment.apiUrl}/payments/parameter/get/${id}`)
        .pipe(map(resp => {
          return resp;
        }));
    }
  }


  createNewUser(user): Observable<ResponseType> {
    if (this.platform.is("android") || this.platform.is("ios")) {
      let nativeCall = this.nativeHttp.get(`${environment.apiUrl}/users/member/create`, user, {
        "Content-Type": "application/json"
      });
      return from(nativeCall).pipe(
        map(result => {
          return JSON.parse(result.data);
        })
      )
    } else {
      return this.http.post<ResponseType>(`${environment.apiUrl}/users/member/create`, user)
        .pipe(map(resp => {
          return resp;
        }));
    }
  }
}
