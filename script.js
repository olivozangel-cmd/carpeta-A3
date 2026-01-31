const PASSWORD = "02022009";

const messages = {
  dulce: "Me gusta cuando sonríes y tus ojos no son la excepción 💖",
  bonito: "Me gustaría verte hacer lo que más te apasiona en esta vida y estar en ello 🌷",
  sincero: "Tienes una energía que no se la he visto a nadie, eso me gusta de ti 💫"
};

function login() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Contraseña incorrecta 😢");
  }
}

function showMessage(type) {
  const messageDiv = document.getElementById("message");

  // Reinicia el texto siempre
  messageDiv.innerText = "";
  setTimeout(() => {
    messageDiv.innerText = messages[type];
  }, 50);

  // Perrito feliz
  const dog = document.getElementById("dog");
  dog.classList.add("happy");
  setTimeout(() => dog.classList.remove("happy"), 500);

  createHearts();
  playMusic();
}

function createHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function playMusic() {
  const music = document.getElementById("music");
  music.volume = 0.4;
  music.play().catch(() => {});
}

// Contador para cumpleaños (02/02)
function updateCounter() {
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear(), 1, 2);

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("counter").innerText =
    `Faltan ${days} días para tu cumpleaños 🎂`;
}

updateCounter();