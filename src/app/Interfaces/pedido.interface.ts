export interface pedido {
    nombre:     string;
    fecha:      Date;
    detalle:    string;
    entrega:    Entrega;
    precio:     number;
    conExtra:   boolean;
    cantidad:   number;
}

export enum Entrega {
    ParaLlevar = "Para llevar",
    ComerEnSalon = "Comer en salon"
}