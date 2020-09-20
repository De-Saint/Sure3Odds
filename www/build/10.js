webpackJsonp([10],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUsers; });
var NewUsers = /** @class */ (function () {
    function NewUsers(id, email, firstname, lastname, referencecode, password, phone, plantype, platform, usertype) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.referencecode = referencecode;
        this.password = password;
        this.phone = phone;
        this.plantype = plantype;
        this.platform = platform;
        this.usertype = usertype;
    }
    return NewUsers;
}());

//# sourceMappingURL=NewUser.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_NewUser__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, platform, auth) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.auth = auth;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_3__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "" });
    }
    SignUpPage.prototype.createAccount = function (page) {
        if (this.newuser.firstname == "" || this.newuser.firstname == undefined || this.newuser.firstname == null) {
            this.auth.showToast("Firstname is empty");
            return false;
        }
        else if (this.newuser.lastname == "" || this.newuser.lastname == undefined || this.newuser.lastname == null) {
            this.auth.showToast("Lastname is empty");
            return false;
        }
        else if (this.newuser.email == "" || this.newuser.email == undefined || this.newuser.email == null) {
            this.auth.showToast("Email is empty");
            return false;
        }
        else if (this.newuser.phone == "" || this.newuser.phone == undefined || this.newuser.phone == null) {
            this.auth.showToast("Phone number is empty");
            return false;
        }
        else if (this.newuser.password == "" || this.newuser.password == undefined || this.newuser.password == null) {
            this.auth.showToast("Password is empty");
            return false;
        }
        else {
            // if (this.platform.is('android')) {
            //   console.log(this.user);
            //   this.navCtrl.push(AndroidsubscriptionPage, { newUser: this.user });
            // } else if (this.platform.is("ios")) {
            // } else {
            // }
            console.log(this.newuser);
            this.navCtrl.push(page, { newuser: this.newuser });
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content  class="sign" style="background-image:url(\'assets/imgs/welcome3.jpg\')" >\n  <div class="signForm">\n    <img src="assets/imgs/appicon.png" style="width: 8em; height: 8em;"/>\n    <p ion-text color="light">Sure3Odds</p>\n    <ion-list>\n      <ion-item class="halfItem" float-left>\n        <ion-icon name="md-person" item-left color="light"></ion-icon>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname"  placeholder="First Name"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem"  float-left>\n        <ion-icon name="md-person" item-left color="light"></ion-icon>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="md-mail" item-left color="light"></ion-icon>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email"  placeholder="E-mail"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-icon name="call" item-left color="light"></ion-icon>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-lock" item-left color="light"></ion-icon>\n        <ion-input type="password"  [(ngModel)]="newuser.password" name="password" id="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <p ion-text color="light" navPush="TermsPage" >I have read and agreed to the <span ion-text color="secondary">Terms And Conditions</span></p>\n    </ion-list>\n    <button ion-button block type="submit" color="color2" (click)="createAccount(\'SubscriptionAndroidPage\')">CREATE ACCOUNT</button>\n   <p ion-text color="light" navPush="SignInPage" >Already have an account ? Login</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=10.js.map