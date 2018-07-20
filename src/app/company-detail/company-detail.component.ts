import { Component, OnInit } from '@angular/core';
import { CompanyDetail } from '../Models/CompanyDetail';
import { UserAccount } from '../Models/UserAccount';
import { CompanyDetailService } from '../Services/company-detail.service';
import { AppLibService } from '../Services/app-lib.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  cd: CompanyDetail = new CompanyDetail();
  ua: UserAccount = new UserAccount();
title: string;

  constructor(public cs: CompanyDetailService, public applib: AppLibService) {
if (!applib.loginUser) {
  this.title = 'Company Registration';
this.cd = new CompanyDetail();
this.ua = new UserAccount();
} else {
  this.title = 'Company Details';
this.cd = this.applib.companyDetailList.find(x => x.Id === applib.loginUser.CompanyId);
this.ua = this.applib.userAccountList.find(y => y.LoginId === applib.loginUser.LoginId);
}
  }
  ngOnInit() {
  }

}
