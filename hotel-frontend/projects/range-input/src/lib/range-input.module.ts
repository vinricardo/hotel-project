import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RangeInputComponent } from './range-input.component';

@NgModule({
  declarations: [RangeInputComponent],
  imports: [CommonModule],
  exports: [RangeInputComponent],
})
export class RangeInputModule {}
