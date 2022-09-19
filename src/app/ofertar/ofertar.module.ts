import { TabsComponent } from './../components/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertarPageRoutingModule } from './ofertar-routing.module';

import { OfertarPage } from './ofertar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertarPageRoutingModule
  ],
  declarations: [OfertarPage, TabsComponent]
})
export class OfertarPageModule {}
