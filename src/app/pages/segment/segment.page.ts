import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Observable } from 'rxjs';
import { publish } from 'rxjs/operators';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  publisher = '';
  constructor(private heroesService: UsuariosService) { }

  ngOnInit() {
    this.superheroes = this.heroesService.getSuperheroes();
  }

  segmentChanged( event ) {
    const valorSegmento = event.detail.value;

    if ( valorSegmento === 'todos' ) {
      this.publisher = '';
      return;
    }
    // this.publisher = 'DC';
    this.publisher = valorSegmento;

    console.log(valorSegmento);
  }

}
