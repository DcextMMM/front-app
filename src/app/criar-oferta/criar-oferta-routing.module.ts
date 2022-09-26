import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarOfertaPage } from './criar-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarOfertaPageRoutingModule {}
