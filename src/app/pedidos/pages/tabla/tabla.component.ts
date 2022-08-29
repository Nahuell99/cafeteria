import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Interfaces/pedido.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {    
    this.pedidosService.getPedidos()
      .subscribe(resp => this.pedidos = resp);
  }

}
