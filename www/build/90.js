webpackJsonp([90],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeagueViewPageModule", function() { return SettingLeagueViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_league_view__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingLeagueViewPageModule = /** @class */ (function () {
    function SettingLeagueViewPageModule() {
    }
    SettingLeagueViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_league_view__["a" /* SettingLeagueViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_league_view__["a" /* SettingLeagueViewPage */]),
            ],
        })
    ], SettingLeagueViewPageModule);
    return SettingLeagueViewPageModule;
}());

//# sourceMappingURL=setting-league-view.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeagueViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingLeagueViewPage = /** @class */ (function () {
    function SettingLeagueViewPage(navCtrl, loadingCtrl, actionSheetCtrl, authProvider, gamesProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.navParams = navParams;
        this.country = this.navParams.get("country");
        console.log(this.country);
    }
    SettingLeagueViewPage.prototype.ionViewWillEnter = function () {
        this.getCountryLeagues();
    };
    SettingLeagueViewPage.prototype.getCountryLeagues = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetLeaguesByCountryID(this.country.id)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.leagues = resp.data;
                _this.originalleagues = _this.leagues;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingLeagueViewPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.leagues = this.originalleagues;
        }
        else {
            if (searchvalue.length >= 3) {
                this.gamesProvider.SearchLeaguesByCountryIDAndName(searchvalue, this.country.id)
                    .subscribe(function (resp) {
                    console.log(resp);
                    if (resp.statusCode === 200) {
                        _this.leagues = resp.data;
                    }
                    else {
                        console.log(resp.description);
                    }
                    _this.error = '';
                }, function (error) {
                    console.log(JSON.stringify(error));
                    _this.error = 'none';
                    _this.leagues = [];
                    _this.authProvider.showToast(error.error.description);
                });
            }
        }
    };
    SettingLeagueViewPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
    };
    SettingLeagueViewPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
    };
    SettingLeagueViewPage.prototype.onLeagueOption = function (league) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'League Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('SettingLeagueEditPage', { league: league }); }
                }, {
                    text: 'View ' + league.name + ' Teams',
                    handler: function () { _this.navCtrl.push('SettingTeamViewPage', { league: league }); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    SettingLeagueViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-setting-league-view',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-view/setting-league-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{country.name}} Leagues</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="SettingLeagueAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats">\n    <ion-list *ngFor="let league of leagues">\n      <ion-item class="thumbnailItem" (click)="onLeagueOption(league)">\n        <ion-thumbnail item-left>\n          <img src="{{league.imageurl}}" *ngIf="league.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!league.imageurl" />\n        </ion-thumbnail>\n        <h5 ion-text padding-left margin-left color="dark">{{league.name}}</h5>\n        <span ion-text color="color1" class="" small item-right>{{league.country.name}}</span>\n      </ion-item>\n     \n    </ion-list>\n  </div>\n\n <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-view/setting-league-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], SettingLeagueViewPage);
    return SettingLeagueViewPage;
}());

//# sourceMappingURL=setting-league-view.js.map

/***/ })

});
//# sourceMappingURL=90.js.map