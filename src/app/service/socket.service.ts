import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }


  listenStockAvailability(): Observable<string> {
    return this.socket.fromEvent('stock-availability');
  }
}
