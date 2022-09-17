import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../../core/service/sidenav.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {}

  onMenu(): void {
    this.sidenavService.toggle();
  }
}
