let clicks = 0;
let musicStarted = false;

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("error");

    if (input === "02022009") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        updateCountdown();
    } else {
        error.innerText = "Contraseña incorrecta 💔";
    }
}

function showMessage(type) {
    const dog = document.getElementById("dog");
    const msg = document.getElementById("message");

    if (!musicStarted) {
        document.getElementById("music").play();
        musicStarted = true;
    }

    if (type === "dulce") {
        msg.innerText =
        "Me gusta cuando sonríes y tus ojos no son la excepción 💗";
    }

    if (type === "bonito") {
        msg.innerText =
        "Me gustaría verte hacer lo que más te apasiona en esta vida y estar en ello ✨";
    }

    if (type === "sincero") {
        msg.innerText =
        "Tienes una energía que no se la he visto a nadie, eso me gusta de ti 💕";
    }

    // 🐶 feliz
    dog.innerText = "🐶😄";
    dog.classList.add("happy");

    setTimeout(() => {
        dog.innerText = "🐶";
        dog.classList.remove("happy");
    }, 700);

    clicks++;
    createHearts();

    if (clicks >= 3) finale();
}

function secretMessage() {
    document.getElementById("message").innerText =
        "Gracias por existir 💗";
    createHearts();
}

function createHearts() {
    const card = document.querySelector(".card");

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        heart.style.left = Math.random() * 260 + "px";
        heart.style.top = Math.random() * 260 + "px";

        card.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

function finale() {
    document.getElementById("message").innerText =
        "Gracias por leer hasta aquí 💕";
}

function updateCountdown() {
    const today = new Date();
    let next = new Date(today.getFullYear(), 1, 2); // 02 de febrero

    if (today > next) next.setFullYear(today.getFullYear() + 1);

    const diff = Math.ceil((next - today) / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        `Faltan ${diff} días para tu próximo cumpleaños 🎂`;
}