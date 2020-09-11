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