// ================================
// OLHOS SEGUINDO O MOUSE
// ================================

const eyes = [];

for (let i = 0; i < 2; i++) {

    const eye = document.createElement("div");

    eye.className = "horror-eye";

    document.body.appendChild(eye);

    eyes.push(eye);
}

const eyeCSS = document.createElement("style");

eyeCSS.innerHTML = `
    .horror-eye {
        position: fixed;
        width: 10px;
        height: 10px;
        background: #b00000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        box-shadow: 0 0 15px #900000;
        transition: opacity 2s;
    }
`;

document.head.appendChild(eyeCSS);

setTimeout(() => {

    eyes.forEach((eye, index) => {

        eye.style.opacity = "0.7";

        eye.style.left =
            index === 0 ? "25px" : "calc(100% - 35px)";

        eye.style.top =
            index === 0 ? "45%" : "55%";
    });

}, 5000);

document.addEventListener("mousemove", (event) => {

    eyes.forEach((eye) => {

        const rect = eye.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const angle = Math.atan2(y, x);

        const distance = 4;

        eye.style.transform =
            `translate(
                ${Math.cos(angle) * distance}px,
                ${Math.sin(angle) * distance}px
            )`;
    });
});


// ================================
// GLITCH NO TÍTULO
// ================================

const titulo = document.querySelector("header h1");

if (titulo) {

    const textoOriginal = titulo.textContent;

    setInterval(() => {

        if (Math.random() < 0.12) {

            const caracteres = "!@#$%&?";

            let texto = "";

            for (let i = 0; i < textoOriginal.length; i++) {

                if (Math.random() < 0.15) {

                    texto +=
                        caracteres[
                            Math.floor(
                                Math.random() * caracteres.length
                            )
                        ];

                } else {

                    texto += textoOriginal[i];
                }
            }

            titulo.textContent = texto;

            setTimeout(() => {
                titulo.textContent = textoOriginal;
            }, 120);
        }

    }, 1500);
}


// ================================
// FRASES ESCONDIDAS
// ================================

const frases = [
    "não estamos sozinhos",
    "ele está olhando",
    "não feche os olhos",
    "você ouviu isso?",
    "há alguém atrás de você",
    "não deveria estar aqui",
    "corra"
];

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        const frase =
            frases[
                Math.floor(Math.random() * frases.length)
            ];

        console.log(
            "%c" + frase,
            "color:#900000;font-size:20px;font-family:monospace;"
        );
    }
});


// ================================
// MOVIMENTO PARALLAX NO HEADER
// ================================

const header = document.querySelector("header");

document.addEventListener("mousemove", (event) => {

    if (!header) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    header.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;
});


// ================================
// CLIQUE NOS ARTIGOS
// ================================

const artigos = document.querySelectorAll("article");

artigos.forEach((artigo) => {

    artigo.addEventListener("click", () => {

        artigo.style.transition = "0.2s";

        artigo.style.transform =
            "translateX(4px)";

        setTimeout(() => {

            artigo.style.transform =
                "translateX(0)";

        }, 100);
    });
});


// ================================
// MENSAGEM NO CONSOLE
// ================================

console.log(
    "%c☠",
    "color:#900000;font-size:50px;"
);

console.log(
    "%cVocê não deveria estar olhando aqui.",
    "color:#700000;font-size:16px;font-family:monospace;"
);