import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Materials
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule
  ]
})
export class ComponentsModule { }
