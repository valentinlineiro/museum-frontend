import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  init(key: string): void {
    this.set(key, []);
  }

  get(key: string): any[] {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, value: any[]): void {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
