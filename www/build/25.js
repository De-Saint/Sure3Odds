webpackJsonp([25],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubAdminsPageModule", function() { return UserSubAdminsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_sub_admins__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSubAdminsPageModule = /** @class */ (function () {
    function UserSubAdminsPageModule() {
    }
    UserSubAdminsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_sub_admins__["a" /* UserSubAdminsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_sub_admins__["a" /* UserSubAdminsPage */]),
            ],
        })
    ], UserSubAdminsPageModule);
    return UserSubAdminsPageModule;
}());

//# sourceMappingURL=user-sub-admins.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSubAdminsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSubAdminsPage = /** @class */ (function () {
    function UserSubAdminsPage(navCtrl, authProvider, alertCtrl, loadingCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    UserSubAdminsPage.prototype.ionViewWillEnter = function () {
        this.GetUsers();
    };
    UserSubAdminsPage.prototype.GetUsers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.GetUsersByType(3, 0, 10)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.users = resp.data.content;
                console.log(_this.users);
                _this.originalusers = _this.users;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.nousers = '';
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
            _this.error = '';
        }, function (error) {
            _this.error = 'none';
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    UserSubAdminsPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.users = this.originalusers;
        this.error = '';
    };
    UserSubAdminsPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.error = '';
        this.users = this.originalusers;
    };
    UserSubAdminsPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '' || searchvalue.length < 3) {
            this.users = this.originalusers;
        }
        else {
            if (searchvalue.length >= 3) {
                var loading_1 = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loading_1.present();
                this.authProvider.SearchUsersByType(searchvalue, 3, 0, 10)
                    .subscribe(function (resp) {
                    loading_1.dismiss().catch(function () { });
                    if (resp.statusCode === 200) {
                        _this.users = resp.data.content;
                        console.log(_this.users);
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                    }
                    else {
                        _this.authProvider.showToast(resp.description);
                    }
                    _this.error = '';
                    _this.nousers = '';
                }, function (error) {
                    loading_1.dismiss().catch(function () { });
                    _this.error = 'none';
                    _this.users = [];
                });
            }
        }
    };
    UserSubAdminsPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.authProvider.GetUsersByType(3, _this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.nousers = '';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.users.push(resp.data.content[i]);
                    }
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
                _this.error = '';
                event.complete();
            }, function (error) {
                _this.nousers = 'none';
                _this.users = [];
                event.complete();
            });
        }, 1000);
    };
    UserSubAdminsPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    UserSubAdminsPage.prototype.onSubAdminOption = function (user) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'SubAdmin Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('UserSubAdminEditPage', { user: user }); }
                }, {
                    text: 'Delete',
                    handler: function () { _this.onDeleteSubAdmin(user); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    UserSubAdminsPage.prototype.onDeleteSubAdmin = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete SubAdmin',
            message: "Do you want to delete <b>" + user.lastname + "</b>? <br/><br/>All the predictions, comments and votes would also be deleted.<br/><br/>You can consider suspending " + user.lastname + " instead by changing the status. <br/><br/>This action is irreversible.",
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
                        _this.authProvider.deleteSubAdmin(user.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                _this.GetUsers();
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"])
    ], UserSubAdminsPage.prototype, "content", void 0);
    UserSubAdminsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-user-sub-admins',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/user-sub-admins/user-sub-admins.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Sub-Admins</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="UserSubAdminAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="squad">\n    <ion-list>\n      <ion-item class="avatarItem" margin-bottom *ngFor="let user of users" (click)="onSubAdminOption(user)">\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="dark">{{user.lastname}} {{user.firstname}}</h5>\n        <p ion-text color="color1" item-right><b>{{user.status.name}}</b></p>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="" *ngIf="error === \'none\'">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="nousers === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/user-sub-admins/user-sub-admins.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], UserSubAdminsPage);
    return UserSubAdminsPage;
}());

//# sourceMappingURL=user-sub-admins.js.map

/***/ })

});
//# sourceMappingURL=25.js.map