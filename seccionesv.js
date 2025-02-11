document.querySelectorAll('.icon-heart').forEach(icon => {
    icon.addEventListener('click', () => {
        let heartsContainer = document.getElementById('hearts-container');
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement('span');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 200 + 'vw';  
            heart.style.animationDuration = Math.random() * 5 + 8 + 's';
            heartsContainer.appendChild(heart);

           
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    });
});


document.querySelectorAll('.icon-comment').forEach(icon => {
    icon.addEventListener('click', () => {
        let commentBox = document.getElementById('comment-box');
        commentBox.style.display = 'block';
    });
});

function closeCommentBox() {
    document.getElementById('comment-box').style.display = 'none';
}

function submitComment() {
    let comment = document.getElementById('textarea').value;
    if (comment.trim()) {
        alert('Comentario enviado: ' + comment);
    } else {
        alert('Por favor, escribe un comentario');
    }
    document.getElementById('textarea').value = '';  
    closeCommentBox();
}

function abrir(enlace) {
    document.location.href = enlace;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".seccion-card").forEach(destacado => {
        destacado.addEventListener("click", function (event) {
            event.stopPropagation();

            let videoUrl = this.getAttribute("data-url");
            if (videoUrl) {
                window.open(videoUrl, "_blank");
            }
        });
    });
});
