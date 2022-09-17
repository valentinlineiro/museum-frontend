import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, tap } from 'rxjs';
import { Feature } from './core/model/feature';
import { FeatureService } from './core/service/feature.service';
import { SidenavService } from './core/service/sidenav.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  features$: Observable<Feature[]>;
  toggle$: Observable<boolean>;

  @ViewChild('drawer') sidenav: MatSidenav;

  constructor(
    private featureService: FeatureService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.features$ = this.featureService.get();
    this.toggle$ = this.sidenavService
      .getToggle$()
      .pipe(tap((_) => this.sidenav?.toggle()));
  }
}
