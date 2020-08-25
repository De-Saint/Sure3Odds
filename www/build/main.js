webpackJsonp([34],{

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-adviser/add-adviser.module": [
		405,
		33
	],
	"../pages/add-user/add-user.module": [
		407,
		32
	],
	"../pages/all-matches/all-matches.module": [
		406,
		31
	],
	"../pages/assign-adviser/assign-adviser.module": [
		408,
		30
	],
	"../pages/free-tips/free-tips.module": [
		413,
		29
	],
	"../pages/guide/guide.module": [
		409,
		28
	],
	"../pages/help/help.module": [
		410,
		27
	],
	"../pages/home/home.module": [
		411,
		26
	],
	"../pages/league-details/league-details.module": [
		414,
		25
	],
	"../pages/match-details/match-details.module": [
		412,
		24
	],
	"../pages/new-game/new-game.module": [
		415,
		23
	],
	"../pages/new-prediction/new-prediction.module": [
		416,
		22
	],
	"../pages/notification/notification.module": [
		417,
		21
	],
	"../pages/old-free-tips/old-free-tips.module": [
		419,
		20
	],
	"../pages/old-games/old-games.module": [
		418,
		19
	],
	"../pages/payments/payments.module": [
		420,
		18
	],
	"../pages/photos-details/photos-details.module": [
		421,
		17
	],
	"../pages/photos/photos.module": [
		422,
		16
	],
	"../pages/players-stats/players-stats.module": [
		423,
		15
	],
	"../pages/predictions/predictions.module": [
		425,
		14
	],
	"../pages/profile/profile.module": [
		426,
		0
	],
	"../pages/search-pop/search-pop.module": [
		424,
		13
	],
	"../pages/select-league/select-league.module": [
		428,
		12
	],
	"../pages/setting/setting.module": [
		427,
		11
	],
	"../pages/sign-in/sign-in.module": [
		438,
		10
	],
	"../pages/sign-up/sign-up.module": [
		430,
		1
	],
	"../pages/subscription/subscription.module": [
		431,
		9
	],
	"../pages/team/team.module": [
		429,
		8
	],
	"../pages/teams-stats/teams-stats.module": [
		432,
		7
	],
	"../pages/terms/terms.module": [
		433,
		6
	],
	"../pages/top-news-details/top-news-details.module": [
		434,
		5
	],
	"../pages/top-news/top-news.module": [
		435,
		4
	],
	"../pages/user-details/user-details.module": [
		436,
		3
	],
	"../pages/users/users.module": [
		437,
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
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */]])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'SignInPage';
        this.animateVarible = false;
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
        this.leagues = [
            { img: 'assets/imgs/league/global.png', name: 'Europa League' },
            { img: 'assets/imgs/league/global.png', name: 'INT - Champions League' },
            { img: 'assets/imgs/league/global.png', name: 'INT - FIFA Club World Cup' },
        ];
        this.teams = [
            { img: 'assets/imgs/league/global.png', name: 'Arsenal' },
            { img: 'assets/imgs/league/global.png', name: 'Real Madrid' },
            { img: 'assets/imgs/league/global.png', name: 'Barcelona' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mac/Desktop/Sure/i3/with template/Sure3Odds/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar> \n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/profile.png">\n        </ion-avatar>\n        <h5 ion-text color="light">John Smith</h5>\n        <p ion-text color="light">john_smith@gmail.com</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="mainMenuList">\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n    \n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-list-header (click)="openPage(\'SelectLeaguePage\')" menuClose>\n        <ion-icon name="md-add-circle" item-left color="color2"></ion-icon>\n        SELECTE LEAGUE\n      </ion-list-header>\n      <ion-item  menuClose *ngFor="let item of leagues" (click)="openPage(\'LeagueDetailsPage\')">\n        <img src="{{item.img}}" item-left/>\n        {{item.name}}\n      </ion-item>\n    </ion-list>\n\n    <!-- Favorite Team  -->\n    <ion-list class="leagueList">\n      <ion-list-header>\n        <ion-icon name="md-add-circle" item-left color="color2"></ion-icon>\n        Favorite Team\n      </ion-list-header>\n      <ion-item *ngFor="let item of teams" menuClose  (click)="openPage(\'TeamPage\')">\n        <img src="{{item.img}}" item-left/>\n        {{item.name}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Desktop/Sure/i3/with template/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global__ = __webpack_require__(242);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/add-adviser/add-adviser.module#AddAdviserPageModule', name: 'AddAdviserPage', segment: 'add-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-adviser/assign-adviser.module#AssignAdviserPageModule', name: 'AssignAdviserPage', segment: 'assign-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/league-details/league-details.module#LeagueDetailsPageModule', name: 'LeagueDetailsPage', segment: 'league-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-game/new-game.module#NewGamePageModule', name: 'NewGamePage', segment: 'new-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-prediction/new-prediction.module#NewPredictionPageModule', name: 'NewPredictionPage', segment: 'new-prediction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-games/old-games.module#OldGamesPageModule', name: 'OldGamesPage', segment: 'old-games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-free-tips/old-free-tips.module#OldFreeTipsPageModule', name: 'OldFreeTipsPage', segment: 'old-free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos-details/photos-details.module#PhotosDetailsPageModule', name: 'PhotosDetailsPage', segment: 'photos-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/players-stats/players-stats.module#PlayersStatsPageModule', name: 'PlayersStatsPage', segment: 'players-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-pop/search-pop.module#SearchPopPageModule', name: 'SearchPopPage', segment: 'search-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-league/select-league.module#SelectLeaguePageModule', name: 'SelectLeaguePage', segment: 'select-league', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription/subscription.module#SubscriptionPageModule', name: 'SubscriptionPage', segment: 'subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams-stats/teams-stats.module#TeamsStatsPageModule', name: 'TeamsStatsPage', segment: 'teams-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news-details/top-news-details.module#TopNewsDetailsPageModule', name: 'TopNewsDetailsPage', segment: 'top-news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news/top-news.module#TopNewsPageModule', name: 'TopNewsPage', segment: 'top-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__providers_global__["a" /* Global */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map