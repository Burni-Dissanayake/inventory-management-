import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommonService} from "../../../../service/common.service";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {
  public createStockForm:FormGroup;
  constructor( public activeModal: NgbActiveModal,private fb: FormBuilder, private service: CommonService) {
    this.createStockForm = this.fb.group({
      name: '',
      qty:'',
      unitPrice:''
    });
  }

  ngOnInit(): void {
  }

  creatStock() {
    this.service.createStock(this.createStockForm.value).subscribe(value => {
      this.activeModal.close({load:true})
      Swal.fire(
          'Created !!',
          'Your Stock Created Successfully',
          'success'
      ).then(value1 => {

      })
    },error => {})
  }
}
