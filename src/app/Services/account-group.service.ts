import { Injectable } from '@angular/core';
import { AppLibService } from './app-lib.service';
import { Router } from '@angular/router';
import { AccountGroup } from '../Models/AccountGroup';

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {

  constructor(public applib: AppLibService, private router: Router) {
    this.applib.con
      .listenFor<AccountGroup>('AccountGroupSave')
      .subscribe(x => {
        console.log(x);
        this.SaveAccountGroup(x, true);
      });
    this.applib.con
      .listenFor<AccountGroup>('AccountGroupDelete')
      .subscribe(x => {
        console.log(x);
        this.DeleteAccountGroup(x, true);
      });
  }

  SaveAccountGroup(
    accountGroup: AccountGroup,
    isservercalled: Boolean = false
  ) {
    if (isservercalled) {
      let d = this.applib.accountGroupList.find(x => x.Id === accountGroup.Id);
      if (!d) {
        d = new AccountGroup();
        this.applib.accountGroupList = this.applib.accountGroupList.filter(
          x => x.Id !== 0
        );
        this.applib.accountGroupList.push(d);
        this.applib.accountGroupList.push(new AccountGroup());
      }
      d.Id = accountGroup.Id;
      d.CompanyId = accountGroup.CompanyId;
      d.UnderCompanyId = accountGroup.UnderCompanyId;
      d.GroupCode = accountGroup.GroupCode;
      d.GroupName = accountGroup.GroupName;
      d.UnderCompanyName = accountGroup.UnderCompanyName;
    } else {
      this.applib.con
        .invoke('AccountGroupSave', accountGroup)
        .then(x => {
          console.log(x);

          if (accountGroup.Id === 0) {
            accountGroup.Id = x;
            this.applib.accountGroupList.push(accountGroup);
          }
          this.router.navigate(['/AccountGroup']);
        });
    }
  }

  DeleteAccountGroup(accountGroup: AccountGroup, isservercalled: Boolean = false) {
    if (isservercalled) {
      this.applib.accountGroupList = this.applib.accountGroupList.filter(
        x => x.Id !== accountGroup.Id
      );
    } else {
      this.applib.con.invoke('AccountGroupDelete', accountGroup.Id).then(x => {
        console.log(x);
        this.applib.accountGroupList = this.applib.accountGroupList.filter(
          y => y.Id !== accountGroup.Id
        );
      });
    }
  }
}
