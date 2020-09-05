webpackJsonp([8],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamPageModule = /** @class */ (function () {
    function TeamPageModule() {
    }
    TeamPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */]),
            ],
        })
    ], TeamPageModule);
    return TeamPageModule;
}());

//# sourceMappingURL=team.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
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



var TeamPage = /** @class */ (function () {
    function TeamPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.itemInBar = ["MATCHES", "NEWS", "STATS", "SQUAD", "PHOTOS"];
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
        this.lastNews = [
            { img: 'assets/imgs/news2.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news1.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news3.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news2.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news1.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news3.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' }
        ];
        this.photos = [
            { img: 'assets/imgs/p001.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p002.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p003.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p001.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p002.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p003.png', title: '2018 World Cup' },
        ];
        this.teamStats = [
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:Player Name' },
            { title: 'SHOTS ON TARGRT PR.MATCH', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '22', note: 'Total Shots:28' },
            { title: 'ACCURATE PASSES PR.MATCH', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '678', note: 'Pass percentage:90.2' },
            { title: 'POSSESSION', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '8.5', note: 'Total matches:6' },
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:Player Name' },
            { title: 'SHOTS ON TARGRT PR.MATCH', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '22', note: 'Total Shots:28' },
            { title: 'ACCURATE PASSES PR.MATCH', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '678', note: 'Pass percentage:90.2' },
            { title: 'POSSESSION', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '8.5', note: 'Total matches:6' },
        ];
        this.teamSquad = [
            {
                title: 'Coach',
                items: [
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                ]
            },
            {
                title: 'GoalKeepers',
                items: [
                    { img: 'assets/imgs/player3.png', name: 'Player Name' },
                    { img: 'assets/imgs/player3.png', name: 'Player Name' },
                    { img: 'assets/imgs/player3.png', name: 'Player Name' },
                ]
            },
            {
                title: 'Defenders',
                items: [
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                ]
            },
            {
                title: 'Midfielder',
                items: [
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                ]
            },
            {
                title: 'Forward',
                items: [
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                    { img: 'assets/imgs/player2.png', name: 'Player Name' },
                ]
            },
        ];
        this.activeBtn = 0;
        this.tit = 'MATCHES';
        this.favoriteTeam = false;
    }
    TeamPage.prototype.changeTab = function (i, title) {
        this.activeBtn = i;
        this.tit = title;
    };
    // like function
    TeamPage.prototype.like = function ($event, item) {
        $event.stopPropagation();
        console.log(item.numLike);
        if (item.clickLike != true) {
            item.numLike = item.numLike + 1;
            item.clickLike = true;
        }
        else {
            item.numLike = item.numLike - 1;
            item.clickLike = false;
        }
    };
    TeamPage.prototype.addFavoriteTeam = function () {
        this.favoriteTeam = (this.favoriteTeam != true) ? true : false;
    };
    TeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-team',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/team/team.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Arsenal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="addFavoriteTeam()">\n        <ion-icon [name]="favoriteTeam ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="scrollingBar">\n    <ion-scroll scrollX="true" scrollY="false" >\n      <p *ngFor="let title of itemInBar ; let i=index" (click)="changeTab(i,title)" [ngClass]="{active: activeBtn == i}" >\n          {{title}}\n      </p>\n    </ion-scroll>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [ngSwitch]=\'tit\' >\n\n  <!-- Team Matches -->\n  <div class="teamMatchs" *ngSwitchCase="\'MATCHES\'">\n    <ion-list >\n      <ion-item class="thumbnailItem" *ngFor="let item of teams" navPush="MatchDetailsPage">\n        <ion-thumbnail item-left>\n          <!-- Team image -->\n          <img src="{{item.img}}" navPush="TeamPage"/>\n        </ion-thumbnail>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <!-- team Name -->\n              <h5 ion-text color="dark" navPush="TeamPage">{{item.team}}</h5>\n              <!-- League Name -->\n              <p ion-text color="dark">{{item.league}}</p>\n            </ion-col>\n            <ion-col col-6>\n              <p ion-text color="dark">Dec 13,2017</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- Time -->\n        <div class="matchTime" item-right  *ngIf="item.result==\'\'">\n          <span ion-text color="color1">{{item.time}}</span>\n          <p ion-text color="color2">Next Match</p>\n        </div>\n        <!-- Time -->\n        <div class="matchResult" item-right *ngIf="item.result!=\'\'">\n            <span ion-text color="color1"  >{{item.result}}</span>\n          <p ion-text color="color2">Full Time</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!--Team news -->\n  <div *ngSwitchCase="\'NEWS\'" padding>\n    <ion-card class="newsCard" *ngFor="let item of lastNews" navPush="TopNewsDetailsPage">\n      <!-- if images in this slide equaled in height please remove class="imgResponsive" from img Tag -->\n      <img class="imgResponsive" src="{{item.img}}"/>\n      <div class="container" text-left>\n        <h4 ion-text color="light">{{item.title}}</h4>\n        <p ion-text color="light">{{item.subTitle}}</p>\n  \n        <ion-grid no-padding class="gridFooter">\n          <ion-row>\n            <ion-col col padding-right>\n              <p ion-text color="light">4 HOURS AGO</p>\n            </ion-col>\n            <!-- users like number -->\n            <ion-col col-auto padding-right>\n              <ion-item (click)="like($event,item)">\n                <ion-icon  item-left color="color2" [name]="item.clickLike ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n                <p ion-text color="light">{{item.numLike}}</p>\n              </ion-item>\n            </ion-col>\n  \n            <!-- user Comment number -->\n            <ion-col col-auto>\n              <ion-item>\n                <ion-icon name="md-text" color="color2" item-left></ion-icon>\n                <p ion-text color="light">160</p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- Team Stats -->\n  <div *ngSwitchCase="\'STATS\'" class="leagueStats">\n    <ion-list *ngFor="let item of teamStats">\n      <ion-list-header>\n        <h5 ion-text color="color2">{{item.title}}</h5>\n      </ion-list-header>\n\n      <ion-item class="thumbnailItem">\n        <ion-thumbnail item-left>\n          <!-- Team image -->\n          <img src="{{item.img}}"/>\n        </ion-thumbnail>\n        <!-- team Name -->\n        <h5 ion-text color="dark">{{item.team}}</h5>\n        <!-- note -->\n        <p ion-text color="dark">{{item.note}}</p>\n        <!-- goals or rating Number -->\n        <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!--Team Squad  -->\n  <div class="squad" *ngSwitchCase="\'SQUAD\'">\n    <ion-list *ngFor="let x of teamSquad">\n      <ion-list-header>\n        <h5 ion-text color="color2">{{x.title}}</h5>\n      </ion-list-header>\n      <ion-item class="avatarItem"  margin-bottom *ngFor="let item of x.items">\n        <ion-avatar item-left>\n          <img src="{{item.img}}">\n        </ion-avatar>\n        <h5 ion-text color="dark">{{item.name}}</h5> \n      </ion-item>\n    </ion-list>\n  </div>\n  <!--Team photos -->\n  <div *ngSwitchCase="\'PHOTOS\'" padding>\n    <ion-list class="lastPhotos">\n      <ion-item class="photoItem" *ngFor="let item of photos" navPush="PhotosDetailsPage">  \n        <!-- if you want this image reponsive in large screen please remove class="imgResponsive" from img Tag  -->\n        <img src="{{item.img}}" class="imgResponsive"/>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto>\n              <h4 ion-text color="dark">{{item.title}}</h4>\n            </ion-col>\n            <ion-col col>\n              <p ion-text color="color2">200 photos</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/team/team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], TeamPage);
    return TeamPage;
}());

//# sourceMappingURL=team.js.map

/***/ })

});
//# sourceMappingURL=8.js.map