/* eslint-disable prettier/prettier */

import { Producto_Class_DB, Componente_Class_DB, Cliente_Class_DB, Venta_Class_DB, HistorialCompra_Class_DB, HistorialAcciones_Class_DB, Usuario_Class_DB } from '../db/Models'

export const getProductos_All = async () => {
  try {
    const productos = await Producto_Class_DB.findAll()
    return productos.map((item) => item.dataValues)
  } catch (error) {
    console.error('Error al obtener todos los productos:', error)
    throw error
  }
}

export const getProductos_By_Id = async (id: number) => {
  try {
    const equipo = await Producto_Class_DB.findByPk(id)
    return equipo!.dataValues
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error)
    throw error
  }
}

export const getComponentes_All = async () => {
  try {
    const componente = await Componente_Class_DB.findAll()
    return componente.map((item) => item.dataValues)
  } catch (error) {
    console.error('Error al obtener todos los componentes:', error)
    throw error
  }
}

export const getComponente_By_Id = async (id: number) => {
  try {
    const componente = await Componente_Class_DB.findByPk(id)
    return componente!.dataValues
  } catch (error) {
    console.error(`Error al obtener el componente con ID ${id}:`, error)
    throw error
  }
}

export const getClientes_All = async () => {
  try {
    const cliente = await Cliente_Class_DB.findAll()
    return cliente.map((item) => item.dataValues)
  } catch (error) {
    console.error('Error al obtener todos los clientes:', error)
    throw error
  }
}

export const getCliente_By_Id = async (id: number) => {
  try {
    const cliente = await Cliente_Class_DB.findByPk(id)
    return cliente!.dataValues
  } catch (error) {
    console.error(`Error al obtener el cliente con ID ${id}:`, error)
    throw error
  }
}

export const getHistorial_Ventas_All = async () => {
  try {
    const historial = await HistorialCompra_Class_DB.findAll()
    return historial.map((item) => item.dataValues)
  } catch (error) {
    console.error('Error al obtener los historiales:', error)
    throw error
  }
}

export const getHistorial_Ventas_By_Id = async (id: number) => {
  try {
    const cliente = await HistorialCompra_Class_DB.findByPk(id)
    return cliente!.dataValues
  } catch (error) {
    console.error(`Error al obtener el historial con ID ${id}:`, error)
    throw error
  }
}

export const getHistorial_Ventas_By_Cliente = async (id: number) => {
  try {
    const cliente = await HistorialCompra_Class_DB.findAll({
      where: {
        ID_Cliente: id
      }
    })
    return cliente!.map((item) => item.dataValues)
  } catch (error) {
    console.error(`Error al obtener los historiales con ID de cliente ${id}:`, error)
    throw error
  }
}

export const getVentas_All = async () => {
  try {
    const ventas = await Venta_Class_DB.findAll()
    return ventas.map((item) => item.dataValues)
  } catch (error) {
    console.error('Error al obtener todos las ventas:', error)
    throw error
  }
}

export const getVenta_By_Id = async (id: number) => {
  try {
    const ventas = await Venta_Class_DB.findByPk(id)
    return ventas!.dataValues
  } catch (error) {
    console.error(`Error al obtener la venta con ID ${id}:`, error)
    throw error
  }
}

export const getAllHistorialAcciones = async () => {
  try {
    const historial = await HistorialAcciones_Class_DB.findAll({
      order: [['fecha', 'DESC']], // Ordenar por fecha descendente
    });
    return historial.map((accion) => accion.dataValues);
  } catch (error) {
    console.error(`Error al obtener el historial de acciones:`, error);
    throw error;
  }
};

export const getHistorialAccion_By_Id = async (id: number) => {
  try {
    const accion = await HistorialAcciones_Class_DB.findByPk(id);
    if (!accion) {
      throw new Error(`No se encontró el historial de acción con ID ${id}`);
    }
    return accion.dataValues;
  } catch (error) {
    console.error(`Error al obtener el historial de acción con ID ${id}:`, error);
    throw error;
  }
};

export const getAllUsuarios = async () => {
  try {
    const usuarios = await Usuario_Class_DB.findAll();
    return usuarios.map((usuario) => usuario.dataValues);
  } catch (error) {
    console.error(`Error al obtener los usuarios:`, error);
    throw error;
  }
};

export const getUsuario_By_Id = async (id: number) => {
  try {
    const usuario = await Usuario_Class_DB.findByPk(id);
    if (!usuario) {
      throw new Error(`No se encontró el usuario con ID ${id}`);
    }
    return usuario.dataValues;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error);
    throw error;
  }
};
