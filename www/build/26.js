webpackJsonp([26],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMembersPageModule", function() { return UserMembersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_members__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserMembersPageModule = /** @class */ (function () {
    function UserMembersPageModule() {
    }
    UserMembersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_members__["a" /* UserMembersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_members__["a" /* UserMembersPage */]),
            ],
        })
    ], UserMembersPageModule);
    return UserMembersPageModule;
}());

//# sourceMappingURL=user-members.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMembersPage = /** @class */ (function () {
    function UserMembersPage(navCtrl, authProvider, actionSheetCtrl, loadingCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    UserMembersPage.prototype.ionViewWillEnter = function () {
        this.GetUsers();
    };
    UserMembersPage.prototype.GetUsers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.GetUsersByType(2, 0, 10)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.users = resp.data.content;
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
            _this.authProvider.showToast(error.error.description);
        });
    };
    UserMembersPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.users = this.originalusers;
        this.error = '';
    };
    UserMembersPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.error = '';
        this.users = this.originalusers;
    };
    UserMembersPage.prototype.onSearch = function () {
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
                this.authProvider.SearchUsersByType(searchvalue, 2, 0, 10)
                    .subscribe(function (resp) {
                    loading_1.dismiss().catch(function () { });
                    if (resp.statusCode === 200) {
                        _this.users = resp.data.content;
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                    }
                    else {
                        _this.authProvider.showToast(resp.description);
                    }
                    _this.error = '';
                }, function (error) {
                    loading_1.dismiss().catch(function () { });
                    _this.error = 'none';
                    _this.users = [];
                });
            }
        }
    };
    UserMembersPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.authProvider.GetUsersByType(2, _this.currentPage, _this.perPage)
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
    UserMembersPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    UserMembersPage.prototype.onMemberOption = function (user) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Member Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('UserMemberEditPage', { user: user }); }
                    // }, {
                    //   text: 'Delete',
                    //   handler: () => { this.onDeleteMember(user) }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    UserMembersPage.prototype.onDeleteMember = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Member',
            message: "Do you want to delete <b>" + user.lastname + "</b>? <br/><br/>All the plans, payments, comments and votes would also be deleted.<br/><br/>You can consider disabling " + user.lastname + " instead by changing the status. <br/><br/>This action is irreversible.",
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
    ], UserMembersPage.prototype, "content", void 0);
    UserMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-user-members',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-members/user-members.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Members</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="UserMemberAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="squad">\n    <ion-list>\n      <ion-item class="avatarItem" margin-bottom *ngFor="let user of users" (click)="onMemberOption(user)">\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="dark">{{user.lastname}} {{user.firstname}}</h5>\n        <p ion-text color="color1" item-right><b>{{user.status.name}}</b></p>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="" *ngIf="error === \'none\'">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="nousers === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/user-members/user-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], UserMembersPage);
    return UserMembersPage;
}());

//# sourceMappingURL=user-members.js.map

/***/ })

});
//# sourceMappingURL=26.js.map