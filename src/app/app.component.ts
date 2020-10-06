import { PaymentsPage } from './../pages/payments/payments';
import { SettingPage } from './../pages/setting/setting';
import { ReportsPage } from './../pages/reports/reports';
import { AuthenicationProvider } from './../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';

const { StatusBar, SplashScreen } = Plugins;
import { Storage } from '@ionic/storage';
export interface PageInterface {
  icon: string;
  color: string;
  title: string;
  logsOut?: boolean;
  component: any
};


@Component({
  templateUrl: 'app.html'
})
export class Sure3Odds {
  @ViewChild(Nav) nav: Nav;
  Userfullname: any;
  usertype: any;
  activePage: any;
  app_version: string;
  rootPage: any;
  version = "1.0.0";
  isStatusBarLight = true

  loggedInAdminPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'people', color: 'light', title: 'SubAdmins', component: 'UserSubAdminsPage' },
    { icon: 'people', color: 'light', title: 'Members', component: 'UserMembersPage' },
    { icon: 'football', color: 'light', title: 'Games', component: 'GamesPage' },
    { icon: 'football', color: 'light', title: 'Predictions', component: 'PredictionsPage' },
    { icon: 'card', color: 'light', title: 'Payments', component: PaymentsPage },
    { icon: 'podium', color: 'light', title: 'Reports', component: ReportsPage },
    { icon: 'build', color: 'light', title: 'Settings', component: SettingPage }
  ];

  loggedInSubAdminPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
    { icon: 'build', color: 'light', title: 'Settings', component: SettingPage }
  ];

  loggedInMemberPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' }
  ];

  otherPages: PageInterface[] = [
    { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
    { icon: 'briefcase', color: 'light', title: 'Terms', component: 'TermsPage' },
    { icon: 'log-out', color: 'danger', title: 'Logout', component: 'SignInPage' }
  ]

  public animateVarible: boolean = false;

  constructor(public storage: Storage,
    public platform: Platform,
    public events: Events,
    public menu: MenuController,
    public auth: AuthenicationProvider,
) {
    this.initializeApp();

  }

  initializeApp() {
    this.storage.ready().then(() => {
      this.platformReady()
      this.listenToEvents();
    });
  }

  platformReady() {
    this.platform.ready().then(() => {
     
      this.storage.get('hasSeenLogin') // Check if the user has already seen the LoginPage
        .then((hasSeenLogin) => {
          if (hasSeenLogin) {
            if(this.auth.currentUserDataValue){
              this.Userfullname = this.auth.currentUserDataValue.name;
              this.usertype = this.auth.currentUserDataValue.user_type;
              this.enableMenu(hasSeenLogin === true, this.usertype);
            }

          } else {
            this.rootPage = 'SignInPage';
          }
        });
        if(this.platform.is("ios") || this.platform.is('android')){
          this.changeStatusBar();
          this.hideSplash();
        }
    });
  }

  changeStatusBar() {
    StatusBar.show();
    StatusBar.setStyle({
      style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    this.isStatusBarLight = !this.isStatusBarLight;

    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({
      overlay: false
    });

    StatusBar.setBackgroundColor({
      color : "#000000"
      });
  }

  hideSplash() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  listenToEvents() {
    this.events.subscribe('user:signup', () => {
      this.enableMenu(true, "");
    });

    this.events.subscribe('user:logout', () => {
      this.nav.setRoot('SignInPage');
      this.enableMenu(false, "");
      this.auth.logout();
    });

    this.events.subscribe('user:login', (usertype, Userfullname) => {
      this.Userfullname = Userfullname;
      this.usertype = usertype;
      this.enableMenu(true, usertype);
    })
  }


  enableMenu(showmenu, usertype) {
    if (usertype === "Member") {
      this.menu.enable(showmenu, 'loggedInMemberPages');
      this.menu.enable(!showmenu, 'loggedInAdminMenu');
      this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
    } else if (usertype === "Admin") {
      this.menu.enable(showmenu, 'loggedInAdminMenu');
      this.menu.enable(!showmenu, 'loggedInMemberPages');
      this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
    } else if (usertype === "SubAdmin") {
      this.menu.enable(showmenu, 'loggedInSubAdminMenu');
      this.menu.enable(!showmenu, 'loggedInMemberPages');
      this.menu.enable(!showmenu, 'loggedInAdminMenu');
    }
  }
  openPage(page: PageInterface) {
    this.nav.setRoot(page);
    this.activePage = page;
    this.LogOutFunction(page);
  }
  LogOutFunction(page) {
    if (page === 'SignInPage') {
      this.events.publish('user:logout');
      this.nav.setRoot(page);
      this.auth.logout();
    }
  }

}
