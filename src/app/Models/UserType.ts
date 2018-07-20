export class UserType {
  Id: number;
  CompanyId: number;
  Type: string;
  Description: string;

  constructor() {
    this.Id = 0;
    this.CompanyId = 0;
    this.Type = '';
    this.Description = '';
  }
}
