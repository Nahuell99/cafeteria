import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entrega, Pedido } from '../../../Interfaces/pedido.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

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
    console.log(this.pedido.conServilletas);
    console.log(this.pedido.cantidad);
    console.log(this.miFormulario.control.value);
    this.miFormulario.resetForm({});

//    this.miFormulario.resetForm({});
  }

}
