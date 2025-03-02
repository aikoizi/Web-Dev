import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule ],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
      console.log("Компонент Albums загружен");  
      console.log("Данные альбомов:", this.albums); 
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }
}
