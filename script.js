const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".grid-item").forEach(destacado => {
        destacado.addEventListener("click", function () {
            let videoUrl = this.getAttribute("data-url");
            if (videoUrl) {
                window.open(videoUrl, "_blank"); // Abrir en una nueva pestaña
            }
        });
    });
});

document.querySelectorAll('.gallery .card img').forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

function abrir(enlace) {
    document.location.href = enlace;
}
