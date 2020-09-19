

export class Teams {
    constructor(
      public name: string,
      public id: string,
      public imageurl: string,
      public country: {id, name, imageurl},
      public league: {id, name, imageurl}
    ) { }
  }
