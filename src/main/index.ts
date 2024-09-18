import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { BrowserWindow, app, ipcMain, shell } from 'electron'
import { join } from 'path'
/* import icon from '../../resources/icon.png?asset' */
import connectDB from './db/db'
import {
  createOperacion,
  deleteOperacion,
  getAllOperaciones,
  getOperacionById,
  updateOperacion
} from './lib/Cruds_Operaciones'
import { crearSaldo, deleteSaldo, getSaldo, updateSaldo } from './lib/Cruds_Saldo'

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
  ipcMain.handle('crearSaldo', (_, saldo) => crearSaldo(saldo))

  // Get
  ipcMain.handle('getAllOperaciones', () => getAllOperaciones())
  ipcMain.handle('getOperacion_By_Id', (_, id) => getOperacionById(id))
  ipcMain.handle('getSaldo', () => getSaldo())

  // Delete
  ipcMain.handle('deleteOperacion_By_Id', (_, id) => deleteOperacion(id))
  ipcMain.handle('deleteSaldo_By_Id', (_) => deleteSaldo())

  // Edit
  ipcMain.handle('editOperacion_By_Id', (_, id, updated) => updateOperacion(id, updated))
  ipcMain.handle('updateSaldo', (_, updated) => updateSaldo(updated))

  // Create
  ipcMain.handle('createOperacion', (_, newData) => createOperacion(newData))

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
