webpackJsonp([34],{

/***/ 138:
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
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-adviser/add-adviser.module": [
		410,
		33
	],
	"../pages/add-user/add-user.module": [
		411,
		32
	],
	"../pages/all-matches/all-matches.module": [
		412,
		31
	],
	"../pages/android-subscription/android-subscription.module": [
		413,
		1
	],
	"../pages/assign-adviser/assign-adviser.module": [
		414,
		30
	],
	"../pages/free-tips/free-tips.module": [
		415,
		29
	],
	"../pages/guide/guide.module": [
		416,
		28
	],
	"../pages/help/help.module": [
		417,
		27
	],
	"../pages/home/home.module": [
		418,
		26
	],
	"../pages/league-details/league-details.module": [
		419,
		25
	],
	"../pages/match-details/match-details.module": [
		420,
		24
	],
	"../pages/new-game/new-game.module": [
		421,
		23
	],
	"../pages/new-prediction/new-prediction.module": [
		422,
		22
	],
	"../pages/notification/notification.module": [
		423,
		21
	],
	"../pages/old-free-tips/old-free-tips.module": [
		424,
		20
	],
	"../pages/old-games/old-games.module": [
		425,
		19
	],
	"../pages/payments/payments.module": [
		426,
		18
	],
	"../pages/photos-details/photos-details.module": [
		427,
		17
	],
	"../pages/photos/photos.module": [
		428,
		16
	],
	"../pages/players-stats/players-stats.module": [
		429,
		15
	],
	"../pages/predictions/predictions.module": [
		430,
		14
	],
	"../pages/profile/profile.module": [
		431,
		0
	],
	"../pages/search-pop/search-pop.module": [
		432,
		13
	],
	"../pages/select-league/select-league.module": [
		433,
		12
	],
	"../pages/setting/setting.module": [
		434,
		11
	],
	"../pages/sign-in/sign-in.module": [
		435,
		10
	],
	"../pages/sign-up/sign-up.module": [
		436,
		9
	],
	"../pages/team/team.module": [
		437,
		8
	],
	"../pages/teams-stats/teams-stats.module": [
		443,
		7
	],
	"../pages/terms/terms.module": [
		438,
		6
	],
	"../pages/top-news-details/top-news-details.module": [
		439,
		5
	],
	"../pages/top-news/top-news.module": [
		440,
		4
	],
	"../pages/user-details/user-details.module": [
		441,
		3
	],
	"../pages/users/users.module": [
		442,
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
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */]])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewUser; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenicationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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

var AuthenicationProvider = /** @class */ (function () {
    function AuthenicationProvider(http, navCtrl, storage, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        var promise = this.storage.get('currentUesr');
        var me = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromPromise(promise);
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](JSON.parse(String(me)));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
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
            cssClass: '#0f5656',
        });
        toast.present(toast);
    };
    AuthenicationProvider.prototype.login = function (email, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('email', email)
            .set('password', password);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/auth/login", params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            _this.respData = resp;
            console.log(_this.respData);
            if (_this.respData.statusCode === 200) {
                _this.storage.set('currentUser', JSON.stringify(_this.respData.data));
                _this.currentUserSubject.next(_this.respData.data);
            }
            return resp;
        }));
    };
    AuthenicationProvider.prototype.logout = function (page) {
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.navCtrl.setRoot(page);
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
    AuthenicationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */]) === "function" && _d || Object])
    ], AuthenicationProvider);
    return AuthenicationProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=authenication.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar> \n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/profile.png">\n        </ion-avatar>\n        <h5 ion-text color="light">John Smith</h5>\n        <p ion-text color="light">john_smith@gmail.com</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="mainMenuList">\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n    \n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-list-header (click)="openPage(\'SelectLeaguePage\')" menuClose>\n        <ion-icon name="md-add-circle" item-left color="color2"></ion-icon>\n        SELECTE LEAGUE\n      </ion-list-header>\n      <ion-item  menuClose *ngFor="let item of leagues" (click)="openPage(\'LeagueDetailsPage\')">\n        <img src="{{item.img}}" item-left/>\n        {{item.name}}\n      </ion-item>\n    </ion-list>\n\n    <!-- Favorite Team  -->\n    <ion-list class="leagueList">\n      <ion-list-header>\n        <ion-icon name="md-add-circle" item-left color="color2"></ion-icon>\n        Favorite Team\n      </ion-list-header>\n      <ion-item *ngFor="let item of teams" menuClose  (click)="openPage(\'TeamPage\')">\n        <img src="{{item.img}}" item-left/>\n        {{item.name}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(483);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/add-adviser/add-adviser.module#AddAdviserPageModule', name: 'AddAdviserPage', segment: 'add-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/android-subscription/android-subscription.module#AndroidSubscriptionPageModule', name: 'AndroidSubscriptionPage', segment: 'android-subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-adviser/assign-adviser.module#AssignAdviserPageModule', name: 'AssignAdviserPage', segment: 'assign-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/league-details/league-details.module#LeagueDetailsPageModule', name: 'LeagueDetailsPage', segment: 'league-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-game/new-game.module#NewGamePageModule', name: 'NewGamePage', segment: 'new-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-prediction/new-prediction.module#NewPredictionPageModule', name: 'NewPredictionPage', segment: 'new-prediction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-free-tips/old-free-tips.module#OldFreeTipsPageModule', name: 'OldFreeTipsPage', segment: 'old-free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-games/old-games.module#OldGamesPageModule', name: 'OldGamesPage', segment: 'old-games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos-details/photos-details.module#PhotosDetailsPageModule', name: 'PhotosDetailsPage', segment: 'photos-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/players-stats/players-stats.module#PlayersStatsPageModule', name: 'PlayersStatsPage', segment: 'players-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-pop/search-pop.module#SearchPopPageModule', name: 'SearchPopPage', segment: 'search-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-league/select-league.module#SelectLeaguePageModule', name: 'SelectLeaguePage', segment: 'select-league', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news-details/top-news-details.module#TopNewsDetailsPageModule', name: 'TopNewsDetailsPage', segment: 'top-news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news/top-news.module#TopNewsPageModule', name: 'TopNewsPage', segment: 'top-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams-stats/teams-stats.module#TeamsStatsPageModule', name: 'TeamsStatsPage', segment: 'teams-stats', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* IonicApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__providers_global__["a" /* Global */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__["a" /* AuthenicationProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__["a" /* RequestInterceptorProvider */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__["a" /* ErrorInterceptorProvider */], multi: true },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ErrorInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ErrorInterceptorProvider = /** @class */ (function () {
    function ErrorInterceptorProvider(http) {
        this.http = http;
        console.log('Hello ErrorInterceptorProvider Provider');
    }
    ErrorInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ErrorInterceptorProvider);
    return ErrorInterceptorProvider;
}());

//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RequestInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RequestInterceptorProvider = /** @class */ (function () {
    function RequestInterceptorProvider(http) {
        this.http = http;
        console.log('Hello RequestInterceptorProvider Provider');
    }
    RequestInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RequestInterceptorProvider);
    return RequestInterceptorProvider;
}());

//# sourceMappingURL=request-interceptor.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.js.map