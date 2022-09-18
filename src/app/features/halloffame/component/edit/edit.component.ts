import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  entryForm: FormGroup;
  entry$: Observable<Entry>;

  constructor(
    @Inject('hallOfFameService') private halloffameService: HalloffameService,
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    this.entryForm = formBuilder.group({
      title: [null, Validators.required],
      description: [null],
    });
  }

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
      ),
      tap((entry) => {
        if (!this.isNew) {
          this.entryForm.patchValue(entry);
        }
      })
    );
  }

  onSave(): void {
    // TODO: Implement
  }

  onExit(): void {
    this.router.navigate(['halloffame']);
  }
}
