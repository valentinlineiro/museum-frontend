import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Entry } from '../model/entry';
import { HalloffameService } from './halloffame.service';

@Injectable()
export class HttpHalloffameService implements HalloffameService {
  constructor(private http: HttpClient) {}

  list(): Observable<Entry[]> {
    return this.http
      .get<Entry[]>('/assets/mock/halloffame/halloffame.json')
      .pipe(delay(1));
  }

  getById(id: string): Observable<Entry> {
    throw new Error('Method not implemented.');
  }

  getNew(): Observable<Entry> {
    throw new Error('Method not implemented.');
  }

  save(entry: Entry): Observable<Entry> {
    throw new Error('Method not implemented.');
  }
}
