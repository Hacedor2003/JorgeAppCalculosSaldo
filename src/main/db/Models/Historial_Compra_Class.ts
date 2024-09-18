/* eslint-disable prettier/prettier */

import { Model, DataTypes } from 'sequelize';
import { HistorialCompra_Interface, HistorialCompra_Interface_Model } from '../../../shared/types';
import { sequelize } from '../config';

// Clase para el modelo Historial de Compras
export class HistorialCompra_Class_DB extends Model<
  HistorialCompra_Interface,
  HistorialCompra_Interface_Model
> {
  public ID_Historial!: number;
  public idCompra!: number;
  public fecha!: Date;
  public montoTotal!: number;
  public ID_Cliente!: number;
}

HistorialCompra_Class_DB.init(
  {
    ID_Historial: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idCompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Venta',
        key: 'ID_Venta',
      },
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    montoTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ID_Cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clientes',
        key: 'ID_Cliente',
      },
    },
  },
  {
    tableName: 'HistorialCompras',
    sequelize,
    timestamps: false,
  }
);
