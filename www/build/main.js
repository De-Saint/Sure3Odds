webpackJsonp([51],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl :"https://5c0e0c010a54.ngrok.io/sure3odds"
    apiUrl: "http://localhost:8080/sure3odds"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'PaymentDetailsPage';
        this.tab2Root = 'PaymentPlansPage';
        this.tab3Root = 'PaymentPlantypesPage';
        this.tab4Root = 'PaymentSetsPage';
    }
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/payments/payments.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root"  tabTitle="Payments" ></ion-tab>\n  <ion-tab [root]="tab2Root"  tabTitle="Plans" ></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Plan Types" ></ion-tab>\n  <ion-tab [root]="tab4Root"  tabTitle="Sets"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/payments/payments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GeneralReportPage = "ReportGeneralPage";
        this.MonthlyReportPage = "ReportMonthlyPage";
    }
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reports',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/reports/reports.html"*/'<ion-tabs>\n  <ion-tab [root]="GeneralReportPage"  tabTitle="General Reports" ></ion-tab>\n  <ion-tab [root]="MonthlyReportPage"  tabTitle="Monthly Reports"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/reports/reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.CountryPage = "SettingCountryPage";
        this.LeaguePage = "SettingLeaguesPage";
        this.TeamPage = "SettingTeamsPage";
        this.SelectionPage = "SettingSelectionsPage";
    }
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/pages/setting/setting.html"*/'<ion-tabs>\n  <ion-tab [root]="CountryPage"  tabTitle="Countries" ></ion-tab>\n  <ion-tab [root]="LeaguePage"  tabTitle="Leagues" ></ion-tab>\n  <ion-tab [root]="TeamPage"  tabTitle="Teams"></ion-tab>\n  <ion-tab [root]="SelectionPage"  tabTitle="Selections"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-matches/all-matches.module": [
		697,
		47
	],
	"../pages/free-tips/free-tips.module": [
		698,
		46
	],
	"../pages/game-create/game-create.module": [
		700,
		45
	],
	"../pages/game-edit/game-edit.module": [
		699,
		22
	],
	"../pages/game-new/game-new.module": [
		703,
		21
	],
	"../pages/games/games.module": [
		701,
		44
	],
	"../pages/help/help.module": [
		702,
		43
	],
	"../pages/match-comments/match-comments.module": [
		704,
		24
	],
	"../pages/match-details/match-details.module": [
		705,
		42
	],
	"../pages/match-votes/match-votes.module": [
		706,
		6
	],
	"../pages/payment-details/payment-details.module": [
		707,
		41
	],
	"../pages/payment-plans/payment-plans.module": [
		708,
		40
	],
	"../pages/payment-plantype-edit/payment-plantype-edit.module": [
		709,
		13
	],
	"../pages/payment-plantypes/payment-plantypes.module": [
		711,
		39
	],
	"../pages/payment-sets/payment-sets.module": [
		710,
		38
	],
	"../pages/payments/payments.module": [
		712,
		50
	],
	"../pages/prediction-add/prediction-add.module": [
		713,
		12
	],
	"../pages/prediction-edit/prediction-edit.module": [
		715,
		11
	],
	"../pages/predictions/predictions.module": [
		714,
		37
	],
	"../pages/profile/profile.module": [
		716,
		1
	],
	"../pages/report-general/report-general.module": [
		717,
		36
	],
	"../pages/report-monthly/report-monthly.module": [
		718,
		35
	],
	"../pages/reports/reports.module": [
		720,
		49
	],
	"../pages/setting-country-add/setting-country-add.module": [
		719,
		5
	],
	"../pages/setting-country-edit/setting-country-edit.module": [
		721,
		23
	],
	"../pages/setting-country/setting-country.module": [
		722,
		34
	],
	"../pages/setting-league-add/setting-league-add.module": [
		723,
		20
	],
	"../pages/setting-league-edit/setting-league-edit.module": [
		724,
		19
	],
	"../pages/setting-league-view/setting-league-view.module": [
		725,
		33
	],
	"../pages/setting-leagues/setting-leagues.module": [
		728,
		32
	],
	"../pages/setting-selection-add/setting-selection-add.module": [
		726,
		10
	],
	"../pages/setting-selection-edit/setting-selection-edit.module": [
		727,
		9
	],
	"../pages/setting-selections/setting-selections.module": [
		729,
		31
	],
	"../pages/setting-team-add/setting-team-add.module": [
		730,
		4
	],
	"../pages/setting-team-assign/setting-team-assign.module": [
		731,
		8
	],
	"../pages/setting-team-edit/setting-team-edit.module": [
		732,
		0
	],
	"../pages/setting-team-manage/setting-team-manage.module": [
		733,
		7
	],
	"../pages/setting-team-view/setting-team-view.module": [
		734,
		30
	],
	"../pages/setting-teams/setting-teams.module": [
		736,
		29
	],
	"../pages/setting/setting.module": [
		735,
		48
	],
	"../pages/sign-in/sign-in.module": [
		738,
		28
	],
	"../pages/sign-up/sign-up.module": [
		739,
		18
	],
	"../pages/subscription-android/subscription-android.module": [
		740,
		2
	],
	"../pages/subscription-ios/subscription-ios.module": [
		737,
		17
	],
	"../pages/terms/terms.module": [
		742,
		27
	],
	"../pages/user-member-add/user-member-add.module": [
		741,
		16
	],
	"../pages/user-member-edit/user-member-edit.module": [
		745,
		3
	],
	"../pages/user-members/user-members.module": [
		743,
		26
	],
	"../pages/user-sub-admin-add/user-sub-admin-add.module": [
		744,
		15
	],
	"../pages/user-sub-admin-edit/user-sub-admin-edit.module": [
		746,
		14
	],
	"../pages/user-sub-admins/user-sub-admins.module": [
		747,
		25
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesProvider = /** @class */ (function () {
    function GamesProvider(http) {
        this.http = http;
    }
    GamesProvider.prototype.getDate = function () {
        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth() + 1;
        this.year = this.today.getFullYear();
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.today = this.year + '-' + this.month + '-' + this.day;
        return this.today;
    };
    //-------------------------Game -----Start----------------------------
    GamesProvider.prototype.GetGames = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/user/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetFreeGames = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate)).set("id", "1");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/free/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.computeOldMatchDate = function (group) {
        if (group.day_num < 10) {
            group.day_num = '0' + group.day_num;
        }
        if (group.month < 10) {
            group.month = '0' + group.month;
        }
        var date = group.year + '-' + group.month + '-' + group.day_num;
        return date;
    };
    GamesProvider.prototype.addGame = function (game) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/add", game).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateGame = function (game) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/update", game).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteGame = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createGame = function (predictionId, setId, statusId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('predictionId', predictionId)
            .set('setId', setId)
            .set('statusId', statusId);
        console.log(params);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/create", params).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Game -----End----------------------------
    //-------------------------Votes -----Start----------------------------
    GamesProvider.prototype.GetGameVotes = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/vote/get_game_votes/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createVote = function (vote) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/vote/create", vote).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Votes -----End---------------------------------
    //-------------------------Comments -----Start----------------------------
    GamesProvider.prototype.GetGameComments = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/comment/get_game_comments/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createComment = function (comments) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/comment/create", comments).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Comments -----End----------------------------
    //-------------------------Countries -----Start----------------------------
    GamesProvider.prototype.GetCountries = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.Getcountries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/get_all")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchCountries = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createCountry = function (country) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/create", country).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateCountry = function (country) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/update", country).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteCountry = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetLeaguesByCountryID = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/leagues/get/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchLeaguesByCountryIDAndName = function (searchValue, countryId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('countryId', countryId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/leagues/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Countries -----End----------------------------
    //-------------------------Leagues-----Start----------------------------
    GamesProvider.prototype.GetLeagues = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchLeagues = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteLeague = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateLeague = function (league) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/update", league).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createLeague = function (league) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/create", league).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetTeamsByLeagueId = function (leagueId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('leagueId', leagueId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchTeamsByLeagueIdAndName = function (searchValue, leagueId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('leagueId', leagueId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.getTeamsByLeagueId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/getall/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Leagues------End----------------------------
    //-------------------------Teams------Start----------------------------
    GamesProvider.prototype.GetTeams = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchTeams = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateTeam = function (team) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/update", team).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteTeam = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createTeam = function (team) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/create", team).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Selections -----Start-------------------------
    GamesProvider.prototype.GetSelections = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchSelections = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createSelection = function (selection) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/create", selection).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateSelection = function (selection) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/update", selection).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteSelection = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.getSelections = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/get_all")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Selections -----End-----------------------
    //-------------------------Sets------Start----------------------------
    GamesProvider.prototype.GetSets = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/set/getall")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Sets -----End-----------------------
    //-------------------------Status------Start----------------------------
    GamesProvider.prototype.GetStatus = function (statusType) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('statusType', statusType);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/status/type/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Status -----End-----------------------
    //-------------------------Predictions------Start----------------------------
    GamesProvider.prototype.CreatePrediction = function (prediction) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/create", prediction).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetPredictions = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deletePrediction = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updatePrediction = function (prediction) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/update", prediction).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GamesProvider);
    return GamesProvider;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentsProvider = /** @class */ (function () {
    function PaymentsProvider(http) {
        this.http = http;
    }
    PaymentsProvider.prototype.updatePlan = function (userId, plantypeId, platform, transactionObject) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('userId', userId)
            .set('plantypeId', plantypeId)
            .set('platform', platform)
            .set('transactionObject', transactionObject);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plan/update", params).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.GetPayments = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.SearchPayments = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.deletePayment = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------Plan----------Start-------------------
    PaymentsProvider.prototype.GetPlans = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plan/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------Plantype----------Start-------------------
    PaymentsProvider.prototype.updatePlantype = function (plantype) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/update", plantype).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], PaymentsProvider);
    return PaymentsProvider;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_payments_payments__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_reports_reports__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_interceptor_error_interceptor__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_interceptor_request_interceptor__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_games_games__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_http_ngx__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_select_searchable__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_payments_payments__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    backButtonText: '',
    backButtonIcon: 'md-arrow-back',
    iconMode: 'md',
    mode: 'md',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabsPlacement: 'top',
    pageTransition: 'md',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* Sure3Odds */],
                __WEBPACK_IMPORTED_MODULE_2__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_payments_payments__["a" /* PaymentsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* Sure3Odds */], config, {
                    links: [
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-edit/game-edit.module#GameEditPageModule', name: 'GameEditPage', segment: 'game-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-create/game-create.module#GameCreatePageModule', name: 'GameCreatePage', segment: 'game-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-new/game-new.module#GameNewPageModule', name: 'GameNewPage', segment: 'game-new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-comments/match-comments.module#MatchCommentsPageModule', name: 'MatchCommentsPage', segment: 'match-comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-votes/match-votes.module#MatchVotesPageModule', name: 'MatchVotesPage', segment: 'match-votes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-details/payment-details.module#PaymentDetailsPageModule', name: 'PaymentDetailsPage', segment: 'payment-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plans/payment-plans.module#PaymentPlansPageModule', name: 'PaymentPlansPage', segment: 'payment-plans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plantype-edit/payment-plantype-edit.module#PaymentPlantypeEditPageModule', name: 'PaymentPlantypeEditPage', segment: 'payment-plantype-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-sets/payment-sets.module#PaymentSetsPageModule', name: 'PaymentSetsPage', segment: 'payment-sets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plantypes/payment-plantypes.module#PaymentPlantypesPageModule', name: 'PaymentPlantypesPage', segment: 'payment-plantypes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prediction-add/prediction-add.module#PredictionAddPageModule', name: 'PredictionAddPage', segment: 'prediction-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prediction-edit/prediction-edit.module#PredictionEditPageModule', name: 'PredictionEditPage', segment: 'prediction-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-general/report-general.module#ReportGeneralPageModule', name: 'ReportGeneralPage', segment: 'report-general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-monthly/report-monthly.module#ReportMonthlyPageModule', name: 'ReportMonthlyPage', segment: 'report-monthly', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-add/setting-country-add.module#SettingCountryAddPageModule', name: 'SettingCountryAddPage', segment: 'setting-country-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-edit/setting-country-edit.module#SettingCountryEditPageModule', name: 'SettingCountryEditPage', segment: 'setting-country-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country/setting-country.module#SettingCountryPageModule', name: 'SettingCountryPage', segment: 'setting-country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-add/setting-league-add.module#SettingLeagueAddPageModule', name: 'SettingLeagueAddPage', segment: 'setting-league-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-edit/setting-league-edit.module#SettingLeagueEditPageModule', name: 'SettingLeagueEditPage', segment: 'setting-league-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-view/setting-league-view.module#SettingLeagueViewPageModule', name: 'SettingLeagueViewPage', segment: 'setting-league-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-add/setting-selection-add.module#SettingSelectionAddPageModule', name: 'SettingSelectionAddPage', segment: 'setting-selection-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-edit/setting-selection-edit.module#SettingSelectionEditPageModule', name: 'SettingSelectionEditPage', segment: 'setting-selection-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-leagues/setting-leagues.module#SettingLeaguesPageModule', name: 'SettingLeaguesPage', segment: 'setting-leagues', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selections/setting-selections.module#SettingSelectionsPageModule', name: 'SettingSelectionsPage', segment: 'setting-selections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-add/setting-team-add.module#SettingTeamAddPageModule', name: 'SettingTeamAddPage', segment: 'setting-team-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-assign/setting-team-assign.module#SettingTeamAssignPageModule', name: 'SettingTeamAssignPage', segment: 'setting-team-assign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-edit/setting-team-edit.module#SettingTeamEditPageModule', name: 'SettingTeamEditPage', segment: 'setting-team-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-manage/setting-team-manage.module#SettingTeamManagePageModule', name: 'SettingTeamManagePage', segment: 'setting-team-manage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-view/setting-team-view.module#SettingTeamViewPageModule', name: 'SettingTeamViewPage', segment: 'setting-team-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-teams/setting-teams.module#SettingTeamsPageModule', name: 'SettingTeamsPage', segment: 'setting-teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-ios/subscription-ios.module#SubscriptionIosPageModule', name: 'SubscriptionIosPage', segment: 'subscription-ios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-android/subscription-android.module#SubscriptionAndroidPageModule', name: 'SubscriptionAndroidPage', segment: 'subscription-android', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-member-add/user-member-add.module#UserMemberAddPageModule', name: 'UserMemberAddPage', segment: 'user-member-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-members/user-members.module#UserMembersPageModule', name: 'UserMembersPage', segment: 'user-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admin-add/user-sub-admin-add.module#UserSubAdminAddPageModule', name: 'UserSubAdminAddPage', segment: 'user-sub-admin-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-member-edit/user-member-edit.module#UserMemberEditPageModule', name: 'UserMemberEditPage', segment: 'user-member-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admin-edit/user-sub-admin-edit.module#UserSubAdminEditPageModule', name: 'UserSubAdminEditPage', segment: 'user-sub-admin-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admins/user-sub-admins.module#UserSubAdminsPageModule', name: 'UserSubAdminsPage', segment: 'user-sub-admins', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_ionic_select_searchable__["SelectSearchableModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicApp"]],
            schemas: [__WEBPACK_IMPORTED_MODULE_6__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_6__angular_core__["NO_ERRORS_SCHEMA"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* Sure3Odds */],
                __WEBPACK_IMPORTED_MODULE_2__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_payments_payments__["a" /* PaymentsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_http_ngx__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_12__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_games_games__["a" /* GamesProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__providers_request_interceptor_request_interceptor__["a" /* RequestInterceptorProvider */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_3__providers_error_interceptor_error_interceptor__["a" /* ErrorInterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_18__providers_payments_payments__["a" /* PaymentsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptorProvider = /** @class */ (function () {
    function ErrorInterceptorProvider(events) {
        this.events = events;
    }
    ErrorInterceptorProvider.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError.bind(this)));
    };
    ErrorInterceptorProvider.prototype.handleError = function (error) {
        console.log(error.error.message);
        if (parseInt(error.error.status) === 401 || error.error.status === 500) {
            this.events.publish('user:logout');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["_throw"])(error);
    };
    ErrorInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Events"]])
    ], ErrorInterceptorProvider);
    return ErrorInterceptorProvider;
}());

//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptorProvider = /** @class */ (function () {
    function RequestInterceptorProvider(auth) {
        this.auth = auth;
    }
    RequestInterceptorProvider.prototype.intercept = function (request, next) {
        var cloneRequest = this.addToken(request);
        return next.handle(cloneRequest);
    };
    // Adds the token to your headers if it exists
    RequestInterceptorProvider.prototype.addToken = function (request) {
        var currentUser = this.auth.currentUserValue;
        if (currentUser) {
            var token = currentUser.token;
            var clone = void 0;
            clone = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                }
            });
            return clone;
        }
        return request;
    };
    RequestInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authenication_authenication__["a" /* AuthenicationProvider */]])
    ], RequestInterceptorProvider);
    return RequestInterceptorProvider;
}());

