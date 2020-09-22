webpackJsonp([40],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPageModule", function() { return PredictionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predictions__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PredictionsPageModule = /** @class */ (function () {
    function PredictionsPageModule() {
    }
    PredictionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__predictions__["a" /* PredictionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__predictions__["a" /* PredictionsPage */]),
            ],
        })
    ], PredictionsPageModule);
    return PredictionsPageModule;
}());

//# sourceMappingURL=predictions.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PredictionsPage = /** @class */ (function () {
    function PredictionsPage(navCtrl, authProvider, gamesProvider, alertCtrl, loadingCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
    }
    PredictionsPage.prototype.ionViewWillEnter = function () {
        var currentdate = this.gamesProvider.getDate();
        this.GetPredictions(currentdate);
    };
    PredictionsPage.prototype.GetPredictions = function (currentdate) {
        var _this = this;
        this.gamesProvider.GetPredictions(currentdate)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.predictionlist = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
            _this.error = '';
        }, function (error) {
            _this.error = error.error.description;
        });
    };
    PredictionsPage.prototype.onGameOption = function (prediction) {
        var usertype = this.authProvider.currentUserDataValue.user_type;
        if (usertype === "Admin") {
            this.AdminActionSheet(prediction);
        }
        else if (usertype === "SubAdmin") {
            this.SubAdminActionSheet(prediction);
        }
    };
    PredictionsPage.prototype.SubAdminActionSheet = function (prediction) {
        var _this = this;
        var subAdminActionSheet = this.actionSheetCtrl.create({
            title: 'Prediction Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('PredictionEditPage', { prediction: prediction }); }
                }, {
                    text: 'Delete',
                    handler: function () { _this.onDeletePrediction(prediction); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        subAdminActionSheet.present();
    };
    PredictionsPage.prototype.AdminActionSheet = function (prediction) {
        var _this = this;
        var adminActionSheet = this.actionSheetCtrl.create({
            title: 'Prediction Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('PredictionEditPage', { prediction: prediction }); }
                }, {
                    text: 'Approve',
                    handler: function () { _this.navCtrl.push('GameCreatePage', { prediction: prediction }); }
                }, {
                    text: 'Delete',
                    handler: function () { _this.onDeletePrediction(prediction); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        adminActionSheet.present();
    };
    PredictionsPage.prototype.onDeletePrediction = function (game) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Prediction',
            message: 'Do you want to delete this prediction?<br/><br/>This is action is irreversible.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        loading.present();
                        _this.gamesProvider.deletePrediction(game.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                var currentdate = _this.gamesProvider.getDate();
                                _this.GetPredictions(currentdate);
                            }
                            else {
                                _this.authProvider.showToast(res.description);
                            }
                        }, function (error) {
                            loading.dismiss().catch(function () { });
                            _this.authProvider.showToast(error.error.description);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    PredictionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-predictions',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/predictions/predictions.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Predictions</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="PredictionAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- matches list -->\n  <div class="gamelist">\n    <ion-list class="">\n      <ion-list-header>\n        <p padding-top>Current Predictions</p>\n        <ion-icon name="football" color="color1" item-left></ion-icon>\n      </ion-list-header>\n      <!-- match item  -->\n      <div class="">\n        <ion-item class="matchItem" *ngFor="let prediction of predictionlist">\n          <ion-grid>\n            <ion-row (click)="onGameOption(prediction)">\n              <ion-col col>\n                <ion-item>\n                  <img src="{{prediction.hometeam.imageurl}}" item-right *ngIf="prediction.hometeam.imageurl" />\n                  <img src="assets/imgs/appicon.png" item-right *ngIf="!prediction.hometeam.imageurl" />\n                  <p text-right>{{prediction.hometeam.name}}</p>\n                </ion-item>\n              </ion-col>\n              <ion-col col-auto >\n                <span ion-text color="color1">{{prediction.matchtime}}</span>\n                <p ion-text color="color2"><b>{{prediction.odds}}</b></p>\n                <p ion-text color="color2"> <b>{{prediction.selections.name}}</b> </p>\n                <p ion-text color="color2">{{prediction.status.name}}</p>\n              </ion-col>\n              <ion-col col>\n                <ion-item>\n                  <img src="{{prediction.awayteam.imageurl}}" item-left *ngIf="prediction.awayteam.imageurl" />\n                  <img src="assets/imgs/appicon.png" item-left *ngIf="!prediction.awayteam.imageurl" />\n                  <p text-left>{{prediction.awayteam.name}}</p>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n      <div class="" *ngIf="error">\n        <p ion-text text-center color="color2">{{error}}</p>\n      </div>\n\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/predictions/predictions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], PredictionsPage);
    return PredictionsPage;
}());

//# sourceMappingURL=predictions.js.map

/***/ })

});
//# sourceMappingURL=40.js.map