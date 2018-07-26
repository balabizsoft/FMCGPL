import { Injectable } from '@angular/core';
import { AppLibService } from './app-lib.service';
import { Ledger } from '../Models/Ledger';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
  constructor(public applib: AppLibService) {}

  saveLedger(ledger: Ledger, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      let d = this.applib.ledgerList.find(x => x.Id === ledger.Id);
      if (!d) {
        d = new Ledger();
        this.applib.ledgerList.push(ledger);
      }
    } else {
      this.applib.con.invoke('').then(x => {
        console.log(x);
        if (ledger.Id === 0) {
          ledger.Id = x;
          this.applib.ledgerList.push(x);
        }
      });
    }
  }

  deleteLedger(ledger: Ledger, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      this.applib.ledgerList = this.applib.ledgerList.filter(
        x => x.Id !== ledger.Id
      );
    } else {
      this.applib.con.invoke('', ledger.Id).then(x => {
        console.log(x);
        if (x === true) {
          alert('deleted');
          this.applib.ledgerList = this.applib.ledgerList.filter(
            y => y.Id !== ledger.Id
          );
        }
      });
    }
  }
}
