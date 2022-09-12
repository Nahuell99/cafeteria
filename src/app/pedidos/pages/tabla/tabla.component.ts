import { Component, Input, OnInit } from '@angular/core';
import { Entrega, Pedido } from 'src/app/Interfaces/pedido.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  pedidos: Pedido[] = [];
  columnasTabla: string[] = ['id', 'nombre', 'fecha', 'detalle', 'entrega', 'precio', 'conServilletas', 'cantidad'];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.pedidosService.getPedidos()
      .subscribe(resp => this.pedidos = resp);
  }


}
