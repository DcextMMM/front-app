import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-click-alert',
  templateUrl: 'click-alert.component.html',
})


export class ClickAlertComponent {
  handlerMessage = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Você tem certeza que quer sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sair',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
}
}
