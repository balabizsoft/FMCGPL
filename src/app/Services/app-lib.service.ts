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
  loginUser: UserAccount;

  public RemoveLoginLocalStorage() {
    localStorage.removeItem('LoginId');
    localStorage.removeItem('Password');
    localStorage.removeItem('UserType');
  }
  SetLoginLocalStorage() {
    localStorage.setItem('LoginId', this.loginUser.LoginId);
    localStorage.setItem('Password', this.loginUser.Password);
    localStorage.setItem('UserType', this.loginUser.Type);
    localStorage.setItem('CompanyId', JSON.stringify(this.loginUser.CompanyId) );
  }

  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
    console.log(this.con.status);
    this.con.start().then(x => {
      console.log(x);
      this.con.invoke('ListCompanyDetail').then(cd => {
        console.log(cd);
        this.companyDetailList = cd;
      });

    });
  }
}
