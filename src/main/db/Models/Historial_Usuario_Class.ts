/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { HistorialAcciones_Interface, HistorialAcciones_Interface_Model } from '../../../shared/types';
import { Usuario_Class_DB } from './Usuario_Class';

export class HistorialAcciones_Class_DB extends Model<HistorialAcciones_Interface, HistorialAcciones_Interface_Model> {
  public ID_Accion!: number;
  public ID_Usuario!: number;
  public accion!: string;
  public fecha!: Date;
}

HistorialAcciones_Class_DB.init(
  {
    ID_Accion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario_Class_DB,
        key: 'ID_Usuario',
      },
    },
    accion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'HistorialAcciones',
    sequelize: sequelize,
    timestamps: false,
  }
);
