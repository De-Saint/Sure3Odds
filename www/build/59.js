webpackJsonp([59],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMatchesPageModule", function() { return AllMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_matches__ = __webpack_require__(767);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */]),
            ],
        })
    ], AllMatchesPageModule);
    return AllMatchesPageModule;
}());

//# sourceMappingURL=all-matches.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
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
    function AllMatchesPage(navCtrl, globalProvider, authProvider, gamesProvider) {
        this.navCtrl = navCtrl;
        this.globalProvider = globalProvider;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        // calender Function
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.days = [];
        this.myDate = new Date();
        this.year = this.myDate.getFullYear();
        this.month_num = this.myDate.getMonth();
        this.month_name = this.monthNames[this.month_num];
        this.getDaysInMonth(this.month_num, this.year);
        this.currentDate = this.myDate;
    }
    AllMatchesPage.prototype.ngOnInit = function () {
        var currentdate = this.globalProvider.getDate();
        this.GetGames(currentdate);
        var date = this.myDate.getDate();
        var today = date - 1;
        this.isGroupShown(today);
        this.shownGroup = today;
    };
    AllMatchesPage.prototype.getDaysInMonth = function (month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month);
        while (date.getMonth() === month) {
            var a = new Date(date);
            var day_num = a.getDate();
            this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
            date.setDate(date.getDate() + 1);
        }
    };
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
    AllMatchesPage.prototype.toggleGroup = function (group) {
        this.shownGroup = group;
    };
    AllMatchesPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    AllMatchesPage.prototype.onClick = function (day) {
        this.shownGroup = null;
        var date = this.gamesProvider.computeOldMatchDate(day);
        this.GetGames(date);
        this.month_name = this.monthNames[this.month_num];
        this.days = [];
        this.getDaysInMonth(this.month_num, this.year);
    };
    AllMatchesPage.prototype.GetGames = function (currentdate) {
        var _this = this;
        this.gamesProvider.GetGames(currentdate)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.gamelist = resp.data;
            }
            else {
                console.log(resp.description);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
            _this.authProvider.showToast(error.error.description);
        });
    };
    AllMatchesPage.prototype.GotoMatchDetails = function (page) {
        this.navCtrl.push(page);
    };
    AllMatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-all-matches',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>All Matches</ion-title>\n    <ion-buttons end>\n      <!-- <button ion-button icon-only (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button> -->\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="calendarToolbar">\n    <ion-grid class="calendar">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-back" color="light" (click)="change_month(\'decrease\')"></ion-icon>\n        </ion-col>\n        <ion-col col>\n          <p>\n            <span>{{month_name}}</span>,\n            <span>{{year}}</span>\n          </p>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-forward" color="light" (click)="change_month(\'increase\')"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="daysScroll">\n      <ion-scroll scrollX="true" scrollY="false" >\n        <div class="day" *ngFor="let day of days ; let i=index" (click)="toggleGroup(i)" [ngClass]="{\'active\': isGroupShown(i)}" >\n          <p>{{day.name}}</p>\n          <button ion-button clear (click)="onClick(day)">{{day.day_num}} </button>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <p ion-text text-center no-margin color="light"><b>{{currentDate |  date:\'mediumDate\'}}</b></p>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n   <!-- matches list -->\n   <ion-list margin-top *ngFor="let game of gamelist">\n    <ion-list-header>\n      {{game.title}}\n      <ion-icon name="football" color="color1" item-left></ion-icon>\n    </ion-list-header>\n    <!-- match item  -->\n    <div class="" *ngIf="game.items">\n      <ion-item class="matchItem" *ngFor="let match of game.items"> \n      <ion-grid>\n        <ion-row navPush="MatchPage" [navParams]="match">\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.hometeam.imageurl}}" item-right  *ngIf="match.hometeam.imageurl"/>\n              <img src="assets/imgs/appicon.png"  item-right  *ngIf="!match.hometeam.imageurl"/>\n              <p text-right>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <ion-col col-auto>\n            <span ion-text color="color1">{{match.matchtime}}</span>\n            <p ion-text color="color2" ><b>{{match.odds}}</b></p>\n            <p ion-text color="color2" ><b>{{match.selections.name}}</b></p>\n          </ion-col>\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.awayteam.imageurl}}" item-left *ngIf="match.awayteam.imageurl"/>\n              <img src="assets/imgs/appicon.png" item-left *ngIf="!match.awayteam.imageurl"/>\n              <p text-left>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col> \n        </ion-row> \n       </ion-grid>\n     </ion-item> \n    </div>\n    <div class="" *ngIf="game.msg">\n     <p ion-text text-center color="color2">{{game.msg}}</p> \n    </div>\n     \n  </ion-list>\n   <!-- matches list -->\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1__providers_global__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* GamesProvider */]])
    ], AllMatchesPage);
    return AllMatchesPage;
}());

//# sourceMappingURL=all-matches.js.map

/***/ })

});
//# sourceMappingURL=59.js.map