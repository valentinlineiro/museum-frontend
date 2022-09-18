import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [ComponentModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
