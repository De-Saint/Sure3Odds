import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
export class NewUser {
  constructor(
    public id: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public referencecode: any,
    public password: string,
    public phone: string,
    public plantype : {id},
    public platform: string,
  ) { }
}
export class User {
  token: string;
}
@Injectable()
export class AuthenicationProvider {
  user: User;
  respData: any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(public http: HttpClient,
    public navCtrl: NavController,
    private storage: Storage,
    public toastCtrl: ToastController) {
      let promise = this.storage.get('currentUesr');
      let me = Observable.fromPromise(promise);
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(String(me)));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok!',
      duration: 4000,
      position: 'bottom',
      cssClass: '#0f5656',

    });
    toast.present(toast);
  }
  login(email, password) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post(`${environment.apiUrl}/auth/login`, params)
      .pipe(map(resp => {
        this.respData = resp;
        console.log(this.respData);
        if (this.respData.statusCode === 200) {
          this.storage.set('currentUser', JSON.stringify(this.respData.data));
          this.currentUserSubject.next(this.respData.data);
        }
        return resp;
      }));
  }

  logout(page) {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.navCtrl.setRoot(page);
  }


  getAllPlantypes() {
    return this.http.get(`${environment.apiUrl}/payments/plantype/getall`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createNewUser(user) {
    console.log(user);
    return this.http.post(`${environment.apiUrl}/users/members/create`, user)
      .pipe(map(resp => {
        return resp;
      }));
  }

}
