webpackJsonp([36],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneralPageModule", function() { return ReportGeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_general__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportGeneralPageModule = /** @class */ (function () {
    function ReportGeneralPageModule() {
    }
    ReportGeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_general__["a" /* ReportGeneralPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__report_general__["a" /* ReportGeneralPage */]),
            ],
        })
    ], ReportGeneralPageModule);
    return ReportGeneralPageModule;
}());

//# sourceMappingURL=report-general.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneralPage; });
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



var ReportGeneralPage = /** @class */ (function () {
    function ReportGeneralPage(navCtrl, loadingCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
    }
    ReportGeneralPage.prototype.ionViewWillEnter = function () {
        this.GetAppReport();
    };
    ReportGeneralPage.prototype.GetAppReport = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.GetAppReport()
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.report = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    ReportGeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-report-general',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-general/report-general.html"*/'<ion-content padding>\n  <div class="otherForm">\n    <ion-list padding>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Membership Details</h2>\n      </ion-list-header>\n      <ion-item style="margin-top: 1em;">\n        <ion-label stacked><b>Total Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalusers}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top: 1.5em;">\n        <ion-label stacked><b>Total VVIP Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvvipusers}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total VIP Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvipusers}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total Active Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalactiveusers}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total InActive Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalinactiveusers}}"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list padding>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Subscription Details</h2>\n      </ion-list-header>\n      <ion-item>\n        <ion-label stacked><b>Total Revenue</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalincome  | currency: \'NGN\': \'1.2-2\'}}"> </ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VVIP Revenue</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvvipincome  | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VIP Revenue</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvipincome  | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VVIP Payments</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvvippay}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VIP Payments</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvippay}}"></ion-input>\n\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-general/report-general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], ReportGeneralPage);
    return ReportGeneralPage;
}());

//# sourceMappingURL=report-general.js.map

/***/ })

});
//# sourceMappingURL=36.js.map