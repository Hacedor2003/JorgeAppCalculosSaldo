/* eslint-disable prettier/prettier */

import {
  Cliente_Interface,
  Componente_Interface,
  HistorialAcciones_Interface,
  HistorialCompra_Interface,
  Producto_Interface,
  Usuario_Interface,
  Venta_Interface
} from '../../shared/types'
import { Producto_Class_DB, Componente_Class_DB, Cliente_Class_DB, Venta_Class_DB, HistorialCompra_Class_DB, HistorialAcciones_Class_DB, Usuario_Class_DB } from '../db/Models'


export const createProducto = async (data: Producto_Interface) => {
  try {
    const response = await Producto_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el producto:', error)
    throw error
  }
}
export const createComponente = async (data: Componente_Interface) => {
  try {
    const response = await Componente_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el componente:', error)
    throw error
  }
}
export const createCliente = async (data: Cliente_Interface) => {
  try {
    const response = await Cliente_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el cliente:', error)
    throw error
  }
}
export const createVenta = async (data: Venta_Interface) => {
  try {
    const response = await Venta_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear la venta:', error)
    throw error
  }
}
export const createHistorial = async (data: HistorialCompra_Interface) => {
  try {
    const response = await HistorialCompra_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el historial:', error)
    throw error
  }
}
export const createHistorial_Acciones = async (data: HistorialAcciones_Interface) => {
  try {
    const response = await HistorialAcciones_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el historial:', error)
    throw error
  }
}
export const createUsuarios = async (data: Usuario_Interface) => {
  try {
    const response = await Usuario_Class_DB.create(data)
    return response.dataValues
  } catch (error) {
    console.error('Error al crear el historial:', error)
    throw error
  }
}
