import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './component/table/table.component';
import { LeaderboardService } from './service/leaderboard.service';

const routes: Route[] = [
  {
    path: '',
    component: TableComponent,
  },
];

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [LeaderboardService],
})
export class LeaderboardModule {}
