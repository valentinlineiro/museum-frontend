import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../model/feature';

@Injectable()
export class FeatureService {
  constructor(private http: HttpClient) {}

  get(): Observable<Feature[]> {
    // TODO: Provide a way for modules to register by themselves
    return this.http.get<Feature[]>('/assets/feature/feature.json');
  }
}
