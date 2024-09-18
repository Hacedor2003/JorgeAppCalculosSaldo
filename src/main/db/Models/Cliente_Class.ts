/* eslint-disable prettier/prettier */

import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config'
import { Cliente_Interface, Cliente_Interface_Model } from '../../../shared/types'
import { Venta_Class_DB } from './Venta_Class'
import { HistorialCompra_Class_DB } from './Historial_Compra_Class'

// Clase para el modelo Cliente
export class Cliente_Class_DB extends Model<Cliente_Interface, Cliente_Interface_Model> {
  public ID_Cliente!: number
  public nombre!: string
  public razonSocial!: string
  public tipoCliente!: string
  public email!: string
  public telefono!: string
  public direccion!: string
  public fechaRegistro!: Date
  public notas!: string
  public estado!: 'activo' | 'inactivo'
  public descuentos!: number
  public metodoPago!: string
  public limiteCredito!: number
  public fechaUltimaCompra!: Date | null 
}

// Definición del modelo Cliente
Cliente_Class_DB.init(
  {
    ID_Cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoCliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('activo', 'inactivo'),
      allowNull: false
    },
    descuentos: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    metodoPago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    limiteCredito: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fechaUltimaCompra: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'Clientes',
    sequelize,
    timestamps: false
  }
)

Cliente_Class_DB.hasMany(HistorialCompra_Class_DB, {
  foreignKey: 'ID_Cliente',
  sourceKey: 'ID_Cliente'
})
HistorialCompra_Class_DB.belongsTo(Cliente_Class_DB, {
  foreignKey: 'ID_Cliente',
  targetKey: 'ID_Cliente'
})

Venta_Class_DB.hasMany(HistorialCompra_Class_DB, {
  foreignKey: 'ID_Historial',
  sourceKey: 'ID_Venta'
})
HistorialCompra_Class_DB.belongsTo(Venta_Class_DB, {
  foreignKey: 'ID_Historial',
  targetKey: 'ID_Venta'
})
