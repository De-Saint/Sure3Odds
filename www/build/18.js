webpackJsonp([18],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCountryPageModule", function() { return SettingCountryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_country__ = __webpack_require__(775);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_country__["a" /* SettingCountryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_country__["a" /* SettingCountryPage */]),
            ],
        })
    ], SettingCountryPageModule);
    return SettingCountryPageModule;
}());

//# sourceMappingURL=setting-country.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingCountryPage; });
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




var SettingCountryPage = /** @class */ (function () {
    function SettingCountryPage(navCtrl, authProvider, gamesProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    SettingCountryPage.prototype.ngOnInit = function () {
        this.GetCountries();
    };
    SettingCountryPage.prototype.GetCountries = function () {
        var _this = this;
        this.gamesProvider.GetCountries(0, 10)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.countries = resp.data.content;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.originalcountries = _this.countries;
                console.log(_this.currentPage, _this.totalPage, _this.totalData, _this.perPage);
            }
            else {
                console.log(resp.description);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingCountryPage.prototype.onSearch = function () {
        var _this = this;
        var term = this.searchTerm;
        if (term.trim() === '' || term.trim().length < 0) {
            if (this.countries.length === 0) {
                this.error = "No result found.";
            }
            else {
                this.countries = this.originalcountries;
            }
        }
        else {
            //to search an already popolated arraylist
            this.countries = [];
            if (this.originalcountries) {
                this.countries = this.originalcountries.filter(function (country) {
                    if (country.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        if (_this.countries.length === 0) {
                            _this.countries = [];
                            _this.error = "No result found.";
                        }
                        return false;
                    }
                });
            }
        }
    };
    SettingCountryPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.countries = this.originalcountries;
        this.error = '';
    };
    SettingCountryPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.countries = this.originalcountries;
        this.error = '';
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
                    console.log(_this.currentPage, _this.totalPage, _this.totalData, _this.perPage);
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.countries.push(resp.data.content[i]);
                    }
                }
                else {
                    console.log(resp.description);
                }
                // To complete scrolling event
                event.complete();
            }, function (error) {
                console.log("Error in loading data.");
                event.complete();
            });
        }, 1000);
    };
    SettingCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-setting-country',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country/setting-country.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Manage Countries</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats" *ngIf="!error">\n    <ion-list *ngFor="let country of countries">\n      <ion-item class="thumbnailItem">\n        <ion-thumbnail item-left>\n \n          <img src="{{country.imageurl}}" *ngIf="country.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!country.imageurl" />\n        </ion-thumbnail>\n        <!-- team Name -->\n        <h5 ion-text padding-left margin-left color="dark">{{country.name}}</h5>\n        <!-- note -->\n        <!-- <p ion-text color="dark">{{item.note}}</p> -->\n        <!-- goals or rating Number -->\n        <!-- <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span> -->\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p> \n   </div>\n<ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country/setting-country.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */]) === "function" && _d || Object])
    ], SettingCountryPage);
    return SettingCountryPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=setting-country.js.map

/***/ })

});
//# sourceMappingURL=18.js.map