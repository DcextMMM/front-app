import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-click-alert',
  templateUrl: 'click-alert.component.html',
})
export class ClickAlertComponent {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Você tem certeza que quer sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta cancelado';
          },
        },
        {
          text: 'Sair',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmado';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Alerta cancelado, role: ${role}`;
  }
}
