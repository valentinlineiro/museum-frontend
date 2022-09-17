import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';
import { LayoutModule } from './layout/layout.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  exports: [ToolbarModule, LayoutModule, ButtonModule],
})
export class ComponentModule {}
