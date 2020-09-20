webpackJsonp([62],{

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-adviser/add-adviser.module": [
		694,
		61
	],
	"../pages/add-user/add-user.module": [
		695,
		60
	],
	"../pages/all-matches/all-matches.module": [
		696,
		59
	],
	"../pages/assign-adviser/assign-adviser.module": [
		697,
		58
	],
	"../pages/contact/contact.module": [
		698,
		57
	],
	"../pages/free-tips/free-tips.module": [
		699,
		56
	],
	"../pages/game-edit/game-edit.module": [
		700,
		14
	],
	"../pages/game-new/game-new.module": [
		701,
		13
	],
	"../pages/games/games.module": [
		702,
		55
	],
	"../pages/guide/guide.module": [
		703,
		54
	],
	"../pages/help/help.module": [
		704,
		53
	],
	"../pages/home/home.module": [
		705,
		52
	],
	"../pages/league-details/league-details.module": [
		706,
		51
	],
	"../pages/match-comments/match-comments.module": [
		707,
		17
	],
	"../pages/match-details/match-details.module": [
		708,
		2
	],
	"../pages/match-votes/match-votes.module": [
		710,
		3
	],
	"../pages/match/match.module": [
		709,
		50
	],
	"../pages/notification/notification.module": [
		711,
		49
	],
	"../pages/old-free-tips/old-free-tips.module": [
		712,
		48
	],
	"../pages/old-games/old-games.module": [
		713,
		47
	],
	"../pages/payment-details/payment-details.module": [
		714,
		46
	],
	"../pages/payment-plantypes/payment-plantypes.module": [
		715,
		45
	],
	"../pages/payment-sets/payment-sets.module": [
		716,
		44
	],
	"../pages/payments/payments.module": [
		717,
		43
	],
	"../pages/photos-details/photos-details.module": [
		718,
		42
	],
	"../pages/photos/photos.module": [
		719,
		41
	],
	"../pages/players-stats/players-stats.module": [
		720,
		40
	],
	"../pages/prediction-add/prediction-add.module": [
		721,
		39
	],
	"../pages/predictions/predictions.module": [
		723,
		38
	],
	"../pages/profile/profile.module": [
		722,
		0
	],
	"../pages/reports/reports.module": [
		755,
		37
	],
	"../pages/search-pop/search-pop.module": [
		724,
		36
	],
	"../pages/select-league/select-league.module": [
		725,
		35
	],
	"../pages/setting-country-add/setting-country-add.module": [
		726,
		16
	],
	"../pages/setting-country-edit/setting-country-edit.module": [
		727,
		15
	],
	"../pages/setting-country/setting-country.module": [
		728,
		34
	],
	"../pages/setting-league-add/setting-league-add.module": [
		729,
		12
	],
	"../pages/setting-league-edit/setting-league-edit.module": [
		730,
		11
	],
	"../pages/setting-league-view/setting-league-view.module": [
		731,
		33
	],
	"../pages/setting-leagues/setting-leagues.module": [
		732,
		32
	],
	"../pages/setting-selection-add/setting-selection-add.module": [
		733,
		9
	],
	"../pages/setting-selection-edit/setting-selection-edit.module": [
		734,
		8
	],
	"../pages/setting-selections/setting-selections.module": [
		735,
		31
	],
	"../pages/setting-team-add/setting-team-add.module": [
		737,
		7
	],
	"../pages/setting-team-assign/setting-team-assign.module": [
		736,
		6
	],
	"../pages/setting-team-edit/setting-team-edit.module": [
		738,
		5
	],
	"../pages/setting-team-manage/setting-team-manage.module": [
		739,
		4
	],
	"../pages/setting-team-view/setting-team-view.module": [
		740,
		30
	],
	"../pages/setting-teams/setting-teams.module": [
		741,
		29
	],
	"../pages/setting/setting.module": [
		743,
		28
	],
	"../pages/sign-in/sign-in.module": [
		742,
		27
	],
	"../pages/sign-up/sign-up.module": [
		744,
		10
	],
	"../pages/subscription-android/subscription-android.module": [
		745,
		1
	],
	"../pages/subscription-ios/subscription-ios.module": [
		746,
		26
	],
	"../pages/team/team.module": [
		747,
		25
	],
	"../pages/teams-stats/teams-stats.module": [
		748,
		24
	],
	"../pages/terms/terms.module": [
		749,
		23
	],
	"../pages/top-news-details/top-news-details.module": [
		750,
		22
	],
	"../pages/top-news/top-news.module": [
		751,
		21
	],
	"../pages/user-details/user-details.module": [
		752,
		20
	],
	"../pages/user-members/user-members.module": [
		753,
		19
	],
	"../pages/user-sub-admins/user-sub-admins.module": [
		754,
		18
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
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl :"http://104.248.162.83/core-api"
    apiUrl: "http://localhost:8081/sure3odds"
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(212);
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
    //-------------------------Game -----Start----------------------------
    GamesProvider.prototype.GetGames = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/user/get", { params: params })
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
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "//games/game/update", game).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteGame = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
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
    GamesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], GamesProvider);
    return GamesProvider;
    var _a;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
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


