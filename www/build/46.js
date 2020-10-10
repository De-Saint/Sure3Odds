webpackJsonp([46],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeTipsPageModule", function() { return FreeTipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__free_tips__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FreeTipsPageModule = /** @class */ (function () {
    function FreeTipsPageModule() {
    }
    FreeTipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__free_tips__["a" /* FreeTipsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__free_tips__["a" /* FreeTipsPage */]),
            ],
        })
    ], FreeTipsPageModule);
    return FreeTipsPageModule;
}());

//# sourceMappingURL=free-tips.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeTipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_native_http_native_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FreeTipsPage = /** @class */ (function () {
    function FreeTipsPage(navCtrl, authProvider, alertCtrl, platform, nativeHttp, loadingCtrl, gamesProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.gamesProvider = gamesProvider;
        // calender Function
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.days = [];
        this.myDate = new Date();
        this.year = this.myDate.getFullYear();
        this.month_num = this.myDate.getMonth();
        this.month_name = this.monthNames[this.month_num];
        this.getDaysInMonth(this.month_num, this.year);
        this.currentDate = this.myDate;
    }
    FreeTipsPage.prototype.ionViewWillEnter = function () {
        var currentdate = this.gamesProvider.getDate();
        this.GetFreeGames(currentdate);
        var date = this.myDate.getDate();
        var today = date - 1;
        this.isGroupShown(today);
        this.shownGroup = today;
    };
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
    FreeTipsPage.prototype.getDaysInMonth = function (month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month);
        while (date.getMonth() === month) {
            var a = new Date(date);
            var day_num = a.getDate();
            this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
            date.setDate(date.getDate() + 1);
        }
    };
    // increase and decrease month function
    FreeTipsPage.prototype.change_month = function (type) {
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
    };
    FreeTipsPage.prototype.toggleGroup = function (group) {
        this.shownGroup = group;
    };
    FreeTipsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    FreeTipsPage.prototype.onClick = function (day) {
        this.shownGroup = null;
        var date = this.gamesProvider.computeOldMatchDate(day);
        this.GetFreeGames(date);
        this.month_name = this.monthNames[this.month_num];
        this.days = [];
        this.getDaysInMonth(this.month_num, this.year);
    };
    FreeTipsPage.prototype.GetFreeGames = function (currentdate) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.nativeHttp.GetFreeGames(currentdate)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.gamelist = resp.data;
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    FreeTipsPage.prototype.GotoMatchDetails = function (page) {
        this.navCtrl.push(page);
    };
    FreeTipsPage.prototype.onView = function (id) {
        if (id !== 1) {
            this.showAlert("Subscribe", "Subscribe to VIP or VVIP Plan today, to gain access to more features like posting your predictions, commenting on matches and interacting with other users, advert free and many more predictions.");
        }
    };
    FreeTipsPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    FreeTipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-free-tips',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/free-tips/free-tips.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Free Tips</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar class="calendarToolbar">\n    <ion-grid class="calendar">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-back" color="light" (click)="change_month(\'decrease\')"></ion-icon>\n        </ion-col>\n        <ion-col col>\n          <p>\n            <span>{{month_name}}</span>,\n            <span>{{year}}</span>\n          </p>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-forward" color="light" (click)="change_month(\'increase\')"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="daysScroll">\n      <ion-scroll scrollX="true" scrollY="false" >\n        <div class="day" *ngFor="let day of days ; let i=index" (click)="toggleGroup(i)" [ngClass]="{\'active\': isGroupShown(i)}" >\n          <p>{{day.name}}</p>\n          <button ion-button clear (click)="onClick(day)">{{day.day_num}} </button>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <p ion-text text-center no-margin color="light"><b>{{currentDate |  date:\'mediumDate\'}}</b></p>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n   <!-- matches list -->\n   <ion-list margin-top *ngFor="let game of gamelist">\n    <ion-list-header>\n      {{game.title}}\n      <ion-icon name="football" color="color1" item-left></ion-icon>\n    </ion-list-header>\n    <!-- match item  -->\n    <div class="" *ngIf="game.items">\n      <ion-item class="matchItem" *ngFor="let match of game.items">\n      <ion-grid>\n        <ion-row  (click)="onView(match.sets.id)">\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.hometeam.imageurl}}" item-right  *ngIf="match.hometeam.imageurl"/>\n              <img src="assets/imgs/appicon.png"  item-right  *ngIf="!match.hometeam.imageurl"/>\n              <p text-right>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <ion-col col-auto>\n            <span ion-text color="color1">{{match.matchtime}}</span>\n            <p ion-text color="color2"  *ngIf="match.sets.id === 1"><b>{{match.odds}}</b></p>\n            <p ion-text color="color2" *ngIf="match.sets.id === 1" ><b>{{match.selections.name}}</b></p>\n            <p ion-text color="color2" *ngIf="match.sets.id !== 1" ><b>View</b></p>\n          </ion-col>\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.awayteam.imageurl}}" item-left *ngIf="match.awayteam.imageurl"/>\n              <img src="assets/imgs/appicon.png" item-left *ngIf="!match.awayteam.imageurl"/>\n              <p text-left>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n       </ion-grid>\n     </ion-item>\n    </div>\n    <div class="" *ngIf="game.msg">\n     <p ion-text text-center color="color2">{{game.msg}}</p>\n    </div>\n\n  </ion-list>\n   <!-- matches list -->\n\n</ion-content>\n<ion-footer>\n<ion-toolbar>\n  <ion-grid class="white bordertop lightborder">\n    <ion-row wrap>\n      <ion-col col-12 class="center">\n        <div class="" margin-top ion-text text-center>\n          Subscribe to VIP or VVIP Plan today, to gain access to more features like posting your predictions, commenting and interacting with other users, advert\n             free and many more predictions.\n         </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/free-tips/free-tips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_0__providers_native_http_native_http__["a" /* NativeHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */]])
    ], FreeTipsPage);
    return FreeTipsPage;
}());

//# sourceMappingURL=free-tips.js.map

/***/ })

});
//# sourceMappingURL=46.js.map