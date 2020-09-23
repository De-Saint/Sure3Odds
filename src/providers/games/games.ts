import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseType } from '../../interfaces/response';



@Injectable()
export class GamesProvider {
  day: any;
  month: any;
  year: any;
  today: any;
  hour: any;
  minute: any;
  second: any;
  constructor(public http: HttpClient) {

  }
  getDate() {
    this.today = new Date();
    this.day = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();

    if (this.day < 10) {
      this.day = '0' + this.day
    }

    if (this.month < 10) {
      this.month = '0' + this.month
    }
    this.today = this.year + '-' + this.month + '-' + this.day;
    return this.today;
  }
  //-------------------------Game -----Start----------------------------

  GetGames(matchDate): Observable<ResponseType> {
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/user/get`, { params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  GetFreeGames(matchDate): Observable<ResponseType> {
    const params = new HttpParams().set("matchDate", String(matchDate)).set("id", "1");
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/free/get`, { params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  computeOldMatchDate(group) {
    if (group.day_num < 10) {
      group.day_num = '0' + group.day_num
    }
    if (group.month < 10) {
      group.month = '0' + group.month
    }
    var date = group.year + '-' + group.month + '-' + group.day_num;
    return date;
  }
  addGame(game): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/game/add`, game).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  updateGame(game): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/game/update`, game).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  deleteGame(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/game/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  createGame(predictionId, setId, statusId): Observable<ResponseType> {
    const params = new HttpParams()
    .set('predictionId', predictionId)
    .set('setId', setId)
    .set('statusId', statusId);
    console.log(params);
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/game/create`, params).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  //-------------------------Game -----End----------------------------

  //-------------------------Votes -----Start----------------------------
  GetGameVotes(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/vote/get_game_votes/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createVote(vote): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/vote/create`, vote).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  //-------------------------Votes -----End---------------------------------

  //-------------------------Comments -----Start----------------------------
  GetGameComments(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/comment/get_game_comments/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  createComment(comments): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/comment/create`, comments).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  //-------------------------Comments -----End----------------------------

  //-------------------------Countries -----Start----------------------------
  GetCountries(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/getall`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  Getcountries(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/get_all`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  SearchCountries(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  createCountry(country): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/country/create`, country).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  updateCountry(country): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/country/update`, country).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  deleteCountry(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/country/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  GetLeaguesByCountryID(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/leagues/get/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  SearchLeaguesByCountryIDAndName(searchValue, countryId): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('countryId', countryId)
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/leagues/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  //-------------------------Countries -----End----------------------------

  //-------------------------Leagues-----Start----------------------------
  GetLeagues(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/getall`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  SearchLeagues(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  deleteLeague(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/league/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  updateLeague(league): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/league/update`, league).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  createLeague(league): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/league/create`, league).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  GetTeamsByLeagueId(leagueId, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('leagueId', leagueId)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/teams/get`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  SearchTeamsByLeagueIdAndName(searchValue, leagueId, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('leagueId', leagueId)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/teams/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  getTeamsByLeagueId(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/teams/getall/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  //-------------------------Leagues------End----------------------------



  //-------------------------Teams------Start----------------------------
  GetTeams(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/team/getall`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  SearchTeams(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/team/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  updateTeam(team): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/team/update`, team).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  deleteTeam(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/team/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createTeam(team): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/team/create`, team).pipe(
      map((resp: any) => {
        return resp;
      }));
  }



  //-------------------------Selections -----Start-------------------------
  GetSelections(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/selection/getall`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  SearchSelections(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/selection/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  createSelection(selection): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/selection/create`, selection).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  updateSelection(selection): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/selection/update`, selection).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  deleteSelection(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/selection/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  getSelections(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/selection/get_all`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  //-------------------------Selections -----End-----------------------

  //-------------------------Sets------Start----------------------------
  GetSets(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/set/getall`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  //-------------------------Sets -----End-----------------------


  //-------------------------Status------Start----------------------------
  GetStatus(statusType): Observable<ResponseType> {
    const params = new HttpParams()
      .set('statusType', statusType)
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/status/type/get`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  //-------------------------Status -----End-----------------------



  //-------------------------Predictions------Start----------------------------
  CreatePrediction(prediction): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/prediction/create`, prediction).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  GetPredictions(matchDate): Observable<ResponseType> {
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/prediction/get`, { params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  deletePrediction(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/prediction/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  updatePrediction(prediction): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/prediction/update`, prediction).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  //-------------------------Predictions -----End-----------------------


}
