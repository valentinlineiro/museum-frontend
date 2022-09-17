import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureService } from './service/feature.service';
import { SidenavService } from './service/sidenav.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [FeatureService, SidenavService],
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
