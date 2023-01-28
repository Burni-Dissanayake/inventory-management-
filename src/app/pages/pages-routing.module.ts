import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";

import {AuthGuardGuard} from "../auth/auth-guard.guard";

import {RegisterComponent} from "../auth/register/register.component";
import {MainComponent} from "./user/main/main.component";
import {UserSalesComponent} from "./user/user-sales/user-sales.component";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {StockComponent} from "./admin/stock/stock.component";
import {SalesComponent} from "./admin/sales/sales.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'user',
    component: MainComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'sales',
        component: UserSalesComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminMainComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'stocks',
        component: StockComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
