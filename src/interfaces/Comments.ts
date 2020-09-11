

export class Comments {

    constructor(
      public comments: string,
      public date: string,
      public time: string,
      public game: {id},
      public id: string,
      public user: {id},
    ) { }
  }
