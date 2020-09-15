import { ResponseType } from './../interface/response';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();

const TOKEN_KEY = 'access_token';

export class NewUser {
  constructor(
    public id: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public referencecode: any,
    public password: string,
    public phone: string,
    public plantype: { id },
    public platform: string,
  ) { }
}
export class User {
  name: string;
  user_type: string
  jti: number;

}
export class Token {
  token: string;
}
@Injectable()
export class AuthenicationProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  private currentUserDataSubject: BehaviorSubject<User>;
  public currentUserData: Observable<User>;

  constructor(public http: HttpClient,
    private storage: Storage,
    public toastCtrl: ToastController) {

    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   

    this.currentUserDataSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('userData')));
    this.currentUserData = this.currentUserDataSubject.asObservable();


  }

  public get currentUserValue(): Token {
   return this.currentUserSubject.value;
  }

  public get currentUserDataValue(): User {
    return this.currentUserDataSubject.value;
  }
  hasLoggedIn(){
    return this.storage.ready().then(() => {
      return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
        return value === true;
      });
    });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok!',
      duration: 4000,
      position: 'bottom',
      cssClass: '#3B7A57',

    });
    toast.present(toast);
  }

  login(email, password): Observable<ResponseType> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post<ResponseType>(`${environment.apiUrl}/users/member/authenticate`, params)
    .pipe(map(res => {
      if(res.statusCode === 200){
        sessionStorage.setItem('currentUser', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
          const decoded = helper.decodeToken(res.data.token);
          sessionStorage.setItem('userData', JSON.stringify(decoded));
          this.currentUserDataSubject.next(decoded);
      }
      return res;
    }))
    
  }

  getAllPlantypes() : Observable<ResponseType>{
    return this.http.get<ResponseType>(`${environment.apiUrl}/payments/plantype/getall`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createNewUser(user) : Observable<ResponseType>{
    console.log(user);
    return this.http.post<ResponseType>(`${environment.apiUrl}/users/members/create`, user)
      .pipe(map(resp => {
        return resp;
      }));
  }

  public logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userData');
    this.currentUserSubject.next(null);
    this.currentUserDataSubject.next(null);
    this.storage.remove(TOKEN_KEY);
    this.storage.remove("hasSeenLogin");
  }
}
