import { OfertarBtnComponent } from './../ofertar-btn/ofertar-btn.component';
import { ModalOfertarBtnComponent } from './modal-ofertar-btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ModalOfertarBtnComponent, OfertarBtnComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ModalOfertarBtnModuleTsModule { }
