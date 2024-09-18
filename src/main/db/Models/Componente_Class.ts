/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize'
import { Componente_Interface_Model, Componente_Interface } from '../../../shared/types'
import { sequelize } from '../config'

export class Componente_Class_DB extends Model<Componente_Interface, Componente_Interface_Model> {
  public ID_Componente!: number
  public nombre!: string
}

Componente_Class_DB.init(
  {
    ID_Componente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Componente',
    sequelize: sequelize,
    timestamps: false
  }
)
