import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-album-detail',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle() {
    if (!this.newTitle.trim()) return; 

    this.album.title = this.newTitle;

    this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      response => {
        console.log('Title updated successfully!', response);
        alert('Заголовок успешно обновлён!');
      },
      error => {
        console.error('Error updating title', error);
        alert('Ошибка при обновлении заголовка.');
      }
    );
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

