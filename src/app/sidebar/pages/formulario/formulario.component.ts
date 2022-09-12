import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entrega, Pedido } from '../../../Interfaces/pedido.interface';
import { PedidosService } from '../../../pedidos/services/pedidos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  tiposEntrega = Entrega;
  keys:string[];

  pedido: Pedido = {
    nombre: '',
    fecha: new Date(),
    detalle: '',
    entrega: Entrega.ParaLlevar,
    precio: 0,
    conServilletas: false,
    cantidad: 0
  }

  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {
    this.keys = Object.keys(this.tiposEntrega);
    console.log(this.keys);
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.miFormulario.control.value);
    this.pedidosService.agregarPedido(this.miFormulario.control.value)
      .subscribe(resp => console.log("Se agrego pedido"));
    this.miFormulario.resetForm({});
  }

}
