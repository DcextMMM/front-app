import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriarOfertaPageRoutingModule } from './criar-oferta-routing.module';
import { CriarOfertaPage } from './criar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarOfertaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarOfertaPage]
})
export class CriarOfertaPageModule {}
