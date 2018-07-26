import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { FmcgNavbarComponent } from './fmcg-navbar/fmcg-navbar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AccountGroupComponent } from './account-group/account-group.component';
import { AccountGroupEditComponent } from './account-group-edit/account-group-edit.component';



const route: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'Login' , component: LoginComponent},
  {path: 'Company', component: CompanyDetailComponent},
  {path: 'Menu', component: FmcgNavbarComponent},
  {path: 'DashBoard', component: DashBoardComponent},
  {path: 'AccountGroup', component: AccountGroupComponent},
  {path: 'AccountGroupEdit/:id', component: AccountGroupEditComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
