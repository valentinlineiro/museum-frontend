import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';

@NgModule({
  declarations: [GeneralLayoutComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GeneralLayoutComponent],
})
export class LayoutModule {}
