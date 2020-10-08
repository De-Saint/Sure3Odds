
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { SelectSearchableComponent } from 'ionic-select-searchable';

@IonicPage()
@Component({
  selector: 'page-setting-league-add',
  templateUrl: 'setting-league-add.html',
})
export class SettingLeagueAddPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  league: Leagues = new Leagues("", "", "", { id: "", name: "", imageurl: "" });
  img1 = "assets/imgs/appicon.png";
  img: any;
  country: any
  countries: any;
  flag = true;
  selectedCamera;


  constructor(
    private gamesProvider: GamesProvider,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewWillEnter() {
    this.Getcountries();
  }
  Getcountries() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.Getcountries()
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.countries = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }
  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }
  userChanged(event: { component: SelectSearchableComponent, value: any }) {

  }

  openFromCode() {
    this.selectComponent.open();
  }

  onSubmit(league) {
    if (this.league.name) {
      this.league.imageurl = (this.league.imageurl != undefined) ? this.img1 : this.img;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gamesProvider.createLeague(league).subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.statusCode === 200) {
          this.navCtrl.pop();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
    } else {
      this.authProvider.showToast("Name input field is empty");
    }
  }

}
