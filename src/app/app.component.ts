import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Feature } from './core/model/feature';
import { FeatureService } from './core/service/feature.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = environment.title;
  features$: Observable<Feature[]>;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.features$ = this.featureService.get();
  }
}
