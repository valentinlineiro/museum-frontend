import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { v4 } from 'uuid';
import { LocalStorageService } from '../../../core/service/local-storage.service';
import { Entry } from '../model/entry';
import { HalloffameService } from './halloffame.service';

@Injectable()
export class LocalStorageHalloffameService implements HalloffameService {
  private readonly key: string = 'hof';
  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.init(this.key);
  }

  list(): Observable<Entry[]> {
    return of(this.localStorageService.get(this.key)).pipe(delay(250));
  }

  getById(id: string): Observable<Entry> {
    return of(
      this.localStorageService.get(this.key).find((entry) => entry.id == id)
    ).pipe(delay(250));
  }

  getNew(): Observable<Entry> {
    return of({ title: '', description: '', authors: [] });
  }

  create(entry: Entry): Observable<Entry> {
    const entryToSave: Entry = { id: v4(), ...entry };
    const entries: Entry[] = this.localStorageService.get(this.key);
    entries.push(entryToSave);
    this.localStorageService.set(this.key, entries);
    return of(entryToSave).pipe(delay(500));
  }

  update(entry: Entry): Observable<Entry> {
    const entries: Entry[] = this.localStorageService.get(this.key);
    const indexOfEntry = entries.findIndex(
      (existingEntry) => existingEntry.id === entry.id
    );
    entries.splice(indexOfEntry, 1, entry);
    this.localStorageService.set(this.key, entries);
    return of(entry).pipe(delay(500));
  }

  delete(id: string): Observable<any> {
    const entries: Entry[] = this.localStorageService.get(this.key);
    const indexOfEntry = entries.findIndex(
      (existingEntry) => existingEntry.id === id
    );
    entries.splice(indexOfEntry, 1);
    this.localStorageService.set(this.key, entries);
    return of(id).pipe(delay(500));
  }
}
