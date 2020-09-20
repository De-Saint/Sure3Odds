export class Games {
    constructor(
      public awayteam: {id},
      public country: {id},
      public hometeam: {id},
      public league: {id},
      public matchdate: string,
      public selections: {id},
      public matchtime: string,
      public sets: {id},
      public odds:string,
      public id: string,
      public status:{id},
      public hometeamscore:number,
      public awayteamscore:number
    ) { }
  }