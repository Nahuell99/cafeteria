import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    MenuComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SidebarModule { }
