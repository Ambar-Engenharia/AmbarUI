const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require("axios");
const { exec } = require("child_process");
require('./ipc/concessionariasIpc'); 

let mainWindow;
let logsWindow;
let logs = [];

function iniciarBackend() {
    const backendPath = 'C:\\Users\\laoni\\OneDrive\\Documentos\\AMBAR\\AutoAMBAR\\backend\\dist\\main.exe';

    const backendProcess = exec(backendPath, (error) => {
        if (error) console.error("Erro ao iniciar o backend:", error);
    });

    backendProcess.stdout.on("data", (data) => {
        const log = data.toString().trim();
        logs.push(log);
        console.log("[LOG]", log);
    
        if (logsWindow && !logsWindow.isDestroyed()) {
            logsWindow.webContents.send("backend-log", log);
        }
    });

    backendProcess.stderr.on("data", (data) => {
        const log = `[ERRO] ${data.toString()}`;
        logs.push(log);
        mainWindow.webContents.send("backend-log", log);
        if (logsWindow && !logsWindow.isDestroyed()) {
            logsWindow.webContents.send("backend-log", log);
        }
    });

    backendProcess.on("exit", (code) => {
        const log = `[INFO] Backend encerrado com código: ${code}`;
        logs.push(log);
        mainWindow.webContents.send("backend-log", log);
        if (logsWindow && !logsWindow.isDestroyed()) {
            logsWindow.webContents.send("backend-log", log);
        }
    });
}

app.whenReady().then(() => {
    iniciarBackend()
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
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
            logsWindow = new BrowserWindow({
                width: 600,
                height: 600,
                webPreferences: {
                    preload: path.join(__dirname, 'preload.js'),  // Garante que o preload está sendo carregado
                    contextIsolation: true,
                },
            });
    
            logsWindow.loadFile('src\\views\\logs.html');
    
            // Quando a janela estiver pronta, enviar os logs armazenados
            console.log("logs:\n")
            logsWindow.webContents.once("did-finish-load", () => {
                logs.forEach(log => {
                    console.log(log)
                    logsWindow.webContents.send("backend-log", log);
                });
            });
        } catch (error) {
            event.reply("resposta-script", { erro: "Falha ao conectar ao backend." });
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        async () => {
            try {
                const resposta = await axios.post(`http://127.0.0.1:5000/quit`);
                event.reply("resposta-script", resposta.data);
            } catch(error) {
                event.reply("resposta-script", { erro: "Falha ao conectar ao backend." });
            }
        }
        app.quit()
    }
})
