import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateStockComponent} from "./create-stock/create-stock.component";
import {UpdateStockComponent} from "./update-stock/update-stock.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stocks:any = []

  constructor(private service: CommonService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.loadStocks();


  }
  createStock() {
    const modalRef = this.modalService.open(CreateStockComponent);

    modalRef.result.then(value => {
      if(value.load) {
        this.loadStocks();
      }
    })

  }

  loadStocks() {
    this.service.getAllStocks().subscribe((response:any) => {
      this.stocks = response.response
    })
  }

  updateStock(stock:any) {
    const modalRef = this.modalService.open(UpdateStockComponent);
    modalRef.componentInstance.stock = stock;
    modalRef.result.then(value => {
      if(value.load) {
        this.loadStocks();
      }
    })

  }

  deleteStock(id:string) {
    Swal.fire({
      title: 'Do you want to delete stock?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deleteStock(id).subscribe(value => {
          this.loadStocks();
        })
      } else if (result.isDenied) {

      }
    })
  }
}
