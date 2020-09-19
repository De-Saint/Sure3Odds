webpackJsonp([108],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueDetailsPageModule", function() { return LeagueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__league_details__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeagueDetailsPageModule = /** @class */ (function () {
    function LeagueDetailsPageModule() {
    }
    LeagueDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__league_details__["a" /* LeagueDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__league_details__["a" /* LeagueDetailsPage */]),
            ],
        })
    ], LeagueDetailsPageModule);
    return LeagueDetailsPageModule;
}());

//# sourceMappingURL=league-details.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeagueDetailsPage = /** @class */ (function () {
    function LeagueDetailsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.itemInBar = ["TABEL", "MATCHES", "NEWS", "STATS", "PHOTOS"];
        this.groups = [
            {
                name: 'Grp.A',
                teams: [
                    { name: 'Liverpool', img: 'assets/imgs/teams/liverpool.png', mp: 6, w: 3, d: 2, l: 1, f: 10, a: 6, p: 11 },
                    { name: 'Villarreal', img: 'assets/imgs/teams/villarreal.png', mp: 6, w: 3, d: 1, l: 2, f: 10, a: 7, p: 10 },
                    { name: 'Braga', img: 'assets/imgs/teams/braga.png', mp: 6, w: 2, d: 2, l: 2, f: 6, a: 6, p: 8 },
                    { name: 'Spartak Moscow', img: 'assets/imgs/teams/spartak_moscow.png', mp: 6, w: 1, d: 1, l: 4, f: 1, a: 8, p: 4 },
                ]
            },
            {
                name: 'Grp.B',
                teams: [
                    { name: 'Liverpool', img: 'assets/imgs/teams/liverpool.png', mp: 6, w: 3, d: 2, l: 1, f: 10, a: 6, p: 11 },
                    { name: 'Villarreal', img: 'assets/imgs/teams/villarreal.png', mp: 6, w: 3, d: 1, l: 2, f: 10, a: 7, p: 10 },
                    { name: 'Braga', img: 'assets/imgs/teams/braga.png', mp: 6, w: 2, d: 2, l: 2, f: 6, a: 6, p: 8 },
                    { name: 'Spartak Moscow', img: 'assets/imgs/teams/spartak_moscow.png', mp: 6, w: 1, d: 1, l: 4, f: 1, a: 8, p: 4 },
                ]
            },
            {
                name: 'Grp.C',
                teams: [
                    { name: 'Liverpool', img: 'assets/imgs/teams/liverpool.png', mp: 6, w: 3, d: 2, l: 1, f: 10, a: 6, p: 11 },
                    { name: 'Villarreal', img: 'assets/imgs/teams/villarreal.png', mp: 6, w: 3, d: 1, l: 2, f: 10, a: 7, p: 10 },
                    { name: 'Braga', img: 'assets/imgs/teams/braga.png', mp: 6, w: 2, d: 2, l: 2, f: 6, a: 6, p: 8 },
                    { name: 'Spartak Moscow', img: 'assets/imgs/teams/spartak_moscow.png', mp: 6, w: 1, d: 1, l: 4, f: 1, a: 8, p: 4 },
                ]
            }
        ];
        this.matches = [
            {
                date: 'Feb 15,2018',
                match: [
                    { firstTeamImg: 'assets/imgs/teams/arsenal.png', firstTeamName: 'Arsenal', next: 'Full Time', time: '19:30', secondTeamImg: 'assets/imgs/teams/bate_borisov.png', secondTeamName: 'Bate Borisov' }
                ]
            },
            {
                date: 'Feb 21,2018',
                match: [
                    { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', next: 'Next Match', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
                    { firstTeamImg: 'assets/imgs/teams/barcelona.png', firstTeamName: 'Barcelona', next: 'Next Match', time: '22:30', secondTeamImg: 'assets/imgs/teams/villarreal.png', secondTeamName: 'Villarreal' },
                    { firstTeamImg: 'assets/imgs/teams/marseille.png', firstTeamName: 'Marseille', next: 'Next Match', time: '22:05', secondTeamImg: 'assets/imgs/teams/braga.png', secondTeamName: 'Braga' },
                    { firstTeamImg: 'assets/imgs/teams/maribor.png', firstTeamName: 'Maribor', next: 'Next Match', time: '18:00', secondTeamImg: 'assets/imgs/teams/lazio.png', secondTeamName: 'Lazio' },
                    { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', next: 'Next Match', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
                ]
            },
            {
                date: 'Feb 22,2018',
                match: [
                    { firstTeamImg: 'assets/imgs/teams/arsenal.png', firstTeamName: 'Arsenal', next: 'Next Match', time: '19:30', secondTeamImg: 'assets/imgs/teams/bate_borisov.png', secondTeamName: 'Bate Borisov' },
                    { firstTeamImg: 'assets/imgs/teams/barcelona.png', firstTeamName: 'Barcelona', next: 'Next Match', time: '22:30', secondTeamImg: 'assets/imgs/teams/villarreal.png', secondTeamName: 'Villarreal' },
                    { firstTeamImg: 'assets/imgs/teams/marseille.png', firstTeamName: 'Marseille', next: 'Next Match', time: '22:05', secondTeamImg: 'assets/imgs/teams/braga.png', secondTeamName: 'Braga' },
                    { firstTeamImg: 'assets/imgs/teams/maribor.png', firstTeamName: 'Maribor', next: 'Next Match', time: '18:00', secondTeamImg: 'assets/imgs/teams/lazio.png', secondTeamName: 'Lazio' },
                    { firstTeamImg: 'assets/imgs/teams/real_madrid.png', firstTeamName: 'Real Madrid', next: 'Next Match', time: '19:30', secondTeamImg: 'assets/imgs/teams/granada.png', secondTeamName: 'Garnada' },
                ]
            },
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
        this.players = [
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '8.4' },
            { title: 'GOALS', img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '6' },
            { title: 'ASSISTS', img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '10' },
            { title: 'MINUTE PER GOAL', img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '6' },
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/player1.png', name: 'Player Name', team: 'Arsenal', num: '8.4' },
            { title: 'GOALS', img: 'assets/imgs/player2.png', name: 'Player Name', team: 'Arsenal', num: '6' },
        ];
        this.teams = [
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:Player Name' },
            { title: 'SHOTS ON TARGRT PR.MATCH', img: 'assets/imgs/teams/barcelona.png', team: 'Barcelona', num: '22', note: 'Total Shots:28' },
            { title: 'ACCURATE PASSES PR.MATCH', img: 'assets/imgs/teams/lazio.png', team: 'Lazio', num: '678', note: 'Pass percentage:90.2' },
            { title: 'POSSESSION', img: 'assets/imgs/teams/Marseille.png', team: 'Marseille', num: '8.5', note: 'Total matches:6' },
            { title: 'BEST AVARAGE RATING', img: 'assets/imgs/teams/arsenal.png', team: 'Arsenal', num: '7.30', note: 'Man of the match:Player Name' },
            { title: 'SHOTS ON TARGRT PR.MATCH', img: 'assets/imgs/teams/barcelona.png', team: 'Barcelona', num: '22', note: 'Total Shots:28' },
            { title: 'ACCURATE PASSES PR.MATCH', img: 'assets/imgs/teams/lazio.png', team: 'Lazio', num: '678', note: 'Pass percentage:90.2' },
            { title: 'POSSESSION', img: 'assets/imgs/teams/Marseille.png', team: 'Marseille', num: '8.5', note: 'Total matches:6' },
        ];
        this.activeBtn = 0;
        this.tit = 'TABEL';
        this.statsTab = 'players';
    }
    LeagueDetailsPage.prototype.changeTab = function (i, title) {
        this.activeBtn = i;
        this.tit = title;
    };
    // go to another page
    LeagueDetailsPage.prototype.goTo = function (page, $event) {
        $event.stopPropagation();
        this.navCtrl.push(page);
    };
    // public clickLike=false;
    LeagueDetailsPage.prototype.like = function ($event, item) {
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
    LeagueDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-league-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/league-details/league-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Europa League</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="scrollingBar">\n    <ion-scroll scrollX="true" scrollY="false" >\n      <p *ngFor="let title of itemInBar ; let i=index" (click)="changeTab(i,title)" [ngClass]="{active: activeBtn == i}" >\n          {{title}}\n      </p>\n    </ion-scroll>\n  </ion-toolbar>\n</ion-header>\n<ion-content [ngSwitch]=\'tit\'>\n\n  <!-- league Tables -->\n  <div *ngSwitchCase="\'TABEL\'">\n    <ion-list class="tabelList" *ngFor="let g of groups">\n      <ion-list-header>\n        {{g.name}}\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <!-- titles -->\n          <ion-row>\n            <ion-col col-3 offset-1>  <h5>Team</h5>  </ion-col>\n            <ion-col col> <p>MP</p> </ion-col>\n            <ion-col col> <p>W</p> </ion-col>\n            <ion-col col> <p>D</p> </ion-col>\n            <ion-col col> <p>L</p> </ion-col>\n            <ion-col col> <p>F</p> </ion-col>\n            <ion-col col> <p>A</p> </ion-col>\n            <ion-col col> <p>P</p> </ion-col>\n          </ion-row>\n          <!-- Teams Info -->\n          <ion-row *ngFor="let team of g.teams">\n            <ion-col col-1 >\n              <img src="{{team.img}}" navPush="TeamPage"/>\n            </ion-col>\n            <ion-col col-3> <p navPush="TeamPage">{{team.name}} </p> </ion-col>\n            <ion-col col> <p>{{team.mp}}</p> </ion-col>\n            <ion-col col> <p>{{team.w}}</p> </ion-col>\n            <ion-col col> <p>{{team.d}}</p> </ion-col>\n            <ion-col col> <p>{{team.l}}</p> </ion-col>\n            <ion-col col> <p>{{team.f}}</p> </ion-col>\n            <ion-col col> <p>{{team.a}}</p> </ion-col>\n            <ion-col col> <p>{{team.p}}</p> </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- matches lists -->\n  <div *ngSwitchCase="\'MATCHES\'" class="leagueMatches" >\n    <ion-list *ngFor="let item of matches">\n      <ion-list-header>\n        {{item.date}}\n      </ion-list-header>\n      <div class="allMatches">\n        <!-- match item  -->\n        <ion-item class="matchItem" *ngFor="let match of item.match" navPush="MatchDetailsPage">\n          <ion-grid>\n            <ion-row>\n              <!-- first team -->\n              <ion-col col>\n                <ion-item (click)="goTo(\'TeamPage\',$event)">\n                  <img src="{{match.firstTeamImg}}" item-right/>\n                  <p text-right>{{match.firstTeamName}}</p>\n                </ion-item>\n              </ion-col>\n              <!-- match time -->\n              <ion-col col-auto>\n                <span ion-text color="color1"  *ngIf="match.next!=\'Full Time\'">{{match.time}}</span>\n                <div class="result" *ngIf="match.next==\'Full Time\'">\n                  <span ion-text color="color1">6</span>\n                  <span ion-text color="color1">-</span>\n                  <span ion-text color="color1">0</span>\n                </div>\n                <p ion-text color="color2">{{match.next}}</p>\n              </ion-col>\n              <!-- second team -->\n              <ion-col col>\n                <ion-item (click)="goTo(\'TeamPage\',$event)">\n                  <img src="{{match.secondTeamImg}}" item-left/>\n                  <p text-left>{{match.secondTeamName}}</p>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n  <!-- news -->\n  <div *ngSwitchCase="\'NEWS\'" padding>\n    <ion-card class="newsCard" *ngFor="let item of lastNews" navPush="TopNewsDetailsPage">\n      <!-- if images in this slide equaled in height please remove class="imgResponsive" from img Tag -->\n      <img class="imgResponsive" src="{{item.img}}"/>\n      <div class="container" text-left>\n        <h4 ion-text color="light">{{item.title}}</h4>\n        <p ion-text color="light">{{item.subTitle}}</p>\n  \n        <ion-grid no-padding class="gridFooter">\n          <ion-row>\n            <ion-col col padding-right>\n              <p ion-text color="light">4 HOURS AGO</p>\n            </ion-col>\n            <!-- users like number -->\n            <ion-col col-auto padding-right>\n              <ion-item (click)="like($event,item)">\n                <ion-icon  item-left color="color2" [name]="item.clickLike ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n                <p ion-text color="light">{{item.numLike}}</p>\n              </ion-item>\n            </ion-col>\n  \n            <!-- user Comment number -->\n            <ion-col col-auto>\n              <ion-item>\n                <ion-icon name="md-text" color="color2" item-left></ion-icon>\n                <p ion-text color="light">160</p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- photos -->\n  <div *ngSwitchCase="\'PHOTOS\'" padding>\n    <ion-list class="lastPhotos">\n      <ion-item class="photoItem" *ngFor="let item of photos" navPush="PhotosDetailsPage">  \n        <!-- if you want this image reponsive in large screen please remove class="imgResponsive" from img Tag  -->\n        <img src="{{item.img}}" class="imgResponsive"/>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto>\n              <h4 ion-text color="dark">{{item.title}}</h4>\n            </ion-col>\n            <ion-col col>\n              <p ion-text color="color2">200 photos</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- League Stats -->\n  <div class="leagueStats" *ngSwitchCase="\'STATS\'"  [ngSwitch]=\'statsTab\'>\n    <!-- tabs -->\n    <ion-segment [(ngModel)]="statsTab">\n      <ion-segment-button value="players">PLAYERS</ion-segment-button>\n      <ion-segment-button value="teams">TEAMS</ion-segment-button>\n    </ion-segment>\n\n    <!-- players stats -->\n    <div *ngSwitchCase="\'players\'">\n      <ion-list *ngFor="let item of players">\n        <ion-list-header>\n          <h5 ion-text color="color2">{{item.title}}</h5>\n          <button ion-button  icon-right clear item-right navPush="PlayersStatsPage">\n            See All\n            <ion-icon class="goal-arrow-right"></ion-icon>\n          </button>\n        </ion-list-header>\n  \n        <ion-item class="avatarItem">\n          <ion-avatar item-left>\n            <!-- player image -->\n            <img src="{{item.img}}"/>\n          </ion-avatar>\n          <!-- player Name -->\n          <h5 ion-text color="dark">{{item.name}}</h5>\n          <!-- player Team -->\n          <p ion-text color="dark">{{item.team}}</p>\n          <!-- goals , assists or rating Number -->\n          <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <!-- Team Stats -->\n    <div *ngSwitchCase="\'teams\'">\n      <ion-list *ngFor="let item of teams">\n        <ion-list-header>\n          <h5 ion-text color="color2">{{item.title}}</h5>\n          <button ion-button  icon-right clear item-right navPush="TeamsStatsPage">\n            See All\n            <ion-icon class="goal-arrow-right"></ion-icon>\n          </button>\n        </ion-list-header>\n  \n        <ion-item class="thumbnailItem" navPush="TeamPage">\n          <ion-thumbnail item-left>\n            <!-- Team image -->\n            <img src="{{item.img}}"/>\n          </ion-thumbnail>\n          <!-- team Name -->\n          <h5 ion-text color="dark">{{item.team}}</h5>\n          <!-- note -->\n          <p ion-text color="dark">{{item.note}}</p>\n          <!-- goals or rating Number -->\n          <span ion-text color="color1" class="rateNum" item-right>{{item.num}}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/league-details/league-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], LeagueDetailsPage);
    return LeagueDetailsPage;
}());

//# sourceMappingURL=league-details.js.map

/***/ })

});
//# sourceMappingURL=108.js.map