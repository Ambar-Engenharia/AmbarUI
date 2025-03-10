const { ipcMain } = require('electron');
const axios = require("axios");

ipcMain.on("executar-services", async (event, serviceNome) => {
    try {
        const resposta = await axios.get(`http://127.0.0.1:5000/executar/${serviceNome}`);
        event.reply("resposta-script", resposta.data);
    } catch (error) {
        event.reply("resposta-script", { erro: "Falha ao conectar ao backend." });
    }
})
