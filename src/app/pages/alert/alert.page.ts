import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = '';

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Esta es una <strong>alerta</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirma Cancelar:', blah);
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirma Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Ingresar el título',
      inputs: [
        {
          name: 'tituloPagina',
          type: 'text',
          placeholder: 'Título'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data );
            this.titulo = data.tituloPagina;
          }
        }
      ]
    });

    await alert.present();
  }

}
