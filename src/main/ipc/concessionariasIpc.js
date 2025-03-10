const { ipcMain, BrowserWindow } = require('electron');

ipcMain.on('open-energisa', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/ENERGISA.html');
});

ipcMain.on('open-cpfl', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/CPFL.html');
});

ipcMain.on('open-cemig', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/CEMIG.html');
});

ipcMain.on('open-elektro', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/ELEKTRO.html');
});

ipcMain.on('open-equatorial', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/EQUATORIAL.html');
});

ipcMain.on('open-copel', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/COPEL.html');
});

ipcMain.on('open-rge', () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.loadFile('src/views/concessionarias/RGE.html');
});