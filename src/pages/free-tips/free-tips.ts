import { NativeHttpProvider } from './../../providers/native-http/native-http';
import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, LoadingController } from 'ionic-angular';

// import  { Plugins } from "@capacitor/core";
// import { initialize } from 'capacitor-admob'; No longar required
// import { AdOptions, AdSize, AdPosition } from "capacitor-admob";

// const { AdMob } = Plugins;

@IonicPage()
@Component({
  selector: 'page-free-tips',
  templateUrl: 'free-tips.html',
})
export class FreeTipsPage {
  gamelist: any;
  match: Object;
  // calender Function
  monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days = [];
  myDate = new Date();
  year = this.myDate.getFullYear();
  month_num = this.myDate.getMonth();
  month_name = this.monthNames[this.month_num];
  // click day
  currentDate: any;
  shownGroup: any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private alertCtrl: AlertController,
    public platform: Platform,
    private nativeHttp: NativeHttpProvider,
    public loadingCtrl: LoadingController,
    private gamesProvider: GamesProvider) {
    this.getDaysInMonth(this.month_num, this.year);
    this.currentDate = this.myDate;
  }

  ionViewWillEnter(){
    const currentdate = this.gamesProvider.getDate();
    this.GetFreeGames(currentdate);
    var date = this.myDate.getDate();
    var today = date - 1;
    this.isGroupShown(today);
    this.shownGroup = today;
  }


  // ionViewWillEnter(){
  //   this.platform.ready().then(() => {
    //   var admobid = {
    //     banner: 'ca-app-pub-5986351309197564/7004464032',
    //     interstitial: 'ca-app-pub-5986351309197564/6096058111',
    //     reward: 'ca-app-pub-5986351309197564/7025996408'
    //   };
    //  const bannerOptions: AdOptions = {
    //     adId: admobid.banner,
    //     adSize: AdSize.BANNER,
    //     position: AdPosition.BOTTOM_CENTER
    //   };

      // const bannerConfig: AdMobFreeBannerConfig = {
      //   id: admobid.banner,
      //   autoShow: true
      // };

      // AdMob.showBanner()
      // this.admobFree.banner.config(bannerConfig);
      // this.ShowSure3Banner();

      // const interstitialConfig: AdMobFreeInterstitialConfig = {
      //   id: admobid.interstitial,
      //   autoShow: true
      // }
      // this.admobFree.interstitial.config(interstitialConfig);
      // this.ShowSure3Inter();

      // const rewardVidConfig: AdMobFreeRewardVideoConfig = {
      //   id: admobid.reward,
      //   autoShow: true
      // }
      // this.admobFree.rewardVideo.config(rewardVidConfig);
      // this.ShowSure3Reward();
  //   });
  // }
  getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    var date = new Date(year, month);
    while (date.getMonth() === month) {
      var a = new Date(date);
      var day_num = a.getDate();
      this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
      date.setDate(date.getDate() + 1);
    }
  }

  // increase and decrease month function
  change_month(type) {
    this.shownGroup = null;
    if (type == 'increase') {
      this.month_num = this.month_num + 1;
      if (this.month_num >= 12) {
        this.month_num = 0;
        this.year = this.year + 1;
      }
    }
    else if (type == 'decrease') {
      this.month_num = this.month_num - 1;
      if (this.month_num < 0) {
        this.month_num = 11;
        this.year = this.year - 1;
      }
    }

    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }
  toggleGroup(group) {
    this.shownGroup = group;
  }
  private isGroupShown(group) {
    return this.shownGroup === group;
  }


  onClick(day): void {
    this.shownGroup = null;
    var date = this.gamesProvider.computeOldMatchDate(day);
    this.GetFreeGames(date);
    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }

  GetFreeGames(currentdate) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.nativeHttp.GetFreeGames(currentdate)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.gamelist = resp.data;
          console.log(this.gamelist);
        } else {
          console.log(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
  }

  GotoMatchDetails(page) {
    this.navCtrl.push(page)
  }


  onView(id) {
    console.log(id);
    if(id !== 1){
        this.showAlert("Subscribe", "Subscribe to VIP or VVIP Plan today, to gain access to more features like posting your predictions, commenting on matches and interacting with other users, advert free and many more predictions.");
    }
 }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  // ShowSure3Banner(){
  //   this.admobFree.banner.prepare().then((res) => {
  //     console.log(res);
  //   }).catch((e) => {
  //     console.log(e);
  //   });
  // }

  // ShowSure3Inter(){
  //   this.admobFree.interstitial.prepare().then((res) => {
  //     console.log(res);
  //   }).catch((e) => {
  //     console.log(e);
  //   });
  // }

  // ionViewWillLeave() {
  //   this.platform.ready().then(() => {
  //     this.admobFree.banner.hide();
  //   });
  // }
  // ionViewDidLeave() {
  //   this.platform.ready().then(() => {
  //     this.admobFree.banner.hide();
  //   });
  // }
}
