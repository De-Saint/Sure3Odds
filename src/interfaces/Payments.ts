export class Payments {
  constructor(
    public id: string,
    public plantype: { id, name, amount },
    public paymentdate: string,
    public paymenttype: string,
    public platform: String,
    public user:{id:"", firstname:"", lastname:""}
  ) { }
}
