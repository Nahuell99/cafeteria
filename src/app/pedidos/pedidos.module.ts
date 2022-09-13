import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './pages/tabla/tabla.component';
import { PedidosPipe } from './pipes/pedidos.pipe';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BorrarPedidoComponent } from './components/borrar-pedido/borrar-pedido.component';
import { MensajePopUpComponent } from './components/mensaje-pop-up/mensaje-pop-up.component';




@NgModule({
  declarations: [
    TablaComponent,
    PedidosPipe,
    BorrarPedidoComponent,
    MensajePopUpComponent
  ],
  exports: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class PedidosModule { }
