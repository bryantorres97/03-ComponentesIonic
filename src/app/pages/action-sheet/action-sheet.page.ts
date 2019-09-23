import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

// SECTION Creación del action sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums', // NOTE Es el nombre del action sheet
      backdropDismiss: false, // NOTE Si está en falso, no permite cerrar el action si toca fuera de él
      buttons: [{
        text: 'Delete',
        role: 'destructive', // NOTE muestra la opción en rojo en ios
        cssClass: 'rojo', // NOTE Crea una clase personalizada para mostrar en rojo en Android
        icon: 'trash',
        handler: () => { // NOTE  es la función que ejecuta al hacer click
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
