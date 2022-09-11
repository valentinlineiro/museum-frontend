import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LeaderboardEntry } from '../model/leaderboard-entry';

@Injectable()
export class LeaderboardService {
  leaderboard$: BehaviorSubject<LeaderboardEntry[]>;

  constructor(private http: HttpClient) {
    this.leaderboard$ = new BehaviorSubject<LeaderboardEntry[]>([]);
  }

  get(): Observable<LeaderboardEntry[]> {
    return this.http
      .get<LeaderboardEntry[]>('/assets/mock/leaderboard/leaderboard.json')
      .pipe(tap((entries) => console.log(entries)));
  }
}
