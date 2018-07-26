import { Component, OnInit } from '@angular/core';
import { AppLibService } from '../Services/app-lib.service';
import { AccountGroupService } from '../Services/account-group.service';
import { AccountGroup } from '../Models/AccountGroup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-group-edit',
  templateUrl: './account-group-edit.component.html',
  styleUrls: ['./account-group-edit.component.css']
})
export class AccountGroupEditComponent implements OnInit {


  accountGroup: AccountGroup;
  constructor(
    public applib: AppLibService,
    public accountGroupService: AccountGroupService,
    public activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.accountGroup = new AccountGroup();
      } else {
        this.accountGroup = this.applib.accountGroupList.find(y => y.Id === id);
      }
    });
  }
  accountGroup_Selection() {
    this.accountGroup.UnderCompanyId = this.accountGroup.Id;
    this.accountGroup.UnderCompanyName = this.accountGroup.GroupName;
  }
}
