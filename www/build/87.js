webpackJsonp([87],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTeamAssignPageModule", function() { return SettingTeamAssignPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_team_assign__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingTeamAssignPageModule = /** @class */ (function () {
    function SettingTeamAssignPageModule() {
    }
    SettingTeamAssignPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_team_assign__["a" /* SettingTeamAssignPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_team_assign__["a" /* SettingTeamAssignPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], SettingTeamAssignPageModule);
    return SettingTeamAssignPageModule;
}());

//# sourceMappingURL=setting-team-assign.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTeamAssignPage; });
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


var SettingTeamAssignPage = /** @class */ (function () {
    function SettingTeamAssignPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.existingteam = this.navParams.get("team");
        console.log(this.existingteam);
    }
    SettingTeamAssignPage.prototype.ionViewDidLoad = function () {
    };
    SettingTeamAssignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting-team-assign',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-assign/setting-team-assign.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assign {{selectedteam.name}} To: </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          Select Country\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="team.country" (onChange)="onSelectCountry($event)" [items]="countries"\n          itemValueField="id" \n          [canClear]="true"\n          clearButtonText="Clear Selected"\n          confirmButtonText="Proceed"\n          itemTextField="name" \n          [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n\n       <ion-item>\n        <ion-label>\n          Select League\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="team.league" (onChange)="onSelectLeague($event)" [items]="leagues"\n          itemValueField="id"\n          [canClear]="true"\n          clearButtonText="Clear Selected"\n          confirmButtonText="Proceed"\n          itemTextField="name" \n          [canSearch]="true">\n\n        </select-searchable>\n      </ion-item> \n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input type="text" [(ngModel)]="team.name"></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(team)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-assign/setting-team-assign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SettingTeamAssignPage);
    return SettingTeamAssignPage;
}());

//# sourceMappingURL=setting-team-assign.js.map

/***/ })

});
//# sourceMappingURL=87.js.map