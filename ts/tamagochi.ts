//TODOS LOS ELEMENTOS
//BARRAS
const totalEl = document.getElementById('total') as HTMLProgressElement;
const eatEl = document.getElementById('eat') as HTMLProgressElement;
const playEl = document.getElementById('play') as HTMLProgressElement;
const sleepEl = document.getElementById('sleep') as HTMLProgressElement;
const fightEl = document.getElementById('fight') as HTMLProgressElement;
//BOTONES
const boneEl = document.getElementById('bone') as HTMLButtonElement;
const baconEl = document.getElementById('bacon') as HTMLButtonElement;
const filletEl = document.getElementById('fillet') as HTMLButtonElement;
const smallBallEl = document.getElementById('smallBall') as HTMLButtonElement;
const frisbeeEl = document.getElementById('frisbee') as HTMLButtonElement;
const bigBallEl = document.getElementById('bigBall') as HTMLButtonElement;
const bedEl = document.getElementById('bed') as HTMLButtonElement;
const couchEl = document.getElementById('couch') as HTMLButtonElement;
const walkEl = document.getElementById('walk') as HTMLButtonElement;
const playDogsEl = document.getElementById('playDogs') as HTMLButtonElement;
//IMAGEN PERRO
const dogEl = document.getElementById('dog') as HTMLImageElement;
//VARIABLE
let totalValue = totalEl.value;
let eatValue = eatEl.value;
let sleepValue = sleepEl.value;
let playValue = playEl.value;
let fightValue  = fightEl.value;

//FUNCION para ajustar valores de los "progress"
function adjustValueEat() {
    eatValue = eatEl.value;
    totalEl.value = (totalEl.value + eatValue) / 2;

}
function adjustValuePlay() {
    playValue = playEl.value;
    totalEl.value = (totalEl.value - playValue) / 2;

}
function adjustValueSleep() {
    sleepValue = sleepEl.value;
    totalEl.value = (totalEl.value + sleepValue) / 2;

}
function adjustValueFight() {
    fightValue = fightEl.value;
    totalEl.value = (totalEl.value + fightValue) / 2;

}
function adjustImage() {
    const totalValue = totalEl.value;
    if (totalValue >= 50){
        dogEl.src = "/IMAGES/dogHappy.png";
    } else {
        dogEl.src = "/IMAGES/dogSad.png";
    }
}

function adjustPlayAndFight(value: number){
    playEl.value = playEl.value - (value);
    fightEl.value = fightEl.value - (value);
}
function adjustEatAndSleep(value: number){
    eatEl.value = eatEl.value - (value);
    sleepEl.value = sleepEl.value - (value);
}

//TODOS LOS EVENTOS EAT
boneEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 7, 100); //Asegurarse de que no supere 100
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
    adjustPlayAndFight(newValue);
});
baconEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 18, 100);
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
    adjustPlayAndFight(newValue);
});
filletEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 26, 100);
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
    adjustPlayAndFight(newValue);
});
//TODOS LOS EVENTOS PLAY
smallBallEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 11, 100);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
    adjustEatAndSleep(newValue);
});
frisbeeEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 18, 100);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
    adjustEatAndSleep(newValue);
});
bigBallEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 23, 100);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
    adjustEatAndSleep(newValue);
});
//TODOS LOS EVENTOS DE SLEEP
bedEl.addEventListener('click', ()=>{
    const oldValue = sleepEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 25, 100);
    sleepEl.value = newValue;
    adjustValueSleep();
    adjustImage();
    adjustPlayAndFight(newValue);
});
couchEl.addEventListener('click', ()=>{
    const oldValue = sleepEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 15, 100);
    sleepEl.value = newValue;
    adjustValueSleep();
    adjustImage();
    adjustPlayAndFight(newValue);
});
//TODOS LOS EVENTOS DE FIGHT
walkEl.addEventListener('click', ()=>{
    const oldValue = fightEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 12, 100);
    fightEl.value = newValue;
    adjustValueFight();
    adjustImage();
    adjustEatAndSleep(newValue);
});
playDogsEl.addEventListener('click', ()=>{
    const oldValue = fightEl.value;
    if(oldValue === 100) return;
    const newValue = Math.min(oldValue + 24, 100);
    fightEl.value = newValue;
    adjustValueFight();
    adjustImage();
    adjustEatAndSleep(newValue);
});

//document.addEventListener("DOMContentLoaded", () => totalEl.value = (eatValue + sleepValue - fightValue - playValue))