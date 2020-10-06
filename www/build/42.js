webpackJsonp([42],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchDetailsPageModule", function() { return MatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_details__ = __webpack_require__(791);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */]),
            ],
        })
    ], MatchDetailsPageModule);
    return MatchDetailsPageModule;
}());

//# sourceMappingURL=match-details.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsPage; });
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


var MatchDetailsPage = /** @class */ (function () {
    function MatchDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img2 = "assets/imgs/appicon.png";
        this.match = this.navParams.get("match");
        console.log(this.match);
    }
    MatchDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-match-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Match Details</ion-title>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.hometeam?.imageurl}}" style="border-radius: 50px;" *ngIf="match.hometeam?.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.hometeam?.imageurl" />\n              <p>{{match.hometeam?.name}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">{{match?.hometeamscore}}</span>\n              <span ion-text style="padding: 0.3em;" color="color1">-</span>\n              <span ion-text color="color1">{{match?.awayteamscore}}</span>\n            </div>\n            <p ion-text color="light" text-center>{{match.status?.name}}</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.awayteam?.imageurl}}" style="border-radius: 50px;" *ngIf="match.awayteam?.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.awayteam?.imageurl" />\n              <p>{{match.awayteam?.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-center>\n            <p ion-text color="secondary" style="text-align: center;">{{match.country?.name}} - {{match.league?.name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- match stats -->\n  <div class="matchStats" margin-top>\n \n    <ion-list>\n      <!-- state with percentage -->\n      <ion-item margin-top style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Odds</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.odds}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Prediction</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <p ion-text color="dark" no-margin>{{match.selections?.name}}</p>\n            </ion-col>\n            <ion-col col-4>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Time</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchtime}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Date </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchdate}}</p>\n            </ion-col>\n            <ion-col col-4>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MatchDetailsPage);
    return MatchDetailsPage;
}());

//# sourceMappingURL=match-details.js.map

/***/ })

});
//# sourceMappingURL=42.js.map