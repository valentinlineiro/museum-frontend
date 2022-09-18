import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

const routes: Route[] = [
  {
    path: 'halloffame',
    loadChildren: () =>
      import('./features/halloffame/halloffame.module').then(
        (m) => m.HallOfFameModule
      ),
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./features/leaderboard/leaderboard.module').then(
        (m) => m.LeaderboardModule
      ),
  },
  {
    path: 'artist',
    loadChildren: () =>
      import('./features/artist/artist.module').then((m) => m.ArtistModule),
  },
  {
    path: '',
    redirectTo: '/halloffame',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
