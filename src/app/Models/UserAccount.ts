export class UserAccount {
  Id: number;
  UserTypeId: number;
  LoginId: string;
  Password: string;
  Type: string;
  CompanyId: number;

  constructor() {
    this.Id = 0;
    this.UserTypeId = 0;
    this.LoginId = '';
    this.Password = '';
  }
  }
