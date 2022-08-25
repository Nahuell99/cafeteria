import { Component, OnInit } from '@angular/core';
import { Entrega, pedido } from '../../Interfaces/pedido.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pedido: pedido = {
    nombre: '',
    fecha: new Date(),
    detalle: '',
    entrega: Entrega.ParaLlevar,
    precio: 0,
    conExtra: false,
    cantidad: 0
  }

  pedidos: pedido[] = [];

  constructor(){

  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.pedido.nombre);
    console.log(this.pedido.fecha);
    console.log(this.pedido.detalle);
    console.log(this.pedido.entrega);
    console.log(this.pedido.precio);
    console.log(this.pedido.conExtra);
    console.log(this.pedido.cantidad);
  }

}
