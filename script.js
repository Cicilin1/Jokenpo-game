// Identificadores de placar do usuário e da máquina
let UserScore = document.querySelector('.UserScore span');
let UserMachine = document.querySelector('.UserMachine span');

// Elemento de status da rodada (onde exibiremos o resultado)
let status = document.querySelector('.Status');

// Opções disponíveis para o jogo
const options = ["pedra", "papel", "tesoura"];

// Variáveis para armazenar as escolhas do usuário e da máquina, bem como o resultado da rodada
let useroption;
let maquinaoption;
let result;

// Variáveis para acompanhar o placar
let userCont = 0;
let userMachine = 0;

// Função para obter a escolha da máquina aleatoriamente
let getmaquinaoption = () => {
    let maqindex = (Math.floor(Math.random() * 3));
    maquinaoption = options[maqindex];
    return maquinaoption;
}

// Função para atualizar o placar com base no resultado da rodada
let scoreboard = (result) => {
    if (result == "Eu") {
        userCont += 1;
    } else if (result == "Maquina") {
        userMachine += 1;
    }

    // Atualiza os elementos HTML com os novos valores do placar
    UserScore.innerHTML = userCont;
    UserMachine.innerHTML = userMachine;
}

// Função para determinar o vencedor da rodada com base nas escolhas do usuário e da máquina
let determineWinner = (eu, maquina) => {
    if (eu == maquina) {
        result = "Empate!";
    } else if (
        (eu == "pedra" && maquina == "tesoura") ||
        (eu == "papel" && maquina == "pedra") ||
        (eu == "tesoura" && maquina == "papel")
    ) {
        result = "Eu";
    } else {
        result = "Maquina";
    }
}

// Função para iniciar uma rodada quando o usuário faz uma escolha
let start = (option) => {
    useroption = option;
    maquinaoption = getmaquinaoption();
    determineWinner(useroption, maquinaoption);
    scoreboard(result);

    // Exibe o resultado da rodada no elemento de status
    status.innerHTML = `Você: ${useroption}   -    máquina: ${maquinaoption}`;
}

// Event listeners para os botões de escolha do usuário
document.querySelector('.rock').addEventListener("click", () => start("pedra"));
document.querySelector('.paper').addEventListener("click", () => start("papel"));
document.querySelector('.scissors').addEventListener("click", () => start("tesoura"));


