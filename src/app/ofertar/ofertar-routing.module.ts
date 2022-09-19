import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertarPage } from './ofertar.page';

const routes: Routes = [
  {
    path: '',
    component: OfertarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertarPageRoutingModule {}
