import { Component, OnInit } from '@angular/core';
import { AppLibService } from '../Services/app-lib.service';
import { LedgerService } from '../Services/ledger.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(public applib: AppLibService, public ledgerService: LedgerService) { }

  ngOnInit() {
  }

}
