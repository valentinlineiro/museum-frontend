import { Observable } from 'rxjs';
import { Entry } from '../model/entry';

export interface HalloffameService {
  list(): Observable<Entry[]>;
}
