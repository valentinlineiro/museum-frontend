import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { DialogService } from '../../../../core/service/dialog.service';
import { Entry } from '../../model/entry';
import { HalloffameService } from '../../service/halloffame.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  entryForm: FormGroup;
  entry$: Observable<Entry>;
  originalEntry: Entry;

  constructor(
    @Inject('hallOfFameService') private halloffameService: HalloffameService,
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    this.entryForm = formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.maxLength],
    });
  }

  ngOnInit() {
    this.entry$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.halloffameService.getById(id)),
      tap((entry) => {
        this.originalEntry = entry;
        this.entryForm.patchValue(entry);
      })
    );
  }

  onSave(): void {
    this.entryForm.disable();
    this.halloffameService
      .update({ ...this.originalEntry, ...this.entryForm.value })
      .pipe(tap((_) => this.onExit()))
      .subscribe();
  }

  onDelete(): void {
    this.dialogService.confirm().subscribe();
  }

  onExit(): void {
    this.router.navigate(['halloffame']);
  }
}
