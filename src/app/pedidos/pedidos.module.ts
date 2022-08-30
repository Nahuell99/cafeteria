import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './pages/tabla/tabla.component';
import { PedidosPipe } from './pipes/pedidos.pipe';



@NgModule({
  declarations: [
    TablaComponent,
    PedidosPipe
  ],
  exports:[
    TablaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
