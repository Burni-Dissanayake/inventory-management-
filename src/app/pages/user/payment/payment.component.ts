import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {CommonService} from "../../../service/common.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() public sale:any;
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
  }
  pay() {
    this.service.payForSale(this.sale._id).subscribe(value => {

      this.activeModal.close({load:true})
      Swal.fire(
          'Paymemt Success',
          'Your payment is successfuly done',
          'success'
      )

    })
  }
}
