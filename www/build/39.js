webpackJsonp([39],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneralPageModule", function() { return ReportGeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_general__ = __webpack_require__(782);
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

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(88);
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



var ReportGeneralPage = /** @class */ (function () {
    function ReportGeneralPage(navCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
    }
    ReportGeneralPage.prototype.ionViewWillEnter = function () {
        this.GetAppReport();
    };
    ReportGeneralPage.prototype.GetAppReport = function () {
        var _this = this;
        this.authProvider.GetAppReport()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.report = resp.data;
                console.log(_this.report);
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    ReportGeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-report-general',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-general/report-general.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>General Reports </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list padding>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Membership Details</h2>\n      </ion-list-header>\n      <ion-item style="margin-top: 1em;">\n        <h5 ion-text color="dark"><b>Total Members </b></h5>\n        <p ion-text color="color1"><b>{{report?.totalusers}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top: 1.5em;">\n        <h5 ion-text color="dark"><b>Total VVIP Members</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvvipusers}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>Total VIP Members </b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvipusers}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>Total Active Members</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalactiveusers}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>Total InActive Members</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalinactiveusers}}</b></p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list padding>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Subscription Details</h2>\n      </ion-list-header>\n      <ion-item>\n        <h5 ion-text color="dark"><b>Total Revenue</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalincome  | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>VVIP Revenue</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvvipincome  | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>VIP Revenue</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvipincome  | currency: \'NGN\': \'1.2-2\'}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>VVIP Payments</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvvippay}}</b></p>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <h5 ion-text color="dark"><b>VIP Payments</b></h5>\n        <p ion-text color="color1"><b>{{report?.totalvippay }}</b></p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-general/report-general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], ReportGeneralPage);
    return ReportGeneralPage;
}());

//# sourceMappingURL=report-general.js.map

/***/ })

});
//# sourceMappingURL=39.js.map