webpackJsonp([4],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeagueEditPageModule", function() { return SettingLeagueEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_league_edit__ = __webpack_require__(781);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_league_edit__["a" /* SettingLeagueEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_league_edit__["a" /* SettingLeagueEditPage */]),
            ],
        })
    ], SettingLeagueEditPageModule);
    return SettingLeagueEditPageModule;
}());

//# sourceMappingURL=setting-league-edit.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeagueEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Leagues__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
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
    function SettingLeagueEditPage(navCtrl, gameProvider, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gameProvider = gameProvider;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.img1 = "assets/imgs/profileCover.png";
        this.img2 = "assets/imgs/profile2.png";
        this.league = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Leagues__["a" /* Leagues */]("", "", "", { id: "", name: "", imageurl: "" });
        this.leagues = this.navParams.data;
        console.log(this.leagues);
        if (this.leagues) {
            this.league.name = this.leagues.name;
            this.league.id = this.leagues.id;
            this.league.imageurl = this.leagues.imageurl;
            console.log(this.league.imageurl);
            this.league.country.name = this.leagues.country.name;
            this.league.country.id = this.leagues.country.id;
            this.league.country.imageurl = this.leagues.country.image_url;
        }
    }
    SettingLeagueEditPage.prototype.ionViewDidLoad = function () {
    };
    SettingLeagueEditPage.prototype.onDelete = function () {
        var _this = this;
        this.gameProvider.deleteLeague(this.leagues.id).subscribe(function (res) {
            if (res.statusCode === 200) {
                _this.navCtrl.pop();
            }
            else {
                _this.authProvider.showToast(res.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingLeagueEditPage.prototype.onSubmit = function (league) {
        console.log(league);
        // if(this.league.name){
        //   this.gameProvider.updateLeague(league).subscribe(res => {
        //     if (res.statusCode === 200) {
        //       this.navCtrl.pop();
        //     } else {
        //       this.authProvider.showToast(res.description);
        //     }
        //   }, error => {
        //     this.authProvider.showToast(error.error.description);
        //   });
        // }else{
        //   this.authProvider.showToast("Name of league input field is empty");
        // }
    };
    SettingLeagueEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-setting-league-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-edit/setting-league-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit League</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="onDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="imgs">\n    <button ion-button icon-only class="coverCamera" [ngClass]="{\'show\':flag==false}"  (click)="selectImage(1)">\n      <ion-icon name="md-camera"></ion-icon>\n    </button>\n    <img src="{{img1}}"/>\n    <div class="imgProfile" [ngStyle]="{\'background-image\':\'url(\' + img2 + \')\'}">\n      <button ion-button icon-only class="profileCamera"  [ngClass]="{\'show\':flag==false}"  (click)="selectImage(2)">\n        <ion-icon name="md-camera"></ion-icon>\n      </button>\n    </div>\n  </div>\n  <div class="otherForm">\n    \n    <ion-list>\n      <ion-item >\n        <ion-label stacked>Country Name</ion-label>\n        <ion-input disabled type="text" [(ngModel)]="league.country.name"  ></ion-input>\n        <ion-input hidden type="text" [(ngModel)]="league.country.id"  ></ion-input>\n      </ion-item>\n      <!-- appear when click update -->\n      <ion-item class="thumbnailItem" >\n        <ion-thumbnail item-left padding-top padding-bottom>\n          <img src="{{league.imageurl}}" *ngIf="league.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!league.imageurl" />\n        </ion-thumbnail>\n        <!-- <ion-label stacked>League Name</ion-label>\n        <ion-input  type="text" [(ngModel)]="league.name"  ></ion-input>\n        <ion-input hidden type="text" [(ngModel)]="league.id"  ></ion-input> -->\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>League Name</ion-label>\n        <ion-input  type="text" [(ngModel)]="league.name"  ></ion-input>\n        <ion-input hidden type="text" [(ngModel)]="league.id"  ></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(league)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-edit/setting-league-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* NavParams */]])
    ], SettingLeagueEditPage);
    return SettingLeagueEditPage;
}());

//# sourceMappingURL=setting-league-edit.js.map

/***/ }),

/***/ 782:
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

/***/ })

});
//# sourceMappingURL=4.js.map