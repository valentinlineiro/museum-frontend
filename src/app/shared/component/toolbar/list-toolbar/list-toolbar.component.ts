import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.css'],
})
export class ListToolbarComponent {
  @Output() add: EventEmitter<any> = new EventEmitter();

  onAdd(): void {
    this.add.emit();
  }
}
