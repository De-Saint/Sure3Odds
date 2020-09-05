webpackJsonp([1],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidSubscriptionPageModule", function() { return AndroidSubscriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__android_subscription__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AndroidSubscriptionPageModule = /** @class */ (function () {
    function AndroidSubscriptionPageModule() {
    }
    AndroidSubscriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__android_subscription__["a" /* AndroidSubscriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__android_subscription__["a" /* AndroidSubscriptionPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__["a" /* Angular4PaystackModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], AndroidSubscriptionPageModule);
    return AndroidSubscriptionPageModule;
}());

//# sourceMappingURL=android-subscription.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AndroidSubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AndroidSubscriptionPage = /** @class */ (function () {
    function AndroidSubscriptionPage(loadingCtrl, navCtrl, auth, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["b" /* NewUser */]("", "", "", "", "", "", "", { id: "" }, "");
        this.public_key = 'pk_test_b3685f824518679567d6356e2636fc184878e833'; //Put your paystack Test or Live Key here
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.newuser = navParams.get("newuser");
        console.log(this.newuser);
    }
    AndroidSubscriptionPage.prototype.ionViewDidLoad = function () {
    };
    AndroidSubscriptionPage.prototype.ngOnInit = function () {
        this.getPlantypes();
    };
    AndroidSubscriptionPage.prototype.onPlantTypeSelect = function ($event, plan) {
        this.pay_amount = plan.amount;
    };
    AndroidSubscriptionPage.prototype.getPlantypes = function () {
        var _this = this;
        this.auth.getAllPlantypes().subscribe(function (result) {
            _this.plantypes = result;
            _this.plantypelist = _this.plantypes.data;
            console.log(_this.plantypelist);
        });
    };
    AndroidSubscriptionPage.prototype.onPay = function (pay_amount) {
        this.auth.showToast("Please Wait ...");
        this.pay_amount = this.CalculatePercentage(pay_amount);
    };
    AndroidSubscriptionPage.prototype.paymentInit = function () {
    };
    AndroidSubscriptionPage.prototype.CalculatePercentage = function (userAmt) {
        var addedPerc = (parseInt(userAmt) * 0.02);
        var newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    };
    //Callback function on successful payment
    AndroidSubscriptionPage.prototype.paymentDone = function (ref) {
        if (ref.status === "success") {
            console.log(ref); //ref contains the response from paystack after successful payment
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.newuser.platform = "Android";
            this.newuser.referencecode = String(ref.reference);
            console.log(this.newuser);
            this.auth.createNewUser(this.newuser).subscribe(function (result) {
                // this.plantypes = result;
                loading_1.dismiss().catch(function () { });
                // this.plantypelist = this.plantypes.data;
                console.log(result);
            }, function (err) {
                loading_1.dismiss().catch(function () { });
                console.log(JSON.stringify(err));
                // this.auth.showToast(JSON.stringify(err))
            });
        }
        else {
            this.auth.showToast("Please, the payment was not successful.");
        }
    };
    //Event triggered if User cancel the payment
    AndroidSubscriptionPage.prototype.paymentCancel = function () {
        this.auth.showToast("You cancelled the payment!");
    };
    AndroidSubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-android-subscription',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/android-subscription/android-subscription.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Subscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="sign" style="background-image:url(\'assets/imgs/welcome3.jpg\')">\n  <div class="signForm">\n    <img src="assets/imgs/appicon.png" style="width: 8em; height: 8em;" />\n    <ion-list>\n      <ion-item>\n        <ion-icon name="briefcase" item-left color="light"></ion-icon>\n        <ion-label color="light">\n          Select a plan per month\n        </ion-label>\n        <ion-select [(ngModel)]="newuser.plantype.id" name="plantype" id="plantype" class="">\n          <ion-option *ngFor="let plan of plantypelist" value="{{ plan.id }}"\n            (ionSelect)="onPlantTypeSelect($event, plan)">{{ plan.name}} - {{ plan.amount  | currency: \'NGN\': \'1.2-2\'}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <!-- <button ion-button block type="submit" color="color2" (click)="Pay(\'AndroidSubscriptionPage\')">PAY\n      {{pay_amount  | currency: \'NGN\': \'1.2-2\'}}</button> -->\n      \n        <button ion-button block color="color2" angular4-paystack type="submit" \n          [key]="public_key" \n          (paymentInit)="paymentInit()" \n          [email]="newuser.email" \n          [amount]="pay_amount * 100" [ref]="random_id"\n          [channels]="channels"\n          (close)="paymentCancel()" \n          (callback)="paymentDone($event)" \n          (click)="onPay(pay_amount)"\n          [metadata]="{ \n            custom_fields: \n            [ {\n              display_name: \'Customer Name\', \n              variable_name: \'Customer Name\', \n              value: newuser.firstname} ,\n            {\n              display_name: \'Payment Type\', \n              variable_name: \'Payment Type\', \n              value: \'Registration\' \n            }] \n          }"\n        > PAY  {{pay_amount  | currency: \'NGN\': \'1.2-2\'}}\n        </button>\n    <p ion-text color="light" navPush="SignInPage">Don\'t want to continue ? Login</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/android-subscription/android-subscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
    ], AndroidSubscriptionPage);
    return AndroidSubscriptionPage;
}());

