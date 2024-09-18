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
import { MainScreen } from './MainScreen'
import { autoUpdater } from 'electron-updater'

//Basic flags
autoUpdater.forceDevUpdateConfig = true
autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = true

let mainWindow

function createWindow(): void {
  // Create the browser window.
  mainWindow = new MainScreen()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  //DB
  await connectDB()

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.hacedor')

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
  autoUpdater.checkForUpdates()
  mainWindow.showMessage(`Revisando actualizacion. Version Actual ${app.getVersion()}`)
})

/*New Update Available*/
autoUpdater.on('update-available', () => {
  mainWindow.showMessage(`Actualizacion disponible. Version Actual ${app.getVersion()}`)
  const pth = autoUpdater.downloadUpdate()
  mainWindow.showMessage(pth)
})

autoUpdater.on('update-not-available', () => {
  mainWindow.showMessage(`No Actualizacion disponible. Version Actual ${app.getVersion()}`)
})

/*Download Completion Message*/
autoUpdater.on('update-downloaded', () => {
  mainWindow.showMessage(`Descargando Actualizacion. Version Actual ${app.getVersion()}`)
})

autoUpdater.on('error', (info) => {
  mainWindow.showMessage(info)
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
