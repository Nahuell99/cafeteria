import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './pages/tabla/tabla.component';
import { PedidosPipe } from './pipes/pedidos.pipe';
import { MatTableModule } from '@angular/material/table' 
import { AngularMaterialModule } from '../angular-material/angular-material.module';




@NgModule({
  declarations: [
    TablaComponent,
    PedidosPipe
  ],
  exports:[
    TablaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class PedidosModule { }
