import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  @Input () idPedido!: number;


  constructor() { }

  ngOnInit(): void {
  }

  editarPedido(){

  }

}
