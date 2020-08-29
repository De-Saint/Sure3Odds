webpackJsonp([10],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(473);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
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
    function SignInPage(navCtrl, auth, formBuilder) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    SignInPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    };
    SignInPage.prototype.rootPage = function (page) {
    };
    Object.defineProperty(SignInPage.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignInPage.prototype.onSubmit = function (page) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.auth.login(this.f.email.value, this.f.password.value)
                .subscribe(function (resp) {
                _this.respData = resp;
                console.log(_this.respData.statusCode);
                if (_this.respData.statusCode === 200) {
                    _this.navCtrl.setRoot(page);
                }
                else {
                    _this.error = _this.respData.description;
                    jQuery('.success-alert').removeClass('d-none');
                    jQuery('.success-alert').addClass('alert alert-danger');
                    jQuery('.success-alert').html(_this.respData.description).fadeIn(1200);
                    jQuery(".success-alert").fadeTo(2000, 500).slideUp(500, function () {
                        jQuery(".success-alert").slideUp(500);
                    });
                }
            }, function (error) {
                _this.error = error;
            });
        }
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-in/sign-in.html"*/'<ion-content class="sign" style="background-image:url(\'assets/imgs/welcome3.jpg\')">\n\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit(\'AllMatchesPage\')">\n  <!-- <form [formGroup]="loginForm" (ngSubmit)="onSubmit(\'AllMatchesPage\')"> -->\n    <div class="signForm">\n      <img src="assets/imgs/appicon.png" style="width: 8em; height: 8em;" />\n      <p ion-text color="light">Sure3Odds</p>\n\n      <ion-list>\n        <ion-item>\n          <ion-icon name="md-mail" item-left color="light"></ion-icon>\n          <ion-input type="email" formControlName="email" placeholder="E-mail"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="md-lock" item-left color="light"></ion-icon>\n          <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button class="" ion-button block color="color2" type="submit">LOGIN</button>\n      <p ion-text color="light" navPush="SignUpPage">No account yet ? Create one</p>\n      <p ion-text color="light">Bet responsively 18+ || <span ion-text color="light" navPush="FreeTipsPage">Free Tips\n          ||</span></p>\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], SignInPage);
    return SignInPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=10.js.map