webpackJsonp([81],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.lastNews = [
            { img: 'assets/imgs/news2.png', title: 'Real Madrid want to win Club World Cup', subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news1.png', title: 'Real Madrid want to win Club World Cup', subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news3.png', title: 'Real Madrid want to win Club World Cup', subTitle: 'is simply dummy text of the printing and typesetting industry.' }
        ];
        this.matches = [
            { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
            { firstTeamImg: 'assets/imgs/teams/barcelona.png', firstTeamName: 'Barcelona', time: '22:30', secondTeamImg: 'assets/imgs/teams/villarreal.png', secondTeamName: 'Villarreal' },
        ];
        this.clickLike = false;
        this.numLike = 200;
    }
    HomePage.prototype.like = function ($event) {
        $event.stopPropagation();
        if (this.clickLike != true) {
            this.numLike = this.numLike + 1;
            this.clickLike = true;
        }
        else {
            this.numLike = this.numLike - 1;
            this.clickLike = false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/home/home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-slides>\n    <ion-slide *ngFor="let item of lastNews" navPush="TopNewsDetailsPage">\n      <ion-card class="newsCard">\n        <!-- if images in this slide equaled in height please remove class="imgResponsive" from img Tag -->\n        <img class="imgResponsive" src="{{item.img}}"/>\n        <div class="container" text-left>\n          <h4 ion-text color="light">{{item.title}}</h4>\n          <p ion-text color="light">{{item.subTitle}}</p>\n        </div>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div padding>\n    <!-- top news -->\n    <div class="topNews">\n      <ion-item navPush="TopNewsDetailsPage">\n        <ion-thumbnail item-left>\n          <img src="assets/imgs/t1.png"/>\n        </ion-thumbnail>\n        <div>\n          <h5 ion-text color="dark">Real Madrid want to win Club World Cup</h5>\n          <p ion-text color="color4" class="subtitle"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n\n        <ion-grid no-padding class="gridFooter">\n          <ion-row>\n            <ion-col col padding-right>\n              <p ion-text color="color4">4 HOURS AGO</p>\n            </ion-col>\n            <!-- users like number -->\n            <ion-col col-auto padding-right>\n              <ion-item (click)="like($event)">\n                <ion-icon  item-left color="color2" [name]="clickLike ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n                <p ion-text color="color4">{{numLike}}</p>\n              </ion-item>\n            </ion-col>\n\n            <!-- user Comment number -->\n            <ion-col col-auto>\n                <ion-item>\n                  <ion-icon name="md-text" color="color2" item-left></ion-icon>\n                  <p ion-text color="color4">160</p>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <button ion-button clear icon-right float-right class="viewAllBtn" navPush="TopNewsPage">\n        All News\n        <ion-icon class="goal-arrow-right"></ion-icon>\n      </button>\n    </div>\n\n    <!-- matches list -->\n    <ion-list margin-top>\n      <ion-list-header>\n        <button ion-button block clear icon-right float-right class="viewAllBtn"  navPush="AllMatchesPage">\n          All Matches\n          <ion-icon class="goal-arrow-right"></ion-icon>\n        </button>\n      </ion-list-header>\n      <!-- match item  -->\n      <ion-item class="matchItem" *ngFor="let item of matches">\n        <ion-grid>\n          <ion-row>\n            <!-- first team -->\n            <ion-col col>\n              <ion-item navPush="TeamPage">\n                <img src="{{item.firstTeamImg}}" item-right/>\n                <p text-right>{{item.firstTeamName}}</p>\n              </ion-item>\n            </ion-col>\n            <!-- match time -->\n            <ion-col col-auto>\n              <span ion-text color="color1">{{item.time}}</span>\n              <p ion-text color="color2">Next Match</p>\n            </ion-col>\n            <!-- second team -->\n            <ion-col col>\n              <ion-item navPush="TeamPage">\n                <img src="{{item.secondTeamImg}}" item-left/>\n                <p text-left>{{item.secondTeamName}}</p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!-- last photos -->\n    <ion-list class="lastPhotos" margin-top>\n      <ion-list-header>\n        <button ion-button block clear icon-right float-right class="viewAllBtn" navPush="PhotosPage">\n          Photos\n          <ion-icon class="goal-arrow-right"></ion-icon>\n        </button>\n      </ion-list-header>\n      <ion-item class="photoItem" navPush="PhotosDetailsPage" >\n        <!-- if you want this image reponsive in large screen please remove class="imgResponsive" from img Tag  -->\n        <img src="assets/imgs/p001.png" class="imgResponsive"/>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto>\n              <h4 ion-text color="dark">2018 World Cup</h4>\n            </ion-col>\n            <ion-col col>\n              <p ion-text color="color2">200 photos</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=81.js.map