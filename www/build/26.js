webpackJsonp([26],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchDetailsPageModule", function() { return MatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_details__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchDetailsPageModule = /** @class */ (function () {
    function MatchDetailsPageModule() {
    }
    MatchDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */]),
            ],
        })
    ], MatchDetailsPageModule);
    return MatchDetailsPageModule;
}());

//# sourceMappingURL=match-details.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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



var MatchDetailsPage = /** @class */ (function () {
    function MatchDetailsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.tab = 'stats';
        this.statsPercentage = [
            { title: 'Ball Possession', team1: '71%', team2: '29%' },
        ];
        this.statsNum = [
            { title: 'Total Shots', team1: 23, team2: 12, team1P: '75%', team2P: '25%' },
            { title: 'Accurate Passes', team1: 629, team2: 236, team1P: '80%', team2P: '20%' },
            { title: 'Fouls', team1: 8, team2: 9, team1P: '49%', team2P: '51%' },
            { title: 'Corners', team1: 7, team2: 2, team1P: '90%', team2P: '10%' },
            { title: 'Offside', team1: 2, team2: 4, team1P: '25%', team2P: '75%' },
        ];
        this.highlights = [
            { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team1', content2: '' },
            { time: '84', img: 'flag', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
            { time: '84', img: 'red-card', content: 'Player Name', team: 'team1', content2: '' },
            { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
            { time: '84', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
            { time: '82', img: 'exchange', content: 'Player Name', team: 'team1', content2: 'Player Name' },
            { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
            { time: '78', img: 'exchange', content: 'Player Name', team: 'team2', content2: 'Player Name' },
            { time: '74', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
            { time: '84', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
        ];
    }
    MatchDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-match-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Matches</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item navPush="TeamPage">\n              <img src="assets/imgs/teams/arsenal.png"/>\n              <p>Arsenal</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">3</span>\n              <span ion-text color="color1">-</span>\n              <span ion-text color="color1">1</span>\n            </div>\n            <p ion-text color="color2">Full Time</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item navPush="TeamPage">\n              <img src="assets/imgs/teams/bate_borisov.png"/>\n              <p>BATE Borisov</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]=\'tab\'>\n  <!-- tabs -->\n  <ion-segment [(ngModel)]="tab">\n    <ion-segment-button value="stats">STATS</ion-segment-button>\n    <ion-segment-button value="goals">GOALS</ion-segment-button>\n    <ion-segment-button value="timeline">TIMELINE</ion-segment-button>\n  </ion-segment>\n\n  <!-- match stats -->\n  <div class="matchStats" margin-top *ngSwitchCase="\'stats\'">\n    <h5 ion-text color="color2">BEST AVERAGE RATING</h5>\n    <ion-list>\n      <!-- state with percentage -->\n      <ion-item *ngFor="let item of statsPercentage">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto text-left>\n              <p ion-text color="color1" no-margin>{{item.team1}}</p>\n            </ion-col>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin >{{item.title}}</p>\n            </ion-col>\n            <ion-col col-auto text-right>\n              <p ion-text color="color1" no-margin>{{item.team2}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n                <span class="progressActive" [ngStyle]="{\'width\': + item.team1}" active-from-right></span>\n              </div>\n            </ion-col>\n            <ion-col col-6>\n              <div class="progressBar" >\n                <span class="container"></span>\n                <span class="progressActive" [ngStyle]="{\'width\': + item.team2}" active-from-left></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <!-- state with number -->\n      <ion-item *ngFor="let item of statsNum">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto text-left>\n              <p ion-text color="color1" no-margin>{{item.team1}}</p>\n            </ion-col>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin >{{item.title}}</p>\n            </ion-col>\n            <ion-col col-auto text-right>\n              <p ion-text color="color1" no-margin>{{item.team2}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n                <span class="progressActive" [ngStyle]="{\'width\': + item.team1P}" active-from-right></span>\n              </div>\n            </ion-col>\n            <ion-col col-6>\n              <div class="progressBar" >\n                <span class="container"></span>\n                <span class="progressActive" [ngStyle]="{\'width\': + item.team2P}" active-from-left></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n  <!-- goals -->\n  <div class="goals" *ngSwitchCase="\'goals\'" padding>\n    <ion-list>\n      <!-- first team goals -->\n      <ion-item  margin-bottom>\n        <ion-avatar item-left>\n          <img src="assets/imgs/player1.png">\n        </ion-avatar>\n        <span ion-text color="color1">11\'</span>\n        <p ion-text color="dark">Player Name</p>\n        <img src="assets/imgs/referee/ball.png"/>  \n      </ion-item>\n  <!-- ================================================= -->\n      <!-- second team goals -->\n      <ion-item class="secondTeam" margin-bottom >\n        <ion-avatar item-right>\n          <img src="assets/imgs/player2.png">\n        </ion-avatar>\n        <span ion-text color="color1">20\'</span>\n        <p ion-text color="dark">Player Name</p>\n        <img src="assets/imgs/referee/ball.png"/>\n      </ion-item>\n\n  <!-- ================================================= -->\n      <!-- first team goals -->\n      <ion-item  margin-bottom>\n          <ion-avatar item-left>\n            <img src="assets/imgs/player1.png">\n          </ion-avatar>\n          <span ion-text color="color1">23\'</span>\n          <p ion-text color="dark">Player Name</p>\n          <img src="assets/imgs/referee/ball.png"/>\n        </ion-item>\n\n      <!-- first team goals -->\n      <ion-item  margin-bottom>\n          <ion-avatar item-left>\n            <img src="assets/imgs/player1.png">\n          </ion-avatar>\n          <span ion-text color="color1">34\'</span>\n          <p ion-text color="dark">Player Name</p>\n          <img src="assets/imgs/referee/ball.png"/>\n        </ion-item>\n\n    </ion-list>\n  </div>\n\n  <div  *ngSwitchCase="\'timeline\'"> \n    <h4  margin ion-text color="color2">Man of the match</h4>\n    <ion-item class="avatarItem">\n      <ion-avatar item-left>\n        <img src="assets/imgs/player2.png"/>\n      </ion-avatar>\n      <h5 ion-text color="dark">Player Name</h5>\n      <p ion-text color="dark">Arsenal</p>\n      <span ion-text color="color1" class="rateNum" item-right>6</span>\n    </ion-item>\n    <!-- highlights -->\n    <ion-list class="timeLine_list">\n        <ion-item [ngClass]="{\'team2\':item.team ==\'team2\'}" *ngFor="let item of highlights">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-auto>\n                <p ion-text color="color1">{{item.time}}\'</p>\n              </ion-col>\n              <ion-col col-auto>\n                <img src="assets/imgs/referee/{{item.img}}.png">\n              </ion-col>\n              <ion-col col>\n                <!-- for exchange player -->\n                <p ion-text color="color1" *ngIf="item.content2!=\'\'">{{item.content}}</p>\n                <p ion-text color="color2" *ngIf="item.content2!=\'\'">{{item.content2}}</p>\n\n                <!-- for other -->\n                <p ion-text color="dark" *ngIf="item.content2==\'\'">{{item.content}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], MatchDetailsPage);
    return MatchDetailsPage;
}());

//# sourceMappingURL=match-details.js.map

/***/ })

});
//# sourceMappingURL=26.js.map