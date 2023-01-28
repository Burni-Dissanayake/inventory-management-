import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateSaleComponent} from "./create-sale/create-sale.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  sales:any = []
  constructor(private service: CommonService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales() {
    this.service.getSales('').subscribe((value:any) => {

      this.sales = value.response;

    })
  }

  createSale() {
    const modelRef = this.modalService.open(CreateSaleComponent)
    modelRef.result.then(value => {
      if (value.load) {
        this.loadSales();
      }
    })
  }

  cancelSale(id:string) {
    Swal.fire({
      title: 'Do you want to cancel the sale?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deleteSale(id).subscribe(value => {
          this.loadSales();
        })
      } else if (result.isDenied) {

      }
    })
  }
}
