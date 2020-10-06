webpackJsonp([41],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_details__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentDetailsPageModule = /** @class */ (function () {
    function PaymentDetailsPageModule() {
    }
    PaymentDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_details__["a" /* PaymentDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_details__["a" /* PaymentDetailsPage */]),
            ],
        })
    ], PaymentDetailsPageModule);
    return PaymentDetailsPageModule;
}());

//# sourceMappingURL=payment-details.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_payments_payments__ = __webpack_require__(358);
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




var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(navCtrl, authProvider, actionSheetCtrl, loadingCtrl, alertCtrl, paymentsProvider, navParams) {
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
    PaymentDetailsPage.prototype.ionViewWillEnter = function () {
        this.GetPayments();
    };
    PaymentDetailsPage.prototype.GetPayments = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.paymentsProvider.GetPayments(0, 10)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.payments = resp.data.content;
                console.log(_this.payments);
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.originalpayments = _this.payments;
                _this.nopayments = '';
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
            _this.error = '';
        }, function (error) {
            _this.error = 'none';
            _this.payments = null;
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    PaymentDetailsPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.payments = this.originalpayments;
        }
        else {
            if (searchvalue.length >= 3) {
                var loading_1 = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loading_1.present();
                this.paymentsProvider.SearchPayments(searchvalue, 0, 20)
                    .subscribe(function (resp) {
                    loading_1.dismiss().catch(function () { });
                    if (resp.statusCode === 200) {
                        _this.payments = resp.data.content;
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
                    _this.payments = null;
                });
            }
        }
    };
    PaymentDetailsPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.payments = this.originalpayments;
        this.error = '';
    };
    PaymentDetailsPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.payments = this.originalpayments;
        this.error = '';
    };
    PaymentDetailsPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.paymentsProvider.GetPayments(_this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.nopayments = '';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.payments.push(resp.data.content[i]);
                    }
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
                event.complete();
            }, function (error) {
                _this.nopayments = 'none';
                event.complete();
            });
        }, 1000);
    };
    PaymentDetailsPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    PaymentDetailsPage.prototype.onPaymentOptions = function (payment) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Payment Options',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () { _this.onDeletePayment(payment); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    PaymentDetailsPage.prototype.onDeletePayment = function (payment) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Payment',
            message: 'Do you want to delete this payment record?</b><br/><br/>It would delete the payment history of<b> ' + payment.user.lastname + ' ' + payment.user.firstname + '.</b><br/><br/>This is action is irreversible.',
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
                        _this.paymentsProvider.deletePayment(payment.id).subscribe(function (res) {
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
    ], PaymentDetailsPage.prototype, "content", void 0);
    PaymentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-payment-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-details/payment-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Payments </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n  (ionClear)="onClear($event)" (ionInput)="onSearch()">\n</ion-searchbar>\n  <div class="teamMatchs">\n    <ion-list >\n      <ion-item class="thumbnailItem" *ngFor="let payment of payments" >\n        <ion-thumbnail item-left>\n          <!-- Team image -->\n          <img src="assets/imgs/appicon.png" />\n        </ion-thumbnail>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <!-- team Name -->\n              <h5 ion-text color="dark" >{{payment.user.lastname}} {{payment.user.firstname}} </h5>\n              <!-- League Name -->\n              <p ion-text color="color1">{{payment.plantype.name}}</p>\n            </ion-col>\n            <ion-col col-6>\n              <p ion-text color="dark">{{payment.paymentdate}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class="matchResult" item-right>\n            <span ion-text color="color1"  >{{payment.platform}}</span>\n          <p ion-text color="color2"><b>{{payment.paymenttype}}</b></p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="nopayments === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-details/payment-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_payments_payments__["a" /* PaymentsProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());

//# sourceMappingURL=payment-details.js.map

/***/ })

});
//# sourceMappingURL=41.js.map