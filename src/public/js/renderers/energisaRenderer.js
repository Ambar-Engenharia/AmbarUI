document.addEventListener("DOMContentLoaded", () => {
    const btnANEEL = document.getElementById("btnANEEL")
    const btnART = document.getElementById("btnART")

    if (btnANEEL) {
        btnANEEL.addEventListener("click", () => {
            console.log("Preenchendo forms ANEEL...")
            window.electronAPI.runServices("aneel")
        })
    }

    if (btnART) {
        btnART.addEventListener("click", () => {
            console.log("Preenchendo ART...")
            window.electronAPI.runServices("art")
        })
    }
})
