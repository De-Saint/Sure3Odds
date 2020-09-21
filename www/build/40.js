webpackJsonp([40],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCountryPageModule", function() { return SettingCountryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_country__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingCountryPageModule = /** @class */ (function () {
    function SettingCountryPageModule() {
    }
    SettingCountryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_country__["a" /* SettingCountryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_country__["a" /* SettingCountryPage */]),
            ],
        })
    ], SettingCountryPageModule);
    return SettingCountryPageModule;
}());

//# sourceMappingURL=setting-country.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingCountryPage; });
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




var SettingCountryPage = /** @class */ (function () {
    function SettingCountryPage(navCtrl, authProvider, gamesProvider, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    SettingCountryPage.prototype.ionViewWillEnter = function () {
        this.GetCountries();
    };
    SettingCountryPage.prototype.GetCountries = function () {
        var _this = this;
        this.gamesProvider.GetCountries(0, 20)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.countries = resp.data.content;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.originalcountries = _this.countries;
                _this.nocountries = 'countries';
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
            _this.error = '';
        }, function (error) {
            _this.error = 'none';
            _this.countries = [];
            _this.authProvider.showToast(error.error.error);
        });
    };
    SettingCountryPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.countries = this.originalcountries;
        }
        else {
            if (searchvalue.length >= 3) {
                this.gamesProvider.SearchCountries(searchvalue, 0, 20)
                    .subscribe(function (resp) {
                    if (resp.statusCode === 200) {
                        _this.countries = resp.data.content;
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                    }
                    else {
                        _this.authProvider.showToast(resp.description);
                    }
                    _this.error = '';
                }, function (error) {
                    _this.error = 'none';
                    _this.countries = [];
                    _this.authProvider.showToast(error.error.error);
                });
            }
        }
    };
    SettingCountryPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.countries = this.originalcountries;
    };
    SettingCountryPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.countries = this.originalcountries;
    };
    SettingCountryPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.gamesProvider.GetCountries(_this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.nocountries = 'countries';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.countries.push(resp.data.content[i]);
                    }
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
                event.complete();
            }, function (error) {
                _this.nocountries = 'none';
                event.complete();
            });
        }, 1000);
    };
    SettingCountryPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    SettingCountryPage.prototype.onCountryOption = function (country) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Country Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('SettingCountryEditPage', { country: country }); }
                }, {
                    text: 'View Leagues',
                    handler: function () { _this.navCtrl.push('SettingLeagueViewPage', { country: country }); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], SettingCountryPage.prototype, "content", void 0);
    SettingCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-setting-country',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country/setting-country.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Countries</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="SettingCountryAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats">\n    <ion-list *ngFor="let country of countries">\n      <ion-item class="thumbnailItem" (click)="onCountryOption(country)">\n        <ion-thumbnail item-left>\n          <img src="{{country.imageurl}}" *ngIf="country.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!country.imageurl" />\n        </ion-thumbnail>\n        <h5 ion-text padding-left margin-left color="dark">{{country.name}}</h5>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="nocountries === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country/setting-country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], SettingCountryPage);
    return SettingCountryPage;
}());

//# sourceMappingURL=setting-country.js.map

/***/ })

});
//# sourceMappingURL=40.js.map