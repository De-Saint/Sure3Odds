webpackJsonp([10],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(766);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, storage, events, auth) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.events = events;
        this.auth = auth;
        this.submitted = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.login = {};
    }
    SignInPage.prototype.ngOnInit = function () {
    };
    SignInPage.prototype.onLogin = function (form, page) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.auth.login(this.login.email, this.login.password)
                .subscribe(function (resp) {
                _this.respData = resp;
                if (_this.respData.statusCode === 200) {
                    _this.gotoHomePage(_this.respData.data, page);
                }
                else {
                    _this.error = _this.respData.description;
                    _this.auth.showToast(_this.error);
                }
            }, function (error) {
                _this.error = error;
            });
        }
    };
    SignInPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignInPage.prototype.gotoHomePage = function (data, page) {
        var _this = this;
        this.navCtrl.setRoot(page).then(function () {
            _this.storage.ready().then(function () {
                _this.storage.set("hasSeenLogin", true);
                var name = _this.auth.currentUserDataValue.name;
                var type = _this.auth.currentUserDataValue.user_type;
                _this.auth.showToast("Welcome " + name);
                _this.events.publish('user:login', type, name);
            });
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-in/sign-in.html"*/'<ion-content class="sign" style="background-image:url(\'assets/imgs/welcome3.jpg\')">\n\n  <form #loginForm="ngForm">\n    <div class="signForm">\n      <img src="assets/imgs/appicon.png" style="width: 8em; height: 8em;" />\n      <p ion-text color="light">Sure3Odds</p>\n      <ion-list>\n        <ion-item>\n          <ion-icon name="md-mail" item-left color="light"></ion-icon>\n          <ion-input type="email" [(ngModel)]="login.email" name="email" required placeholder="E-mail"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="md-lock" item-left color="light"></ion-icon>\n          <ion-input [type]="passwordType" clearOnEdit="false" type="password" [(ngModel)]="login.password" name="password" required placeholder="Password"></ion-input>\n          <ion-icon name="eye-off" item-right color="light" style="font-size: large; margin-top: 0.5em !important;" [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n        </ion-item>\n      </ion-list>\n      <button class="" ion-button block color="color2" (click)="onLogin(loginForm, \'AllMatchesPage\')" type="submit">LOGIN</button>\n      <p ion-text color="light" navPush="SignUpPage">No account yet ? Create one</p>\n      <p ion-text color="light">Bet responsively 18+ || <span ion-text color="light" navPush="FreeTipsPage">Free Tips ||</span></p>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=10.js.map