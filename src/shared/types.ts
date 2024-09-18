/* eslint-disable prettier/prettier */
import { Optional } from 'sequelize'

export interface Operacion_Interface {
  ID_Operacion: number;
  fecha: Date;
  ganancia: number;
  gasto: number;
  comentario: string;
  porciento:number
}

export interface Operacion_Interface_Model extends Optional<Operacion_Interface, 'ID_Operacion'> {}

export interface Saldo_Interface {
  ID_Saldo: number;
  cantidad:number
}

export interface Saldo_Interface_Model extends Optional<Saldo_Interface, 'ID_Saldo'> {}
