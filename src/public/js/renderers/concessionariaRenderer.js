document.addEventListener("DOMContentLoaded", () => {
    const btnEnergisa = document.getElementById("btnEnergisa");
    const btnCPFL = document.getElementById("btnCPFL");
    const btnCEMIG = document.getElementById("btnCEMIG");
    const btnElektro = document.getElementById("btnElektro");
    const btnEquatorial = document.getElementById("btnEquatorial");
    const btnCopel = document.getElementById("btnCopel");
    const btnRGE = document.getElementById("btnRGE");
    
    if (btnEnergisa) {
        btnEnergisa.addEventListener("click", () => {
            window.electronAPI.openEnergisa();
        });
    }

    if (btnCPFL) {
        btnCPFL.addEventListener("click", () => {
            window.electronAPI.openCPFL();
        });
    }

    if (btnCEMIG) {
        btnCEMIG.addEventListener("click", () => {
            window.electronAPI.openCEMIG();
        });
    }

    if (btnElektro) {
        btnElektro.addEventListener("click", () => {
            window.electronAPI.openElektro();
        });
    }

    if (btnEquatorial) {
        btnEquatorial.addEventListener("click", () => {
            window.electronAPI.openEquatorial();
        });
    }

    if (btnCopel) {
        btnCopel.addEventListener("click", () => {
            window.electronAPI.openCopel();
        });
    }

    if (btnRGE) {
        btnRGE.addEventListener("click", () => {
            window.electronAPI.openRGE();
        });
    }
});