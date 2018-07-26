import { Injectable } from '@angular/core';
import { AppLibService } from './app-lib.service';
import { Ledger } from '../Models/Ledger';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  constructor(public applib: AppLibService, private router: Router) {
    this.applib.con
      .listenFor<Ledger>('LedgerSave')
      .subscribe(x => {
        console.log(x);
        this.SaveLedger(x, true);
      });
    this.applib.con
      .listenFor<Ledger>('LedgerDelete')
      .subscribe(x => {
        console.log(x);
        this.DeleteLedger(x, true);
      });
  }

  SaveLedger(
    ledger: Ledger,
    isservercalled: Boolean = false
  ) {
    if (isservercalled) {
      let d = this.applib.ledgerList.find(x => x.Id === ledger.Id);
      if (!d) {
        d = new Ledger();
        this.applib.ledgerList = this.applib.ledgerList.filter(
          x => x.Id !== 0
        );
        this.applib.ledgerList.push(d);
        this.applib.ledgerList.push(new Ledger());
      }
      d.Id = ledger.Id;
      d.AddressLine1 = ledger.AddressLine1;
      d.AddressLine2 = ledger.AddressLine2;
      d.EmailId = ledger.EmailId;
      d.GstNo = ledger.GstNo;
      d.LedgerName = ledger.LedgerName;
      d.MobileNo = ledger.MobileNo;
      d.PersonInCharge = ledger.PersonInCharge;
      d.OpeningCr = ledger.OpeningCr;
      d.OpeningDr = ledger.OpeningDr;
    } else {
      this.applib.con
        .invoke('LedgerSave', ledger)
        .then(x => {
          console.log(x);


          if (ledger.Id === 0) {
            ledger.Id = x;
            this.applib.ledgerList.push(ledger);

          }
          this.router.navigate(['/Ledger']);
        });
    }
  }

  DeleteLedger(ledger: Ledger, isservercalled: Boolean = false) {
    if (isservercalled) {
      this.applib.ledgerList = this.applib.ledgerList.filter(
        x => x.Id !== ledger.Id
      );
    } else {
      this.applib.con.invoke('LedgerDelete', ledger.Id).then(x => {
        console.log(x);
        this.applib.ledgerList = this.applib.ledgerList.filter(
          y => y.Id !== ledger.Id
        );
      });
    }
  }
}
