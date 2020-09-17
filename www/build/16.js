webpackJsonp([16],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsStatsPageModule", function() { return TeamsStatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_stats__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamsStatsPageModule = /** @class */ (function () {
    function TeamsStatsPageModule() {
    }
    TeamsStatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teams_stats__["a" /* TeamsStatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__teams_stats__["a" /* TeamsStatsPage */]),
            ],
        })
    ], TeamsStatsPageModule);
    return TeamsStatsPageModule;
}());

//# sourceMappingURL=teams-stats.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsStatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsStatsPage = /** @class */ (function () {
    function TeamsStatsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.teams = [
            { img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:Player Name' },
            { img: 'assets/imgs/teams/barcelona.png', team: 'Barcelona', num: '22', note: 'Total Shots:28' },
            { img: 'assets/imgs/teams/lazio.png', team: 'Lazio', num: '678', note: 'Pass percentage:90.2' },
            { img: 'assets/imgs/teams/Marseille.png', team: 'Marseille', num: '8.5', note: 'Total matches:6' },
            { img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:6' },
            { img: 'assets/imgs/teams/barcelona.png', team: 'Barcelona', num: '22', note: 'Total Shots:28' },
            { img: 'assets/imgs/teams/lazio.png', team: 'Lazio', num: '678', note: 'Pass percentage:90.2' },
            { img: 'assets/imgs/teams/Marseille.png', team: 'Marseille', num: '8.5', note: 'Total matches:6' },
        ];
    }
    TeamsStatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teams-stats',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/teams-stats/teams-stats.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Average Rating</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-list >\n    <ion-item class="thumbnailItem" *ngFor="let item of teams">\n      <ion-thumbnail item-left>\n        <!-- Team image -->\n        <img src="{{item.img}}"/>\n      </ion-thumbnail>\n      <!-- team Name -->\n      <h5 ion-text color="dark">{{item.team}}</h5>\n      <!-- note -->\n      <p ion-text color="dark">{{item.note}}</p>\n      <!-- rating Number -->\n      <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/teams-stats/teams-stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], TeamsStatsPage);
    return TeamsStatsPage;
}());

//# sourceMappingURL=teams-stats.js.map

/***/ })

});
//# sourceMappingURL=16.js.map