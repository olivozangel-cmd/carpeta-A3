const PASSWORD = "02022009";

const messages = {
    dulce: "Me gusta cuando sonríes y tus ojos no son la excepción 💖",
    bonito: "Me gustaría verte hacer lo que más te apasiona en esta vida y estar en ello 🌷",
    sincero: "Tienes una energía que no se la he visto a nadie, eso me gusta de ti 💫",
    rosa: "Alguien especial te quiere seguir conociendo y saber más de tu maravilloso universo 🌹"
};

function login() {
    const input = document.getElementById("password").value;
    if(input === PASSWORD){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Contraseña incorrecta 😢");
    }
}

function showMessage(type){
    // Mensaje permanente
    document.getElementById("message").innerText = messages[type];

    // Perrito feliz
    const dog = document.getElementById("dog");
    dog.classList.add("happy");
    setTimeout(()=>dog.classList.remove("happy"), 500);

    // Corazones
    createHearts();

    // Música romántica
    playMusic();
}

function playMusic(){
    const music = document.getElementById("music");
    music.volume = 0.4;
    if(music.paused) music.play().catch(()=>{});
}

function createHearts(){
    for(let i=0;i<5;i++){
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = (Math.random() * window.innerWidth) + "px";
        heart.style.top = (window.innerHeight - 50) + "px";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(), 2000);
    }
}