webpackJsonp([11],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = /** @class */ (function () {
    function SettingPage(_myApp, navCtrl, global) {
        this._myApp = _myApp;
        this.navCtrl = navCtrl;
        this.global = global;
        this.action = false;
        this.language = 'en';
        this.action = this._myApp.animateVarible;
        console.log(this.action);
    }
    SettingPage.prototype.animateApp = function (e) {
        this._myApp.animateVarible = e.checked;
        this.action = this._myApp.animateVarible;
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>  \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <div class="appForm" padding>\n    <ion-item>\n      <ion-label>App Language</ion-label>\n        <ion-select interface="popover" placeholder="App Language" [(ngModel)]="language">\n          <ion-option value="en">English</ion-option>\n          <ion-option value="fr">French</ion-option>\n        </ion-select>\n    </ion-item>\n  </div>\n  <div class="static_notify">\n    <ion-item>\n      <ion-label>Notification</ion-label>\n      <ion-checkbox [(ngModel)]="notification"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Animation avilability</ion-label>\n      <ion-checkbox (ionChange)="animateApp($event)"  checked="{{action}}" [(ngModel)]="action"></ion-checkbox>\n    </ion-item> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* Sure3Odds */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* Global */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=11.js.map