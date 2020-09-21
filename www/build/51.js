webpackJsonp([51],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPlansPageModule", function() { return PaymentPlansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_plans__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPlansPageModule = /** @class */ (function () {
    function PaymentPlansPageModule() {
    }
    PaymentPlansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_plans__["a" /* PaymentPlansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_plans__["a" /* PaymentPlansPage */]),
            ],
        })
    ], PaymentPlansPageModule);
    return PaymentPlansPageModule;
}());

//# sourceMappingURL=payment-plans.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPlansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentPlansPage = /** @class */ (function () {
    function PaymentPlansPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teams = [
            { img: 'assets/imgs/teams/bate_borisov.png', team: 'BATE Borisov', date: 'Feb 13,2018', time: '17.30', league: 'Premier League', result: '6 - 1' },
            { img: 'assets/imgs/teams/real_madrid.png', team: 'Real Madrid', date: 'Feb 23,2018', time: '19:30', league: 'Premier League', result: '' },
            { img: 'assets/imgs/teams/marseille.png', team: 'Marseille', date: 'Feb 28,2018', time: '22:00', league: 'Premier League', result: '' },
            { img: 'assets/imgs/teams/bate_borisov.png', team: 'BATE Borisov', date: 'Feb 13,2018', time: '17.30', league: 'Premier League', result: '6 - 1' },
            { img: 'assets/imgs/teams/real_madrid.png', team: 'Real Madrid', date: 'Feb 23,2018', time: '19:30', league: 'Premier League', result: '' },
            { img: 'assets/imgs/teams/marseille.png', team: 'Marseille', date: 'Feb 28,2018', time: '22:00', league: 'Premier League', result: '' },
            { img: 'assets/imgs/teams/bate_borisov.png', team: 'BATE Borisov', date: 'Feb 13,2018', time: '17.30', league: 'Premier League', result: '6 - 1' },
            { img: 'assets/imgs/teams/real_madrid.png', team: 'Real Madrid', date: 'Feb 23,2018', time: '19:30', league: 'Premier League', result: '' },
            { img: 'assets/imgs/teams/marseille.png', team: 'Marseille', date: 'Feb 28,2018', time: '22:00', league: 'Premier League', result: '' },
        ];
    }
    PaymentPlansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPlansPage');
    };
    PaymentPlansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-plans',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plans/payment-plans.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Plans </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="teamMatchs">\n    <ion-list >\n      <ion-item class="thumbnailItem" *ngFor="let item of teams" navPush="MatchDetailsPage">\n        <ion-thumbnail item-left>\n          <!-- Team image -->\n          <img src="{{item.img}}" navPush="TeamPage"/>\n        </ion-thumbnail>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <!-- team Name -->\n              <h5 ion-text color="dark" navPush="TeamPage">{{item.team}}</h5>\n              <!-- League Name -->\n              <p ion-text color="dark">{{item.league}}</p>\n            </ion-col>\n            <ion-col col-6>\n              <p ion-text color="dark">Dec 13,2017</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- Time -->\n        <div class="matchTime" item-right  *ngIf="item.result==\'\'">\n          <span ion-text color="color1">{{item.time}}</span>\n          <p ion-text color="color2">Next Match</p>\n        </div>\n        <!-- Time -->\n        <div class="matchResult" item-right *ngIf="item.result!=\'\'">\n            <span ion-text color="color1"  >{{item.result}}</span>\n          <p ion-text color="color2">Full Time</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payment-plans/payment-plans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PaymentPlansPage);
    return PaymentPlansPage;
}());

//# sourceMappingURL=payment-plans.js.map

/***/ })

});
//# sourceMappingURL=51.js.map