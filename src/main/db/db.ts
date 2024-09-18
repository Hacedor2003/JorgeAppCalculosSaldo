/* eslint-disable prettier/prettier */

import { sequelize } from './config'
import { Cliente_Class_DB, HistorialCompra_Class_DB, Componente_Class_DB, Producto_Class_DB, Venta_Class_DB, Usuario_Class_DB, HistorialAcciones_Class_DB } from './Models'

export default async function connectDB(): Promise<void> {
  try {
    await sequelize.authenticate()

    await Promise.all([
      Cliente_Class_DB.sync(),
      Venta_Class_DB.sync(),
      Usuario_Class_DB.sync(),
      Componente_Class_DB.sync(),
      Producto_Class_DB.sync(),
      HistorialCompra_Class_DB.sync(),
      HistorialAcciones_Class_DB.sync()
    ])

    console.log('Conexion a la base de datos establecida correctamente.')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}