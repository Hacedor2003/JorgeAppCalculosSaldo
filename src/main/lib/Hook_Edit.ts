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

export const editProducto_By_Id = async (id: number, producto: Producto_Interface) => {
  try {
    const [updatedCount, [updated]] = await Producto_Class_DB.update(producto, {
      where: { ID_Producto: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un producto con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el producto con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${id}:`, error)
    throw error
  }
}
export const editComponente_By_Id = async (id: number, componente: Componente_Interface) => {
  try {
    const [updatedCount, [updated]] = await Componente_Class_DB.update(componente, {
      where: { ID_Componente: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un componente con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el componente con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el componente con ID ${id}:`, error)
    throw error
  }
}
export const editCliente_By_Id = async (id: number, cliente: Cliente_Interface) => {
  try {
    const [updatedCount, [updated]] = await Cliente_Class_DB.update(cliente, {
      where: { ID_Cliente: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un cliente con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el cliente con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el cliente con ID ${id}:`, error)
    throw error
  }
}
export const editVenta_By_Id = async (id: number, venta: Venta_Interface) => {
  try {
    const [updatedCount, [updated]] = await Venta_Class_DB.update(venta, {
      where: { ID_Venta: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró una venta con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó la venta con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar la venta con ID ${id}:`, error)
    throw error
  }
}
export const editHistorial_Venta_By_Id = async (id: number, historial: HistorialCompra_Interface) => {
  try {
    const [updatedCount, [updated]] = await HistorialCompra_Class_DB.update(historial, {
      where: { ID_Historial: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un historial con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el historial con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el historial con ID ${id}:`, error)
    throw error
  }
}
export const editHistoria_Accciones_By_Id = async (id: number, historial: HistorialAcciones_Interface) => {
  try {
    const [updatedCount, [updated]] = await HistorialAcciones_Class_DB.update(historial, {
      where: { ID_Accion: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un historial con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el historial con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el historial con ID ${id}:`, error)
    throw error
  }
}
export const editUsuario_By_Id = async (id: number, historial: Usuario_Interface) => {
  try {
    const [updatedCount, [updated]] = await Usuario_Class_DB.update(historial, {
      where: { ID_Usuario: id },
      returning: true
    })
    if (updatedCount === 0) {
      console.log(`No se encontró un historial con ID ${id} para actualizar.`)
    } else {
      console.log(`Se actualizó el historial con ID ${id}:`, updated.toJSON())
    }
    return updated.dataValues
  } catch (error) {
    console.error(`Error al actualizar el historial con ID ${id}:`, error)
    throw error
  }
}
