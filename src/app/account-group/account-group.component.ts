import { Component, OnInit } from '@angular/core';
import { AppLibService } from '../Services/app-lib.service';
import { ActivatedRoute } from '@angular/router';
import { AccountGroup } from '../Models/AccountGroup';
import { AccountGroupService } from '../Services/account-group.service';

@Component({
  selector: 'app-account-group',
  templateUrl: './account-group.component.html',
  styleUrls: ['./account-group.component.css']
})
export class AccountGroupComponent implements OnInit {
  constructor(public applib: AppLibService, public accountGroupService: AccountGroupService) { }

  ngOnInit() {
  }
}
