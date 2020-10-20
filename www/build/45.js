webpackJsonp([45],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCreatePageModule", function() { return GameCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_create__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GameCreatePageModule = /** @class */ (function () {
    function GameCreatePageModule() {
    }
    GameCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game_create__["a" /* GameCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__game_create__["a" /* GameCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], GameCreatePageModule);
    return GameCreatePageModule;
}());

//# sourceMappingURL=game-create.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_games_games__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameCreatePage = /** @class */ (function () {
    function GameCreatePage(gamesProvider, authProvider, loadingCtrl, navCtrl, navParams) {
        this.gamesProvider = gamesProvider;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedprediction = this.navParams.get("prediction");
        if (this.selectedprediction) {
            this.prediction = this.selectedprediction;
        }
    }
    GameCreatePage.prototype.ionViewWillEnter = function () {
        this.GetSets();
        this.GetStatus();
    };
    GameCreatePage.prototype.onSelectSets = function (event) {
    };
    GameCreatePage.prototype.onSelectStatus = function (event) {
    };
    GameCreatePage.prototype.GetSets = function () {
        var _this = this;
        this.gamesProvider.GetSets()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.sets = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    GameCreatePage.prototype.GetStatus = function () {
        var _this = this;
        this.gamesProvider.GetStatus("Prediction")
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.statuses = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    GameCreatePage.prototype.onSubmit = function (prediction) {
        var _this = this;
        if (prediction.sets) {
            if (prediction.status) {
                var loading_1 = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loading_1.present();
                this.gamesProvider.createGame(prediction.id, prediction.sets.id, prediction.status.id).subscribe(function (res) {
                    loading_1.dismiss().catch(function () { });
                    if (res.statusCode === 200) {
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.authProvider.showToast(res.description);
                    }
                }, function (error) {
                    loading_1.dismiss().catch(function () { });
                    _this.authProvider.showToast(error.error.error);
                });
            }
            else {
                this.authProvider.showToast("Please, select a Set");
            }
        }
        else {
            this.authProvider.showToast("Please, select a Set");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_select_searchable__["SelectSearchableComponent"])
    ], GameCreatePage.prototype, "selectComponent", void 0);
    GameCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-game-create',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/game-create/game-create.html"*/'<ion-header>\n \n  <ion-navbar>\n    <ion-title>Approve Prediction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          Select The Set\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.sets" (onChange)="onSelectSets($event)" [items]="sets"\n          itemValueField="id" [canClear]="true" clearButtonText="Clear Selected" confirmButtonText="Proceed"\n          itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n      <hr ion-text margin-top margin-bottom>\n\n      <ion-item>\n        <ion-label>\n          Select The Status\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.status" (onChange)="onSelectStatus($event)"\n          [items]="statuses" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(prediction)">Submit</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/game-create/game-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], GameCreatePage);
    return GameCreatePage;
}());

//# sourceMappingURL=game-create.js.map

/***/ })

});
//# sourceMappingURL=45.js.map