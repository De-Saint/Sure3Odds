webpackJsonp([19],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeagueEditPageModule", function() { return SettingLeagueEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_league_edit__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingLeagueEditPageModule = /** @class */ (function () {
    function SettingLeagueEditPageModule() {
    }
    SettingLeagueEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_league_edit__["a" /* SettingLeagueEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_league_edit__["a" /* SettingLeagueEditPage */]),
            ],
        })
    ], SettingLeagueEditPageModule);
    return SettingLeagueEditPageModule;
}());

//# sourceMappingURL=setting-league-edit.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leagues; });
var Leagues = /** @class */ (function () {
    function Leagues(name, id, imageurl, country) {
        this.name = name;
        this.id = id;
        this.imageurl = imageurl;
        this.country = country;
    }
    return Leagues;
}());

//# sourceMappingURL=Leagues.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeagueEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Leagues__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingLeagueEditPage = /** @class */ (function () {
    function SettingLeagueEditPage(navCtrl, gameProvider, alertCtrl, loadingCtrl, actionSheetCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gameProvider = gameProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.league = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Leagues__["a" /* Leagues */]("", "", "", { id: "", name: "", imageurl: "" });
        this.leagues = this.navParams.get("league");
        if (this.leagues) {
            this.league = this.leagues;
            if (this.leagues.imageurl) {
                this.league.imageurl = this.leagues.imageurl;
            }
            else {
                this.league.imageurl = "assets/imgs/appicon.png";
            }
        }
    }
    SettingLeagueEditPage.prototype.onDelete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete League',
            message: 'Do you want to delete <b>' + this.leagues.name + '?</b><br/><br/>All the teams under <b>' + this.leagues.name + '</b> would be deleted.</b><br/><br/>This is action is irreversible.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        loading.present();
                        _this.gameProvider.deleteLeague(_this.leagues.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.authProvider.showToast(res.description);
                            }
                        }, function (error) {
                            loading.dismiss().catch(function () { });
                            _this.authProvider.showToast(error.error.error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingLeagueEditPage.prototype.onSubmit = function (league) {
        var _this = this;
        if (league.name) {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.gameProvider.updateLeague(league).subscribe(function (res) {
                loading_1.dismiss().catch(function () { });
                if (res.statusCode === 200) {
                    _this.navCtrl.pop();
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                loading_1.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
        else {
            this.authProvider.showToast("Name of league input field is empty");
        }
    };
    SettingLeagueEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-setting-league-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-edit/setting-league-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit League</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="onDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="imgs" style="margin-top: 5em; ">\n     <div class="imgProfile" [ngStyle]="{\'background-image\':\'url(\' + league.imageurl + \')\'}">\n    </div>\n  </div>\n  <div class="ion-margin">\n    <div class="otherForm">\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Country Name</ion-label>\n          <ion-input disabled type="text" [(ngModel)]="league.country.name"></ion-input>\n          <ion-input hidden type="text" [(ngModel)]="league.country.id"></ion-input>\n        </ion-item>\n        <!-- appear when click update -->\n        <ion-item>\n          <ion-label stacked>League Name</ion-label>\n          <ion-input type="text" [(ngModel)]="league.name"></ion-input>\n          <ion-input hidden type="text" [(ngModel)]="league.id"></ion-input>\n        </ion-item>\n        <!-- ==================================== -->\n      </ion-list>\n      <button ion-button block color="color2" (click)="onSubmit(league)">Submit</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-edit/setting-league-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], SettingLeagueEditPage);
    return SettingLeagueEditPage;
}());

//# sourceMappingURL=setting-league-edit.js.map

/***/ })

});
//# sourceMappingURL=19.js.map