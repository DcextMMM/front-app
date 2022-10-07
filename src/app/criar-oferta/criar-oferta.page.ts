import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CriarOfertaPageForm } from './form/criar-oferta.page.form';

@Component({
  selector: 'app-criar-oferta',
  templateUrl: './criar-oferta.page.html',
  styleUrls: ['./criar-oferta.page.scss'],
})
export class CriarOfertaPage implements OnInit {

  criarForm: CriarOfertaPageForm;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  criar() {
    this.criarForm.getForm().markAllAsTouched();
    if(this.criarForm.getForm().valid) {
      this.router.navigate(['minhas-ofertas']);
    }
  }

  private createForm() {
    this.criarForm = new CriarOfertaPageForm(this.formBuilder);
  }
}
