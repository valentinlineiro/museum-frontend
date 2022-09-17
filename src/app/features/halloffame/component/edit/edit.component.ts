import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Entry } from '../../model/entry';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  entry$: Observable<Entry>;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.entry$ = this.route.params.pipe(map((params) => params.id));
  }

  onSave(): void {
    // TODO: Implement
  }

  onExit(): void {
    this.router.navigate(['halloffame']);
  }
}
