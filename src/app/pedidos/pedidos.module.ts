import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './pages/tabla/tabla.component';



@NgModule({
  declarations: [
    TablaComponent
  ],
  exports:[
    TablaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
