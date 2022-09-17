import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  exports: [LayoutModule, ButtonModule],
})
export class ComponentModule {}
