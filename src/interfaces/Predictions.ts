export class Predictions {
    constructor(
      public awayteam: {id},
      public country: {id},
      public hometeam: {id},
      public league: {id},
      public matchdate: string,
      public selections: {id},
      public matchtime: string,
      public odds:string,
      public id: string,
      public status:{id, name},
      public user:{id, firstname, lastname}
    ) { }
  }