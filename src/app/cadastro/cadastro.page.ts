import { FormBuilder } from '@angular/forms';
import { CadastroPageForm } from './form/cadastro.page.form';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: CadastroPageForm;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  register() {
    this.router.navigate(['perfil']);
  }

  private createForm() {
    this.registerForm = new CadastroPageForm(this.formBuilder);
  }
}
