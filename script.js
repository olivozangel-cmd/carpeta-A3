const PASSWORD = "tu_contraseña"; // Cambia esto por la que quieras

function login() {
    const input = document.getElementById("password").value;
    if(input === PASSWORD){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        playMusic();
    } else {
        alert("Contraseña incorrecta 😢");
    }
}

const messages = {
    dulce: "Me gusta cuando sonríes...",
    bonito: "Me gustaría verte hacer lo que más te apasiona...",
    sincero: "Tienes una energía única..."
};

function showMessage(type) {
    alert(messages[type]); // O puedes mostrarlo en el cuadro blanco
    createHearts();
}

function createHearts() {
    for(let i=0; i<8; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💗";
        heart.style.left = Math.random() * 80 + 10 + "%";
        heart.style.top = "60%";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

function playMusic(){
    const music = document.getElementById("music");
    music.volume = 0.3;
    music.play().catch(e => console.log("La música requiere interacción previa"));
}