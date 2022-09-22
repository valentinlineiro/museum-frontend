import { Observable } from 'rxjs';
import { Artist } from '../../../shared/model/artist';

export interface ArtistService {
  list(): Observable<Artist[]>;
  getById(id: string): Observable<Artist>;
  getNew(): Observable<Artist>;
  create(entry: Artist): Observable<Artist>;
  update(entry: Artist): Observable<Artist>;
  delete(id: string): Observable<any>;
}
