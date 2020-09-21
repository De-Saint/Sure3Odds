export class Plans {
  constructor(
    public id: string,
    public plantype: { id, name, amount },
    public startDate: string,
    public endDate: String
  ) { }
}
