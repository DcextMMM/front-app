import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-click-alert',
  templateUrl: 'click-alert.component.html',
})


export class ClickAlertComponent {
  handlerMessage = '';

  constructor(private router: Router, private alertController: AlertController) {}

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
          handler: () => {
            localStorage.clear();
            this.router.navigate(['/home']);
          }
        },
      ],
    });

    await alert.present();
}
}
