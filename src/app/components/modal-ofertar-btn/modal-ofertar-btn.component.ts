import { OfertaComponentForm } from './form/oferta.component.form';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-ofertar-btn',
  templateUrl: './modal-ofertar-btn.component.html',
  styleUrls: ['./modal-ofertar-btn.component.scss'],
})
export class ModalOfertarBtnComponent implements OnInit {
  name: string;
  ofertaForm: OfertaComponentForm;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.ofertaForm = new OfertaComponentForm(this.formBuilder);
  }

}
