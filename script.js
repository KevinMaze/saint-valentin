// const x = Math.min(
//     Math.max(10, 60 + radius * Math.cos(angle * (Math.PI / 180))),
//     90
// ); // Position x
// const y = Math.min(
//     Math.max(10, 60 + radius * Math.sin(angle * (Math.PI / 180))),
//     90
// );

document.addEventListener("DOMContentLoaded", () => {
    let cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    const words = [
        "mon amour",
        "my love",
        "mein Schatz",
        "mi amor",
        "amore mio",
        "mo ghrá",
        "min älskling",
        "moya lyubov",
        "min elskede",
        "minha amada",
        "愛する人",
        "사랑하는 사람",
        "min kärlek",
        "min elskling",
        "moja ljubav",
        "meine Liebe",
        "mi querida",
        "az én szerelmem",
        "môj milovaný",
        "miluji tě",
        "můj miláček",
        "la mia amata",
        "mijn lief",
        "min älskade",
        "min kjære",
        "min ástin",
        "min kærlighed",
        "mou agapi",
        "moja láska",
        "moja ljubavi",
        "mijn schat",
        "mīļotais",
        "miluju tě",
        "mily krasávec",
        "mein Liebling",
        "mi cielo",
        "mio amore",
        "mīlestība",
        "min dragoste",
        "mi amada",
        "mana mīlestība",
    ];

    const maxWords = 20; // Limite du nombre de mots à afficher en même temps
    const activeWords = []; // Stocke les mots actuellement affichés

    function checkOverlap(x, y, width, height) {
        // Vérifie si le nouveau mot entre en collision avec un mot existant
        return activeWords.some((word) => {
        return !(
            x + width < word.x || // Trop à gauche
            x > word.x + word.width || // Trop à droite
            y + height < word.y || // Trop en haut
            y > word.y + word.height // Trop en bas
        );
        });
    }

    function createWord() {
    if (activeWords.length >= maxWords) {
        // Supprime le mot le plus ancien pour limiter la surcharge
        const oldWord = activeWords.shift();
        oldWord.remove();
    }

    const word = words[Math.floor(Math.random() * words.length)];
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "word";

    let x, y;
    let attempts = 0;
    const maxAttempts = 50; // Limite pour éviter une boucle infinie
    do {
        const angle = Math.random() * 360;
        const radius = Math.random() * 200 + 150; // Distance du centre
        x = Math.min( Math.max(10, 50 + radius * Math.cos(angle * (Math.PI / 180))), 90);
        y = Math.min( Math.max(10, 50 + radius * Math.sin(angle * (Math.PI / 180))), 90);

      // Calcule les dimensions du mot pour éviter les chevauchements
    const fontSize = Math.random() * 16 + 14;
    span.style.fontSize = fontSize + "px";
    document.body.appendChild(span); // Ajout temporaire pour mesurer
    const { offsetWidth: width, offsetHeight: height } = span;
    span.remove(); // Supprime temporairement pour recalculer si nécessaire

    if (!checkOverlap(x, y, width, height)) {
        // Si pas de chevauchement, on valide la position
        span.style.top = `calc(${y}% - ${height / 2}px)`;
        span.style.left = `calc(${x}% - ${width / 2}px)`;
        document.body.appendChild(span); // Réajout final au DOM
        activeWords.push({ element: span, x, y, width, height });
        break;
    }

    attempts++;
    } while (attempts < maxAttempts);

    // Si on atteint la limite d'essais, on n'ajoute pas le mot
    if (attempts >= maxAttempts) return;

    // Apparition progressive
    span.style.opacity = "1";

    // Suppression après 6 secondes
    setTimeout(() => {
    span.style.opacity = "0";
    setTimeout(() => {
        span.remove();
        const index = activeWords.findIndex((w) => w.element === span);
        if (index !== -1) activeWords.splice(index, 1);
    }, 1000); // Attends que l'animation d'opacité soit terminée
    }, 7000); // Durée d'affichage du mot
}

function startWords() {
    setInterval(createWord, 1000); // Crée un mot toutes les secondes
}

  startWords(); // Démarre l'affichage dynamique des mots

function showHeart() {
    const heart = document.getElementById("heart");
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.addEventListener("click", () => {
        setInterval(fallHeart, 300);
        heart.classList.add("clicked");
        setTimeout(() => {
            document.getElementById("message").style.display = "block";
        }, 300);
    });
}

// Apparition du cœur
setTimeout(showHeart, 2000);
// generateWords();
});

const fallHeart = () => {
    const coeur = document.createElement("div");

    coeur.classList.add("coeur");
    coeur.innerHTML = "💖";
    coeur.style.left = Math.random() * 100 + "vw";
    coeur.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(coeur);

    setTimeout(() => {
        coeur.remove();
    }, 5000);
};
// setInterval(fallHeart, 300);


function changeState() {
    let btns = document.querySelectorAll(".btn");
    let audio = document.getElementById("#audio");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    btns[x].classList.add("active");

    if(x == 0){
        audio.play();
    }
    if(x == 1){
        audio.pause();
    }
    if(x == 2){
        audio.pause();
        audio.currentTime = 0;
    }
}