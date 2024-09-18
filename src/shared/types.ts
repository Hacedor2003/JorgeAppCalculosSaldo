/* eslint-disable prettier/prettier */
import { Optional } from 'sequelize'
export interface Componente_Interface {
  ID_Componente?: number
  nombre: string
}

export interface Producto_Interface {
  ID_Producto?: number
  componente: number
  codigo_producto: string
  precioCup: number
  precioUsd: number
  precioMlc: number
  precioEuro: number
  cantidadAlmacen: number
  codigoComercial: string
  proveedor: string
  costo: number
  fleteLbs: number
  ubicacion: string
  noOEM: number
  cantidadMinima: number
  vin88: number
  descripcion: string
  imagen: string
}

export interface Venta_Interface {
  ID_Venta?: number
  codigo_producto: string
  descripcion: string
  cantidad: number
  costo: number
  precio: number
  peso: number
  ganancia: number
}

export interface Cliente_Interface {
  /** Identificador único del cliente */
  ID_Cliente?: number
  /** Nombre completo del cliente */
  nombre: string
  /** Razón social si el cliente es una empresa */
  razonSocial: string
  /** Tipo de cliente (ej. particular, empresa, mayorista) */
  tipoCliente: string
  /** Correo electrónico del cliente para comunicaciones */
  email: string
  /** Número de teléfono de contacto del cliente */
  telefono: string
  /** Dirección completa del cliente (calle, ciudad, estado, código postal) */
  direccion: string
  /** Fecha en que se registró el cliente en el sistema */
  fechaRegistro: Date
  /** Notas adicionales sobre el cliente */
  notas: string
  /** Estado del cliente (ej. activo, inactivo) */
  estado: string
  /** Descuentos aplicables al cliente */
  descuentos: number
  /** Método de pago preferido del cliente */
  metodoPago: string
  /** Límite de crédito otorgado al cliente */
  limiteCredito: number
  /** Fecha de la última compra realizada por el cliente */
  fechaUltimaCompra: Date
}

export interface HistorialCompra_Interface {
  /* ID del Historial */
  ID_Historial: number
  /** ID de la compra */
  idCompra: number
  /** Fecha de la compra */
  fecha: string
  /** Monto total de la compra */
  montoTotal: number
  /* Id del cliente */
  ID_Cliente: number
}

export interface Usuario_Interface {
  ID_Usuario: number
  nombre: string
  email: string
  contraseña: string
  rol: string
}

export interface HistorialAcciones_Interface {
  ID_Accion: number
  ID_Usuario: number
  accion: string
  fecha: Date
}

export interface HistorialAcciones_Interface_Model
  extends Optional<HistorialAcciones_Interface, 'ID_Accion'> {}
export interface Usuario_Interface_Model extends Optional<Usuario_Interface, 'ID_Usuario'> {}
export interface Componente_Interface_Model
  extends Optional<Componente_Interface, 'ID_Componente'> {}
export interface Producto_Interface_Model extends Optional<Producto_Interface, 'ID_Producto'> {}
export interface Venta_Interface_Model extends Optional<Venta_Interface, 'ID_Venta'> {}
export interface Cliente_Interface_Model extends Optional<Cliente_Interface, 'ID_Cliente'> {}
export interface HistorialCompra_Interface_Model
  extends Optional<HistorialCompra_Interface, 'ID_Historial'> {}
