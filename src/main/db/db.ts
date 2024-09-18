/* eslint-disable prettier/prettier */

import { sequelize } from './config'
import { Operacion_Class_DB } from './Models/Operacion_Class_DB'

export default async function connectDB(): Promise<void> {
  try {
    await sequelize.authenticate()

    await Promise.all([
      Operacion_Class_DB.sync(),
    ])

    console.log('Conexion a la base de datos establecida correctamente.')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}