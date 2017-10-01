const { app , BrowserWindow } = require('electron')

let mainWindow
app.on('ready', () => {
    const localFile = `file://` + __dirname + '/index.html' 
    mainWindow = new BrowserWindow()
    mainWindow.loadURL(localFile)
})