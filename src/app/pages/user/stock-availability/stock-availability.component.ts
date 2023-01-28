import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommonService} from "../../../service/common.service";
import {SocketService} from "../../../service/socket.service";

@Component({
  selector: 'app-stock-availability',
  templateUrl: './stock-availability.component.html',
  styleUrls: ['./stock-availability.component.scss']
})
export class StockAvailabilityComponent implements OnInit {
  public stockAvailabilityForm:FormGroup;
  public stocks:any = []
  isStockAvailable = false;
  displayMessage = false
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder, private service: CommonService,
              private socketService: SocketService) {
    this.stockAvailabilityForm = this.fb.group({
      stock: '',
      qty:''
    });
  }

  ngOnInit(): void {
    this.loadStocks()
    this.socketService.listenStockAvailability().subscribe((value:any) => {
      this.displayMessage = true
      this.isStockAvailable = value.availability
    })
  }
  checkStockAvailability() {
    this.service.checkStockAvailability(this.stockAvailabilityForm.value).subscribe()
  }
  loadStocks() {

    this.service.getAllStocks().subscribe((value:any) => {
      this.stocks = value.response
    })
  }
}
