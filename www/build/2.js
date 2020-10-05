webpackJsonp([2],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionAndroidPageModule", function() { return SubscriptionAndroidPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_android__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SubscriptionAndroidPageModule = /** @class */ (function () {
    function SubscriptionAndroidPageModule() {
    }
    SubscriptionAndroidPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subscription_android__["a" /* SubscriptionAndroidPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__subscription_android__["a" /* SubscriptionAndroidPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__["a" /* Angular4PaystackModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], SubscriptionAndroidPageModule);
    return SubscriptionAndroidPageModule;
}());

//# sourceMappingURL=subscription-android.module.js.map

/***/ }),

/***/ 749:
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

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Angular4PaystackComponent */
/* unused harmony export Angular4PaystackDirective */
/* unused harmony export Angular4PaystackEmbed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular4PaystackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(44);




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
        this.paymentInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
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
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
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
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'angular4-paystack',
                    template: "<button [ngClass]=\"class\" [ngStyle]=\"style\" (click)=\"pay()\">{{text}}<ng-content></ng-content></button>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackComponent.ctorParameters = function () { return []; };
    Angular4PaystackComponent.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        class: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        style: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        paymentInit: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }]
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
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
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
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
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
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[angular4-paystack]',
                },] }
    ];
    /** @nocollapse */
    Angular4PaystackDirective.ctorParameters = function () { return []; };
    Angular4PaystackDirective.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        class: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        style: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        buttonClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click',] }]
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
        this.paymentInit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.callback = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
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
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
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
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'angular4-paystack-embed',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
                    template: "<div id=\"paystackEmbedContainer\"></div>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackEmbed.ctorParameters = function () { return []; };
    Angular4PaystackEmbed.propDecorators = {
        text: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        key: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        email: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        amount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        metadata: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        channels: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        ref: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        currency: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        plan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        quantity: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        subaccount: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        transaction_charge: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        bearer: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        paymentInit: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        close: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        callback: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }]
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
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
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


