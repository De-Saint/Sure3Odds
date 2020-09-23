webpackJsonp([44],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPlansPageModule", function() { return PaymentPlansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_plans__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPlansPageModule = /** @class */ (function () {
    function PaymentPlansPageModule() {
    }
    PaymentPlansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_plans__["a" /* PaymentPlansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_plans__["a" /* PaymentPlansPage */]),
            ],
        })
    ], PaymentPlansPageModule);
    return PaymentPlansPageModule;
}());

//# sourceMappingURL=payment-plans.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPlansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPlansPage = /** @class */ (function () {
    function PaymentPlansPage(navCtrl, authProvider, actionSheetCtrl, loadingCtrl, alertCtrl, paymentsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.paymentsProvider = paymentsProvider;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    PaymentPlansPage.prototype.ionViewWillEnter = function () {
        this.GetPlans();
    };
    PaymentPlansPage.prototype.GetPlans = function () {
        var _this = this;
        this.paymentsProvider.GetPlans(0, 10)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.plans = resp.data.content;
                console.log(_this.plans);
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.originalplans = _this.plans;
                _this.noplans = '';
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
            _this.error = '';
        }, function (error) {
            _this.error = 'none';
            _this.plans = null;
            _this.authProvider.showToast(error.error.descriptions);
        });
    };
    // onSearch() {
    //   let searchvalue = this.searchTerm;
    //   if (searchvalue.trim() === '') {
    //     this.payments = this.originalpayments
    //   } else {
    //     if (searchvalue.length >= 3) {
    //       this.paymentsProvider.SearchPayments(searchvalue, 0, 20)
    //         .subscribe(resp => {
    //           if (resp.statusCode === 200) {
    //             this.payments = resp.data.content;
    //             this.currentPage = resp.data.number;
    //             this.totalPage = resp.data.totalPages;
    //             this.totalData = resp.data.totalElements;
    //             this.perPage = resp.data.size;
    //           } else {
    //             this.authProvider.showToast(resp.description);
    //           }
    //           this.error = '';
    //         }, error => {
    //           this.error = 'none';
    //           this.payments = null;
    //         });
    //     }
    //   }
    // }
    // onClear(ev) {
    //   this.searchTerm = "";
    //   this.payments = this.originalpayments;
    //   this.error = '';
    // }
    // onCancel(ev) {
    //   this.searchTerm = "";
    //   this.payments = this.originalpayments;
    //   this.error = '';
    // }
    PaymentPlansPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.paymentsProvider.GetPlans(_this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.noplans = '';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.plans.push(resp.data.content[i]);
                    }
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
                event.complete();
            }, function (error) {
                _this.noplans = 'none';
                event.complete();
            });
        }, 1000);
    };
    PaymentPlansPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    PaymentPlansPage.prototype.onDeleteOptions = function (plan) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Plan Options',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () { _this.onDeletePlan(plan); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    PaymentPlansPage.prototype.onDeletePlan = function (plan) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Plan',
            message: 'Do you want to delete this payment record?</b><br/><br/>This is action is irreversible.',
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
                        _this.paymentsProvider.deletePayment(plan.id).subscribe(function (res) {
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], PaymentPlansPage.prototype, "content", void 0);
    PaymentPlansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-payment-plans',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plans/payment-plans.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Plans </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="teamMatchs">\n    <ion-list>\n      <ion-item class="thumbnailItem" *ngFor="let plan of plans">\n        <ion-thumbnail item-left>\n          <!-- Team image -->\n          <img src="assets/imgs/appicon.png" />\n        </ion-thumbnail>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <!-- team Name -->\n              <h5 ion-text color="dark">{{plan.user.lastname}} {{plan.user.firstname}} </h5>\n              <!-- League Name -->\n              <p ion-text color="color1">{{plan.plantype.name}}</p>\n            </ion-col>\n            <ion-col col-6>\n              <span ion-text style="font-size: small !important;">Start Date</span>\n              <p ion-text color="color1">{{plan.startDate}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class=""  style="margin-bottom: 0.3em !important;" item-right>\n          <span ion-text style="font-size: small !important;">End Date</span>\n          <p ion-text color="color2"><b>{{plan.endDate}}</b></p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="noplans === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plans/payment-plans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__["a" /* PaymentsProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], PaymentPlansPage);
    return PaymentPlansPage;
}());

//# sourceMappingURL=payment-plans.js.map

/***/ })

});
//# sourceMappingURL=44.js.map