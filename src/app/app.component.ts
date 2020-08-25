import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'SignInPage';     
  pages: Array<{title: string, component: any}>;
  leagues;
  teams;  
  
  public animateVarible:boolean= false;
  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();   

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: 'HomePage' },
      { title: 'TOP NEWS', component: 'TopNewsPage' },
      { title: 'ALL MATCHES', component: 'AllMatchesPage' },
      { title: 'NOTIFICATION', component: 'NotificationPage' },
      { title: 'PROFILE', component: 'ProfilePage' },
      { title: 'SETTINGS', component: 'SettingPage' },
      { title: 'LOG OUT', component: 'SignInPage' },
    ];   

    this.leagues=[
      {img:'assets/imgs/league/global.png',name:'Europa League'},
      {img:'assets/imgs/league/global.png',name:'INT - Champions League'},
      {img:'assets/imgs/league/global.png',name:'INT - FIFA Club World Cup'},
    ]
    this.teams=[
      {img:'assets/imgs/league/global.png',name:'Arsenal'},
      {img:'assets/imgs/league/global.png',name:'Real Madrid'},
      {img:'assets/imgs/league/global.png',name:'Barcelona'},
    ]
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }); 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
   