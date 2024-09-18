/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Operacion_Interface, Operacion_Interface_Model } from '../../../shared/types';

// Clase para el modelo Operacion
export class Operacion_Class_DB extends Model<Operacion_Interface, Operacion_Interface_Model> {
  public ID_Operacion!: number;
  public gasto!: number;
  public ganancia!: number;
  public fecha!: Date;
  public comentario!: string;
  public porciento!: number;
}

Operacion_Class_DB.init(
  {
    ID_Operacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gasto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ganancia: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    porciento: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'Operaciones',
    sequelize,
    timestamps: false,
  }
);

