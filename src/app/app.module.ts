import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
  MatFormFieldControl,
  MatFormFieldModule
} from '@angular/material';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SignalRModule, SignalRConfiguration} from 'ng2-signalr';
import { LoginComponent } from './login/login.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { FmcgNavbarComponent } from './fmcg-navbar/fmcg-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AccountGroupComponent } from './account-group/account-group.component';
import { AccountGroupEditComponent } from './account-group-edit/account-group-edit.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgerEditComponent } from './ledger-edit/ledger-edit.component';


export function createConfig(): SignalRConfiguration {
const c = new SignalRConfiguration;
c.hubName = 'FMCGHub';
c.url = 'http://localhost/FMCG.SL';
c.logging = true;

return c;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyDetailComponent,
    MainComponent,
    FmcgNavbarComponent,
    DashBoardComponent,
    AccountGroupComponent,
    AccountGroupEditComponent,
    LedgerComponent,
    LedgerEditComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    SignalRModule.forRoot(createConfig),
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
