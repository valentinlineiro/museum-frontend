import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable()
export class SidenavService {
  private toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  getToggle$(): Observable<boolean> {
    return this.toggle$.asObservable();
  }

  toggle(): void {
    this.toggle$.next(true);
  }
}
