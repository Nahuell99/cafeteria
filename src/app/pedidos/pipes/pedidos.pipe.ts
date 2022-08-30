import { Pipe, PipeTransform } from '@angular/core';
import { Pedido } from '../../Interfaces/pedido.interface';

@Pipe({
  name: 'pedidos',
  pure: false
})
export class PedidosPipe implements PipeTransform {

  transform(pedido: Pedido): string {
    return "";
  }

}
