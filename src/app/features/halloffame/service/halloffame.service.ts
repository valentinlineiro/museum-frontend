import { Observable } from 'rxjs';
import { Entry } from '../model/entry';

export interface HalloffameService {
  list(): Observable<Entry[]>;
  getById(id: string): Observable<Entry>;
  getNew(): Observable<Entry>;
  create(entry: Entry): Observable<Entry>;
}
