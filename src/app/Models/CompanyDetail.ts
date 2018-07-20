export class CompanyDetail {
  Id: number;
  CompanyName: string;
  AddressLine1: string;
  AddressLine2: string;
  PostalCode: string;
  MobileNo: string;
  EmailId: string;
  GSTNo: string;
  Website: string;

  constructor() {
    this.Id = 0;
    this.CompanyName = '';
    this.AddressLine1 = '';
    this.AddressLine2 = '';

    this.PostalCode = '';
    this.MobileNo = '';
    this.EmailId = '';
    this.GSTNo = '';
    this.Website = '';
  }
}
