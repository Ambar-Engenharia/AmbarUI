const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('./ipc/concessionariasIpc'); 
require('./ipc/serviceIpc'); 

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
        autoHideMenuBar: true
    });
    
    mainWindow.loadFile('src/views/index.html');

    ipcMain.on('open-concessionarias', () => {
        mainWindow.loadFile('src/views/concessionarias.html');
    });

    ipcMain.on('open-art', () => {
        mainWindow.loadFile('src/views/art.html');
    });
});
