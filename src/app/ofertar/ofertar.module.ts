import { OfertarBtnComponent } from './../components/ofertar-btn/ofertar-btn.component';
import { ModalOfertarBtnComponent } from './../components/modal-ofertar-btn/modal-ofertar-btn.component';
import { TabsComponent } from './../components/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { OfertarPageRoutingModule } from './ofertar-routing.module';

import { OfertarPage } from './ofertar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertarPageRoutingModule,
  ],
  declarations: [OfertarPage, TabsComponent, ModalOfertarBtnComponent, OfertarBtnComponent]
})
export class OfertarPageModule {}
