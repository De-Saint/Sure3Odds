webpackJsonp([15],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubAdminAddPageModule", function() { return UserSubAdminAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_sub_admin_add__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSubAdminAddPageModule = /** @class */ (function () {
    function UserSubAdminAddPageModule() {
    }
    UserSubAdminAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_sub_admin_add__["a" /* UserSubAdminAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_sub_admin_add__["a" /* UserSubAdminAddPage */]),
            ],
        })
    ], UserSubAdminAddPageModule);
    return UserSubAdminAddPageModule;
}());

//# sourceMappingURL=user-sub-admin-add.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUsers; });
var NewUsers = /** @class */ (function () {
    function NewUsers(id, email, firstname, lastname, referencecode, password, phone, plantype, platform, usertypes, status) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.referencecode = referencecode;
        this.password = password;
        this.phone = phone;
        this.plantype = plantype;
        this.platform = platform;
        this.usertypes = usertypes;
        this.status = status;
    }
    return NewUsers;
}());

//# sourceMappingURL=NewUser.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSubAdminAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__ = __webpack_require__(772);
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




var UserSubAdminAddPage = /** @class */ (function () {
    function UserSubAdminAddPage(loadingCtrl, navCtrl, auth) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
    }
    UserSubAdminAddPage.prototype.ionViewDidLoad = function () {
    };
    UserSubAdminAddPage.prototype.createAccount = function () {
        var _this = this;
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
            this.newuser.usertypes = { id: 3, name: "" };
            console.log(this.newuser);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            console.log(this.newuser);
            this.auth.createSubAdmin(this.newuser).subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    loading_1.dismiss().catch(function () { });
                    _this.navCtrl.pop();
                }
                else {
                    loading_1.dismiss().catch(function () { });
                    _this.auth.showToast(resp.description);
                }
            }, function (error) {
                loading_1.dismiss().catch(function () { });
                _this.auth.showToast(error.error.message);
            });
        }
    };
    UserSubAdminAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-user-sub-admin-add',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-sub-admin-add/user-sub-admin-add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add New Sub-Admin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>\n          Enter First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname"  placeholder="First Name"></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label stacked>\n          Enter Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Enter Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email"  placeholder="E-mail"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>\n          Enter Phone\n        </ion-label>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Password\n        </ion-label>\n        <ion-input type="password"  [(ngModel)]="newuser.password" name="password" id="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <button ion-button block type="submit" color="color2" (click)="createAccount(newuser)">Submit</button>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-sub-admin-add/user-sub-admin-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */]])
    ], UserSubAdminAddPage);
    return UserSubAdminAddPage;
}());

//# sourceMappingURL=user-sub-admin-add.js.map

/***/ })

});
//# sourceMappingURL=15.js.map