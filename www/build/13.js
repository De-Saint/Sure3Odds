webpackJsonp([13],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPlantypeEditPageModule", function() { return PaymentPlantypeEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_plantype_edit__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPlantypeEditPageModule = /** @class */ (function () {
    function PaymentPlantypeEditPageModule() {
    }
    PaymentPlantypeEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_plantype_edit__["a" /* PaymentPlantypeEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_plantype_edit__["a" /* PaymentPlantypeEditPage */]),
            ],
        })
    ], PaymentPlantypeEditPageModule);
    return PaymentPlantypeEditPageModule;
}());

//# sourceMappingURL=payment-plantype-edit.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPlantypeEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Plantypes__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPlantypeEditPage = /** @class */ (function () {
    function PaymentPlantypeEditPage(navCtrl, loadingCtrl, authProvider, paymentsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.paymentsProvider = paymentsProvider;
        this.navParams = navParams;
        this.plantype = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Plantypes__["a" /* Plantypes */]("", "", "");
        this.plantypes = this.navParams.get("plantype");
        if (this.plantype) {
            this.plantype = this.plantypes;
        }
    }
    PaymentPlantypeEditPage.prototype.onSubmit = function (plantype) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        console.log(plantype);
        if (plantype.name) {
            if (plantype.amount) {
                loading.present();
                this.paymentsProvider.updatePlantype(plantype).subscribe(function (res) {
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
            else {
                this.authProvider.showToast("Amount input field is empty");
            }
        }
        else {
            this.authProvider.showToast("Name input field is empty");
        }
    };
    PaymentPlantypeEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-payment-plantype-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plantype-edit/payment-plantype-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Plan Type</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <!-- appear when click update -->\n      <ion-item >\n        <ion-label stacked>Name</ion-label>\n        <ion-input  type="text" [(ngModel)]="plantype.name"  ></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label stacked>Amount</ion-label>\n        <ion-input  type="text" [(ngModel)]="plantype.amount"  ></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(plantype)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plantype-edit/payment-plantype-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__["a" /* PaymentsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], PaymentPlantypeEditPage);
    return PaymentPlantypeEditPage;
}());

//# sourceMappingURL=payment-plantype-edit.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plantypes; });
var Plantypes = /** @class */ (function () {
    function Plantypes(name, id, amount) {
        this.name = name;
        this.id = id;
        this.amount = amount;
    }
    return Plantypes;
}());

//# sourceMappingURL=Plantypes.js.map

/***/ })

});
//# sourceMappingURL=13.js.map