import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  serverUrl = environment.serverUrl
  constructor(private http: HttpClient) { }


  getAllStocks () {
    return this.http.get(`${this.serverUrl}/api/stocks`)
  }

  createStock(payload:any) {
    return this.http.post(`${this.serverUrl}/api/stocks`,payload)
  }

  updateStock(id:string, payload:any) {
    return this.http.put(`${this.serverUrl}/api/stocks/${id}`,payload)
  }
  deleteStock(id:string) {
    return this.http.delete(`${this.serverUrl}/api/stocks/${id}`)
  }

  getSales(user:any) {
    return this.http.get(`${this.serverUrl}/api/sales`,{
      params:{
        user
      }
    })
  }

  getUsers() {
    return this.http.get(`${this.serverUrl}/api/users`)
  }

  createSale(payload:any) {
    return this.http.post(`${this.serverUrl}/api/sales`,payload)
  }
  deleteSale(id:string) {
    return this.http.delete(`${this.serverUrl}/api/sales/${id}`)
  }

  payForSale(id:string) {
    return this.http.put(`${this.serverUrl}/api/sales/pay/${id}`,{})
  }

  checkStockAvailability(query:any) {
    return this.http.get(`${this.serverUrl}/api/stocks/stock/availability`,{params:query})
  }
}
