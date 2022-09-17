import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { Entry } from '../../model/entry';
import { HalloffameService } from '../../service/halloffame.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  isNew: boolean = true;
  entry$: Observable<Entry>;

  constructor(
    @Inject('hallOfFameService') private halloffameService: HalloffameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entry$ = this.route.params.pipe(
      map((params) => params.id),
      tap((id) => (this.isNew = !!id)),
      switchMap((id) =>
        iif(
          () => id,
          this.halloffameService.getNew(),
          this.halloffameService.getById(id)
        )
      )
    );
  }

  onSave(): void {
    // TODO: Implement
  }

  onExit(): void {
    this.router.navigate(['halloffame']);
  }
}
