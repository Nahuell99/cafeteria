import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { MensajePopUpComponent } from '../mensaje-pop-up/mensaje-pop-up.component';
import { Pedido } from '../../../Interfaces/pedido.interface';


@Component({
  selector: 'app-borrar-pedido',
  templateUrl: './borrar-pedido.component.html',
  styleUrls: ['./borrar-pedido.component.css']
})
export class BorrarPedidoComponent implements OnInit {

  @Input () idPedido!: number;
  pedidoAbierto!: Pedido;

  constructor(private pedidosService: PedidosService,
              public  dialog        : MatDialog) { 
}

  ngOnInit(): void {
    this.pedidosService.getPedidoId(this.idPedido)
      .subscribe(resp => this.pedidoAbierto=resp);
  }

  borrarPedido(){
    const dialog = this.dialog.open(MensajePopUpComponent, { width: '250px', data: {id: this.pedidoAbierto.id, nombre: this.pedidoAbierto.nombre},
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.pedidosService.borrarPedido(this.idPedido)
            .subscribe(resp => { console.log("borrado")});
        }else{
          console.log("No se quiso borrar");
        }
      });

  }

}