import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasOfertasPage } from './minhas-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasOfertasPageRoutingModule {}
