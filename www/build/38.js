webpackJsonp([38],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSetsPageModule", function() { return PaymentSetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_sets__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentSetsPageModule = /** @class */ (function () {
    function PaymentSetsPageModule() {
    }
    PaymentSetsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_sets__["a" /* PaymentSetsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_sets__["a" /* PaymentSetsPage */]),
            ],
        })
    ], PaymentSetsPageModule);
    return PaymentSetsPageModule;
}());

//# sourceMappingURL=payment-sets.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentSetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(356);
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




var PaymentSetsPage = /** @class */ (function () {
    function PaymentSetsPage(navCtrl, gamesProvider, loadingCtrl, auth, navParams) {
        this.navCtrl = navCtrl;
        this.gamesProvider = gamesProvider;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.navParams = navParams;
    }
    PaymentSetsPage.prototype.ionViewWillEnter = function () {
        this.GetSets();
    };
    PaymentSetsPage.prototype.GetSets = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetSets()
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.sets = resp.data;
                console.log(_this.sets);
            }
            else {
                _this.auth.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.auth.showToast(error.error.description);
        });
    };
    PaymentSetsPage.prototype.onSetOptions = function (set) {
    };
    PaymentSetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-payment-sets',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-sets/payment-sets.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Match Sets </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="leagueStats">\n    <ion-list *ngFor="let set of sets" (click)="onSetOptions(set)">\n      <ion-item class="thumbnailItem">\n        <h5 ion-text style="padding-left: 0.8em; padding-top: 0.5em; padding-bottom: 0.5em;     height: auto"\n          color="dark">{{set.name}}</h5>\n        <p ion-text item-right color="color1" margin-right padding-right><b>{{set.value }}</b></p>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-sets/payment-sets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], PaymentSetsPage);
    return PaymentSetsPage;
}());

//# sourceMappingURL=payment-sets.js.map

/***/ })

});
//# sourceMappingURL=38.js.map