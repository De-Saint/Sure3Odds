webpackJsonp([2],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMemberEditPageModule", function() { return UserMemberEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_member_edit__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserMemberEditPageModule = /** @class */ (function () {
    function UserMemberEditPageModule() {
    }
    UserMemberEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_member_edit__["a" /* UserMemberEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_member_edit__["a" /* UserMemberEditPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], UserMemberEditPageModule);
    return UserMemberEditPageModule;
}());

//# sourceMappingURL=user-member-edit.module.js.map

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

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plans; });
var Plans = /** @class */ (function () {
    function Plans(id, plantype, startDate, endDate) {
        this.id = id;
        this.plantype = plantype;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Plans;
}());

//# sourceMappingURL=Plans.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMemberEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces_Plans__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserMemberEditPage = /** @class */ (function () {
    function UserMemberEditPage(navCtrl, gamesProvider, loadingCtrl, paymentsProvider, alertCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gamesProvider = gamesProvider;
        this.loadingCtrl = loadingCtrl;
        this.paymentsProvider = paymentsProvider;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
        this.userplan = new __WEBPACK_IMPORTED_MODULE_7__interfaces_Plans__["a" /* Plans */]("", { id: "", name: "", amount: "" }, "", "");
        this.selecteduser = this.navParams.get("user");
    }
    UserMemberEditPage.prototype.ionViewWillEnter = function () {
        if (this.selecteduser) {
            this.GetUserDetails(this.selecteduser.id);
        }
        this.getPlantypes();
        this.GetStatus();
    };
    UserMemberEditPage.prototype.GetUserDetails = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.findUserDetails(id)
            .subscribe(function (result) {
            loading.dismiss().catch(function () { });
            if (result.statusCode == 200) {
                _this.userplan = result.data.planData;
                _this.newuser = result.data.userData;
                _this.user = result.data.planData;
            }
            else {
                _this.authProvider.showToast(result.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    UserMemberEditPage.prototype.getPlantypes = function () {
        var _this = this;
        this.authProvider.getAllPlantypes().subscribe(function (result) {
            _this.plantypes = result.data;
            console.log(_this.plantypes);
        });
    };
    UserMemberEditPage.prototype.onSelectPlantypes = function (event) {
        console.log(event.value);
    };
    UserMemberEditPage.prototype.onSelectStatus = function (event) {
        console.log(event.value);
    };
    UserMemberEditPage.prototype.GetStatus = function () {
        var _this = this;
        this.gamesProvider.GetStatus("User")
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.statuses = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    UserMemberEditPage.prototype.updateAccount = function (user) {
        var _this = this;
        console.log(user);
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
    UserMemberEditPage.prototype.renewAccount = function (plan) {
        var _this = this;
        this.newuser.platform = "Manual";
        this.newuser.referencecode = "Sure3Manual";
        // this.newuser.id
        console.log(this.newuser.id, plan.plantype);
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Update Plan',
            message: "You are about to update <b>" + this.newuser.lastname + "'s subscription plan</b> <br/> to " + plan.plantype.name + ". <br/><br/>If <b>" + plan.plantype.name + "</b> is not the plan you want to update to, you can cancel and then select a new plan instead. <br/><br/>This action is irreversible.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        loading.present();
                        _this.paymentsProvider.updatePlan(_this.newuser.id, _this.userplan.plantype.id, _this.newuser.platform, _this.newuser.referencecode).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.authProvider.showToast(res.description);
                            }
                        }, function (error) {
                            loading.dismiss().catch(function () { });
                            _this.authProvider.showToast(error.error.error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableComponent"])
    ], UserMemberEditPage.prototype, "selectComponent", void 0);
    UserMemberEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-user-member-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-member-edit/user-member-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{newuser.lastname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">{{newuser.lastname}} Membership Details</h2>\n      </ion-list-header>\n      <ion-item>\n        <ion-label stacked>\n          Enter First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname" placeholder="First Name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Enter Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email" placeholder="E-mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n          Enter Phone\n        </ion-label>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Current UserType\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.usertypes.name" disabled>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Select The Status\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="newuser.status" (onChange)="onSelectStatus($event)"\n          [items]="statuses" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <button ion-button block margin-bottom type="submit" color="color2" (click)="updateAccount(newuser)">Update\n        Account</button>\n\n      <hr class="margin-top margin-bottom">\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">{{newuser.lastname}} Subscription Details</h2>\n      </ion-list-header>\n      <ion-item margin-top>\n        <ion-label>\n          Select The Plan Type\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="userplan.plantype" (onChange)="onSelectPlantypes($event)"\n          [items]="plantypes" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n          <h5 ion-text color="dark"><b>Start Date</b></h5>\n          <p ion-text color="color1"><b>{{userplan.startDate}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>End/Due Date</b></h5>\n        <p ion-text color="color1"><b>{{userplan.endDate}}</b></p>\n \n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>Amount</b></h5>\n        <p ion-text color="color1"><b>{{userplan.plantype.amount  | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>Status</b></h5>\n        <p ion-text color="danger" *ngIf="newuser.status.name === \'Inactive\'"><b>InActive/Expired</b></p>\n        <p ion-text color="secondary" *ngIf="newuser.status.name === \'Active\'"><b>Running</b></p>\n      </ion-item>\n      <button ion-button block type="submit" color="color2" (click)="renewAccount(userplan)">Manual Activation / Renew\n        Account</button>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-member-edit/user-member-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__["a" /* PaymentsProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], UserMemberEditPage);
    return UserMemberEditPage;
}());

//# sourceMappingURL=user-member-edit.js.map

/***/ })

});
//# sourceMappingURL=2.js.map