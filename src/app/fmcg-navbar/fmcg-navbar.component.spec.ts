
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FmcgNavbarComponent } from './fmcg-navbar.component';

describe('FmcgNavbarComponent', () => {
  let component: FmcgNavbarComponent;
  let fixture: ComponentFixture<FmcgNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [FmcgNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmcgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
