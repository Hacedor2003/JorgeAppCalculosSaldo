/* eslint-disable prettier/prettier */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Saldo_Interface, Saldo_Interface_Model } from 'src/shared/types';

class Saldo extends Model<Saldo_Interface, Saldo_Interface_Model> {
  public ID_Saldo!: number; 
  public cantidad!: number;

  public agregar(cantidad: number): void {
    if (cantidad < 0) {
      throw new Error('La cantidad a agregar debe ser positiva.');
    }
    this.cantidad += cantidad;
  }

  public restar(cantidad: number): void {
    if (cantidad < 0) {
      throw new Error('La cantidad a restar debe ser positiva.');
    }
    if (this.cantidad - cantidad < 0) {
      throw new Error('No se puede restar más de lo que hay en el saldo.');
    }
    this.cantidad -= cantidad;
  }
}

Saldo.init(
  {
    ID_Saldo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Saldo',
    tableName: 'saldos',
    timestamps: true
  }
)

export default Saldo;
