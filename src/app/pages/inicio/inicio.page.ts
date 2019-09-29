import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/componente.interface';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // componentes: Componente[] = [
  //   {
  //     icon: 'american-football',
  //     name: 'Action Sheet',
  //     redirectTo: '/action-sheet'
  //   },
  //   {
  //     icon: 'appstore',
  //     name: 'Alert',
  //     redirectTo: '/alert'
  //   },
  //   {
  //     icon: 'beaker',
  //     name: 'Avatar',
  //     redirectTo: '/avatar'
  //   },
  //   {
  //     icon: 'radio-button-on',
  //     name: 'Botones y router',
  //     redirectTo: '/buttons'
  //   },
  //   {
  //     icon: 'card',
  //     name: 'Cards',
  //     redirectTo: '/card'
  //   },
  //   {
  //     icon: 'checkmark-circle-outline',
  //     name: 'Checkbox',
  //     redirectTo: '/check'
  //   },
  //   {
  //     icon: 'calendar',
  //     name: 'DateTime',
  //     redirectTo: '/datetime'
  //   },
  //   {
  //     icon: 'car',
  //     name: 'Fabs',
  //     redirectTo: '/fab'
  //   },
  //   {
  //     icon: 'grid',
  //     name: 'Grid - Rows',
  //     redirectTo: '/grid'
  //   },
  //   {
  //     icon: 'infinite',
  //     name: 'Infinite Scroll',
  //     redirectTo: '/infinite-scroll'
  //   },
  //   {
  //     icon: 'hammer',
  //     name: 'Inputs',
  //     redirectTo: '/input'
  //   },
  //   {
  //     icon: 'list',
  //     name: 'Lista - Sliding',
  //     redirectTo: '/list'
  //   },
  //   {
  //     icon: 'reorder',
  //     name: 'Lista Reorder',
  //     redirectTo: '/list-reorder'
  //   }
  // ];
  componentes: Observable<Componente[]>;
  constructor(private menuController: MenuController, private dataService: UsuariosService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}

