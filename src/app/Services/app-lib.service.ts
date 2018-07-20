import { Injectable } from '@angular/core';
import { CompanyDetail } from '../Models/CompanyDetail';
import { UserAccount } from '../Models/UserAccount';
import { UserType } from '../Models/UserType';
import { SignalR, SignalRConnection } from 'ng2-signalr';

@Injectable({
  providedIn: 'root'
})
export class AppLibService {
  companyDetailList: CompanyDetail[];
  userAccountList: UserAccount[];
  userTypeList: UserType[];
  con: SignalRConnection;
  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
    console.log(this.con.status);
    this.con.start().then(x => {
      console.log(x);
      this.con.invoke('').then(cd => {
        console.log(cd);
        this.companyDetailList = cd;
      });
      this.con.invoke('').then(ua => {
        console.log(ua);
        this.userAccountList = ua;
      });
      this.con.invoke('').then(ut => {
        console.log(ut);
        this.userTypeList = ut;
      });
    });
  }
}
