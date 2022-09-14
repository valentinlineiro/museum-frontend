import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.css'],
})
export class GeneralLayoutComponent {
  @Input() width: number = 70; // TODO: Ensure this is between 0 and 100
}
