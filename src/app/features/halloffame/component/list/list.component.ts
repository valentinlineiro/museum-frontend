import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SidenavService } from '../../../../core/service/sidenav.service';
import { Artist } from '../../../../shared/model/artist';
import { Entry } from '../../model/entry';
import { HalloffameService } from '../../service/halloffame.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  entries$: Observable<Entry[]>;

  constructor(
    @Inject('hallOfFameService') private halloffameService: HalloffameService,
    private sidenavService: SidenavService,
    private router: Router
  ) {}

  ngOnInit() {
    this.entries$ = this.halloffameService.list();
  }

  authorsToLabel(authors: Artist[]): string {
    return authors.map((author) => author.name).join(', ');
  }

  onMenu(): void {
    this.sidenavService.toggle();
  }

  onAdd(): void {
    this.router.navigate(['halloffame', 'add']);
  }

  onEdit(entry: Entry): void {
    this.router.navigate(['halloffame', entry.id]);
  }

  onDelete(entry: Entry): void {
    // TODO: Add dialog to guard action
  }
}
