webpackJsonp([39],{

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl :"http://104.248.162.83/core-api"
    apiUrl: "http://localhost:8081/sure3odds"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-adviser/add-adviser.module": [
		693,
		38
	],
	"../pages/add-user/add-user.module": [
		726,
		37
	],
	"../pages/adviser-members/adviser-members.module": [
		694,
		36
	],
	"../pages/advisers/advisers.module": [
		695,
		35
	],
	"../pages/all-matches/all-matches.module": [
		698,
		34
	],
	"../pages/android-subscription/android-subscription.module": [
		696,
		1
	],
	"../pages/assign-adviser/assign-adviser.module": [
		697,
		33
	],
	"../pages/contact/contact.module": [
		699,
		32
	],
	"../pages/free-tips/free-tips.module": [
		700,
		31
	],
	"../pages/guide/guide.module": [
		701,
		30
	],
	"../pages/help/help.module": [
		702,
		29
	],
	"../pages/home/home.module": [
		703,
		28
	],
	"../pages/league-details/league-details.module": [
		704,
		27
	],
	"../pages/match-details/match-details.module": [
		705,
		26
	],
	"../pages/member-advisers/member-advisers.module": [
		706,
		25
	],
	"../pages/new-game/new-game.module": [
		708,
		24
	],
	"../pages/new-prediction/new-prediction.module": [
		707,
		23
	],
	"../pages/notification/notification.module": [
		709,
		22
	],
	"../pages/old-free-tips/old-free-tips.module": [
		710,
		21
	],
	"../pages/old-games/old-games.module": [
		711,
		20
	],
	"../pages/payments/payments.module": [
		712,
		19
	],
	"../pages/photos-details/photos-details.module": [
		713,
		18
	],
	"../pages/photos/photos.module": [
		714,
		17
	],
	"../pages/players-stats/players-stats.module": [
		718,
		16
	],
	"../pages/predictions/predictions.module": [
		715,
		15
	],
	"../pages/profile/profile.module": [
		716,
		0
	],
	"../pages/reports/reports.module": [
		717,
		14
	],
	"../pages/search-pop/search-pop.module": [
		719,
		13
	],
	"../pages/select-league/select-league.module": [
		720,
		12
	],
	"../pages/setting/setting.module": [
		721,
		11
	],
	"../pages/sign-in/sign-in.module": [
		722,
		10
	],
	"../pages/sign-up/sign-up.module": [
		723,
		9
	],
	"../pages/team/team.module": [
		724,
		8
	],
	"../pages/teams-stats/teams-stats.module": [
		725,
		7
	],
	"../pages/terms/terms.module": [
		727,
		6
	],
	"../pages/top-news-details/top-news-details.module": [
		729,
		5
	],
	"../pages/top-news/top-news.module": [
		728,
		4
	],
	"../pages/user-details/user-details.module": [
		730,
		3
	],
	"../pages/users/users.module": [
		731,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Global = /** @class */ (function () {
    function Global(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    // search Popover
    Global.prototype.callSearch = function (myEvent) {
        var popover = this.popoverCtrl.create('SearchPopPage', {}, { cssClass: 'search_Pop' });
        popover.present({
            ev: myEvent
        });
    };
    Global.prototype.getDate = function () {
        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth() + 1;
        this.year = this.today.getFullYear();
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.today = this.year + '-' + this.month + '-' + this.day;
        return this.today;
    };
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */]])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesProvider = /** @class */ (function () {
    function GamesProvider(http) {
        this.http = http;
    }
    GamesProvider.prototype.GetGames = function (matchDate) {
        console.log(matchDate);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/get_by_userid", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GamesProvider);
    return GamesProvider;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sure3Odds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var Sure3Odds = /** @class */ (function () {
    function Sure3Odds(storage, platform, events, menu, statusBar, auth, splashScreen) {
        this.storage = storage;
        this.platform = platform;
        this.events = events;
        this.menu = menu;
        this.statusBar = statusBar;
        this.auth = auth;
        this.splashScreen = splashScreen;
        this.version = "1.0.0";
        this.loggedInAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'people', color: 'light', title: 'Advisers', component: 'AdvisersPage' },
            { icon: 'football', color: 'light', title: 'Adviser Predictions', component: 'PredictionsPage' },
            { icon: 'people', color: 'light', title: 'Members', component: 'UsersPage' },
            { icon: 'card', color: 'light', title: 'Payments', component: 'PaymentsPage' },
            { icon: 'podium', color: 'light', title: 'Reports', component: 'ReportsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
        ];
        this.loggedInAdviserPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'people', color: 'light', title: 'Members', component: 'AdviserMembersPage' },
            { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
        ];
        this.loggedInMemberPages = [
            { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'people', color: 'light', title: 'My Advisers', component: 'MemberAdvisersPage' }
        ];
        this.otherPages = [
            { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
            { icon: 'at', color: 'light', title: 'Contact Us', component: 'TeamPage' },
            { icon: 'briefcase', color: 'light', title: 'Terms', component: 'TermsPage' },
            { icon: 'log-out', color: 'danger', title: 'Logout', component: 'SignInPage' }
        ];
        this.animateVarible = false;
        this.initializeApp();
    }
    Sure3Odds.prototype.initializeApp = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.platformReady();
            _this.listenToEvents();
        });
    };
    Sure3Odds.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get('hasSeenLogin') // Check if the user has already seen the LoginPage
                .then(function (hasSeenLogin) {
                if (hasSeenLogin) {
                    _this.Userfullname = _this.auth.currentUserDataValue.name;
                    _this.usertype = _this.auth.currentUserDataValue.user_type;
                    _this.enableMenu(hasSeenLogin === true, _this.usertype);
                }
                else {
                    _this.rootPage = 'SignInPage';
                }
            });
        });
    };
    Sure3Odds.prototype.listenToEvents = function () {
        var _this = this;
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true, "");
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false, "");
            _this.auth.logout();
        });
        this.events.subscribe('user:login', function (usertype, Userfullname) {
            _this.Userfullname = Userfullname;
            _this.usertype = usertype;
            _this.enableMenu(true, usertype);
        });
    };
    Sure3Odds.prototype.enableMenu = function (showmenu, usertype) {
        if (usertype === "Member") {
            this.menu.enable(showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInAdviserMenu');
        }
        else if (usertype === "Admin") {
            this.menu.enable(showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdviserMenu');
        }
        else if (usertype === "Sub-Admin") {
            this.menu.enable(showmenu, 'loggedInAdviserMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
        }
    };
    Sure3Odds.prototype.openPage = function (page) {
        this.nav.setRoot(page);
        this.activePage = page;
        this.LogOutFunction(page);
    };
    Sure3Odds.prototype.LogOutFunction = function (page) {
        if (page === 'SignInPage') {
            this.events.publish('user:logout');
            this.nav.setRoot(page);
            this.auth.logout();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Nav */])
    ], Sure3Odds.prototype, "nav", void 0);
    Sure3Odds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/'<ion-menu id="loggedInMemberPages" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInMemberPages" (click)="openPage(p.component)">\n        <ion-icon color="light" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="loggedInAdviserMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInAdviserPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="loggedInAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Sure3Odds);
    return Sure3Odds;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_games_games__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    backButtonText: '',
    backButtonIcon: 'md-arrow-back',
    iconMode: 'md',
    mode: 'md',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'md',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */], config, {
                    links: [
                        { loadChildren: '../pages/add-adviser/add-adviser.module#AddAdviserPageModule', name: 'AddAdviserPage', segment: 'add-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adviser-members/adviser-members.module#AdviserMembersPageModule', name: 'AdviserMembersPage', segment: 'adviser-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advisers/advisers.module#AdvisersPageModule', name: 'AdvisersPage', segment: 'advisers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/android-subscription/android-subscription.module#AndroidSubscriptionPageModule', name: 'AndroidSubscriptionPage', segment: 'android-subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-adviser/assign-adviser.module#AssignAdviserPageModule', name: 'AssignAdviserPage', segment: 'assign-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/league-details/league-details.module#LeagueDetailsPageModule', name: 'LeagueDetailsPage', segment: 'league-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-advisers/member-advisers.module#MemberAdvisersPageModule', name: 'MemberAdvisersPage', segment: 'member-advisers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-prediction/new-prediction.module#NewPredictionPageModule', name: 'NewPredictionPage', segment: 'new-prediction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-game/new-game.module#NewGamePageModule', name: 'NewGamePage', segment: 'new-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-free-tips/old-free-tips.module#OldFreeTipsPageModule', name: 'OldFreeTipsPage', segment: 'old-free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-games/old-games.module#OldGamesPageModule', name: 'OldGamesPage', segment: 'old-games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos-details/photos-details.module#PhotosDetailsPageModule', name: 'PhotosDetailsPage', segment: 'photos-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/players-stats/players-stats.module#PlayersStatsPageModule', name: 'PlayersStatsPage', segment: 'players-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-pop/search-pop.module#SearchPopPageModule', name: 'SearchPopPage', segment: 'search-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-league/select-league.module#SelectLeaguePageModule', name: 'SelectLeaguePage', segment: 'select-league', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams-stats/teams-stats.module#TeamsStatsPageModule', name: 'TeamsStatsPage', segment: 'teams-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news/top-news.module#TopNewsPageModule', name: 'TopNewsPage', segment: 'top-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news-details/top-news-details.module#TopNewsDetailsPageModule', name: 'TopNewsDetailsPage', segment: 'top-news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* IonicApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__providers_global__["a" /* Global */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_games_games__["a" /* GamesProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__["a" /* RequestInterceptorProvider */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__["a" /* ErrorInterceptorProvider */], multi: true },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptorProvider = /** @class */ (function () {
    function ErrorInterceptorProvider(auth) {
        this.auth = auth;
    }
    ErrorInterceptorProvider.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retry"])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    ErrorInterceptorProvider.prototype.handleError = function (error) {
        console.log(error.error.message);
        if (parseInt(error.error.status) === 401 || error.error.status === 500) {
            this.auth.logout();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["_throw"])(error);
    };
    ErrorInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authenication_authenication__["a" /* AuthenicationProvider */]])
    ], ErrorInterceptorProvider);
    return ErrorInterceptorProvider;
}());

