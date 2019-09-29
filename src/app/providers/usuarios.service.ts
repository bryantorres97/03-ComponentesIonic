import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
