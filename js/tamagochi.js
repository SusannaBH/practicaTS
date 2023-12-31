"use strict";
//TODOS LOS ELEMENTOS
//BARRAS
const totalEl = document.getElementById('total');
const eatEl = document.getElementById('eat');
const playEl = document.getElementById('play');
const sleepEl = document.getElementById('sleep');
const fightEl = document.getElementById('fight');
//BOTONES
const boneEl = document.getElementById('bone');
const baconEl = document.getElementById('bacon');
const filletEl = document.getElementById('fillet');
const smallBallEl = document.getElementById('smallBall');
const frisbeeEl = document.getElementById('frisbee');
const bigBallEl = document.getElementById('bigBall');
const bedEl = document.getElementById('bed');
const couchEl = document.getElementById('couch');
const walkEl = document.getElementById('walk');
const playDogsEl = document.getElementById('playDogs');
//IMAGEN PERRO
const dogEl = document.getElementById('dog');
//VARIABLE
let totalValue = totalEl.value;
let eatValue = eatEl.value;
let sleepValue = sleepEl.value;
let playValue = playEl.value;
let fightValue = fightEl.value;
//CAMBIAR COLOR BARRAS
const elements = [totalEl, eatEl, playEl, sleepEl, fightEl];
function changeColor() {
    elements.forEach((element) => {
        const value = parseInt(element.getAttribute('value') || '0', 10);
        if (value <= 50) {
            console.log(element);
            element.style.setProperty('--progress-value-color', 'red');
        }
        else {
            element.style.setProperty('--progress-value-color', 'greenyellow');
        }
    });
}
//FUNCION para ajustar valores de los "progress"
function adjustValueEat(val) {
    eatValue = eatEl.value;
    totalEl.value = totalEl.value + val / 2;
    changeColor();
}
function adjustValuePlay(val) {
    playValue = playEl.value;
    totalEl.value = totalEl.value - val / 2;
    changeColor();
}
function adjustValueSleep(val) {
    sleepValue = sleepEl.value;
    totalEl.value = totalEl.value + val / 2;
    changeColor();
}
function adjustValueFight(val) {
    fightValue = fightEl.value;
    totalEl.value = totalEl.value - val / 2;
    changeColor();
}
function adjustImage() {
    const totalValue = totalEl.value;
    if (totalValue >= 50) {
        dogEl.src = "/IMAGES/dogHappy.png";
    }
    else {
        dogEl.src = "/IMAGES/dogSad.png";
    }
}
function adjustPlayAndFight(value) {
    playEl.value = playEl.value - (value / 4);
    fightEl.value = fightEl.value - (value / 4);
    changeColor();
}
function adjustEatAndSleep(value) {
    eatEl.value = eatEl.value - (value / 4);
    sleepEl.value = sleepEl.value - (value / 4);
    changeColor();
}
//TODOS LOS EVENTOS EAT
//funcion enccapsula codigo EAT
function enccapsula(valor_num, newValue) {
    adjustValueEat(valor_num);
    adjustImage();
    adjustPlayAndFight(newValue);
}
boneEl.addEventListener('click', () => {
    const oldValue = eatEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 7, 100); //Asegurarse de que no supere 100
    eatEl.value = newValue;
    enccapsula(7, newValue);
});
baconEl.addEventListener('click', () => {
    const oldValue = eatEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 18, 100);
    eatEl.value = newValue;
    enccapsula(18, newValue);
});
filletEl.addEventListener('click', () => {
    const oldValue = eatEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 26, 100);
    eatEl.value = newValue;
    enccapsula(26, newValue);
});
//TODOS LOS EVENTOS PLAY
smallBallEl.addEventListener('click', () => {
    const oldValue = playEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 11, 100);
    playEl.value = newValue;
    adjustValuePlay(11);
    adjustImage();
    adjustEatAndSleep(newValue);
});
frisbeeEl.addEventListener('click', () => {
    const oldValue = playEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 18, 100);
    playEl.value = newValue;
    adjustValuePlay(18);
    adjustImage();
    adjustEatAndSleep(newValue);
});
bigBallEl.addEventListener('click', () => {
    const oldValue = playEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 23, 100);
    playEl.value = newValue;
    adjustValuePlay(23);
    adjustImage();
    adjustEatAndSleep(newValue);
});
//TODOS LOS EVENTOS DE SLEEP
bedEl.addEventListener('click', () => {
    const oldValue = sleepEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 25, 100);
    sleepEl.value = newValue;
    adjustValueSleep(25);
    adjustImage();
    adjustPlayAndFight(newValue);
});
couchEl.addEventListener('click', () => {
    const oldValue = sleepEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 15, 100);
    sleepEl.value = newValue;
    adjustValueSleep(15);
    adjustImage();
    adjustPlayAndFight(newValue);
});
//TODOS LOS EVENTOS DE FIGHT
walkEl.addEventListener('click', () => {
    const oldValue = fightEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 12, 100);
    fightEl.value = newValue;
    adjustValueFight(12);
    adjustImage();
    adjustEatAndSleep(newValue);
});
playDogsEl.addEventListener('click', () => {
    const oldValue = fightEl.value;
    if (oldValue === 100)
        return;
    const newValue = Math.min(oldValue + 24, 100);
    fightEl.value = newValue;
    adjustValueFight(24);
    adjustImage();
    adjustEatAndSleep(newValue);
});
