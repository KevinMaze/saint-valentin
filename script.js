const words = [
    "mon amour", "my love", "mein Schatz", "mi amor", "amore mio", "mo ghrá",
    "min älskling", "moya lyubov", "min elskede", "minha amada", "愛する人", "사랑하는 사람",
    "min kärlek", "min elskling", "moja ljubav", "meine Liebe", "mi querida",
    "mój kochany", "az én szerelmem", "môj milovaný", "miluji tě", "můj miláček",
    "la mia amata", "mijn lief", "min älskade", "min kjære", "min ástin",
    "min kærlighed", "mou agapi", "moja láska", "moja ljubavi", "mon chéri",
    "mijn schat", "mīļotais", "miluju tě", "mily krasávec", "mein Liebling",
    "mi cielo", "mio amore", "mīlestība", "min dragoste", "mi amada",
    "mana mīlestība", "ma bien-aimée", "minä rakastan sinua"
];

function createWord(word) {
    const span = document.createElement('span');
    span.textContent = word;
    span.className = 'word';

    // Position around the heart
    const angle = Math.random() * 360;
    const radius = Math.random() * 200 + 150; // Adjust radius to position words around heart
    const x = 50 + radius * Math.cos(angle * (Math.PI / 180));
    const y = 50 + radius * Math.sin(angle * (Math.PI / 180));

    span.style.top = `calc(${y}% - 10px)`;
    span.style.left = `calc(${x}% - 40px)`;
    span.style.fontSize = Math.random() * 16 + 14 + 'px';

    document.body.appendChild(span);

    setTimeout(() => {
    span.classList.add('appear');
    }, Math.random() * 2000); // Slight delay for random appearance
}

function showHeart() {
    const heart = document.getElementById('heart');
    heart.style.transform = 'translate(-50%, -50%) scale(1)';

    heart.addEventListener('click', () => {
    heart.classList.add('clicked');
    setTimeout(() => {
        document.getElementById('message').style.display = 'block';
    }, 300);
    });
}

// Display words at intervals
words.forEach((word, index) => {
    setTimeout(() => createWord(word), index * 500);
});

// Show the heart after a delay
setTimeout(showHeart, 2000);
