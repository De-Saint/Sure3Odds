export class NewUsers {
  constructor(
    public id: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public referencecode: any,
    public password: string,
    public phone: string,
    public plantype: { id },
    public platform: string,
    public usertype:{id}
  ) { }
}
