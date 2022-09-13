import { Component, Input, OnInit } from '@angular/core';
import { Entrega, Pedido } from 'src/app/Interfaces/pedido.interface';
import { PedidosService } from '../../services/pedidos.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  pedidos: Pedido[] = [];
  columnasTabla: string[] = ['id', 'nombre', 'fecha', 'detalle', 'entrega', 'precio', 'conServilletas', 'cantidad', 'acciones'];



  constructor(  private pedidosService: PedidosService,
                public  dialog        : MatDialog,
                private router        : Router) { 
  }

  ngOnInit(): void {
    this.pedidosService.getPedidos()
      .subscribe(resp => this.pedidos = resp);
  }

  borrarPedido(idPedido: number){
    console.log("borrar pedido:", idPedido);

  }

  editarPedido(idPedido: number){
    console.log("editar pedido:", idPedido);

  }


}
