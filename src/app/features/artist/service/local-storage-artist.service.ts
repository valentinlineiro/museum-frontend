import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../../shared/model/artist';
import { ArtistService } from './artist.service';

@Injectable()
export class LocalStorageArtistService implements ArtistService {
  constructor() {}
  list(): Observable<Artist[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Observable<Artist> {
    throw new Error('Method not implemented.');
  }
  getNew(): Observable<Artist> {
    throw new Error('Method not implemented.');
  }
  create(entry: Artist): Observable<Artist> {
    throw new Error('Method not implemented.');
  }
  update(entry: Artist): Observable<Artist> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
