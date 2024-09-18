import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // Get
    getAllOperaciones: (...args) => ipcRenderer.invoke('getAllOperaciones', ...args),
    getOperacion_By_Id: (...args) => ipcRenderer.invoke('getOperacion_By_Id', ...args),
    getSaldo: (...args) => ipcRenderer.invoke('getSaldo', ...args),

    // Edit
    editOperacion_By_Id: (...args) => ipcRenderer.invoke('editOperacion_By_Id', ...args),
    updateSaldo: (...args) => ipcRenderer.invoke('updateSaldo', ...args),

    // Delete
    deleteOperacion_By_Id: (...args) => ipcRenderer.invoke('deleteOperacion_By_Id', ...args),
    deleteSaldo: (...args) => ipcRenderer.invoke('deleteSaldo', ...args),

    // Create
    createOperacion: (...args) => ipcRenderer.invoke('createOperacion', ...args),
    crearSaldo: (...args) => ipcRenderer.invoke('crearSaldo', ...args)
  })
} catch (error) {
  console.error(error)
}
