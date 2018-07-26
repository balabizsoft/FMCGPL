import { Injectable } from '@angular/core';
import { CompanyDetail } from '../Models/CompanyDetail';
import { UserAccount } from '../Models/UserAccount';
import { UserType } from '../Models/UserType';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { AppConnection } from '../Models/AppConnection';
import { AccountGroup } from '../Models/AccountGroup';
import { Ledger } from '../Models/Ledger';

@Injectable({
  providedIn: 'root'
})
export class AppLibService {
  con: SignalRConnection;
  loginUser: UserAccount;
  companyName: CompanyDetail = new CompanyDetail();

  companyDetailList: CompanyDetail[];
  userAccountList: UserAccount[];
  userTypeList: UserType[];
  appConnectionList: AppConnection[];
  accountGroupList: AccountGroup[];
  ledgerList: Ledger[];

  // Login
  public GetLoginLocalStorage(): UserAccount {
    const ua: UserAccount = new UserAccount();
    ua.LoginId = localStorage.getItem('LoginId');
    ua.Password = localStorage.getItem('Password');
    ua.Type = localStorage.getItem('UserType');
    ua.CompanyId = JSON.parse(localStorage.getItem('CompanyId'));
    return ua;
  }

  public RemoveLoginLocalStorage() {
    localStorage.removeItem('LoginId');
    localStorage.removeItem('Password');
    localStorage.removeItem('UserType');
  }
  SetLoginLocalStorage() {
    localStorage.setItem('LoginId', this.loginUser.LoginId);
    localStorage.setItem('Password', this.loginUser.Password);
    localStorage.setItem('UserType', this.loginUser.Type);
    localStorage.setItem('CompanyId', JSON.stringify(this.loginUser.CompanyId));
  }

  AutoLogin() {
    const ua: UserAccount = this.GetLoginLocalStorage();
    console.log('Auto Login Start');
    console.log('Login: ', ua);
    this.companyName = this.companyDetailList.find(x => x.Id === ua.CompanyId);
    if (ua.LoginId && ua.Password) {
      this.con
        .invoke(
          'UserAccount_Login',
          this.companyName.CompanyName,
          ua.LoginId,
          ua.Password
        )
        .then(x => {
          console.log(x);
          this.loginUser = x;
          this.loginUser.Password = ua.Password;
          if (this.loginUser !== undefined) {
            console.log('Auto Logined');
          }
        });
    }
    console.log('Auto Login End');
  }

  // SignalR
  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
    console.log(this.con.status);
    this.con.start().then(x => {
      console.log(x);

      this.con.invoke('ListCompanyDetail').then(cd => {
        console.log(cd);
        this.companyDetailList = cd;
        this.AutoLogin();
      });

      this.con.invoke('ListUserAccount').then(ua => {
        console.log(ua);
        this.userAccountList = ua;
      });
      this.con.invoke('ConnectedUsers').then(cu => {
        console.log(cu);
        this.appConnectionList = cu;
      });
      this.con.invoke('AccountGroupList').then(ac => {
        console.log(ac);
        this.accountGroupList = ac;
      });
      this.con.invoke('LedgerList').then(l => {
        console.log(l);
        this.accountGroupList = l;
      });
    });
  }
}
