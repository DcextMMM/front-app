import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CriarOfertaPageForm } from './form/criar-oferta.page.form';
import { PedidosService } from '../services/pedidos/pedidos.service';

@Component({
  selector: 'app-criar-oferta',
  templateUrl: './criar-oferta.page.html',
  styleUrls: ['./criar-oferta.page.scss'],
})
export class CriarOfertaPage implements OnInit {
  criarForm: CriarOfertaPageForm;
  public data: any;

  constructor(private service: PedidosService, private formBuilder: FormBuilder, ) {
    this.data = [
      {
        id: '1',
        type: 'Fruta',
        nome: 'Manga'
      },
      {
        id: '2',
        type: 'Fruta',
        nome: 'Morango'
      },
      {
        id: '3',
        type: 'Fruta',
        nome: 'Uva'
      },
      {
        id: '4',
        type: 'Fruta',
        nome: 'Abacaxi'
      },
      {
        id: '5',
        type: 'Fruta',
        nome: 'Goiaba'
      },
      {
        id: '6',
        type: 'Fruta',
        nome: 'Banana'
      },
      {
        id: '7',
        type: 'Fruta',
        nome: 'Laranja'
      },
      {
        id: '8',
        type: 'Fruta',
        nome: 'Maçã'
      },
      {
        id: '9',
        type: 'Fruta',
        nome: 'Limão'
      },
      {
        id: '10',
        type: 'Fruta',
        nome: 'Pêra'
      },
      {
        id: '11',
        type: 'Legume',
        nome: 'Abóbora'
      },
      {
        id: '12',
        type: 'Legume',
        nome: 'Beringela'
      },
      {
        id: '13',
        type: 'Legume',
        nome: 'Pimentão'
      },
      {
        id: '14',
        type: 'Legume',
        nome: 'Beterraba'
      },
      {
        id: '15',
        type: 'Legume',
        nome: 'Cenoura'
      },
      {
        id: '16',
        type: 'Legume',
        nome: 'Batata'
      },
      {
        id: '17',
        type: 'Legume',
        nome: 'Pepino'
      },
      {
        id: '18',
        type: 'Legume',
        nome: 'Alho'
      },
      {
        id: '19',
        type: 'Legume',
        nome: 'Cebola'
      },
      {
        id: '20',
        type: 'Legume',
        nome: 'Rabanete'
      },
      {
        id: '21',
        type: 'Verdura',
        nome: 'Coentro'
      },
      {
        id: '22',
        type: 'Verdura',
        nome: 'Salsa'
      },
      {
        id: '23',
        type: 'Verdura',
        nome: 'Rúcula'
      },
      {
        id: '24',
        type: 'Verdura',
        nome: 'Repolho'
      },
      {
        id: '25',
        type: 'Verdura',
        nome: 'Espinafre'
      },
      {
        id: '26',
        type: 'Verdura',
        nome: 'Alface'
      },
      {
        id: '27',
        type: 'Verdura',
        nome: 'Couve-Flor'
      },
      {
        id: '28',
        type: 'Verdura',
        nome: 'Brocólis'
      },
      {
        id: '29',
        type: 'Verdura',
        nome: 'Agrião'
      },
      {
        id: '30',
        type: 'Verdura',
        nome: 'Alcachofra'
      }
      ];
  }

  ngOnInit() {
    this.createForm();
  }

  criar() {
    this.criarForm.getForm().markAllAsTouched();
    console.log(this.criarForm.getForm().value);

    this.service.register(this.criarForm.getForm().value);
  }

  private createForm() {
    this.criarForm = new CriarOfertaPageForm(this.formBuilder);
  }

}
