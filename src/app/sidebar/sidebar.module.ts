import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class SidebarModule { }