/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionAndroidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubscriptionAndroidPage = /** @class */ (function () {
    function SubscriptionAndroidPage(loadingCtrl, events, storage, paymentsProvider, navCtrl, auth, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.paymentsProvider = paymentsProvider;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_2__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.newuser = this.navParams.get("newuser");
        this.sub_option = this.navParams.get("sub_option");
        console.log(this.newuser, this.sub_option);
    }
    SubscriptionAndroidPage.prototype.ionViewWillEnter = function () {
        this.getPlantypes();
        this.getParameter();
    };
    SubscriptionAndroidPage.prototype.onPlantTypeSelect = function ($event, plan) {
        this.pay_amount = plan.amount;
    };
    SubscriptionAndroidPage.prototype.getPlantypes = function () {
        var _this = this;
        this.auth.getAllPlantypes().subscribe(function (result) {
            _this.plantypelist = result.data;
            console.log(_this.plantypelist);
        });
    };
    SubscriptionAndroidPage.prototype.getParameter = function () {
        var _this = this;
        this.auth.getParameter(1).subscribe(function (result) {
            _this.public_key = result.data.value;
            console.log(_this.public_key);
        });
    };
    SubscriptionAndroidPage.prototype.onPay = function (pay_amount) {
        this.auth.showToast("Please Wait ...");
        this.pay_amount = this.auth.CalculatePercentage(pay_amount);
    };
    SubscriptionAndroidPage.prototype.paymentInit = function () {
    };
    //Callback function on successful payment
    SubscriptionAndroidPage.prototype.paymentDone = function (ref) {
        if (ref.status === "success") {
            console.log(ref); //ref contains the response from paystack after successful payment
            var loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            this.newuser.platform = "Android";
            this.newuser.referencecode = String(ref.reference);
            if (this.sub_option === "registration") {
                this.onRegistration(loading);
            }
            else if (this.sub_option === "renewal") {
                this.onRenewal(loading);
            }
        }
        else {
            this.auth.showToast("Please, the payment was not successful.");
        }
    };
    //Event triggered if User cancel the payment
    SubscriptionAndroidPage.prototype.paymentCancel = function () {
        this.auth.showToast("You cancelled the payment!");
    };
    SubscriptionAndroidPage.prototype.onRegistration = function (loading) {
        var _this = this;
        this.newuser.usertypes = { id: 2, name: "" };
        console.log(this.newuser);
        this.auth.createNewUser(this.newuser).subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.auth.login(_this.newuser.email, _this.newuser.password).subscribe(function (res) {
                    loading.dismiss().catch(function () { });
                    _this.gotoHomePage(resp.data, 'AllMatchesPage');
                }, function (error) {
                    loading.dismiss().catch(function () { });
                    _this.auth.showToast(error.error.message);
                });
            }
            else {
                loading.dismiss().catch(function () { });
                _this.auth.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.auth.showToast(error.error.message);
        });
    };
    SubscriptionAndroidPage.prototype.onRenewal = function (loading) {
        var _this = this;
        this.paymentsProvider.updatePlan(this.newuser.id, this.newuser.plantype.id, this.newuser.platform, this.newuser.referencecode).subscribe(function (res) {
            loading.dismiss().catch(function () { });
            if (res.statusCode === 200) {
                _this.navCtrl.pop();
            }
            else {
                _this.auth.showToast(res.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.auth.showToast(error.error.error);
        });
    };
    SubscriptionAndroidPage.prototype.gotoHomePage = function (data, page) {
        var _this = this;
        this.navCtrl.setRoot(page).then(function () {
            _this.storage.ready().then(function () {
                _this.storage.set("hasSeenLogin", true);
                var name = _this.auth.currentUserDataValue.name;
                var type = _this.auth.currentUserDataValue.user_type;
                _this.auth.showToast("Welcome " + name);
                _this.events.publish('user:login', type, name);
            });
        });
    };
    SubscriptionAndroidPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-subscription-android',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/subscription-android/subscription-android.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Subscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="sign" style="background-image:url(\'assets/imgs/welcome3.jpg\')">\n  <div class="signForm">\n    <img src="assets/imgs/appicon.png" style="width: 8em; height: 8em;" />\n    <ion-list>\n      <ion-item>\n        <ion-icon name="briefcase" item-left color="light"></ion-icon>\n        <ion-label color="light">\n          Select a plan per month\n        </ion-label>\n        <ion-select [(ngModel)]="newuser.plantype.id" name="plantype" id="plantype" class="">\n          <ion-option *ngFor="let plan of plantypelist" value="{{ plan.id }}"\n            (ionSelect)="onPlantTypeSelect($event, plan)">{{ plan.name}} - {{ plan.amount  | currency: \'NGN\': \'1.2-2\'}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n      \n        <button ion-button block color="color2" angular4-paystack type="submit" \n          [key]="public_key" \n          (paymentInit)="paymentInit()" \n          [email]="newuser.email" \n          [amount]="pay_amount * 100" [ref]="random_id"\n          [channels]="channels"\n          (close)="paymentCancel()" \n          (callback)="paymentDone($event)" \n          (click)="onPay(pay_amount)"\n          [metadata]="{ \n            custom_fields: \n            [ {\n              display_name: \'Customer Name\', \n              variable_name: \'Customer Name\', \n              value: newuser.firstname + \'\' + newuser.lastname} ,\n            {\n              display_name: \'Payment Type\', \n              variable_name: \'Payment Type\', \n              value: \'Registration\' \n            }] \n          }"\n        > PAY  {{pay_amount  | currency: \'NGN\': \'1.2-2\'}}\n        </button>\n    <!-- <p ion-text color="light" navPush="SignInPage">Don\'t want to continue ? Login</p> -->\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/subscription-android/subscription-android.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__providers_payments_payments__["a" /* PaymentsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], SubscriptionAndroidPage);
    return SubscriptionAndroidPage;
}());

//# sourceMappingURL=subscription-android.js.map

/***/ })

});
//# sourceMappingURL=2.js.map