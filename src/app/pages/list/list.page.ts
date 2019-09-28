import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<Usuario[]>;
  @ViewChild('lista', {static: false}) lista: IonList;
  constructor(private usuariosService: UsuariosService) {  }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((data: any) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  favorite(item) {
    console.log('favorite', item);
    this.lista.closeSlidingItems();
  }
  share(item) {
    console.log('share', item);
    this.lista.closeSlidingItems();
  }
  delete(item) {
    console.log('delete', item);
    this.lista.closeSlidingItems();
  }

}
