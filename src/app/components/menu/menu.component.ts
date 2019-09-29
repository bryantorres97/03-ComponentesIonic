import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componente.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>;
  constructor(private dataService: UsuariosService) {

   }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
