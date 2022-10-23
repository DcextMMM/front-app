import { FormBuilder } from '@angular/forms';
import { CadastroPageForm } from './form/cadastro.page.form';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: CadastroPageForm;

  constructor(private service: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  register() {
    this.registerForm.getForm().markAllAsTouched();
    console.log('aso', this.registerForm.getForm());
    this.registerForm.getForm().value.type = 'agronomo';
    // if(this.registerForm.getForm().valid) {
      this.service.register(this.registerForm.getForm().value);
    // }
  }

  private createForm() {
    this.registerForm = new CadastroPageForm(this.formBuilder);
  }
}
