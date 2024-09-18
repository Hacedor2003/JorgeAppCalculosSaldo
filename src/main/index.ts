import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { BrowserWindow, app, ipcMain, shell } from 'electron'
import { join } from 'path'
/* import icon from '../../resources/icon.png?asset' */
import connectDB from './db/db'
import {
  createCliente,
  createComponente,
  createHistorial,
  createHistorial_Acciones,
  createProducto,
  createUsuarios,
  createVenta,
  deleteCliente_By_Id,
  deleteComponente_By_Id,
  deleteHistorial_By_Id,
  deleteProducto_By_Id,
  deleteVenta_By_Id,
  editCliente_By_Id,
  editComponente_By_Id,
  editHistorial_Venta_By_Id,
  editProducto_By_Id,
  editVenta_By_Id,
  getAllHistorialAcciones,
  getAllUsuarios,
  getCliente_By_Id,
  getClientes_All,
  getComponente_By_Id,
  getComponentes_All,
  getHistorialAccion_By_Id,
  getHistorial_Ventas_All,
  getHistorial_Ventas_By_Cliente,
  getHistorial_Ventas_By_Id,
  getProductos_All,
  getProductos_By_Id,
  getUsuario_By_Id,
  getVenta_By_Id,
  getVentas_All
} from './lib'
import { editHistoria_Accciones_By_Id, editUsuario_By_Id } from './lib/Hook_Edit'
import { Notifier } from './lib/Notifier'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    show: false,
    autoHideMenuBar: true,
    /* ...(process.platform === 'linux' ? { icon } : {}), */
    center: true,
    title: 'Sistema de Mantenimiento',
    frame: true,
    vibrancy: 'under-window',
    visualEffectState: 'active',
    titleBarStyle: 'default',
    trafficLightPosition: { x: 15, y: 10 },
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    const connectionString = 'postgres://postgres:123@localhost:5432/sistema-ventas'

    /* Listen de la base de datos */
    const notifier = new Notifier(connectionString)

    notifier.connect()
    notifier.listenForNotifications()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  //DB
  await connectDB()

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC

  //Get
  ipcMain.handle('getProductos_All', () => getProductos_All())
  ipcMain.handle('getVentas_All', () => getVentas_All())
  ipcMain.handle('getVenta_By_Id', (_, id) => getVenta_By_Id(id))
  ipcMain.handle('getProductos_By_Id', (_, id) => getProductos_By_Id(id))
  ipcMain.handle('getComponentes_All', () => getComponentes_All())
  ipcMain.handle('getComponente_By_Id', (_, id) => getComponente_By_Id(id))
  ipcMain.handle('getClientes_All', () => getClientes_All())
  ipcMain.handle('getCliente_By_Id', (_, id) => getCliente_By_Id(id))
  ipcMain.handle('getHistorial_Ventas_All', () => getHistorial_Ventas_All())
  ipcMain.handle('getHistorial_Ventas_By_Cliente', (_, cliente) =>
    getHistorial_Ventas_By_Cliente(cliente)
  )
  ipcMain.handle('getHistorial_Ventas_By_Id', (_, id) => getHistorial_Ventas_By_Id(id))
  ipcMain.handle('getAllHistorialAcciones', () => getAllHistorialAcciones())
  ipcMain.handle('getHistorialAccion_By_Id', (_, id) => getHistorialAccion_By_Id(id))
  ipcMain.handle('getAllUsuarios', () => getAllUsuarios())
  ipcMain.handle('getUsuario_By_Id', (_, id) => getUsuario_By_Id(id))

  //Delete
  ipcMain.handle('deleteVenta_By_Id', (_, id) => deleteVenta_By_Id(id))
  ipcMain.handle('deleteProducto_By_Id', (_, id) => deleteProducto_By_Id(id))
  ipcMain.handle('deleteComponente_By_Id', (_, id) => deleteComponente_By_Id(id))
  ipcMain.handle('deleteCliente_By_Id', (_, id) => deleteCliente_By_Id(id))
  ipcMain.handle('deleteHistorial_By_Id', (_, id) => deleteHistorial_By_Id(id))

  //Edit
  ipcMain.handle('editVenta_By_Id', (_, id, updated) => editVenta_By_Id(id, updated))
  ipcMain.handle('editProducto_By_Id', (_, id, updated) => editProducto_By_Id(id, updated))
  ipcMain.handle('editCliente_By_Id', (_, id, updated) => editCliente_By_Id(id, updated))
  ipcMain.handle('editComponente_By_Id', (_, id, updated) => editComponente_By_Id(id, updated))
  ipcMain.handle('editHistorial_Venta_By_Id', (_, id, updated) =>
    editHistorial_Venta_By_Id(id, updated)
  )
  ipcMain.handle('editHistoria_Accciones_By_Id', (_, id, updated) =>
    editHistoria_Accciones_By_Id(id, updated)
  )
  ipcMain.handle('editUsuario_By_Id', (_, id, updated) => editUsuario_By_Id(id, updated))

  //Create
  ipcMain.handle('createVenta', (_, newData) => createVenta(newData))
  ipcMain.handle('createProducto', (_, newData) => createProducto(newData))
  ipcMain.handle('createComponente', (_, newData) => createComponente(newData))
  ipcMain.handle('createHistorial', (_, newData) => createHistorial(newData))
  ipcMain.handle('createCliente', (_, newData) => createCliente(newData))
  ipcMain.handle('createHistorial_Acciones', (_, newData) => createHistorial_Acciones(newData))
  ipcMain.handle('createUsuarios', (_, newData) => createUsuarios(newData))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
