import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommonService} from "../../../../service/common.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  @Input() public stock:any;
  public updateStockForm:FormGroup;
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder, private service: CommonService) {
    this.updateStockForm = this.fb.group({
      name: '',
      qty:'',
      unitPrice:''
    });

  }

  ngOnInit(): void {
    this.updateStockForm = this.fb.group({
      name: this.stock.name,
      qty:this.stock.qty,
      unitPrice:this.stock.unitPrice
    });

  }

  updateStock() {


    this.service.updateStock(this.stock._id, this.updateStockForm.value).subscribe(value => {
      this.activeModal.close({load:true})
      Swal.fire(
          'Updated !!',
          'Your Stock Updated Successfully',
          'success'
      )
    })
  }

}
