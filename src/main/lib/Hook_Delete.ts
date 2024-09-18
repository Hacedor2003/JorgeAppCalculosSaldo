/* eslint-disable prettier/prettier */

import { Producto_Class_DB, Componente_Class_DB, Cliente_Class_DB, Venta_Class_DB, HistorialCompra_Class_DB, HistorialAcciones_Class_DB, Usuario_Class_DB } from '../db/Models'

export const deleteProducto_By_Id = async (id: number) => {
  try {
    const deleted = await Producto_Class_DB.destroy({ where: { ID_Producto: id } })
    if (deleted === 0) {
      console.log(`No se encontró un producto con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó el producto con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error)
    throw error
  }
}
export const deleteComponente_By_Id = async (id: number) => {
  try {
    const deleted = await Componente_Class_DB.destroy({ where: { ID_Componente: id } })
    if (deleted === 0) {
      console.log(`No se encontró un componente con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó el componente con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el componente con ID ${id}:`, error)
    throw error
  }
}
export const deleteCliente_By_Id = async (id: number) => {
  try {
    const deleted = await Cliente_Class_DB.destroy({ where: { ID_Cliente: id } })
    if (deleted === 0) {
      console.log(`No se encontró un cliente con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó el cliente con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el cliente con ID ${id}:`, error)
    throw error
  }
}
export const deleteVenta_By_Id = async (id: number) => {
  try {
    const deleted = await Venta_Class_DB.destroy({ where: { ID_Venta: id } })
    if (deleted === 0) {
      console.log(`No se encontró una venta con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó la venta con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar la venta con ID ${id}:`, error)
    throw error
  }
}
export const deleteHistorial_By_Id = async (id: number) => {
  try {
    const deleted = await HistorialCompra_Class_DB.destroy({ where: { ID_Historial: id } })
    if (deleted === 0) {
      console.log(`No se encontró un historial con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó un historial con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el historial con ID ${id}:`, error)
    throw error
  }
}
export const deleteHistorial_Acciones_By_Id = async (id: number) => {
  try {
    const deleted = await HistorialAcciones_Class_DB.destroy({ where: { ID_Accion: id } })
    if (deleted === 0) {
      console.log(`No se encontró un historial con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó un historial con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el historial con ID ${id}:`, error)
    throw error
  }
}
export const deleteUsuario_By_Id = async (id: number) => {
  try {
    const deleted = await Usuario_Class_DB.destroy({ where: { ID_Usuario: id } })
    if (deleted === 0) {
      console.log(`No se encontró un usuario con ID ${id} para eliminar.`)
    } else {
      console.log(`Se eliminó un usuario con ID ${id}.`)
    }
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID ${id}:`, error)
    throw error
  }
}
