export interface Pedido {
    id?: number;
    nombre: string;
    fecha: Date;
    detalle: string;
    entrega: Entrega;
    precio: number;
    conServilletas: boolean;
    cantidad: number;
}

export enum Entrega {
    ParaLlevar = "Para llevar",
    ComerEnSalon = "Comer en salon"
}

export interface DataEnviada {
    id: number;
    nombre: string;
}