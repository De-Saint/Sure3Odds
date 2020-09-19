import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseType } from '../interface/response';


@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {

  }

  GetGames(matchDate): Observable<ResponseType> {
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/get_by_userid`, { params })
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
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/teams/get`, {params:params})
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



  //-------------------------Selections -----Start
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

  //-------------------------Selections -----End
}
