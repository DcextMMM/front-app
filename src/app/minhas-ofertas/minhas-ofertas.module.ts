import { TabsComponent } from './../components/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasOfertasPageRoutingModule } from './minhas-ofertas-routing.module';

import { MinhasOfertasPage } from './minhas-ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasOfertasPageRoutingModule
  ],
  declarations: [MinhasOfertasPage, TabsComponent]
})
export class MinhasOfertasPageModule {}
