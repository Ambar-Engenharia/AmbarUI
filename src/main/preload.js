const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openConcessionarias: () => ipcRenderer.send('open-concessionarias'),
    openArt: () => ipcRenderer.send('open-art'),
    openEnergisa: () => ipcRenderer.send('open-energisa'),
    openCPFL: () => ipcRenderer.send('open-cpfl'),
    openCEMIG: () => ipcRenderer.send('open-cemig'),
    openElektro: () => ipcRenderer.send('open-elektro'),
    openEquatorial: () => ipcRenderer.send('open-equatorial'),
    openCopel: () => ipcRenderer.send('open-copel'),
    openRGE: () => ipcRenderer.send('open-rge'),
    runServices: (serviceNome) => ipcRenderer.send('executar-services', serviceNome),
    // onScriptOutput: (callback) => ipcRenderer.on("script-output", (_event, output) => callback(output))
});
