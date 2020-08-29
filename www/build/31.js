webpackJsonp([31],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMatchesPageModule", function() { return AllMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_matches__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllMatchesPageModule = /** @class */ (function () {
    function AllMatchesPageModule() {
    }
    AllMatchesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */]),
            ],
        })
    ], AllMatchesPageModule);
    return AllMatchesPageModule;
}());

//# sourceMappingURL=all-matches.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllMatchesPage = /** @class */ (function () {
    function AllMatchesPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.matches = [
            {
                title: 'Favorites',
                items: [
                    { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
                    { firstTeamImg: 'assets/imgs/teams/barcelona.png', firstTeamName: 'Barcelona', time: '22:30', secondTeamImg: 'assets/imgs/teams/villarreal.png', secondTeamName: 'Villarreal FC' },
                ]
            },
            {
                title: 'INT - Champions League',
                items: [
                    { firstTeamImg: 'assets/imgs/teams/liverpool.png', firstTeamName: 'Liverpool', time: '19:30', secondTeamImg: 'assets/imgs/teams/spartak_moscow.png', secondTeamName: 'Spartak Moscow' },
                    { firstTeamImg: 'assets/imgs/teams/maribor.png', firstTeamName: 'Maribor', time: '22:30', secondTeamImg: 'assets/imgs/teams/sevilla.png', secondTeamName: 'Sevilla' },
                ]
            },
            {
                title: 'INT - Fifa Club World Club',
                items: [
                    { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
                    { firstTeamImg: 'assets/imgs/teams/barcelona.png', firstTeamName: 'Barcelona', time: '22:30', secondTeamImg: 'assets/imgs/teams/villarreal.png', secondTeamName: 'Villarreal' },
                ]
            },
        ];
        // calender Function
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.days = [];
        this.myDate = new Date();
        this.year = this.myDate.getFullYear();
        this.month_num = this.myDate.getMonth();
        this.month_name = this.monthNames[this.month_num];
        // click day
        this.shownGroup = 3;
        this.getDaysInMonth(this.month_num, this.year);
        this.isGroupShown(3);
    }
    // increase and decrease month function
    AllMatchesPage.prototype.change_month = function (type) {
        this.shownGroup = null;
        if (type == 'increase') {
            this.month_num = this.month_num + 1;
            if (this.month_num >= 12) {
                this.month_num = 0;
                this.year = this.year + 1;
            }
        }
        else if (type == 'decrease') {
            this.month_num = this.month_num - 1;
            if (this.month_num < 0) {
                this.month_num = 11;
                this.year = this.year - 1;
            }
        }
        this.month_name = this.monthNames[this.month_num];
        this.days = [];
        this.getDaysInMonth(this.month_num, this.year);
    };
    AllMatchesPage.prototype.getDaysInMonth = function (month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month);
        while (date.getMonth() === month) {
            var a = new Date(date);
            var day_num = a.getDate();
            this.days.push({ name: this.days_name[a.getDay()], day_num: day_num });
            date.setDate(date.getDate() + 1);
        }
    };
    AllMatchesPage.prototype.toggleGroup = function (group) {
        this.shownGroup = group;
    };
    ;
    AllMatchesPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    AllMatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all-matches',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>All Matches</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="calendarToolbar">\n    <!-- Calendar  -->\n    <ion-grid class="calendar">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-back" color="light" (click)="change_month(\'decrease\')"></ion-icon>\n        </ion-col>\n        <ion-col col>\n          <p>\n            <span>{{month_name}}</span>,\n            <span>{{year}}</span>\n          </p>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-forward" color="light" (click)="change_month(\'increase\')"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="daysScroll">\n      <ion-scroll scrollX="true" scrollY="false" >\n        <div class="day" *ngFor="let day of days ; let i=index" (click)="toggleGroup(i)" [ngClass]="{\'active\': isGroupShown(i)}" >\n          <p>{{day.name}}</p>\n          <button ion-button clear>{{day.day_num}} </button>\n        </div>\n      </ion-scroll>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n   <!-- matches list -->\n  <ion-list margin-top *ngFor="let item of matches">\n    <ion-list-header>\n      {{item.title}}\n      <ion-icon name="md-star" color="color1" item-left *ngIf="item.title==\'Favorites\'"></ion-icon>\n      <img src="assets/imgs/league/global3.png" item-left *ngIf="item.title!=\'Favorites\'"/>\n    </ion-list-header>\n    <!-- match item  -->\n    <ion-item class="matchItem" *ngFor="let match of item.items">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item navPush="TeamPage">\n              <img src="{{match.firstTeamImg}}" item-right/>\n              <p text-right>{{match.firstTeamName}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <span ion-text color="color1">{{match.time}}</span>\n            <p ion-text color="color2">Next Match</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item navPush="TeamPage">\n              <img src="{{match.secondTeamImg}}" item-left/>\n              <p text-left>{{match.secondTeamName}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], AllMatchesPage);
    return AllMatchesPage;
}());

//# sourceMappingURL=all-matches.js.map

/***/ })

});
//# sourceMappingURL=31.js.map