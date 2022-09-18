import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureService } from './service/feature.service';
import { SidenavService } from './service/sidenav.service';
import { SharedModule } from '../shared/shared.module';
import { DialogService } from './service/dialog.service';
import { ConfirmComponent } from './component/confirm/confirm.component';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, SharedModule],
  providers: [FeatureService, SidenavService, DialogService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
