document.addEventListener("DOMContentLoaded", () => {
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
        // "můj miláček",
        // "la mia amata",
        // "mijn lief",
        // "min älskade",
        // "min kjære",
        // "min ástin",
        // "min kærlighed",
        // "mou agapi",
        // "moja láska",
        // "moja ljubavi",
        // "mijn schat",
        // "mīļotais",
        // "miluju tě",
        // "mily krasávec",
        // "mein Liebling",
        // "mi cielo",
        // "mio amore",
        // "mīlestība",
        // "min dragoste",
        // "mi amada",
        // "mana mīlestība",
    ];

    const positions = [];

    function createWord(word) {
        console.log(`Creating word: ${word}`);
        const span = document.createElement("span");
        span.textContent = word;
        span.className = "word";

        let isOverlapping;
        let x, y;

        //     // Position autour du cœur
        //     const angle = Math.random() * 360; // Angle aléatoire
        //     const radius = Math.random() * 200 + 150; // Distance aléatoire depuis le cœur
        //     const x = Math.min(
        //         Math.max(10, 50 + radius * Math.cos(angle * (Math.PI / 180))),
        //         90
        //     );
        //     const y = Math.min(
        //         Math.max(10, 50 + radius * Math.sin(angle * (Math.PI / 180))),
        //         90
        //     );

        //     console.log(
        //         `Word: ${word}, Angle: ${angle}, Radius: ${radius}, X: ${x}, Y: ${y}`
        //     );

        //     // Position et taille aléatoire
        //     span.style.top = `calc(${y}% - 10px)`;
        //     span.style.left = `calc(${x}% - 40px)`;
        //     span.style.fontSize = Math.random() * 16 + 14 + "px";

        //     // Ajout à la page
        //     document.body.appendChild(span);

        //     // Apparition progressive
        //     setTimeout(() => {
        //         span.classList.add("appear");
        //     }, Math.random() * 2000);
        // }
        do {
            isOverlapping = false;
            const angle = Math.random() * 360; // Angle en degrés
            const radius = Math.random() * 200 + 150; // Rayon
            x = Math.min(
                Math.max(10, 50 + radius * Math.cos(angle * (Math.PI / 180))),
                90
            ); // Position x
            y = Math.min(
                Math.max(10, 50 + radius * Math.sin(angle * (Math.PI / 180))),
                90
            );

            // Vérifiez si la position chevauche une autre
            for (const pos of positions) {
                const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
                if (distance < 10) {
                    // Ajustez cette valeur selon la taille des mots
                    isOverlapping = true;
                    break;
                }
            }
        } while (isOverlapping);

        // Ajouter la position validée au tableau
        positions.push({ x, y });

        // Positionner le mot
        span.style.top = `calc(${y}% - 10px)`;
        span.style.left = `calc(${x}% - 40px)`;
        span.style.fontSize = Math.random() * 16 + 14 + "px";

        // Ajouter le mot au DOM
        document.body.appendChild(span);

        // Apparition progressive
        setTimeout(() => {
            span.classList.add("appear");
        }, Math.random() * 2000);
    }

    function showHeart() {
        const heart = document.getElementById("heart");
        heart.style.transform = "translate(-50%, -50%) scale(1)";
        heart.addEventListener("click", () => {
            heart.classList.add("clicked");
            setTimeout(() => {
                document.getElementById("message").style.display = "block";
            }, 300);
        });
    }

    // Affichage des mots
    words.forEach((word, index) => {
        setTimeout(() => createWord(word), index * 500);
    });

    // Apparition du cœur
    setTimeout(showHeart, 2000);
});
