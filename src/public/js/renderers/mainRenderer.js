document.addEventListener("DOMContentLoaded", () => {
    const btnConcessionarias = document.getElementById("btnConcessionarias");
    const btnArt = document.getElementById("btnArt");

    if (btnConcessionarias) {
        btnConcessionarias.addEventListener("click", () => {
            window.electronAPI.openConcessionarias();
        });
    }

    if (btnArt) {
        btnArt.addEventListener("click", () => {
            window.electronAPI.openArt();
        });
    }
});