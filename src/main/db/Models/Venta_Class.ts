/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config'
import { Venta_Interface, Venta_Interface_Model } from '../../../shared/types'

export class Venta_Class_DB extends Model<Venta_Interface, Venta_Interface_Model> {
  public ID_Venta!: number
  public codigo_producto!: string
  public descripcion!: string
  public cantidad!: number
  public costo!: number
  public precio!: number
  public peso!: number
  public ganancia!: number
}

Venta_Class_DB.init(
  {
    ID_Venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    codigo_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Producto',
        key: 'ID_Producto',
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ganancia: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: 'Venta',
    sequelize: sequelize,
    timestamps: false
  }
)
