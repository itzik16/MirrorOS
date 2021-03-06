
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
let win

const createWindow = () => {
  win = new BrowserWindow({
    fullscreen: true,
    //resizable: false
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if(win == null){
    createWindow()
  }
})
