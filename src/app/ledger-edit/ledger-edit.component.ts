import { Component, OnInit } from '@angular/core';
import { AppLibService } from '../Services/app-lib.service';
import { Ledger } from '../Models/Ledger';
import { ActivatedRoute } from '@angular/router';
import { LedgerService } from '../Services/ledger.service';
import { AccountGroup } from '../Models/AccountGroup';

@Component({
  selector: 'app-ledger-edit',
  templateUrl: './ledger-edit.component.html',
  styleUrls: ['./ledger-edit.component.css']
})
export class LedgerEditComponent implements OnInit {
ledger: Ledger;
accountGroup: AccountGroup;
  constructor(public applib: AppLibService, public ledgerService: LedgerService, public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.ledger = new Ledger();
      } else {
        this.ledger = this.applib.ledgerList.find(y => y.Id === id);
      }
    });
  }
  ledger_Selection() {
    this.ledger.AccountGroupId = this.accountGroup.Id;
    this.ledger.AccountGroupName = this.accountGroup.GroupName;
  }

}
