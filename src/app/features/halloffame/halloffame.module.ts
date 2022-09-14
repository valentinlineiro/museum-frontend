import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { environment } from '../../../environments/environment';
import { HttpHalloffameService } from './service/http-halloffame.service';
import { InMemoryHalloffameService } from './service/in-memory-halloffame.service';

const routes: Route[] = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':id',
    component: EditComponent,
  },
  {
    path: 'add',
    component: EditComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: 'hallOfFameService',
      useClass: environment.production
        ? HttpHalloffameService
        : InMemoryHalloffameService,
    },
  ],
})
export class HallOfFameModule {}
