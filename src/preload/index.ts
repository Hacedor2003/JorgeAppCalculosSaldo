import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //Get
    getAllHistorialAcciones: (...args) => ipcRenderer.invoke('getAllHistorialAcciones', ...args),
    getHistorialAccion_By_Id: (...args) => ipcRenderer.invoke('getHistorialAccion_By_Id', ...args),
    getAllUsuarios: (...args) => ipcRenderer.invoke('getAllUsuarios', ...args),
    getUsuario_By_Id: (...args) => ipcRenderer.invoke('getUsuario_By_Id', ...args),
    getProductos_All: (...args) => ipcRenderer.invoke('getProductos_All', ...args),
    getVentas_All: (...args) => ipcRenderer.invoke('getVentas_All', ...args),
    getVenta_By_Id: (...args) => ipcRenderer.invoke('getVenta_By_Id', ...args),
    getProductos_By_Id: (...args) => ipcRenderer.invoke('getProductos_By_Id', ...args),
    getComponentes_All: (...args) => ipcRenderer.invoke('getComponentes_All', ...args),
    getComponente_By_Id: (...args) => ipcRenderer.invoke('getComponente_By_Id', ...args),
    getClientes_All: (...args) => ipcRenderer.invoke('getClientes_All', ...args),
    getCliente_By_Id: (...args) => ipcRenderer.invoke('getCliente_By_Id', ...args),
    getHistorial_Ventas_All: (...args) => ipcRenderer.invoke('getHistorial_Ventas_All', ...args),
    getHistorial_Ventas_By_Cliente: (...args) =>
      ipcRenderer.invoke('getHistorial_Ventas_By_Cliente', ...args),
    getHistorial_Ventas_By_Id: (...args) =>
      ipcRenderer.invoke('getHistorial_Ventas_By_Id', ...args),

    //Delete
    deleteVenta_By_Id: (...args) => ipcRenderer.invoke('deleteVenta_By_Id', ...args),
    deleteProducto_By_Id: (...args) => ipcRenderer.invoke('deleteProducto_By_Id', ...args),
    deleteComponente_By_Id: (...args) => ipcRenderer.invoke('deleteComponente_By_Id', ...args),
    deleteCliente_By_Id: (...args) => ipcRenderer.invoke('deleteCliente_By_Id', ...args),
    deleteHistorial_By_Id: (...args) => ipcRenderer.invoke('deleteHistorial_By_Id', ...args),
    deleteHistorial_Acciones_By_Id: (...args) =>
      ipcRenderer.invoke('deleteHistorial_Acciones_By_Id', ...args),
    deleteUsuario_By_Id: (...args) => ipcRenderer.invoke('deleteUsuario_By_Id', ...args),

    //Edit
    editVenta_By_Id: (...args) => ipcRenderer.invoke('editVenta_By_Id', ...args),
    editProducto_By_Id: (...args) => ipcRenderer.invoke('editProducto_By_Id', ...args),
    editCliente_By_Id: (...args) => ipcRenderer.invoke('editCliente_By_Id', ...args),
    editComponente_By_Id: (...args) => ipcRenderer.invoke('editComponente_By_Id', ...args),
    editHistorial_Venta_By_Id: (...args) =>
      ipcRenderer.invoke('editHistorial_Venta_By_Id', ...args),
    editHistoria_Accciones_By_Id: (...args) =>
      ipcRenderer.invoke('editHistoria_Accciones_By_Id', ...args),
    editUsuario_By_Id: (...args) => ipcRenderer.invoke('editUsuario_By_Id', ...args),

    //Create
    createVenta: (...args) => ipcRenderer.invoke('createVenta', ...args),
    createProducto: (...args) => ipcRenderer.invoke('createProducto', ...args),
    createComponente: (...args) => ipcRenderer.invoke('createComponente', ...args),
    createHistorial: (...args) => ipcRenderer.invoke('createHistorial', ...args),
    createCliente: (...args) => ipcRenderer.invoke('createCliente', ...args)
  })
} catch (error) {
  console.error(error)
}
