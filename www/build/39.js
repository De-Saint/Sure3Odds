webpackJsonp([39],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPlantypesPageModule", function() { return PaymentPlantypesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_plantypes__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPlantypesPageModule = /** @class */ (function () {
    function PaymentPlantypesPageModule() {
    }
    PaymentPlantypesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_plantypes__["a" /* PaymentPlantypesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_plantypes__["a" /* PaymentPlantypesPage */]),
            ],
        })
    ], PaymentPlantypesPageModule);
    return PaymentPlantypesPageModule;
}());

//# sourceMappingURL=payment-plantypes.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPlantypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPlantypesPage = /** @class */ (function () {
    function PaymentPlantypesPage(navCtrl, auth, loadingCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
    }
    PaymentPlantypesPage.prototype.ionViewWillEnter = function () {
        this.GetPlantypes();
    };
    PaymentPlantypesPage.prototype.GetPlantypes = function () {
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
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.auth.showToast(error.error.description);
        });
    };
    PaymentPlantypesPage.prototype.onPlantypeOptions = function (plantype) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Plan Type Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('PaymentPlantypeEditPage', { plantype: plantype }); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    PaymentPlantypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-payment-plantypes',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plantypes/payment-plantypes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Plan Types </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="leagueStats">\n    <ion-list *ngFor="let plantype of plantypes" (click)="onPlantypeOptions(plantype)">\n      <ion-item class="thumbnailItem">\n        <h5 ion-text style="padding-left: 0.8em; padding-top: 0.5em; padding-bottom: 0.5em;     height: auto"\n          color="dark">{{plantype.name}}</h5>\n        <p ion-text item-right color="color1" margin-right padding-right><b>{{plantype.amount | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plantypes/payment-plantypes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], PaymentPlantypesPage);
    return PaymentPlantypesPage;
}());

//# sourceMappingURL=payment-plantypes.js.map

/***/ })

});
//# sourceMappingURL=39.js.map