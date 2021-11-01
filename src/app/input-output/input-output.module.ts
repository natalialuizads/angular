import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputOutputComponent } from './input-output.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputOutputComponent, InputComponent, OutputComponent],
  imports: [CommonModule],
  exports: [InputOutputComponent],
})
export class InputOutputModule {}