//# sourceMappingURL=android-subscription.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Angular4PaystackComponent */
/* unused harmony export Angular4PaystackDirective */
/* unused harmony export Angular4PaystackEmbed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular4PaystackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(45);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.PaystackPop;
}
var Angular4PaystackComponent = /** @class */ (function () {
    function Angular4PaystackComponent() {
        this.paymentInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var payment;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkInput()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadScript()];
                    case 1:
                        _a.sent();
                        this.setUp();
                        if (this.isPaying) {
                            return [2 /*return*/];
                        }
                        if (this.paymentInit.observers.length) {
                            this.paymentInit.emit();
                        }
                        payment = window.PaystackPop.setup(this.paystackOptions);
                        payment.openIframe();
                        this.isPaying = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.checkInput = /**
     * @return {?}
     */
    function () {
        if (!this.key) {
            return console.error('ANGULAR-PAYSTACK: Paystack key cannot be empty');
        }
        if (!this.email) {
            return console.error('ANGULAR-PAYSTACK: Paystack email cannot be empty');
        }
        if (!this.amount) {
            return console.error('ANGULAR-PAYSTACK: Paystack amount cannot be empty');
        }
        if (!this.ref) {
            return console.error('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
        }
        if (!this.callback.observers.length) {
            return console.error("ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status");
        }
        return true;
    };
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.setUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paystackOptions = {
            key: this.key,
            email: this.email,
            amount: this.amount,
            ref: this.ref,
            metadata: this.metadata || {},
            currency: this.currency || 'NGN',
            plan: this.plan || '',
            channels: this.channels,
            quantity: this.quantity || '',
            subaccount: this.subaccount || '',
            transaction_charge: this.transaction_charge || 0,
            bearer: this.bearer || '',
            callback: (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.isPaying = false;
                _this.callback.emit(res);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                _this.isPaying = false;
                _this.close.emit();
            }),
        };
    };
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    };
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setUp();
    };
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.text) {
            console.error('Paystack Text input is deprecated. Add text into textnode like so <angular4-paystack>Pay With Paystack</angular4-paystack>');
        }
    };
    Angular4PaystackComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                    selector: 'angular4-paystack',
                    template: "<button [ngClass]=\"class\" [ngStyle]=\"style\" (click)=\"pay()\">{{text}}<ng-content></ng-content></button>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackComponent.ctorParameters = function () { return []; };
    Angular4PaystackComponent.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        class: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        style: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        paymentInit: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }]
    };
    return Angular4PaystackComponent;
}());
if (false) {
    /** @type {?} */
    Angular4PaystackComponent.prototype.text;
    /** @type {?} */
    Angular4PaystackComponent.prototype.key;
    /** @type {?} */
    Angular4PaystackComponent.prototype.email;
    /** @type {?} */
    Angular4PaystackComponent.prototype.amount;
    /** @type {?} */
    Angular4PaystackComponent.prototype.metadata;
    /** @type {?} */
    Angular4PaystackComponent.prototype.ref;
    /** @type {?} */
    Angular4PaystackComponent.prototype.currency;
    /** @type {?} */
    Angular4PaystackComponent.prototype.plan;
    /** @type {?} */
    Angular4PaystackComponent.prototype.quantity;
    /** @type {?} */
    Angular4PaystackComponent.prototype.channels;
    /** @type {?} */
    Angular4PaystackComponent.prototype.subaccount;
    /** @type {?} */
    Angular4PaystackComponent.prototype.transaction_charge;
    /** @type {?} */
    Angular4PaystackComponent.prototype.bearer;
    /** @type {?} */
    Angular4PaystackComponent.prototype.class;
    /** @type {?} */
    Angular4PaystackComponent.prototype.style;
    /** @type {?} */
    Angular4PaystackComponent.prototype.paymentInit;
    /** @type {?} */
    Angular4PaystackComponent.prototype.close;
    /** @type {?} */
    Angular4PaystackComponent.prototype.callback;
    /**
     * @type {?}
     * @private
     */
    Angular4PaystackComponent.prototype.paystackOptions;
    /**
     * @type {?}
     * @private
     */
    Angular4PaystackComponent.prototype.isPaying;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {
    /** @type {?} */
    MyWindow$1.prototype.PaystackPop;
}
var Angular4PaystackDirective = /** @class */ (function () {
    function Angular4PaystackDirective() {
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.isPaying = false;
        this.setUp();
    }
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.pay = /**
     * @return {?}
     */
    function () {
        this.setUp();
        if (!this.checkInput()) {
            return;
        }
        /** @type {?} */
        var payment = window.PaystackPop.setup(this.paystackOptions);
        payment.openIframe();
        this.isPaying = true;
    };
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.checkInput = /**
     * @return {?}
     */
    function () {
        if (!this.key) {
            return console.error('ANGULAR-PAYSTACK: Paystack key cannot be empty');
        }
        if (!this.email) {
            return console.error('ANGULAR-PAYSTACK: Paystack email cannot be empty');
        }
        if (!this.amount) {
            return console.error('ANGULAR-PAYSTACK: Paystack amount cannot be empty');
        }
        if (!this.ref) {
            return console.error('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
        }
        if (!this.callback.observers.length) {
            return console.error("ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status");
        }
        return true;
    };
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.setUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paystackOptions = {
            key: this.key,
            email: this.email,
            amount: this.amount,
            ref: this.ref,
            metadata: this.metadata || {},
            currency: this.currency || 'NGN',
            plan: this.plan || '',
            quantity: this.quantity || '',
            subaccount: this.subaccount || '',
            channels: this.channels,
            transaction_charge: this.transaction_charge || 0,
            bearer: this.bearer || '',
            callback: (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.isPaying = false;
                _this.callback.emit(res);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                _this.isPaying = false;
                _this.close.emit();
            })
        };
    };
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    };
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isPaying) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadScript()];
                    case 1:
                        _a.sent();
                        this.pay();
                        return [2 /*return*/];
                }
            });
        });
    };
    Angular4PaystackDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: '[angular4-paystack]',
                },] }
    ];
    /** @nocollapse */
    Angular4PaystackDirective.ctorParameters = function () { return []; };
    Angular4PaystackDirective.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        class: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        style: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        buttonClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */], args: ['click',] }]
    };
    return Angular4PaystackDirective;
}());
if (false) {
    /** @type {?} */
    Angular4PaystackDirective.prototype.text;
    /** @type {?} */
    Angular4PaystackDirective.prototype.key;
    /** @type {?} */
    Angular4PaystackDirective.prototype.email;
    /** @type {?} */
    Angular4PaystackDirective.prototype.amount;
    /** @type {?} */
    Angular4PaystackDirective.prototype.metadata;
    /** @type {?} */
    Angular4PaystackDirective.prototype.ref;
    /** @type {?} */
    Angular4PaystackDirective.prototype.currency;
    /** @type {?} */
    Angular4PaystackDirective.prototype.plan;
    /** @type {?} */
    Angular4PaystackDirective.prototype.quantity;
    /** @type {?} */
    Angular4PaystackDirective.prototype.subaccount;
    /** @type {?} */
    Angular4PaystackDirective.prototype.channels;
    /** @type {?} */
    Angular4PaystackDirective.prototype.transaction_charge;
    /** @type {?} */
    Angular4PaystackDirective.prototype.bearer;
    /** @type {?} */
    Angular4PaystackDirective.prototype.class;
    /** @type {?} */
    Angular4PaystackDirective.prototype.style;
    /** @type {?} */
    Angular4PaystackDirective.prototype.close;
    /** @type {?} */
    Angular4PaystackDirective.prototype.callback;
    /**
     * @type {?}
     * @private
     */
    Angular4PaystackDirective.prototype.paystackOptions;
    /**
     * @type {?}
     * @private
     */
    Angular4PaystackDirective.prototype.isPaying;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {
    /** @type {?} */
    MyWindow$2.prototype.PaystackPop;
}
var Angular4PaystackEmbed = /** @class */ (function () {
    function Angular4PaystackEmbed() {
        this.paymentInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    Angular4PaystackEmbed.prototype.pay = /**
     * @return {?}
     */
    function () {
        if (!this.checkInput()) {
            return;
        }
        this.setUp();
        if (this.paymentInit.observers.length) {
            this.paymentInit.emit();
        }
        window.PaystackPop.setup(this.paystackOptions);
    };
    /**
     * @return {?}
     */
    Angular4PaystackEmbed.prototype.checkInput = /**
     * @return {?}
     */
    function () {
        if (!this.key) {
            return console.error('ANGULAR-PAYSTACK: Paystack key cannot be empty');
        }
        if (!this.email) {
            return console.error('ANGULAR-PAYSTACK: Paystack email cannot be empty');
        }
        if (!this.amount) {
            return console.error('ANGULAR-PAYSTACK: Paystack amount cannot be empty');
        }
        if (!this.ref) {
            return console.error('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
        }
        if (!this.callback.observers.length) {
            return console.error("\n        ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status\n      ");
        }
        return true;
    };
    /**
     * @return {?}
     */
    Angular4PaystackEmbed.prototype.setUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paystackOptions = {
            container: 'paystackEmbedContainer',
            key: this.key,
            email: this.email,
            amount: this.amount,
            ref: this.ref,
            metadata: this.metadata || {},
            currency: this.currency || 'NGN',
            plan: this.plan || '',
            quantity: this.quantity || '',
            subaccount: this.subaccount || '',
            channels: this.channels,
            transaction_charge: this.transaction_charge || 0,
            bearer: this.bearer || '',
            callback: (/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.callback.emit(res); }),
            onClose: (/**
             * @return {?}
             */
            function () { return _this.close && _this.close.emit(); }),
        };
    };
    /**
     * @return {?}
     */
    Angular4PaystackEmbed.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    };
    /**
     * @return {?}
     */
    Angular4PaystackEmbed.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript()];
                    case 1:
                        _a.sent();
                        if (this.text) {
                            console.error('ANGULAR-PAYSTACK: Paystack Text input is deprecated. Use this instead <angular4-paystack>Pay With Paystack</angular4-paystack>');
                        }
                        this.pay();
                        return [2 /*return*/];
                }
            });
        });
    };
    Angular4PaystackEmbed.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                    selector: 'angular4-paystack-embed',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    template: "<div id=\"paystackEmbedContainer\"></div>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackEmbed.ctorParameters = function () { return []; };
    Angular4PaystackEmbed.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] }],
        paymentInit: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */] }]
    };
    return Angular4PaystackEmbed;
}());
if (false) {
    /** @type {?} */
    Angular4PaystackEmbed.prototype.text;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.key;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.email;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.amount;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.metadata;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.channels;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.ref;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.currency;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.plan;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.quantity;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.subaccount;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.transaction_charge;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.bearer;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.paymentInit;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.close;
    /** @type {?} */
    Angular4PaystackEmbed.prototype.callback;
    /**
     * @type {?}
     * @private
     */
    Angular4PaystackEmbed.prototype.paystackOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angular4PaystackModule = /** @class */ (function () {
    function Angular4PaystackModule() {
    }
    Angular4PaystackModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
                    exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbed],
                    declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbed],
                    providers: [],
                },] }
    ];
    return Angular4PaystackModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular4-paystack.js.map


/***/ })

});
//# sourceMappingURL=1.js.map