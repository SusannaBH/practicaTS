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
let totalValue = 0;

//FUNCION para ajustar valores de los "progress"
function adjustValueEat() {
    const eatValue = eatEl.value;
    totalValue = eatValue * 0.50; //25%
    totalEl.value = totalValue;
}
function adjustValuePlay() {
    const playValue = playEl.value;
    totalValue = playValue * 0.50;
    totalEl.value = totalValue;
}
function adjustValueSleep() {
    const sleepValue = sleepEl.value;
    totalValue = sleepValue * 0.50;
    totalEl.value = totalValue;
}
function adjustValueFight() {
    const fightValue = fightEl.value;
    totalValue = fightValue * 0.50;
    totalEl.value = totalValue;
}
function adjustImage() {
    if (totalValue >= 50){
        dogEl.src = "/IMAGES/dogHappy.png";
    }
}

//TODOS LOS EVENTOS EAT
boneEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    const newValue = Math.min(oldValue + 7, 100); //Asegurarse de que no supere 100
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
});
baconEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    const newValue = Math.min(oldValue + 18, 100);
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
});
filletEl.addEventListener('click', ()=>{
    const oldValue = eatEl.value;
    const newValue = Math.min(oldValue + 26, 100);
    eatEl.value = newValue;
    adjustValueEat();
    adjustImage();
});
//TODOS LOS EVENTOS PLAY
smallBallEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    const newValue = Math.max(oldValue - 11, 0);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
});
frisbeeEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    const newValue = Math.max(oldValue - 18, 0);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
});
bigBallEl.addEventListener('click', ()=>{
    const oldValue = playEl.value;
    const newValue = Math.max(oldValue - 23, 0);
    playEl.value = newValue;
    adjustValuePlay();
    adjustImage();
});
//TODOS LOS EVENTOS DE SLEEP
bedEl.addEventListener('click', ()=>{
    const oldValue = sleepEl.value;
    const newValue = Math.min(oldValue + 25, 100);
    sleepEl.value = newValue;
    adjustValueSleep();
    adjustImage();
});
couchEl.addEventListener('click', ()=>{
    const oldValue = sleepEl.value;
    const newValue = Math.min(oldValue + 15, 100);
    sleepEl.value = newValue;
    adjustValueSleep();
    adjustImage();
});
//TODOS LOS EVENTOS DE FIGHT
walkEl.addEventListener('click', ()=>{
    const oldValue = fightEl.value;
    const newValue = Math.max(oldValue - 12, 0);
    fightEl.value = newValue;
    adjustValueFight();
    adjustImage();
});
playDogsEl.addEventListener('click', ()=>{
    const oldValue = fightEl.value;
    const newValue = Math.max(oldValue - 24, 0);
    fightEl.value = newValue;
    adjustValueFight();
    adjustImage();
});