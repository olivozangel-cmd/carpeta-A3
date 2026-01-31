const PASSWORD = "02022009";

const messages = {
  dulce: "Me gusta cuando sonríes y tus ojos no son la excepción 💖",
  bonito: "Me gustaría verte hacer lo que más te apasiona en esta vida y estar en ello 🌷",
  sincero: "Tienes una energía que no se la he visto a nadie, eso me gusta de ti 💫",
  rosa: "Alguien especial te quiere seguir conociendo y saber más de tu maravilloso universo 🌹"
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
  // TEXTO PERMANENTE (se reemplaza solo al presionar otro botón)
  document.getElementById("message").innerText = messages[type];

  // Perrito feliz
  const dog = document.getElementById("dog");
  dog.classList.add("happy");
  setTimeout(() => dog.classList.remove("happy"), 500);

  playMusic();
}

function playMusic() {
  const music = document.getElementById("music");
  music.volume = 0.5;

  // Android-friendly
  if (music.paused) {
    music.play().catch(() => {});
  }
}