import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'albums.json'; 
  private photosUrl = 'photos.json'; 

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(this.photosUrl).pipe(
      map(photos => photos.filter(photo => photo.albumId === albumId))
    );
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.getAlbums().pipe(
      map(albums => {
        const album = albums.find(album => album.id === id);
        if (album) {
          album.title = newTitle;
        }
        return album; 
      })
    );
  }
  
}
