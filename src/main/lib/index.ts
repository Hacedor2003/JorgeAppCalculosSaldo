/* eslint-disable prettier/prettier */
import {
  getProductos_All,
  getVentas_All,
  getVenta_By_Id,
  getProductos_By_Id,
  getComponentes_All,
  getComponente_By_Id,
  getClientes_All,
  getCliente_By_Id,
  getHistorial_Ventas_All,
  getHistorial_Ventas_By_Cliente,
  getHistorial_Ventas_By_Id,
  getAllHistorialAcciones,
  getAllUsuarios,
  getHistorialAccion_By_Id,
  getUsuario_By_Id
} from './Hook_Get'

import {
  editVenta_By_Id,
  editProducto_By_Id,
  editCliente_By_Id,
  editComponente_By_Id,
  editHistorial_Venta_By_Id,
  editUsuario_By_Id,
  editHistoria_Accciones_By_Id
} from './Hook_Edit'

import {
  deleteVenta_By_Id,
  deleteProducto_By_Id,
  deleteComponente_By_Id,
  deleteCliente_By_Id,
  deleteHistorial_By_Id,
  deleteUsuario_By_Id,
  deleteHistorial_Acciones_By_Id
} from './Hook_Delete'

import {
  createVenta,
  createProducto,
  createComponente,
  createCliente,
  createHistorial,
  createUsuarios,
  createHistorial_Acciones
} from './Hook_Create'

export {
  createHistorial,
  editHistorial_Venta_By_Id,
  deleteHistorial_By_Id,
  getProductos_All,
  getVentas_All,
  getVenta_By_Id,
  getProductos_By_Id,
  getComponentes_All,
  getComponente_By_Id,
  getClientes_All,
  getCliente_By_Id,
  getHistorial_Ventas_All,
  getHistorial_Ventas_By_Cliente,
  getHistorial_Ventas_By_Id,
  editVenta_By_Id,
  editProducto_By_Id,
  editCliente_By_Id,
  editComponente_By_Id,
  deleteVenta_By_Id,
  deleteProducto_By_Id,
  deleteComponente_By_Id,
  deleteCliente_By_Id,
  createVenta,
  createProducto,
  createComponente,
  createCliente,
  getAllHistorialAcciones,
  getHistorialAccion_By_Id,
  getAllUsuarios,
  getUsuario_By_Id,
  editHistoria_Accciones_By_Id,
  editUsuario_By_Id,
  deleteUsuario_By_Id,
  deleteHistorial_Acciones_By_Id,
  createUsuarios,
  createHistorial_Acciones
}
