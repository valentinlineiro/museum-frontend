import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { v4 } from 'uuid';
import { Entry } from '../model/entry';
import { HalloffameService } from './halloffame.service';

@Injectable()
export class InMemoryHalloffameService implements HalloffameService {
  private entries: Entry[] = [];

  constructor() {}

  list(): Observable<Entry[]> {
    return of(this.entries).pipe(delay(250));
  }

  getById(id: string): Observable<Entry> {
    return of(this.entries.find((entry) => entry.id == id)).pipe(delay(250));
  }

  getNew(): Observable<Entry> {
    return of({ title: '', description: '', authors: [] });
  }

  save(entry: Entry): Observable<Entry> {
    const entryToSave: Entry = { id: v4(), ...entry };
    this.entries.push(entryToSave);
    return of(entryToSave).pipe(delay(5000));
  }
}
