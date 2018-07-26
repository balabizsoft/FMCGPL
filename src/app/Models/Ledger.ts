export class Ledger {
  Id: number;
  AccountGroupId: number;
  LedgerName: string;
  PersonInCharge: string;
  AddressLine1: string;
  AddressLine2: string;
  EmailId: string;
  GstNo: string;
  OpeningDr: number;
  OpeningCr: number;
  TelephoneNo: string;
  MobileNo: string;
  AccountGroupName: string;

  constructor() {
    this.Id = 0;
    this.AccountGroupId = null;
    this.LedgerName = '';
    this.PersonInCharge = '';
    this.AddressLine1 = '';
    this.AddressLine2 = '';
    this.EmailId = '';
    this.GstNo = '';
    this.OpeningDr = 0;
    this.OpeningCr = 0;
    this.TelephoneNo = '';
    this.MobileNo = '';
    this.AccountGroupName = null;
  }
}
