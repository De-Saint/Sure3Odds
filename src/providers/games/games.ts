import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {
   
  }

  GetGames(matchDate: Date) {
    console.log(matchDate);
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get(`${environment.apiUrl}/games/game/get_by_userid`, {params})
      .pipe(map(resp => {
        return resp;
      }));
  }

}
