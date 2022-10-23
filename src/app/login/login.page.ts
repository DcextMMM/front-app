import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginPageForm } from './form/login.page.form';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { Login } from '../services/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userLogin: Login[];

  form: FormGroup;
  submitted = false;

  constructor(private service: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    this.submitted = true;
    // if (this.form.valid) {
      this.form.value.type = 'agronomo';
      this.service.userLogin(this.form.value);
    // }
  }
}