//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewUser; });
/* unused harmony export User */
/* unused harmony export Token */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenicationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth0_angular_jwt__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var helper = new __WEBPACK_IMPORTED_MODULE_7__auth0_angular_jwt__["a" /* JwtHelperService */]();
var TOKEN_KEY = 'access_token';
var NewUser = /** @class */ (function () {
    function NewUser(id, email, firstname, lastname, referencecode, password, phone, plantype, platform) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.referencecode = referencecode;
        this.password = password;
        this.phone = phone;
        this.plantype = plantype;
        this.platform = platform;
    }
    return NewUser;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Token = /** @class */ (function () {
    function Token() {
    }
    return Token;
}());

var AuthenicationProvider = /** @class */ (function () {
    function AuthenicationProvider(http, storage, toastCtrl) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserDataSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('userData')));
        this.currentUserData = this.currentUserDataSubject.asObservable();
    }
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserDataValue", {
        get: function () {
            return this.currentUserDataSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenicationProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok!',
            duration: 4000,
            position: 'bottom',
            cssClass: '#3B7A57',
        });
        toast.present(toast);
    };
    AuthenicationProvider.prototype.login = function (email, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('email', email)
            .set('password', password);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticate", params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            _this.respData = resp;
            if (_this.respData.statusCode === 200) {
                sessionStorage.setItem('currentUser', JSON.stringify(_this.respData.data));
                _this.currentUserSubject.next(_this.respData.data);
                var decoded = helper.decodeToken(_this.respData.data.token);
                sessionStorage.setItem('userData', JSON.stringify(decoded));
                _this.currentUserDataSubject.next(decoded);
            }
            return resp;
        }));
    };
    AuthenicationProvider.prototype.getAllPlantypes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/getall")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.createNewUser = function (user) {
        console.log(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/members/create", user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.hasLoggedIn = function () {
        var _this = this;
        return this.storage.ready().then(function () {
            return _this.storage.get(_this.HAS_LOGGED_IN).then(function (value) {
                return value === true;
            });
        });
    };
    AuthenicationProvider.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('userData');
        this.currentUserSubject.next(null);
        this.currentUserDataSubject.next(null);
        this.storage.remove(TOKEN_KEY);
        this.storage.remove("hasSeenLogin");
    };
    AuthenicationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ToastController */]])
    ], AuthenicationProvider);
    return AuthenicationProvider;
}());

//# sourceMappingURL=authenication.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptorProvider = /** @class */ (function () {
    function RequestInterceptorProvider(auth) {
        this.auth = auth;
    }
    RequestInterceptorProvider.prototype.intercept = function (request, next) {
        var cloneRequest = this.addToken(request);
        return next.handle(cloneRequest);
    };
    // Adds the token to your headers if it exists
    RequestInterceptorProvider.prototype.addToken = function (request) {
        var currentUser = this.auth.currentUserValue;
        if (currentUser) {
            var token = currentUser.token;
            var clone = void 0;
            clone = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                }
            });
            return clone;
        }
        return request;
    };
    RequestInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authenication_authenication__["a" /* AuthenicationProvider */]])
    ], RequestInterceptorProvider);
    return RequestInterceptorProvider;
}());

//# sourceMappingURL=request-interceptor.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map