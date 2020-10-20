webpackJsonp([35],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportMonthlyPageModule", function() { return ReportMonthlyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_monthly__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportMonthlyPageModule = /** @class */ (function () {
    function ReportMonthlyPageModule() {
    }
    ReportMonthlyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_monthly__["a" /* ReportMonthlyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__report_monthly__["a" /* ReportMonthlyPage */]),
            ],
        })
    ], ReportMonthlyPageModule);
    return ReportMonthlyPageModule;
}());

//# sourceMappingURL=report-monthly.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMonthlyPage; });
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



var ReportMonthlyPage = /** @class */ (function () {
    function ReportMonthlyPage(navCtrl, loadingCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.totalvvipincome = 0;
        this.totalincome = 0;
        this.totalvipincome = 0;
    }
    ReportMonthlyPage.prototype.GetReportByDate = function (value) {
        var month = value.month;
        if (month < 10) {
            month = "0" + month;
        }
        var year = value.year;
        var date = year + "-" + month + "-01";
        this.GetMonthlyStats(date);
    };
    ReportMonthlyPage.prototype.GetMonthlyStats = function (date) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.authProvider.GetMonthlyReport(date)
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
            _this.authProvider.showToast(error.error.description);
        });
    };
    ReportMonthlyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-report-monthly',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-monthly/report-monthly.html"*/'<ion-content padding>\n  <div class="otherForm">\n    <ion-list padding>\n      <ion-item>\n        <ion-label>\n          Select Month\n        </ion-label>\n        <ion-datetime displayFormat="MMMM YYYY" placeholder="Select a month" max="2050-12-31" name="reportdate"\n          (ionChange)="GetReportByDate($event)">\n        </ion-datetime>\n      </ion-item>\n\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Membership Details</h2>\n      </ion-list-header>\n      <ion-item style="margin-top: 1em;">\n        <ion-label stacked><b>Total Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalusers ? report?.totalusers : 0}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top: 1.5em;">\n        <ion-label stacked><b>Total VVIP Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvvipusers ? report?.totalvvipusers : 0}}"></ion-input>\n     </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total VIP Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvipusers ? report?.totalvipusers : 0}}"></ion-input>\n    </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total Active Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalactiveusers ? report?.totalactiveusers : 0}}"></ion-input>\n    </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>Total InActive Members</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalinactiveusers ? report?.totalinactiveusers : 0}}"></ion-input>\n    </ion-item>\n    </ion-list>\n\n    <ion-list padding>\n      <ion-list-header>\n        <h2 ion-text text-center color="color2">Subscription Details</h2>\n      </ion-list-header>\n      <ion-item>\n        <ion-label stacked><b>Total Revenue</b></ion-label>\n        <ion-input disabled type="text" *ngIf="!report?.totalincome" value="{{totalincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n        <ion-input disabled type="text"  *ngIf="report?.totalincome" value="{{report?.totalincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n     </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VVIP Revenue</b></ion-label>\n        <ion-input disabled type="text" *ngIf="!report?.totalvvipincome" value="{{totalvvipincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n        <ion-input disabled type="text"  *ngIf="report?.totalvvipincome" value="{{report?.totalvvipincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n     </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VIP Revenue</b></ion-label>\n        <ion-input disabled type="text" *ngIf="!report?.totalvipincome" value="{{totalvipincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n        <ion-input disabled type="text"  *ngIf="report?.totalvipincome" value="{{report?.totalvipincome | currency: \'NGN\': \'1.2-2\'}}"></ion-input>\n    </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VVIP Payments</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvvippay ? report?.totalvvippay : 0}}"></ion-input>\n      </ion-item>\n      <ion-item class="halfItem" float-left style="margin-top:  1.5em;">\n        <ion-label stacked><b>VIP Payments</b></ion-label>\n        <ion-input disabled type="text" value="{{report?.totalvippay ? report?.totalvippay : 0}}"></ion-input>\n     </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/report-monthly/report-monthly.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], ReportMonthlyPage);
    return ReportMonthlyPage;
}());

//# sourceMappingURL=report-monthly.js.map

/***/ })

});
//# sourceMappingURL=35.js.map