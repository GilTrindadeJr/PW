

const mensagens = [
    "Você está sendo observado...",
    "Não olhe para trás.",
    "Há alguém nesta casa.",
    "Você ouviu isso?",
    "A escuridão está mais perto do que parece.",
    "Algumas coisas não deveriam ser encontradas.",
    "Nem todo fantasma quer ser esquecido."
];

function mensagemAleatoria() {
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];

    alert("☠ " + mensagem);
}




const artigos = document.querySelectorAll("article");

artigos.forEach((artigo) => {

    artigo.addEventListener("mouseenter", () => {
        artigo.style.cursor = "pointer";
    });

    artigo.addEventListener("click", () => {

        const titulo = artigo.querySelector("h3");

        if (titulo) {
            const nome = titulo.textContent;

            alert(
                "☠ MISTÉRIO ☠\n\n" +
                "Você encontrou: " + nome +
                "\n\n" +
                "Talvez seja melhor não investigar mais..."
            );
        }
    });
});




function efeitoPiscada() {

    document.body.style.transition = "background-color 0.1s";
    document.body.style.backgroundColor = "#250000";

    setTimeout(() => {
        document.body.style.backgroundColor = "#080808";
    }, 120);
}




setInterval(() => {

    const chance = Math.random();

    if (chance < 0.15) {
        efeitoPiscada();
    }

}, 10000);




document.addEventListener("keydown", (event) => {

    if (event.key.toLowerCase() === "e") {
        mensagemAleatoria();
    }

});




const footer = document.querySelector("footer");

if (footer) {

    footer.addEventListener("click", () => {

        alert(
            "Você realmente deveria ter ido embora..."
        );

    });

}




let visitas = localStorage.getItem("visitasSite");

if (!visitas) {
    visitas = 1;
} else {
    visitas++;
}

localStorage.setItem("visitasSite", visitas);

console.log(
    "Você já visitou este lugar " +
    visitas +
    " vez(es)."
);




console.log(
    "%c☠ AVISO ☠",
    "color: red; font-size: 25px; font-weight: bold;"
);

console.log(
    "%cSe você encontrou esta mensagem, talvez já seja tarde demais...",
    "color: #880000; font-size: 14px;"
);