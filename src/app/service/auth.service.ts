import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = environment.serverUrl
  constructor(private http: HttpClient,private router: Router) { }

  registerUser( payload:any ) {
    return this.http.post(`${this.serverUrl}/api/users`, payload)
  }

  loginUser(payload:any) {
    return this.http.post(`${this.serverUrl}/api/users/login`, payload)
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['auth/login'])
  }
}
