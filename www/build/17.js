webpackJsonp([17],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeaguesPageModule", function() { return SettingLeaguesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_leagues__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingLeaguesPageModule = /** @class */ (function () {
    function SettingLeaguesPageModule() {
    }
    SettingLeaguesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_leagues__["a" /* SettingLeaguesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_leagues__["a" /* SettingLeaguesPage */]),
            ],
        })
    ], SettingLeaguesPageModule);
    return SettingLeaguesPageModule;
}());

//# sourceMappingURL=setting-leagues.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeaguesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingLeaguesPage = /** @class */ (function () {
    function SettingLeaguesPage(navCtrl, authProvider, loadingCtrl, gamesProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.gamesProvider = gamesProvider;
        this.navParams = navParams;
    }
    SettingLeaguesPage.prototype.ngOnInit = function () {
        this.GetLeagues();
    };
    SettingLeaguesPage.prototype.GetLeagues = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        // loading.present();
        this.gamesProvider.GetLeagues()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.leagues = resp.data;
                _this.originalleagues = _this.leagues;
                console.log(_this.originalleagues);
                _this.error = 'full';
            }
            else {
                console.log(resp.description);
                loading.dismiss().catch(function () { });
            }
        }, function (error) {
            console.log(JSON.stringify(error));
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingLeaguesPage.prototype.onSearch = function () {
        var _this = this;
        var term = this.searchTerm;
        if (term.trim() === '' || term.trim().length < 0) {
            if (this.leagues.length === 0) {
                this.error = "empty";
                console.log("this.leagues");
            }
            else {
                this.error = 'full';
                this.leagues = this.originalleagues;
            }
        }
        else {
            //to search an already popolated arraylist
            this.leagues = [];
            if (this.originalleagues) {
                this.leagues = this.originalleagues.filter(function (league) {
                    if (league.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1 || league.country.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
                        _this.error = 'full';
                        return true;
                    }
                    else {
                        if (_this.leagues.length === 0) {
                            _this.leagues = [];
                            _this.error = "empty";
                            console.log("no league");
                        }
                        return false;
                    }
                });
            }
        }
    };
    SettingLeaguesPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
        this.error = '';
    };
    SettingLeaguesPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
        this.error = '';
    };
    SettingLeaguesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-setting-leagues',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-leagues/setting-leagues.html"*/'<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle icon-only>\n    <ion-icon class="goal-menu"></ion-icon>\n  </button>\n  <ion-title>Manage Leagues</ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only navPush="NotificationPage">\n      <ion-icon name="md-notifications"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats" *ngIf="error === \'full\'">\n    <ion-list *ngFor="let league of leagues">\n      <ion-item class="thumbnailItem">\n        <ion-thumbnail item-left>\n \n          <img src="{{league.imageurl}}" *ngIf="league.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!league.imageurl" />\n        </ion-thumbnail>\n        <!-- team Name -->\n        <h5 ion-text padding-left margin-left color="dark">{{league.name}}</h5>\n        <!-- note -->\n        <!-- <p ion-text color="dark">{{item.note}}</p> -->\n        <!-- goals or rating Number -->\n        <span ion-text color="color1" class="" item-right>{{league.country.name}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="" *ngIf="error === \'empty\'">\n    <p ion-text text-center color="color2">No result found!</p> \n   </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-leagues/setting-leagues.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */]) === "function" && _e || Object])
    ], SettingLeaguesPage);
    return SettingLeaguesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=setting-leagues.js.map

/***/ })

});
//# sourceMappingURL=17.js.map