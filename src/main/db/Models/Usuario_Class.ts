/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Usuario_Interface, Usuario_Interface_Model } from '../../../shared/types';

export class Usuario_Class_DB extends Model<Usuario_Interface, Usuario_Interface_Model> {
  public ID_Usuario!: number;
  public nombre!: string;
  public email!: string;
  public contraseña!: string;
  public rol!: string;
}

Usuario_Class_DB.init(
  {
    ID_Usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Usuario',
    sequelize: sequelize,
    timestamps: false,
  }
);
