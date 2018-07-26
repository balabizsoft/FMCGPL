import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerEditComponent } from './ledger-edit.component';

describe('LedgerEditComponent', () => {
  let component: LedgerEditComponent;
  let fixture: ComponentFixture<LedgerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
