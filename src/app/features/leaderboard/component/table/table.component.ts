import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavService } from '../../../../core/service/sidenav.service';
import { LeaderboardEntry } from '../../model/leaderboard-entry';
import { LeaderboardService } from '../../service/leaderboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'points'];
  datasource$: Observable<LeaderboardEntry[]>;

  constructor(
    private leaderboardService: LeaderboardService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.datasource$ = this.leaderboardService.get();
  }

  onMenu(): void {
    this.sidenavService.toggle();
  }
}
