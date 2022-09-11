import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, delay } from 'rxjs';
import { Entry } from '../model/entry';

@Injectable()
export class HalloffameService {
  constructor(private http: HttpClient) {}

  get(): Observable<Entry[]> {
    return this.http
      .get<Entry[]>('/assets/mock/halloffame/halloffame.json')
      .pipe(
        delay(1),
        tap((entries) => console.log(entries))
      );
  }
}
