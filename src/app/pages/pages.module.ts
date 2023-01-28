import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {UserSalesComponent} from "./user/user-sales/user-sales.component";
import {MainComponent} from "./user/main/main.component";
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { StockComponent } from './admin/stock/stock.component';
import { CreateStockComponent } from './admin/stock/create-stock/create-stock.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateStockComponent } from './admin/stock/update-stock/update-stock.component';
import { SalesComponent } from './admin/sales/sales.component';
import { CreateSaleComponent } from './admin/sales/create-sale/create-sale.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { PaymentComponent } from './user/payment/payment.component';
import { StockAvailabilityComponent } from './user/stock-availability/stock-availability.component';



@NgModule({
  declarations: [
    UserSalesComponent,
    MainComponent,
    AdminMainComponent,
    StockComponent,
    CreateStockComponent,
    UpdateStockComponent,
    SalesComponent,
    CreateSaleComponent,
    PaymentComponent,
    StockAvailabilityComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        NgbPaginationModule
    ]
})
export class PagesModule { }