var Global = /** @class */ (function () {
    function Global(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    // search Popover
    Global.prototype.callSearch = function (myEvent) {
        var popover = this.popoverCtrl.create('SearchPopPage', {}, { cssClass: 'search_Pop' });
        popover.present({
            ev: myEvent
        });
    };
    Global.prototype.getDate = function () {
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
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */], config, {
                    links: [
                        { loadChildren: '../pages/add-adviser/add-adviser.module#AddAdviserPageModule', name: 'AddAdviserPage', segment: 'add-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-adviser/assign-adviser.module#AssignAdviserPageModule', name: 'AssignAdviserPage', segment: 'assign-adviser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-edit/game-edit.module#GameEditPageModule', name: 'GameEditPage', segment: 'game-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-new/game-new.module#GameNewPageModule', name: 'GameNewPage', segment: 'game-new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/league-details/league-details.module#LeagueDetailsPageModule', name: 'LeagueDetailsPage', segment: 'league-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-comments/match-comments.module#MatchCommentsPageModule', name: 'MatchCommentsPage', segment: 'match-comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-votes/match-votes.module#MatchVotesPageModule', name: 'MatchVotesPage', segment: 'match-votes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-free-tips/old-free-tips.module#OldFreeTipsPageModule', name: 'OldFreeTipsPage', segment: 'old-free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/old-games/old-games.module#OldGamesPageModule', name: 'OldGamesPage', segment: 'old-games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-details/payment-details.module#PaymentDetailsPageModule', name: 'PaymentDetailsPage', segment: 'payment-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plantypes/payment-plantypes.module#PaymentPlantypesPageModule', name: 'PaymentPlantypesPage', segment: 'payment-plantypes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-sets/payment-sets.module#PaymentSetsPageModule', name: 'PaymentSetsPage', segment: 'payment-sets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos-details/photos-details.module#PhotosDetailsPageModule', name: 'PhotosDetailsPage', segment: 'photos-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/players-stats/players-stats.module#PlayersStatsPageModule', name: 'PlayersStatsPage', segment: 'players-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prediction-add/prediction-add.module#PredictionAddPageModule', name: 'PredictionAddPage', segment: 'prediction-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-pop/search-pop.module#SearchPopPageModule', name: 'SearchPopPage', segment: 'search-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-league/select-league.module#SelectLeaguePageModule', name: 'SelectLeaguePage', segment: 'select-league', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-add/setting-country-add.module#SettingCountryAddPageModule', name: 'SettingCountryAddPage', segment: 'setting-country-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-edit/setting-country-edit.module#SettingCountryEditPageModule', name: 'SettingCountryEditPage', segment: 'setting-country-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country/setting-country.module#SettingCountryPageModule', name: 'SettingCountryPage', segment: 'setting-country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-add/setting-league-add.module#SettingLeagueAddPageModule', name: 'SettingLeagueAddPage', segment: 'setting-league-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-edit/setting-league-edit.module#SettingLeagueEditPageModule', name: 'SettingLeagueEditPage', segment: 'setting-league-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-view/setting-league-view.module#SettingLeagueViewPageModule', name: 'SettingLeagueViewPage', segment: 'setting-league-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-leagues/setting-leagues.module#SettingLeaguesPageModule', name: 'SettingLeaguesPage', segment: 'setting-leagues', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-add/setting-selection-add.module#SettingSelectionAddPageModule', name: 'SettingSelectionAddPage', segment: 'setting-selection-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-edit/setting-selection-edit.module#SettingSelectionEditPageModule', name: 'SettingSelectionEditPage', segment: 'setting-selection-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selections/setting-selections.module#SettingSelectionsPageModule', name: 'SettingSelectionsPage', segment: 'setting-selections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-assign/setting-team-assign.module#SettingTeamAssignPageModule', name: 'SettingTeamAssignPage', segment: 'setting-team-assign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-add/setting-team-add.module#SettingTeamAddPageModule', name: 'SettingTeamAddPage', segment: 'setting-team-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-edit/setting-team-edit.module#SettingTeamEditPageModule', name: 'SettingTeamEditPage', segment: 'setting-team-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-manage/setting-team-manage.module#SettingTeamManagePageModule', name: 'SettingTeamManagePage', segment: 'setting-team-manage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-view/setting-team-view.module#SettingTeamViewPageModule', name: 'SettingTeamViewPage', segment: 'setting-team-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-teams/setting-teams.module#SettingTeamsPageModule', name: 'SettingTeamsPage', segment: 'setting-teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-android/subscription-android.module#SubscriptionAndroidPageModule', name: 'SubscriptionAndroidPage', segment: 'subscription-android', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-ios/subscription-ios.module#SubscriptionIosPageModule', name: 'SubscriptionIosPage', segment: 'subscription-ios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams-stats/teams-stats.module#TeamsStatsPageModule', name: 'TeamsStatsPage', segment: 'teams-stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news-details/top-news-details.module#TopNewsDetailsPageModule', name: 'TopNewsDetailsPage', segment: 'top-news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-news/top-news.module#TopNewsPageModule', name: 'TopNewsPage', segment: 'top-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-members/user-members.module#UserMembersPageModule', name: 'UserMembersPage', segment: 'user-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admins/user-sub-admins.module#UserSubAdminsPageModule', name: 'UserSubAdminsPage', segment: 'user-sub-admins', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__["SelectSearchableModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_3__angular_core__["NO_ERRORS_SCHEMA"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* Sure3Odds */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__providers_global__["a" /* Global */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_11__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_games_games__["a" /* GamesProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__["a" /* RequestInterceptorProvider */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__["a" /* ErrorInterceptorProvider */], multi: true },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(132);
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

/***/ 692:
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

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sure3Odds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
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
            { icon: 'card', color: 'light', title: 'Payments', component: 'PaymentsPage' },
            { icon: 'podium', color: 'light', title: 'Reports', component: 'ReportsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
        ];
        this.loggedInSubAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
        ];
        this.loggedInMemberPages = [
            { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' }
        ];
        this.otherPages = [
            { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
            { icon: 'at', color: 'light', title: 'Contact Us', component: 'TeamPage' },
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
                    _this.Userfullname = _this.auth.currentUserDataValue.name;
                    _this.usertype = _this.auth.currentUserDataValue.user_type;
                    _this.enableMenu(hasSeenLogin === true, _this.usertype);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"])
    ], Sure3Odds.prototype, "nav", void 0);
    Sure3Odds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/'<ion-menu id="loggedInMemberPages" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInMemberPages" (click)="openPage(p.component)">\n        <ion-icon color="light" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="loggedInSubAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInSubAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="loggedInAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Sure3Odds);
    return Sure3Odds;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenicationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth0_angular_jwt__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var helper = new __WEBPACK_IMPORTED_MODULE_7__auth0_angular_jwt__["a" /* JwtHelperService */]();
var TOKEN_KEY = 'access_token';
var AuthenicationProvider = /** @class */ (function () {
    function AuthenicationProvider(http, storage, toastCtrl) {
        this.http = http;
        this.storage = storage;
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
    AuthenicationProvider.prototype.createNewUser = function (user) {
        console.log(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/create", user)
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
    AuthenicationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], AuthenicationProvider);
    return AuthenicationProvider;
}());

//# sourceMappingURL=authenication.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map