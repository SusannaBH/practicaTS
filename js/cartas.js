"use strict";
//TODOS LOS ELEMENTOS
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
//TODOS LOS EVENTOS
//Eventos para cuando el ratón está encima
card1.addEventListener('mouseover', () => {
    card1.src = "/IMAGES/card-front.png";
});
card2.addEventListener('mouseover', () => {
    card2.src = "/IMAGES/card-front.png";
});
//Eventos para cuando el ratón está debajo
card1.addEventListener('mouseout', () => {
    card1.src = "/IMAGES/card-back.png";
});
card2.addEventListener('mouseout', () => {
    card2.src = "/IMAGES/card-back.png";
});
