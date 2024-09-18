/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Producto_Interface, Producto_Interface_Model } from '../../../shared/types';

export class Producto_Class_DB extends Model<Producto_Interface, Producto_Interface_Model> {
  public ID_Producto!: number;
  public componente!: number;
  public codigo_producto!: string;
  public precioCup!: number;
  public precioUsd!: number;
  public precioMlc!: number;
  public precioEuro!: number;
  public cantidadAlmacen!: number;
  public codigoComercial!: string;
  public proveedor!: string;
  public costo!: number;
  public fleteLbs!: number;
  public ubicacion!: string;
  public noOEM!: number;
  public cantidadMinima!: number;
  public vin88!: number;
  public descripcion!: string;
  public imagen!: string;
}

Producto_Class_DB.init(
  {
    ID_Producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    componente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Componente',
        key: 'ID_Componente',
      },
    },
    codigo_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precioCup: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precioUsd: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precioMlc: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precioEuro: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cantidadAlmacen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoComercial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fleteLbs: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noOEM: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidadMinima: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vin88: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Producto',
    sequelize: sequelize,
    timestamps: false,
  }
);
