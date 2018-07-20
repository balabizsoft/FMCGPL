import { Injectable } from '@angular/core';
import { CompanyDetail } from '../Models/CompanyDetail';
import { AppLibService } from './app-lib.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {
  constructor(public applib: AppLibService, private router: Router) {
    this.applib.con
      .listenFor<CompanyDetail>('SaveCompanyDetail')
      .subscribe(x => {
        console.log(x);
        this.SaveCompanyDetail(x, '', '', true);
      });
    this.applib.con
      .listenFor<CompanyDetail>('DeleteCompanyDetail')
      .subscribe(x => {
        console.log(x);
        this.DeleteCompanyDetail(x, true);
      });
  }

  SaveCompanyDetail(
    cd: CompanyDetail,
    username: string,
    password: string,
    isservercalled: Boolean = false
  ) {
    if (isservercalled) {
      let d = this.applib.companyDetailList.find(x => x.Id === cd.Id);
      if (!d) {
        d = new CompanyDetail();
        this.applib.companyDetailList = this.applib.companyDetailList.filter(
          x => x.Id !== 0
        );
        this.applib.companyDetailList.push(d);
        this.applib.companyDetailList.push(new CompanyDetail());
      }
      (d.Id = cd.Id), (d.CompanyName = cd.CompanyName);
      d.AddressLine1 = cd.AddressLine1;
      d.AddressLine2 = cd.AddressLine2;

      d.PostalCode = cd.PostalCode;
      d.GSTNo = cd.GSTNo;
      d.MobileNo = cd.MobileNo;
      d.Website = cd.Website;
    } else {
      this.applib.con
        .invoke('SaveCompanyDetail', cd, username, password)
        .then(x => {
          console.log(x);

          cd.Id = x;
          if (x !== 0) {
            this.router.navigate(['Login']);
          }
        });
    }
  }

  DeleteCompanyDetail(cd: CompanyDetail, isservercalled: Boolean = false) {
    if (isservercalled) {
      this.applib.companyDetailList = this.applib.companyDetailList.filter(
        x => x.Id !== cd.Id
      );
    } else {
      this.applib.con.invoke('DeleteCompanyDetail', cd.Id).then(x => {
        console.log(x);
        this.applib.companyDetailList = this.applib.companyDetailList.filter(
          y => y.Id !== cd.Id
        );
      });
    }
  }
}
