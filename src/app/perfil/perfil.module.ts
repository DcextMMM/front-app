import { ClickAlertComponent } from './../components/click-alert/click-alert.component';
import { TabsComponent } from './../components/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
  ],
  declarations: [
    PerfilPage,
    TabsComponent,
    ClickAlertComponent,
  ]
})
export class PerfilPageModule {}
