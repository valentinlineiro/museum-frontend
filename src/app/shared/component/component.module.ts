import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  exports: [ToolbarModule, LayoutModule],
})
export class ComponentModule {}
