import { AuthenicationProvider } from './../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { Nav, Platform, Events, MenuController, AlertController, App } from 'ionic-angular';
import {
  Plugins,
  StatusBarStyle
} from '@capacitor/core';

const { StatusBar, SplashScreen, Storage } = Plugins;

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
  rootPage: any;
  version: string;
  isStatusBarLight = true

  loggedInAdminPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'people', color: 'light', title: 'SubAdmins', component: 'UserSubAdminsPage' },
    { icon: 'people', color: 'light', title: 'Members', component: 'UserMembersPage' },
    { icon: 'football', color: 'light', title: 'Games', component: 'GamesPage' },
    { icon: 'football', color: 'light', title: 'Predictions', component: 'PredictionsPage' },
    { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' },
    { icon: 'card', color: 'light', title: 'Payments', component: 'PaymentsPage' },
    { icon: 'podium', color: 'light', title: 'Reports', component: 'ReportsPage' },
  ];

  loggedInSubAdminPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
    { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
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
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(
    public platform: Platform,
    public events: Events,
    private app: App,
    private appVersion: AppVersion,
    private alertCtrl: AlertController,
    public menu: MenuController,
    public auth: AuthenicationProvider,
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.listenToEvents();
    this.platformReady();

  }

  async platformReady() {
    this.platform.ready().then(() => {
      this.changeStatusBar();
      this.hideSplash();
      this.appVersion.getVersionNumber()
      .then((version) => {
        this.version = version;
      }).catch(() => {
      });
      this.androidExitAppOnBackButton();
    });
    const { value } = await Storage.get({ key: this.HAS_LOGGED_IN });
    if (value == "true") {
      if (this.auth.currentUserDataValue) {
        this.Userfullname = this.auth.currentUserDataValue.name;
        this.usertype = this.auth.currentUserDataValue.user_type;
        this.enableMenu(true, this.usertype);
      }
    } else {
      this.rootPage = 'SignInPage';
    }
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
      color: "#0f5656"
    });
  }

  hideSplash() {
    SplashScreen.hide();
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

  androidExitAppOnBackButton() {
    if (!this.platform.is('android')) {
      return;
    }

    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();

      if (nav.canGoBack()) { //Can we go back?
        nav.pop();
      } else {
        if (activeView.component === 'AllMatchesPage') {
          let actionSheet = this.alertCtrl.create({
            title: 'Exit Sur3Odds?',
            message: 'Do you want to exit Sur3Odds?',
            buttons: [
              {
                text: 'Yes',
                handler: () => {
                  this.platform.exitApp(); //Exit from app
                }
              }, {
                text: 'No',
                role: 'cancel',
                handler: () => {
                }
              }
            ]
          });
          actionSheet.present();
        } else {
        }
      }
    });

  }

}

