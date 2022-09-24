import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickAlertComponent } from './click-alert.component';



@NgModule({
  declarations: [ClickAlertComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ClickAlertComponent]
})
export class ClickAlertModule {}
