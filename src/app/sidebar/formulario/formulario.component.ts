import { Component, OnInit } from '@angular/core';
import { pedido } from '../../Interfaces/pedido.interface';

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
    entrega: '',
    preico: 0,
    conExtra: false,
    cantidad: 0
  }

  constructor(){

  }

  ngOnInit(): void {
  }

  submit() {
  }

}
