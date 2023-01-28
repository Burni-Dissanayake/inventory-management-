import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.loginForm = this.fb.group({
      name: '',
      email:'',
      address:'',
      mobile:'',
      password:''
    });
  }

  ngOnInit(): void {
  }

  login() {
    const payload =  this.loginForm.value;
    this.authService.loginUser(payload).subscribe((value:any )=> {

      localStorage.setItem("isLogged", "true")
      localStorage.setItem("user", value.response.id)
      localStorage.setItem("role", value.response.role)

      if(value.response.role === 'user') {
    this.router.navigate(['user/sales'])
      }else {
        this.router.navigate(['admin/stocks'])
      }

    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Not Authorized',
        text: 'Please validate your credentials and log',
      })
    })
  }
}
