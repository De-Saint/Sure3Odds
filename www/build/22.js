webpackJsonp([22],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLeaguePageModule", function() { return SelectLeaguePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_league__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLeaguePageModule = /** @class */ (function () {
    function SelectLeaguePageModule() {
    }
    SelectLeaguePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_league__["a" /* SelectLeaguePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_league__["a" /* SelectLeaguePage */]),
            ],
        })
    ], SelectLeaguePageModule);
    return SelectLeaguePageModule;
}());

//# sourceMappingURL=select-league.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLeaguePage; });
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



var SelectLeaguePage = /** @class */ (function () {
    function SelectLeaguePage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.favorites = [
            { img: 'assets/imgs/league/global2.png', name: 'Eroupa League' },
            { img: 'assets/imgs/league/global2.png', name: 'INT - Champions League' },
            { img: 'assets/imgs/league/global2.png', name: 'INT - FIFA Club World Cup' },
        ];
        this.leagues = [
            { img: 'assets/imgs/league/la_liga.png', name: 'La Liga' },
            { img: 'assets/imgs/league/premier_league.png', name: 'Premier League' },
            { img: 'assets/imgs/league/portuguese_league.png', name: 'Portuguese League' },
            { img: 'assets/imgs/league/french_league.png', name: 'French League' },
            { img: 'assets/imgs/league/africa_qualifiers.png', name: 'Africa qualifiers' },
            { img: 'assets/imgs/league/la_liga.png', name: 'La Liga' },
            { img: 'assets/imgs/league/premier_league.png', name: 'Premier League' },
            { img: 'assets/imgs/league/portuguese_league.png', name: 'Portuguese League' },
            { img: 'assets/imgs/league/french_league.png', name: 'French League' },
            { img: 'assets/imgs/league/africa_qualifiers.png', name: 'Africa qualifiers' },
        ];
    }
    SelectLeaguePage.prototype.selectLeague = function (item, $event) {
        $event.stopPropagation();
        var index = this.leagues.indexOf(item);
        if (index > -1) {
            this.leagues.splice(index, 1);
        }
        this.favorites.push(item);
    };
    SelectLeaguePage.prototype.removeLeague = function (item, $event) {
        $event.stopPropagation();
        var index = this.favorites.indexOf(item);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        this.leagues.push(item);
    };
    SelectLeaguePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-league',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/select-league/select-league.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Select League</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!-- favorites list -->\n  <ion-list class="favoriteLeagues" *ngIf="favorites.length > 0">\n    <ion-list-header> \n      <ion-icon name="md-star" color="color1" item-left></ion-icon>\n      <h4 ion-text color="dark">Favorites</h4>\n    </ion-list-header>\n    <!-- league item  -->\n    <ion-item *ngFor="let item of favorites" navPush="LeagueDetailsPage">\n      <img item-left src="{{item.img}}"/>\n      <p ion-text color="dark">{{item.name}}</p>\n      <ion-icon name="md-star" color="color2" item-right (click)="removeLeague(item ,$event)"></ion-icon>\n    </ion-item>  \n  </ion-list>\n\n  <!-- Leagues list -->\n  <ion-list class="favoriteLeagues" margin-top>\n    <ion-list-header> \n      <ion-icon name="md-star" color="color4" item-left></ion-icon>\n      <h4 ion-text color="dark">Staff Picks</h4>\n    </ion-list-header>\n    <!-- league item  -->\n    <ion-item *ngFor="let item of leagues"  navPush="LeagueDetailsPage" >\n      <img item-left src="{{item.img}}"/>\n      <p ion-text color="dark">{{item.name}}</p>\n      <ion-icon name="md-star" color="color4" item-right (click)="selectLeague(item,$event)"></ion-icon>\n    </ion-item>  \n  </ion-list>\n</ion-content>  \n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/select-league/select-league.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], SelectLeaguePage);
    return SelectLeaguePage;
}());

//# sourceMappingURL=select-league.js.map

/***/ })

});
//# sourceMappingURL=22.js.map