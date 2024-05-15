// Obtém referências para os elementos HTML nos quais o estado do jogo será exibido.
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');


// Seleciona todos os botões no documento HTML.
const possibleChoices = document.querySelectorAll('button');

// Declara variáveis para armazenar a escolha do usuário, a escolha do computador e o resultado.
let userChoice;
let computerChoice;
let result;

// Adiciona evento de clique a todos os botões.
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

 // Quando um botão é clicado, armazena a escolha do usuário como o ID do botão clicado.
 userChoice = e.target.id;
 userChoiceDisplay.innerHTML = userChoice;

 // Gera a escolha do computador aleatoriamente.
 generateComputerChoice();

 // Determina o resultado do jogo com base nas escolhas do usuário e do computador.
 getResult();
}));

// Gera a escolha do computador aleatoriamente.
function generateComputerChoice() {
 const randomNumber = Math.floor(Math.random() * 3) + 1;

 if (randomNumber === 1) {
   computerChoice = 'Pedra';
 }
 if (randomNumber === 2) {  
   computerChoice = 'Tesoura';
 }
 if (randomNumber === 3) {
   computerChoice = 'Papel';
 }
 computerChoiceDisplay.innerHTML =  computerChoice;

}

// Determina o resultado do jogo com base nas escolhas do usuário e do computador.
function getResult() {
 if (computerChoice === userChoice) {
   result = 'Empate!';
 }
 if (computerChoice === 'Pedra' && userChoice === "Papel") {
   result = 'Você ganhou!';
 }
 if (computerChoice === 'Pedra' && userChoice === "Tesoura") {
   result = 'Você perdeu!';
 }
 if (computerChoice === 'Papel' && userChoice === "Tesoura") {
   result = 'Você ganhou!';
 }
 if (computerChoice === 'Papel' && userChoice === "Pedra") {
   result = 'Você perdeu!';
 }
 if (computerChoice === 'Tesoura' && userChoice === "Pedra") {
   result = 'Você ganhou!';
 }
 if (computerChoice === 'Tesoura' && userChoice === "Papel") {
   result = 'Você perdeu!';
 }

 resultDisplay.innerHTML = result;
}
