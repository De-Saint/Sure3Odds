webpackJsonp([45],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersStatsPageModule", function() { return PlayersStatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_stats__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayersStatsPageModule = /** @class */ (function () {
    function PlayersStatsPageModule() {
    }
    PlayersStatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__players_stats__["a" /* PlayersStatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__players_stats__["a" /* PlayersStatsPage */]),
            ],
        })
    ], PlayersStatsPageModule);
    return PlayersStatsPageModule;
}());

//# sourceMappingURL=players-stats.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersStatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersStatsPage = /** @class */ (function () {
    function PlayersStatsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.players = [
            { img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '10' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '7' },
            { img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '7' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '7' },
            { img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '6' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '6' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '6' },
            { img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '5' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '4' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '4' },
            { img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '4' },
            { img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '4' },
        ];
    }
    PlayersStatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-players-stats',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/players-stats/players-stats.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Goals</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class="avatarItem" *ngFor="let item of players">\n      <ion-avatar item-left>\n        <!-- player image -->\n        <img src="{{item.img}}"/>\n      </ion-avatar>\n      <!-- player Name -->\n      <h5 ion-text color="dark">{{item.name}}</h5>\n      <!-- player Team -->\n      <p ion-text color="dark">{{item.team}}</p>\n      <!-- goals , assists or rating Number -->\n      <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/players-stats/players-stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], PlayersStatsPage);
    return PlayersStatsPage;
}());

//# sourceMappingURL=players-stats.js.map

/***/ })

});
//# sourceMappingURL=45.js.map