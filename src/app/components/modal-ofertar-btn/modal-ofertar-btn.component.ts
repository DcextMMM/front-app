import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ofertar-btn',
  templateUrl: './modal-ofertar-btn.component.html',
  styleUrls: ['./modal-ofertar-btn.component.scss'],
})
export class ModalOfertarBtnComponent implements OnInit {
  name: string;

  constructor(private modalCtrl: ModalController) { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {}

}
