import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/Interfaces/pedido.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //GET
  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido`);
  }

  //GET-ID
  getPedidoId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/pedido/${id}`);
  }

  //GET-LIMITED
  getSugerencia(termino: string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido?q=${termino}&_limit=6`);
  }

  //POST
  agregarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.baseUrl}/pedido`, pedido);
  }

  //PUT
  actualzarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(`${this.baseUrl}/pedido/${pedido.id}`, pedido);
  }

  //DELETE
  borrarPedido(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/pedido/${id}`);
  }


}
