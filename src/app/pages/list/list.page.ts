import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<Usuario[]>;
  @ViewChild('lista', {static: false}) lista: IonList;

  constructor( private usuariosService: UsuariosService, private toastController: ToastController ) {  }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((data: any) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  }

  favorite(item) {
    this.presentToast('Guardó en favoritos');
    this.lista.closeSlidingItems();
  }

  share(item) {
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  delete(item) {
    this.presentToast('Borrar');
    this.lista.closeSlidingItems();
  }

}