//# sourceMappingURL=request-interceptor.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sure3Odds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_payments_payments__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_reports_reports__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









;
var Sure3Odds = /** @class */ (function () {
    function Sure3Odds(storage, platform, events, menu, statusBar, auth, splashScreen) {
        this.storage = storage;
        this.platform = platform;
        this.events = events;
        this.menu = menu;
        this.statusBar = statusBar;
        this.auth = auth;
        this.splashScreen = splashScreen;
        this.version = "1.0.0";
        this.loggedInAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'people', color: 'light', title: 'SubAdmins', component: 'UserSubAdminsPage' },
            { icon: 'people', color: 'light', title: 'Members', component: 'UserMembersPage' },
            { icon: 'football', color: 'light', title: 'Games', component: 'GamesPage' },
            { icon: 'football', color: 'light', title: 'Predictions', component: 'PredictionsPage' },
            { icon: 'card', color: 'light', title: 'Payments', component: __WEBPACK_IMPORTED_MODULE_0__pages_payments_payments__["a" /* PaymentsPage */] },
            { icon: 'podium', color: 'light', title: 'Reports', component: __WEBPACK_IMPORTED_MODULE_2__pages_reports_reports__["a" /* ReportsPage */] },
            { icon: 'build', color: 'light', title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__["a" /* SettingPage */] }
        ];
        this.loggedInSubAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_1__pages_setting_setting__["a" /* SettingPage */] }
        ];
        this.loggedInMemberPages = [
            { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' }
        ];
        this.otherPages = [
            { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
            { icon: 'briefcase', color: 'light', title: 'Terms', component: 'TermsPage' },
            { icon: 'log-out', color: 'danger', title: 'Logout', component: 'SignInPage' }
        ];
        this.animateVarible = false;
        this.initializeApp();
    }
    Sure3Odds.prototype.initializeApp = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.platformReady();
            _this.listenToEvents();
        });
    };
    Sure3Odds.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get('hasSeenLogin') // Check if the user has already seen the LoginPage
                .then(function (hasSeenLogin) {
                if (hasSeenLogin) {
                    if (_this.auth.currentUserDataValue) {
                        _this.Userfullname = _this.auth.currentUserDataValue.name;
                        _this.usertype = _this.auth.currentUserDataValue.user_type;
                        _this.enableMenu(hasSeenLogin === true, _this.usertype);
                    }
                }
                else {
                    _this.rootPage = 'SignInPage';
                }
            });
        });
    };
    Sure3Odds.prototype.listenToEvents = function () {
        var _this = this;
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true, "");
        });
        this.events.subscribe('user:logout', function () {
            _this.nav.setRoot('SignInPage');
            _this.enableMenu(false, "");
            _this.auth.logout();
        });
        this.events.subscribe('user:login', function (usertype, Userfullname) {
            _this.Userfullname = Userfullname;
            _this.usertype = usertype;
            _this.enableMenu(true, usertype);
        });
    };
    Sure3Odds.prototype.enableMenu = function (showmenu, usertype) {
        if (usertype === "Member") {
            this.menu.enable(showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
        }
        else if (usertype === "Admin") {
            this.menu.enable(showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
        }
        else if (usertype === "SubAdmin") {
            this.menu.enable(showmenu, 'loggedInSubAdminMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
        }
    };
    Sure3Odds.prototype.openPage = function (page) {
        this.nav.setRoot(page);
        this.activePage = page;
        this.LogOutFunction(page);
    };
    Sure3Odds.prototype.LogOutFunction = function (page) {
        if (page === 'SignInPage') {
            this.events.publish('user:logout');
            this.nav.setRoot(page);
            this.auth.logout();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Nav"])
    ], Sure3Odds.prototype, "nav", void 0);
    Sure3Odds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/Downloads/Sure3Odds/src/app/app.html"*/'<ion-menu id="loggedInMemberPages" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInMemberPages" (click)="openPage(p.component)">\n        <ion-icon color="light" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="loggedInSubAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInSubAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="loggedInAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Downloads/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Sure3Odds);
    return Sure3Odds;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenicationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http_ngx__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_angular_jwt__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var helper = new __WEBPACK_IMPORTED_MODULE_8__auth0_angular_jwt__["a" /* JwtHelperService */]();
var TOKEN_KEY = 'access_token';
var AuthenicationProvider = /** @class */ (function () {
    function AuthenicationProvider(http, nativeHttp, storage, platform, toastCtrl) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserDataSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('userData')));
        this.currentUserData = this.currentUserDataSubject.asObservable();
    }
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserDataValue", {
        get: function () {
            return this.currentUserDataSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenicationProvider.prototype.hasLoggedIn = function () {
        var _this = this;
        return this.storage.ready().then(function () {
            return _this.storage.get(_this.HAS_LOGGED_IN).then(function (value) {
                return value === true;
            });
        });
    };
    AuthenicationProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok!',
            duration: 4000,
            position: 'bottom',
            cssClass: '#3B7A57',
        });
        toast.present(toast);
    };
    AuthenicationProvider.prototype.CalculatePercentage = function (userAmt) {
        var addedPerc = (parseInt(userAmt) * 0.02);
        var newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    };
    AuthenicationProvider.prototype.onNativeApiCall = function (url, data, apimethod) {
        if (apimethod === "post") {
            alert("hey");
            var nativeCall = this.nativeHttp.post(url, data, {
                "Content-Type": "application/json"
            });
            console.log(JSON.stringify(nativeCall));
            return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
                console.log(JSON.stringify(result));
                return JSON.parse(result.data);
            }));
        }
        // else if (apimethod === "get") {
        //   let nativeCall = this.nativeHttp.get(url, data, {
        //     "Content-Type": "application/json"
        //   });
        //   return from(nativeCall).pipe(
        //     map(result => {
        //       alert(JSON.stringify(result));
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else if (apimethod === "delete") {
        //   let nativeCall = this.nativeHttp.delete(url, data, {
        //     "Content-Type": "application/json"
        //   });
        //   return from(nativeCall).pipe(
        //     map(result => {
        //       alert(JSON.stringify(result));
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else if (apimethod === "put") {
        //   let nativeCall = this.nativeHttp.delete(url, data, {
        //     "Content-Type": "application/json"
        //   });
        //   return from(nativeCall).pipe(
        //     map(result => {
        //       alert(JSON.stringify(result));
        //       return JSON.parse(result.data);
        //     })
        //   )
        // }
    };
    AuthenicationProvider.prototype.onStandardApiCall = function (url, data) {
        return this.http.post(url, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
            return res;
        }));
    };
    AuthenicationProvider.prototype.login2 = function (email, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('email', email)
            .set('password', password);
        var url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticate";
        if (this.platform.is("android") || this.platform.is("ios")) {
            alert(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl);
            return this.onNativeApiCall(url, params, "post").pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
                alert(res.description);
                if (res.statusCode === 200) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                    _this.currentUserSubject.next(res.data);
                    var decoded = helper.decodeToken(res.data.token);
                    sessionStorage.setItem('userData', JSON.stringify(decoded));
                    _this.currentUserDataSubject.next(decoded);
                }
                return res;
            }));
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticate", params)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
                alert(res.description);
                if (res.statusCode === 200) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                    _this.currentUserSubject.next(res.data);
                    var decoded = helper.decodeToken(res.data.token);
                    sessionStorage.setItem('userData', JSON.stringify(decoded));
                    _this.currentUserDataSubject.next(decoded);
                }
                return res;
            }));
        }
    };
    AuthenicationProvider.prototype.login = function (email, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('email', email)
            .set('password', password);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticate", params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
            if (res.statusCode === 200) {
                sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                _this.currentUserSubject.next(res.data);
                var decoded = helper.decodeToken(res.data.token);
                sessionStorage.setItem('userData', JSON.stringify(decoded));
                _this.currentUserDataSubject.next(decoded);
            }
            return res;
        }));
    };
    AuthenicationProvider.prototype.getAllPlantypes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/getall")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.findUserDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/find/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.createNewUser = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/create", user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetUserDeta = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/get")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.deleteMember = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('userData');
        this.currentUserSubject.next(null);
        this.currentUserDataSubject.next(null);
        this.storage.remove(TOKEN_KEY);
        this.storage.remove("hasSeenLogin");
    };
    AuthenicationProvider.prototype.GetUsersByType = function (usertypeId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('usertypeId', usertypeId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/type/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.SearchUsersByType = function (searchValue, usertypeId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('usertypeId', usertypeId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/type/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.updateUser = function (user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/update", user).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------------SubAdmin-------Start-------------------------
    AuthenicationProvider.prototype.createSubAdmin = function (user) {
        console.log(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/subadmin/create", user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.deleteSubAdmin = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/subadmin/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetMonthlyReport = function (selectedDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('selectedDate', selectedDate);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/report/monthly/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetAppReport = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/report/general/get")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.getParameter = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/payments/parameter/get/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_http_ngx__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], AuthenicationProvider);
    return AuthenicationProvider;
}());

//# sourceMappingURL=authenication.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map