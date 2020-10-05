webpackJsonp([16],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMemberAddPageModule", function() { return UserMemberAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_member_add__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserMemberAddPageModule = /** @class */ (function () {
    function UserMemberAddPageModule() {
    }
    UserMemberAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_member_add__["a" /* UserMemberAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_member_add__["a" /* UserMemberAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], UserMemberAddPageModule);
    return UserMemberAddPageModule;
}());

//# sourceMappingURL=user-member-add.module.js.map

/***/ }),

/***/ 749:
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

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMemberAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserMemberAddPage = /** @class */ (function () {
    function UserMemberAddPage(navCtrl, auth, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
    }
    UserMemberAddPage.prototype.ionViewWillEnter = function () {
        this.getPlantypes();
    };
    UserMemberAddPage.prototype.getPlantypes = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.auth.getAllPlantypes()
            .subscribe(function (result) {
            loading.dismiss().catch(function () { });
            _this.plantypes = result.data;
            console.log(_this.plantypes);
            loading.dismiss().catch(function () { });
        }, function (error) {
            loading.dismiss().catch(function () { });
        });
    };
    UserMemberAddPage.prototype.onSelectPlantypes = function (event) {
        console.log(event.value);
    };
    UserMemberAddPage.prototype.createAccount = function () {
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
            this.newuser.platform = "Manual";
            this.newuser.referencecode = "Sure3Manual";
            this.newuser.usertypes = { id: 2, name: "" };
            console.log(this.newuser);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            // console.log(this.newuser);
            this.auth.createNewUser(this.newuser).subscribe(function (resp) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__["SelectSearchableComponent"])
    ], UserMemberAddPage.prototype, "selectComponent", void 0);
    UserMemberAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-user-member-add',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-member-add/user-member-add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add New Member</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>\n          Enter First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname"  placeholder="First Name"></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label stacked>\n          Enter Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Enter Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email"  placeholder="E-mail"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>\n          Enter Phone\n        </ion-label>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Password\n        </ion-label>\n        <ion-input type="password"  [(ngModel)]="newuser.password" name="password" id="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Select The Plan Type\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="newuser.plantype" (onChange)="onSelectPlantypes($event)"\n          [items]="plantypes" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <button ion-button block type="submit" color="color2" (click)="createAccount()">Submit</button>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-member-add/user-member-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], UserMemberAddPage);
    return UserMemberAddPage;
}());

//# sourceMappingURL=user-member-add.js.map

/***/ })

});
//# sourceMappingURL=16.js.map