'use strict';


//variables
const inputNumber = document.querySelector('.js-number');
const tryButton = document.querySelector('.js-button');
const clueElement = document.querySelector('.js-clue');
const countElement = document.querySelector('.js-tries');

let tryNumber = 0;

//función para generar el número

function getRandomNumber(max){
    return Math.ceil(Math.random()*max);
}

const randomNumber = getRandomNumber (100);
console.log(`El número aleatorio es ${randomNumber}`);

//función del mecanismo

function guessRandomNumber(){
const inputNumberValue = parseInt(inputNumber.value);
//
if (randomNumber===inputNumberValue){
    clueElement.classList.add ('¡Has ganado, campeona!');
}
else if (randomNumber>=inputNumberValue){
    clueElement.innerHTML = 'Demasiado bajo.';
}
else if (randomNumber<=inputNumberValue){
    clueElement.innerHTML = 'Demasiado alto.';
}
else if (randomNumber<1 || inputNumberValue>100){
    clueElement.innerHTML = 'El número debe estar entre 1 y 100.';
}
}

//función de intentos

function countTries() {
  countElement = tryNumber + 1;
  countElement.value = 'Número de intentos: ' + countElement;
}



//evento del botón

tryButton.addEventListener('click', guessRandomNumber);
tryButton.addEventListener = ('click', countTries);

