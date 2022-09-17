import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Entry } from '../model/entry';
import { HalloffameService } from './halloffame.service';

@Injectable()
export class InMemoryHalloffameService implements HalloffameService {
  private entries: Entry[] = [];

  constructor() {}

  list(): Observable<Entry[]> {
    return of(this.entries).pipe(delay(5000));
  }
}
