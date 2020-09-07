import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseType } from '../interface/response';

export class Votes {

  constructor(
    public awayVote: string,
    public drawVote: string,
    public game: {id},
    public homeVote: string,
    public id: string,
    public userVote: string
  ) { }
}
@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {

  }

  GetGames(matchDate: Date): Observable<ResponseType> {
    console.log(matchDate);
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/get_by_userid`, { params })
      .pipe(map(resp => {
        return resp;
      }));
  }


  GetGameVotes(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/vote/get_game_votes/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createVote(vote): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}//games/vote/create`, vote).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

}
