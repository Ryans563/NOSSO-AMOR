function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const music = document.getElementById("music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
const heartsContainer = document.querySelector('.hearts');
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 4 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}, 500);