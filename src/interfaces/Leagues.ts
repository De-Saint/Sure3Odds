

export class Leagues {
    constructor(
      public name: string,
      public id: string,
      public imageurl: string,
      public country: {id, name, imageurl}
    ) { }
  }
