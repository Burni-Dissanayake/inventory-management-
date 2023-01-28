import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PaymentComponent} from "../payment/payment.component";
import {SocketService} from "../../../service/socket.service";
import {StockAvailabilityComponent} from "../stock-availability/stock-availability.component";

@Component({
  selector: 'app-user-sales',
  templateUrl: './user-sales.component.html',
  styleUrls: ['./user-sales.component.scss']
})
export class UserSalesComponent implements OnInit {
  public sales:any =[]
  constructor(private service: CommonService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUserSales()
  }

  loadUserSales() {
    let user = localStorage.getItem('user');
    this.service.getSales(user).subscribe((value:any) => {
      this.sales = value.response
    })

  }

  payForSale(sale:any) {
    const modalRef = this.modalService.open(PaymentComponent);
    modalRef.componentInstance.sale = sale;
    modalRef.result.then(value => {
      if(value.load) {
        this.loadUserSales();
      }
    })
  }

  getStockAvailability() {
    const modalRef = this.modalService.open(StockAvailabilityComponent);
  }
}
