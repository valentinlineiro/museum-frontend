import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { environment } from '../../../environments/environment';
import { HttpHalloffameService } from './service/http-halloffame.service';
import { LocalStorageHalloffameService } from './service/local-storage-halloffame.service';
import { CreateComponent } from './component/create/create.component';

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
    component: CreateComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: 'hallOfFameService',
      useClass: environment.production
        ? HttpHalloffameService
        : LocalStorageHalloffameService,
    },
  ],
})
export class HallOfFameModule {}
