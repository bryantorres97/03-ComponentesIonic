import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/componente.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  getSuperheroes() {
    return this.http.get('/assets/data/superheroes.json').pipe(delay(2000));
  }
}
