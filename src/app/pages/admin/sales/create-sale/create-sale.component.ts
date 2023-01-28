import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommonService} from "../../../../service/common.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss']
})
export class CreateSaleComponent implements OnInit {

  public createSaleForm:FormGroup;
  public users:any = []
  public stocks:any = []
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder, private service: CommonService) {
    this.createSaleForm = this.fb.group({
      user:'',
      stock: '',
      qty:''
    });
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadStocks();
  }


  loadUsers() {
    this.service.getUsers().subscribe((value:any) => {
      this.users = value.response
    })
  }

  loadStocks() {
    this.service.getAllStocks().subscribe((value:any) => {
      this.stocks = value.response
    })
  }

  createSale() {

    this.service.createSale(this.createSaleForm.value).subscribe(value => {
      this.activeModal.close({load:true})
      Swal.fire(
          'Created !!',
          'Your Stock Created Successfully',
          'success'
      ).then(value1 => {

      })
    },error => {
      Swal.fire(
          'Opps',
          error.error.response,
          'error'
      ).then(value1 => {

      })
    })
  }
}
