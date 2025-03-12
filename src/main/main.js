const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require("axios");
const { exec } = require("child_process");
require('./ipc/concessionariasIpc'); 

let mainWindow;

app.whenReady().then(() => {
    const backendPath = 'C:\\Users\\laoni\\OneDrive\\Documentos\\AMBAR\\AutoAMBAR\\backend\\dist\\main.exe';

    const backendProcess = exec(backendPath, (error) => {
        if (error) console.error("Erro ao iniciar o backend:", error);
    });

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

    ipcMain.on("executar-services", async (event, serviceNome) => {
        try {
            const resposta = await axios.get(`http://127.0.0.1:5000/executar/${serviceNome}`);
            event.reply("resposta-script", resposta.data);
        } catch (error) {
            event.reply("resposta-script", { erro: "Falha ao conectar ao backend." });
        }
    })
});
