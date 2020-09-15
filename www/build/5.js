webpackJsonp([5],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCountryManagePageModule", function() { return SettingCountryManagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_country_manage__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingCountryManagePageModule = /** @class */ (function () {
    function SettingCountryManagePageModule() {
    }
    SettingCountryManagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_country_manage__["a" /* SettingCountryManagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_country_manage__["a" /* SettingCountryManagePage */]),
            ],
        })
    ], SettingCountryManagePageModule);
    return SettingCountryManagePageModule;
}());

//# sourceMappingURL=setting-country-manage.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingCountryManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Countries__ = __webpack_require__(786);
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





var SettingCountryManagePage = /** @class */ (function () {
    function SettingCountryManagePage(navCtrl, gameProvider, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gameProvider = gameProvider;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.country = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Countries__["a" /* Countries */]("", "", "");
        this.countries = this.navParams.data;
        if (this.countries) {
            this.country.name = this.countries.name;
            this.country.id = this.countries.id;
            console.log(this.country);
        }
    }
    SettingCountryManagePage.prototype.ionViewDidLoad = function () {
    };
    SettingCountryManagePage.prototype.onSubmit = function (country) {
        if (this.country.name) {
            if (this.countries.name) {
                //edit
                console.log("edit");
                this.onEditCountry(country);
            }
            else {
                //create
                console.log("create");
                this.onCreateCountry(country);
            }
        }
        else {
            this.authProvider.showToast("Name input field is empty");
        }
    };
    SettingCountryManagePage.prototype.onCreateCountry = function (country) {
        var _this = this;
        alert("heey");
        this.gameProvider.createCountry(country).subscribe(function (res) {
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
    SettingCountryManagePage.prototype.onEditCountry = function (country) {
        var _this = this;
        this.gameProvider.updateCountry(country).subscribe(function (res) {
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
    SettingCountryManagePage.prototype.onDelete = function () {
        var _this = this;
        this.gameProvider.deleteCountry(this.countries.id).subscribe(function (res) {
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
    SettingCountryManagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-setting-country-manage',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country-manage/setting-country-manage.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Manage Country</ion-title>\n    <ion-buttons end *ngIf="countries.name">\n      <button ion-button icon-only (click)="onDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n\n     \n      <!-- appear when click update -->\n      <ion-item >\n        <ion-label stacked>Name</ion-label>\n        <ion-input  type="text" [(ngModel)]="country.name"  ></ion-input>\n        <ion-input hidden type="text" [(ngModel)]="country.id"  ></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(country)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-country-manage/setting-country-manage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* NavParams */]])
    ], SettingCountryManagePage);
    return SettingCountryManagePage;
}());

//# sourceMappingURL=setting-country-manage.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Countries; });
var Countries = /** @class */ (function () {
    function Countries(name, id, imageurl) {
        this.name = name;
        this.id = id;
        this.imageurl = imageurl;
    }
    return Countries;
}());

//# sourceMappingURL=Countries.js.map

/***/ })

});
//# sourceMappingURL=5.js.map