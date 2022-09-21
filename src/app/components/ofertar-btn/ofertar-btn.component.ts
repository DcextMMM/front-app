import { ModalOfertarBtnComponent } from './../modal-ofertar-btn/modal-ofertar-btn.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ofertar-btn',
  templateUrl: './ofertar-btn.component.html',
  styleUrls: ['./ofertar-btn.component.scss'],
})
export class OfertarBtnComponent implements OnInit {

  message = 'Crie e poste suas produções de maneira rápida e simples';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalOfertarBtnComponent, //Cria o component ModalOfertar
    });

    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Oferta ${data} foi criada e postada! Tenha acesso à esta oferta em 'Minhas Ofertas' `;
    }
  }

}
