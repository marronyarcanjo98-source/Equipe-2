let pontos = 0;
let respostas = [];

const gabarito = [
    "b", "a", "c", "a", "b",
    "c", "a", "b", "a", "b"
];

const questoes = document.querySelectorAll("main");

questoes.forEach(function (questao, numero) {

    const botoes = questao.querySelectorAll(".opcao");

    botoes.forEach(function (botao, alternativa) {

        botao.addEventListener("click", function () {

            // VISUAL: Limpa a cor de todos os botões desta questão
            botoes.forEach(function (b) {
                b.classList.remove("selecionada");
            });

            // ACRÉSCIMO VISUAL: Pinta de roxo apenas o botão que acabou de clicar
            botao.classList.add("selecionada");

            const letras = ["a", "b", "c"];
            respostas[numero] = letras[alternativa];

        });

    });

});

const botaoFinal = document.querySelector("#botao-final");

botaoFinal.addEventListener("click", function () {

    pontos = 0;

    for (let i = 0; i < gabarito.length; i++) {

        if (respostas[i] === gabarito[i]) {
            pontos += 10;
        }

    }

    const media = pontos / gabarito.length;

    alert(
        "Média: " + media
    );

});