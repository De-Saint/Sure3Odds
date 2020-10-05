webpackJsonp([1],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular4_paystack__["a" /* Angular4PaystackModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

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

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plans; });
var Plans = /** @class */ (function () {
    function Plans(id, plantype, startDate, endDate) {
        this.id = id;
        this.plantype = plantype;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Plans;
}());

//# sourceMappingURL=Plans.js.map

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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_Plans__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, alertCtrl, authProvider, loadingCtrl, pltform, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.pltform = pltform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.flag = true;
        this.img1 = "assets/imgs/profileCover.png";
        this.img2 = "/assets/imgs/appicon.png";
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__interfaces_NewUser__["a" /* NewUsers */]("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
        this.userplan = new __WEBPACK_IMPORTED_MODULE_0__interfaces_Plans__["a" /* Plans */]("", { id: "", name: "", amount: "" }, "", "");
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.GetUserDeta();
    };
    ProfilePage.prototype.GetUserDeta = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.GetUserDeta()
            .subscribe(function (result) {
            loading.dismiss().catch(function () { });
            if (result.statusCode == 200) {
                console.log(result);
                _this.userplan = result.data.planData;
                _this.newuser = result.data.userData;
            }
            else {
                _this.authProvider.showToast(result.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    ProfilePage.prototype.updateAccount = function (user) {
        var _this = this;
        console.log(user);
        if (user) {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.authProvider.updateUser(user).subscribe(function (res) {
                loading_1.dismiss().catch(function () { });
                if (res.statusCode === 200) {
                    _this.GetUserDeta();
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                loading_1.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
        else {
            this.authProvider.showToast("Please, check something is wrong.");
        }
    };
    ProfilePage.prototype.renewAccount = function (plan) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Update Plan',
            message: "You are about to update <b> your subscription plan</b> <br/> to " + plan.plantype.name + ". <br/><br/>If <b>" + plan.plantype.name + "</b> is not the plan you want to update to, you can change it on the subscription screen. <br/><br/>This action is irreversible.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        _this.newuser.plantype = _this.userplan.plantype;
                        if (_this.pltform.is("ios")) {
                            _this.onIOSSubscription();
                        }
                        else if (_this.pltform.is("android")) {
                            _this.onAndroidSubscription();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.onIOSSubscription = function () {
        this.navCtrl.push("SubscriptionIosPage", { newuser: this.newuser, sub_option: "renewal" });
    };
    ProfilePage.prototype.onAndroidSubscription = function () {
        this.navCtrl.push("SubscriptionAndroidPage", { newuser: this.newuser, sub_option: "renewal" });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="imgs">\n    <button ion-button icon-only class="coverCamera" [ngClass]="{\'show\':flag==false}">\n      <ion-icon name="md-camera"></ion-icon>\n    </button>\n    <img src="{{img1}}" />\n    <div class="imgProfile" [ngStyle]="{\'background-image\':\'url(\' + img2 + \')\'}">\n      <button ion-button icon-only class="profileCamera" [ngClass]="{\'show\':flag==false}">\n        <ion-icon name="md-camera"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <!-- name and email -->\n  <div class="nameAndMail">\n    <h5 ion-text color="dark">{{newuser.firstname}} {{newuser.lastname}}</h5>\n    <p ion-text color="dark">{{newuser?.email}}</p>\n  </div>\n\n  <!-- other information -->\n  <div class="otherForm">\n    <ion-list>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">My Details</h2>\n      </ion-list-header>\n      <ion-item class="halfItem" float-left>\n        <ion-label stacked>\n          First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.firstname" name="firstname" id="firstname" placeholder="First Name">\n        </ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <ion-label stacked>\n          Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.lastname" name="lastname" id="lastname" placeholder="Last Name">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n           Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email" name="email" id="email" placeholder="E-mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>\n           Phone\n        </ion-label>\n        <ion-input type="tel" [(ngModel)]="newuser.phone" name="phone" id="phone" placeholder="Phone"></ion-input>\n      </ion-item>\n\n      <ion-item class="halfItem" float-left>\n        <ion-label stacked>\n          Current Membership\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.usertypes.name" disabled>\n        </ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <ion-label stacked>\n          Current Status\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.status.name" disabled>\n        </ion-input>\n      </ion-item>\n\n      <button ion-button block margin-bottom type="submit" color="color2" (click)="updateAccount(newuser)">Update\n        Account\n      </button>\n    </ion-list>\n    <ion-list *ngIf="userplan">\n      <hr class="margin-top margin-bottom">\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">My Subscription Details</h2>\n      </ion-list-header>\n      <ion-item margin-top>\n        <h5 ion-text color="dark"><b>Current Plan Name</b></h5>\n        <p ion-text color="color1"><b>{{userplan.plantype.name}}</b></p>\n      </ion-item>\n\n\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>Start Date</b></h5>\n        <p ion-text color="color1"><b>{{userplan.startDate}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>End/Due Date</b></h5>\n        <p ion-text color="color1"><b>{{userplan.endDate}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>Amount</b></h5>\n        <p ion-text color="color1"><b>{{userplan.plantype.amount  | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left>\n        <h5 ion-text color="dark"><b>Status</b></h5>\n        <p ion-text color="danger" *ngIf="newuser.status.name === \'Inactive\'"><b>Expired</b></p>\n        <p ion-text color="secondary" *ngIf="newuser.status.name === \'Active\'"><b>Running</b></p>\n      </ion-item>\n      <button ion-button block type="submit" color="color2" (click)="renewAccount(userplan)">Renew\n        Subscription</button>\n        \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ActionSheetController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map