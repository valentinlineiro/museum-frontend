import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { v4 } from 'uuid';
import { Entry } from '../model/entry';
import { HalloffameService } from './halloffame.service';

@Injectable()
export class LocalStorageHalloffameService implements HalloffameService {
  constructor() {
    if (!localStorage.getItem('hof')) {
      localStorage.setItem('hof', JSON.stringify([]));
    }
  }

  list(): Observable<Entry[]> {
    return of(this.getEntries()).pipe(delay(250));
  }

  getById(id: string): Observable<Entry> {
    return of(this.getEntries().find((entry) => entry.id == id)).pipe(
      delay(250)
    );
  }

  getNew(): Observable<Entry> {
    return of({ title: '', description: '', authors: [] });
  }

  create(entry: Entry): Observable<Entry> {
    const entryToSave: Entry = { id: v4(), ...entry };
    const entries: Entry[] = this.getEntries();
    entries.push(entryToSave);
    this.saveEntries(entries);
    return of(entryToSave).pipe(delay(5000));
  }

  update(entry: Entry): Observable<Entry> {
    const entries: Entry[] = this.getEntries();
    const indexOfEntry = entries.findIndex(
      (existingEntry) => existingEntry.id === entry.id
    );
    entries.splice(indexOfEntry, 1, entry);
    this.saveEntries(entries);
    return of(entry).pipe(delay(5000));
  }

  delete(id: string): Observable<any> {
    const entries: Entry[] = this.getEntries();
    const indexOfEntry = entries.findIndex(
      (existingEntry) => existingEntry.id === id
    );
    entries.splice(indexOfEntry, 1);
    this.saveEntries(entries);
    return of(id).pipe(delay(5000));
  }

  private getEntries(): Entry[] {
    return JSON.parse(localStorage.getItem('hof'));
  }

  private saveEntries(entries: Entry[]): void {
    localStorage.setItem('hof', JSON.stringify(entries));
  }
}
