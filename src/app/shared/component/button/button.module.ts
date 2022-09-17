import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [FabComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FabComponent],
})
export class ButtonModule {}
