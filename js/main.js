'use strict';

const inputNumber = document.querySelector('.js-number');
const tryButton = document.querySelector('.js-button');
const clueElement = document.querySelector('.js-clue');
const countElement = document.querySelector('.js-tries');
const randomNumber = getRandomNumber (100);
let tryNumber = 0;

function getRandomNumber(max){
    return randomNumber = Math.ceil(Math.random()*max);
}
console.log('El número aleatorio es ${randomNumber}');

function guessRandomNumber(){
const inputNumberValue = inputNumber.value;
if (guessRandomNumber===getRandomNumber){
    clueElement.classList.add ('¡Has ganado, campeona!');
}
else if (guessRandomNumber>=getRandomNumber){
    clueElement.innerHTML = 'Demasiado alto.';
}
else if (guessRandomNumber<=getRandomNumber){
    clueElement.innerHTML = 'Demasiado bajo.';
}
else if (guessRandomNumber<1 || guessRandomNumber>100){
    clueElement.innerHTML = 'El número debe estar entre 1 y 100.';
}
}
