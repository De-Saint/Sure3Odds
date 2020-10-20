webpackJsonp([17],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionIosPageModule", function() { return SubscriptionIosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_ios__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubscriptionIosPageModule = /** @class */ (function () {
    function SubscriptionIosPageModule() {
    }
    SubscriptionIosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subscription_ios__["a" /* SubscriptionIosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__subscription_ios__["a" /* SubscriptionIosPage */]),
            ],
        })
    ], SubscriptionIosPageModule);
    return SubscriptionIosPageModule;
}());

//# sourceMappingURL=subscription-ios.module.js.map

/***/ }),

/***/ 779:
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

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionIosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_purchase_2__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VVIP_KEY = 'surevvip'; //cons
var VIP_KEY = 'surevip'; //cons
//gems == consum
var SubscriptionIosPage = /** @class */ (function () {
    function SubscriptionIosPage(navCtrl, platform, navParams, store, auth, ref) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.store = store;
        this.auth = auth;
        this.ref = ref;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
        this.newuser = this.navParams.get("newuser");
        this.sub_option = this.navParams.get("sub_option");
        this.platform.ready().then(function () {
            _this.store.verbosity = _this.store.DEBUG;
        });
        this.registerProducts();
        this.setupListeners();
        this.store.ready(function () {
            _this.products = _this.store.products;
            _this.ref.detectChanges();
        });
    }
    SubscriptionIosPage.prototype.registerProducts = function () {
        this.store.register({
            id: VVIP_KEY,
            alias: "full version",
            type: this.store.CONSUMABLE
        });
        this.store.register({
            id: VIP_KEY,
            alias: "full version",
            type: this.store.CONSUMABLE
        });
        this.store.refresh();
    };
    SubscriptionIosPage.prototype.setupListeners = function () {
        var _this = this;
        this.store.when('product')
            .approved(function (p) {
            if (p.id === VVIP_KEY) {
                //process for VVIP Plan
            }
            else if (p.id === VIP_KEY) {
                //process the VIP Plan
            }
            _this.ref.detectChanges();
            return p.verify();
        });
        this.store.when('product')
            .verified(function (p) {
            p.finish();
        });
    };
    SubscriptionIosPage.prototype.purchase = function (product) {
        var _this = this;
        this.store.order(product).error(function (error) {
            _this.auth.showToast("error failed to purchase: " + error + " ");
        })
            .then(function (p) {
            //process the payment.
        });
    };
    SubscriptionIosPage.prototype.restore = function () {
        this.store.refresh();
    };
    SubscriptionIosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-subscription-ios',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/subscription-ios/subscription-ios.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Subscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item button *ngFor="let p of products" (click)="purchase()" details="false">\n      <ion-label class="ion-text-wrap">\n        {{p.title}}\n        <p>{{p.description}}</p>\n      </ion-label>\n      <ion-buttons slot="end">\n        {{p.price}} {{p.currency}}\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-buttons expand="full" (click)="restore()">\n    Restore\n  </ion-buttons>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/subscription-ios/subscription-ios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]])
    ], SubscriptionIosPage);
    return SubscriptionIosPage;
}());

//# sourceMappingURL=subscription-ios.js.map

/***/ })

});
//# sourceMappingURL=17.js.map