let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');


// Criando order aleatoria das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(var i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }
}

//Selecionando proxima cor
let lightColor = (element, number) => {
    number = number*500; 
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() =>{
        element.classList.remove('selected');
    }, 1000);

}

// checar se os botôes foram clicados na ordem correta
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            placar();

            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Você acertou! Iniciando próximo nivel!`);
        placar();
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');


    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);


}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1 ){
        return red;
    } else if(color == 2 ){
        return yellow;
    } else if(color == 3 ){
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order=[];
    clickedOrder = [];

    playGame();
}

function placar() {
    var placar = document.getElementById('placar');
    placar.innerHTML = `Memória Genius  -  Pontuação: ${score}`;
}

//funcao de incio de jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}


//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo

playGame();
placar();
