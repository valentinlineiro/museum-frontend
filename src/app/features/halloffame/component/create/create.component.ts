import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Entry } from '../../model/entry';
import { HalloffameService } from '../../service/halloffame.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  entryForm: FormGroup;
  entry$: Observable<Entry>;
  originalEntry: Entry;

  constructor(
    @Inject('hallOfFameService') private halloffameService: HalloffameService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.entryForm = formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.maxLength],
    });
  }

  ngOnInit() {
    this.entry$ = this.halloffameService
      .getNew()
      .pipe(tap((entry) => (this.originalEntry = entry)));
  }

  onSave(): void {
    this.entryForm.disable();
    this.halloffameService
      .create({ ...this.originalEntry, ...this.entryForm.value })
      .pipe(tap((_) => this.onExit()))
      .subscribe();
  }

  onExit(): void {
    this.router.navigate(['halloffame']);
  }
}
