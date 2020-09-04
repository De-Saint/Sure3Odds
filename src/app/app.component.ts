import { AuthenicationProvider } from './../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
  pages: Array<{ title: string, component: any }>;
  version = "1.0.0";

  loggedInAdminPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'people', color: 'light', title: 'Sub-Admins', component: 'AdvisersPage' },
    { icon: 'football', color: 'light', title: 'Sub-Admin Predictions', component: 'PredictionsPage' },
    { icon: 'people', color: 'light', title: 'Members', component: 'UsersPage' },
    { icon: 'card', color: 'light', title: 'Payments', component: 'PaymentsPage' },
    { icon: 'podium', color: 'light', title: 'Reports', component: 'ReportsPage' },
    { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
  ];

  loggedInAdviserPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
    { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
  ];

  loggedInMemberPages: PageInterface[] = [
    { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
    { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' }
  ];

  otherPages: PageInterface[] = [
    { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
    { icon: 'at', color: 'light', title: 'Contact Us', component: 'TeamPage' },//ContactPage
    { icon: 'briefcase', color: 'light', title: 'Terms', component: 'TermsPage' },
    { icon: 'log-out', color: 'danger', title: 'Logout', component: 'SignInPage' }
  ]

  public animateVarible: boolean = false;
  
  constructor(public storage: Storage,
    public platform: Platform,
    public events: Events,
    public menu: MenuController,
    public statusBar: StatusBar,
    public auth: AuthenicationProvider,
    public splashScreen: SplashScreen) {
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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('hasSeenLogin') // Check if the user has already seen the LoginPage
        .then((hasSeenLogin) => {
          if (hasSeenLogin) {
            this.Userfullname = this.auth.currentUserDataValue.name;
            this.usertype = this.auth.currentUserDataValue.user_type;
            this.enableMenu(hasSeenLogin === true, this.usertype);
          } else {
            this.rootPage = 'SignInPage';
          }
        });
    });
  }
  listenToEvents() {
    this.events.subscribe('user:signup', () => {
      this.enableMenu(true, "");
    });

    this.events.subscribe('user:logout', () => {
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
      this.menu.enable(!showmenu, 'loggedInAdviserMenu');
    } else if (usertype === "Admin") {
      this.menu.enable(showmenu, 'loggedInAdminMenu');
      this.menu.enable(!showmenu, 'loggedInMemberPages');
      this.menu.enable(!showmenu, 'loggedInAdviserMenu');
    } else if (usertype === "Sub-Admin") {
      this.menu.enable(showmenu, 'loggedInAdviserMenu');
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
