webpackJsonp([11],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionEditPageModule", function() { return PredictionEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prediction_edit__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PredictionEditPageModule = /** @class */ (function () {
    function PredictionEditPageModule() {
    }
    PredictionEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prediction_edit__["a" /* PredictionEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__prediction_edit__["a" /* PredictionEditPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], PredictionEditPageModule);
    return PredictionEditPageModule;
}());

//# sourceMappingURL=prediction-edit.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Predictions; });
var Predictions = /** @class */ (function () {
    function Predictions(awayteam, country, hometeam, league, matchdate, selections, matchtime, odds, id, status, user) {
        this.awayteam = awayteam;
        this.country = country;
        this.hometeam = hometeam;
        this.league = league;
        this.matchdate = matchdate;
        this.selections = selections;
        this.matchtime = matchtime;
        this.odds = odds;
        this.id = id;
        this.status = status;
        this.user = user;
    }
    return Predictions;
}());

//# sourceMappingURL=Predictions.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Predictions__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredictionEditPage = /** @class */ (function () {
    function PredictionEditPage(gamesProvider, authProvider, loadingCtrl, navCtrl, navParams) {
        this.gamesProvider = gamesProvider;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prediction = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Predictions__["a" /* Predictions */]({ id: "" }, { id: "" }, { id: "" }, { id: "" }, "", { id: "" }, "", "", "", { id: "", name: "" }, { id: "", firstname: "", lastname: "" });
        this.selectedprediction = this.navParams.get("prediction");
        if (this.selectedprediction) {
            this.prediction = this.selectedprediction;
            console.log(this.prediction);
        }
    }
    PredictionEditPage.prototype.ionViewWillEnter = function () {
        this.Getcountries();
        this.GetSelections();
    };
    PredictionEditPage.prototype.Getcountries = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.Getcountries()
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.countries = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    PredictionEditPage.prototype.onSelectSelection = function (event) {
        console.log(event.value);
    };
    PredictionEditPage.prototype.onSelectSets = function (event) {
        console.log(event.value);
    };
    PredictionEditPage.prototype.onSelectHTeam = function (event) {
        console.log(event.value);
    };
    PredictionEditPage.prototype.onSelectATeam = function (event) {
        console.log(event.value);
    };
    PredictionEditPage.prototype.onSelectStatus = function (event) {
        console.log(event.value);
    };
    PredictionEditPage.prototype.onSelectCountry = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.prediction.league = null;
        if (event.value.id) {
            loading.present();
            this.gamesProvider.GetLeaguesByCountryID(event.value.id)
                .subscribe(function (resp) {
                loading.dismiss().catch(function () { });
                if (resp.statusCode === 200) {
                    _this.leagues = resp.data;
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
    };
    PredictionEditPage.prototype.onSelectLeague = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.prediction.awayteam = null;
        this.prediction.hometeam = null;
        if (event.value.id) {
            loading.present();
            this.gamesProvider.getTeamsByLeagueId(event.value.id)
                .subscribe(function (resp) {
                loading.dismiss().catch(function () { });
                if (resp.statusCode === 200) {
                    _this.hometeams = resp.data;
                    _this.awayteams = resp.data;
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
    };
    PredictionEditPage.prototype.onSubmit = function (game) {
        var _this = this;
        if (game.country) {
            if (game.league) {
                if (game.selections) {
                    if (game.hometeam && game.awayteam) {
                        if (game.odds) {
                            if (game.matchdate && game.matchtime) {
                                if (game.hometeam !== game.awayteam) {
                                    var loading_1 = this.loadingCtrl.create({
                                        content: "Please wait..."
                                    });
                                    loading_1.present();
                                    this.gamesProvider.updatePrediction(game).subscribe(function (res) {
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
                                    this.authProvider.showToast("Home and Away Team cannot be same.");
                                }
                            }
                            else {
                                this.authProvider.showToast("Please, select either the Match Date or Time");
                            }
                        }
                        else {
                            this.authProvider.showToast("Odds input field is empty");
                        }
                    }
                    else {
                        this.authProvider.showToast("Please, select either Away or Home Team");
                    }
                }
                else {
                    this.authProvider.showToast("Please, select a Prediction");
                }
            }
            else {
                this.authProvider.showToast("Please, select a League");
            }
        }
        else {
            this.authProvider.showToast("Please, select a Country");
        }
    };
    PredictionEditPage.prototype.GetSelections = function () {
        var _this = this;
        this.gamesProvider.getSelections()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.selections = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableComponent"])
    ], PredictionEditPage.prototype, "selectComponent", void 0);
    PredictionEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-prediction-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/prediction-edit/prediction-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Prediction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          Select The Country\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.country" (onChange)="onSelectCountry($event)"\n          [items]="countries" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Select The League\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.league" (onChange)="onSelectLeague($event)"\n          [items]="leagues" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Select The Home Team\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.hometeam" (onChange)="onSelectHTeam($event)"\n          [items]="hometeams" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Select The Away Team\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.awayteam" (onChange)="onSelectATeam($event)"\n          [items]="awayteams" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label>\n          Pick The Selection\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.selections" (onChange)="onSelectSelection($event)"\n          [items]="selections" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n        </select-searchable>\n      </ion-item>\n\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label>\n          Match Date\n        </ion-label>\n        <ion-datetime [(ngModel)]="prediction.matchdate" required displayFormat="YYYY-MM-DD" min="2017"\n          max="2050-12-31">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Match Time\n        </ion-label>\n        <ion-datetime displayFormat="h:mm A" required [(ngModel)]="prediction.matchtime"></ion-datetime>\n      </ion-item>\n\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label stacked>Odds</ion-label>\n        <ion-input type="text" required [(ngModel)]="prediction.odds"></ion-input>\n      </ion-item>\n\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label stacked>Status</ion-label>\n        <ion-input disabled type="text" [(ngModel)]="prediction.status.name"></ion-input>\n      </ion-item>\n\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <h5 ion-text color="dark"><b>Predicted By</b></h5>\n        <p ion-text color="color1"><b>{{prediction.user?.lastname}} {{prediction.user?.firstname}}</b></p>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(prediction)">Submit</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/prediction-edit/prediction-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], PredictionEditPage);
    return PredictionEditPage;
}());

//# sourceMappingURL=prediction-edit.js.map

/***/ })

});
//# sourceMappingURL=11.js.map