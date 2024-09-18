import {
  Categorias,
  Equipos,
  Estados_Revision,
  Orden_Mantenimiento,
  Presupuesto,
  Tipo_Mantenimiento,
  Usuarios
} from 'src/main/db/Models'
import {
  CategoriasAttributes,
  UsuariosAttributes,
  Tipo_MantenimientoAttributes,
  Orden_MantenimientoAttributes,
  Estados_RevisionAttributes,
  EquiposAttributes,
  PresupuestoAttributes,
  Producto_Interface,
  Venta_Interface,
  Componente_Interface,
  Cliente_Interface,
  HistorialCompra_Interface,
  Usuario_Interface,
  HistorialAcciones_Interface
} from '../shared/types'

declare global {
  interface Window {
    context: {
      getAllHistorialAcciones: () => Promise<HistorialCompra_Interface[]>
      getHistorialAccion_By_Id: () => Promise<HistorialCompra_Interface>
      getAllUsuarios: () => Promise<Usuario_Interface[]>
      getUsuario_By_Id: () => Promise<Usuario_Interface>
      getProductos_All: () => Promise<Producto_Interface[]>
      getVentas_All: () => Promise<Venta_Interface[]>
      getVenta_By_Id: () => Promise<Venta_Interface>
      getProductos_By_Id: () => Promise<Producto_Interface>
      getComponentes_All: () => Promise<Componente_Interface[]>
      getComponente_By_Id: () => Promise<Componente_Interface>
      getClientes_All: () => Promise<Cliente_Interface[]>
      getCliente_By_Id: () => Promise<Cliente_Interface>
      getHistorial_Ventas_All: () => Promise<HistorialCompra_Interface[]>
      getHistorial_Ventas_By_Cliente: () => Promise<HistorialCompra_Interface[]>
      getHistorial_Ventas_By_Id: () => Promise<HistorialCompra_Interface>

      editVenta_By_Id: (id: number, updated: Venta_Interface) => Promise<Venta_Interface>
      editProducto_By_Id: (id: number, updated: Producto_Interface) => Promise<Producto_Interface>
      editCliente_By_Id: (id: number, updated: Cliente_Interface) => Promise<Cliente_Interface>
      editComponente_By_Id: (
        id: number,
        updated: Componente_Interface
      ) => Promise<Componente_Interface>
      editHistorial_Venta_By_Id: (id: number, updated: Venta_Interface) => Promise<Venta_Interface>
      editHistoria_Accciones_By_Id: (
        id: number,
        updated: HistorialAcciones_Interface
      ) => Promise<HistorialAcciones_Interface>
      editUsuario_By_Id: (id: number, updated: Usuario_Interface) => Promise<Usuario_Interface>

      deleteVenta_By_Id: (id: number) => Promise<void>
      deleteProducto_By_Id: (id: number) => Promise<void>
      deleteComponente_By_Id: (id: number) => Promise<void>
      deleteCliente_By_Id: (id: number) => Promise<void>
      deleteHistorial_By_Id: (id: number) => Promise<void>
      deleteHistorial_Acciones_By_Id: (id: number) => Promise<void>
      deleteUsuario_By_Id: (id: number) => Promise<void>

      createVenta: (data: Venta_Interface) => Promise<Venta_Interface>
      createProducto: (data: Producto_Interface) => Promise<Producto_Interface>
      createComponente: (data: Componente_Interface) => Promise<Componente_Interface>
      createHistorial: (data: HistorialCompra_Interface) => Promise<HistorialCompra_Interface>
      createCliente: (data: Cliente_Interface) => Promise<Cliente_Interface>
      createHistorial_Acciones: (
        data: HistorialAcciones_Interface
      ) => Promise<HistorialAcciones_Interface>
      createUsuarios: (data: Usuario_Interface) => Promise<Usuario_Interface>
    }
  }
}
