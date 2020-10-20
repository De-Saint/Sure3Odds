webpackJsonp([31],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingSelectionsPageModule", function() { return SettingSelectionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_selections__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingSelectionsPageModule = /** @class */ (function () {
    function SettingSelectionsPageModule() {
    }
    SettingSelectionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_selections__["a" /* SettingSelectionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_selections__["a" /* SettingSelectionsPage */]),
            ],
        })
    ], SettingSelectionsPageModule);
    return SettingSelectionsPageModule;
}());

//# sourceMappingURL=setting-selections.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingSelectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingSelectionsPage = /** @class */ (function () {
    function SettingSelectionsPage(navCtrl, authProvider, actionSheetCtrl, gamesProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.gamesProvider = gamesProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    SettingSelectionsPage.prototype.ionViewWillEnter = function () {
        this.GetSelections();
    };
    SettingSelectionsPage.prototype.GetSelections = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetSelections(0, 20)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.selections = resp.data.content;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.originalselections = _this.selections;
                _this.noselections = 'selections';
            }
            else {
            }
        }, function (error) {
            _this.error = 'none';
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    SettingSelectionsPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.selections = this.originalselections;
        }
        else {
            if (searchvalue.length >= 3) {
                var loading_1 = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loading_1.present();
                this.gamesProvider.SearchSelections(searchvalue, 0, 20)
                    .subscribe(function (resp) {
                    loading_1.dismiss().catch(function () { });
                    if (resp.statusCode === 200) {
                        _this.selections = resp.data.content;
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                    }
                }, function (error) {
                    _this.error = 'none';
                    loading_1.dismiss().catch(function () { });
                });
            }
        }
    };
    SettingSelectionsPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.selections = this.originalselections;
    };
    SettingSelectionsPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.selections = this.originalselections;
    };
    SettingSelectionsPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.gamesProvider.GetSelections(_this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.noselections = 'countries';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.selections.push(resp.data.content[i]);
                    }
                }
                event.complete();
            }, function (error) {
                _this.noselections = 'none';
                event.complete();
            });
        }, 1000);
    };
    SettingSelectionsPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    SettingSelectionsPage.prototype.onSelectionOptions = function (selection) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Selections Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('SettingSelectionEditPage', { selection: selection }); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], SettingSelectionsPage.prototype, "content", void 0);
    SettingSelectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-setting-selections',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-selections/setting-selections.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Selections</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="SettingSelectionAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n  (ionClear)="onClear($event)" (ionInput)="onSearch()">\n</ion-searchbar>\n<div class="leagueStats">\n  <ion-list *ngFor="let selection of selections" (click)="onSelectionOptions(selection)">\n    <ion-item class="thumbnailItem">\n      <h5 ion-text style="padding-left: 0.5em; padding-top: 0.5em; padding-bottom: 0.5em;     height: auto"  color="dark">{{selection.name}}</h5>\n    </ion-item>\n  </ion-list>\n\n</div>\n\n<div class="" *ngIf="error">\n  <p ion-text text-center color="color2">No result found!</p>\n</div>\n<div text-center margin-top margin-bottonm  *ngIf="noselections === \'none\'" (click)="onGotoTop()">\n  <button ion-button  small color="color2">Back to Top</button>\n</div>\n<ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n  <ion-infinite-scroll-content  loadingSpinner="bubbles"\n  loadingText="Loading page {{currentPage}} of {{totalPage}}">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-selections/setting-selections.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], SettingSelectionsPage);
    return SettingSelectionsPage;
}());

//# sourceMappingURL=setting-selections.js.map

/***/ })

});
//# sourceMappingURL=31.js.map