import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import Swal from 'sweetalert2'
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.registerForm = this.fb.group({
      name: '',
      email:'',
      address:'',
      mobile:'',
      password:''
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    const registerUser = this.registerForm.value

    this.authService.registerUser(registerUser).subscribe(value => {
      Swal.fire(
          'Registration Success',
          'Please do login',
          'success'
      ).then(value1 => {
        this.router.navigate(['auth/login'])
      })
    },error => {

    })

  }
}
