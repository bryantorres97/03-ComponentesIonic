import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string,
            columna: string): any[] {

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLowerCase();


    return arreglo.filter(item => {
      return item[columna].toLowerCase()
        .includes(texto);
    });

  }

}
