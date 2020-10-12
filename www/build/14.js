webpackJsonp([14],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubAdminEditPageModule", function() { return UserSubAdminEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_sub_admin_edit__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserSubAdminEditPageModule = /** @class */ (function () {
    function UserSubAdminEditPageModule() {
    }
    UserSubAdminEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_sub_admin_edit__["a" /* UserSubAdminEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_sub_admin_edit__["a" /* UserSubAdminEditPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], UserSubAdminEditPageModule);
    return UserSubAdminEditPageModule;
}());

//# sourceMappingURL=user-sub-admin-edit.module.js.map

/***/ }),

/***/ 778:
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

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSubAdminEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_select_searchable__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_NewUser__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserSubAdminEditPage = /** @class */ (function () {
    function UserSubAdminEditPage(navCtrl, gamesProvider, loadingCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gamesProvider = gamesProvider;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_3__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
        this.selecteduser = this.navParams.get("user");
        if (this.selecteduser) {
            this.newuser = this.selecteduser;
        }
    }
    UserSubAdminEditPage.prototype.ionViewWillEnter = function () {
        this.GetStatus();
    };
    UserSubAdminEditPage.prototype.updateAccount = function (user) {
        var _this = this;
        if (user) {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.authProvider.updateUser(user).subscribe(function (res) {
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
            this.authProvider.showToast("Please, check something is wrong.");
        }
    };
    UserSubAdminEditPage.prototype.onSelectStatus = function (event) {
    };
    UserSubAdminEditPage.prototype.GetStatus = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetStatus("User")
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.statuses = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_select_searchable__["SelectSearchableComponent"])
    ], UserSubAdminEditPage.prototype, "selectComponent", void 0);
    UserSubAdminEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-user-sub-admin-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-sub-admin-edit/user-sub-admin-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{newuser.lastname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>\n          Enter First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname" placeholder="First Name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Enter Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email" placeholder="E-mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Phone\n        </ion-label>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label stacked>\n          Current UserType\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.usertypes.name" disabled>\n        </ion-input>\n      </ion-item>\n \n      <ion-item>\n        <ion-label>\n          Select The Status\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="newuser.status" (onChange)="onSelectStatus($event)"\n          [items]="statuses" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" color="color2" (click)="updateAccount(newuser)">Submit</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-sub-admin-edit/user-sub-admin-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], UserSubAdminEditPage);
    return UserSubAdminEditPage;
}());

//# sourceMappingURL=user-sub-admin-edit.js.map

/***/ })

});
//# sourceMappingURL=14.js.map