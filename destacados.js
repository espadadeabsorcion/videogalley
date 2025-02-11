document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".destacado-card").forEach(destacado => {
        destacado.addEventListener("click", function () {
            let videoUrl = this.getAttribute("data-url");
            if (videoUrl) {
                window.open(videoUrl, "_blank"); // Abrir en una nueva pestaña
            }
        });
    });
});
function abrir(enlace) {
    document.location.href = enlace;
}