import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Album } from 'src/app/interfaces/album.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  textoBuscar = '';
  albumnes: Album[] = [];
  constructor(private albumService: UsuariosService) { }


  ngOnInit() {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      // console.log(data);
      this.albumnes = data;
    });
  }

  buscar(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
    console.log(this.textoBuscar);
  }

}
