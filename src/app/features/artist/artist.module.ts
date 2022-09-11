import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';

const routes: Route[] = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ArtistModule {}
