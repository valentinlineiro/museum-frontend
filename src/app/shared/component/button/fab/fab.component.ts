import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent {
  @Input() color: string = 'primary';
  @Input() icon: string = 'add';
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.click.emit();
  }
}
