"use strict";
//VARIABLES
let on = false; // Inicialmente, la bombilla está apagada
//TODOS LOS ELEMENTOS
const bottonEl = document.getElementById('switch');
const [bombilla_1_El, bombilla_2_El] = document.getElementsByClassName('bombilla');
//const bombilla_1_El = bombillasEl[0] as HTMLImageElement;
//const bombilla_2_El = bombillasEl[1] as HTMLImageElement;
const lightEl = document.getElementById('barraLuminosidad');
const rotateEl = document.getElementById('barraRotacion');
const sizeEl = document.getElementById('barraTamaño');
//TODOS LOS EVENTOS
bottonEl.addEventListener('click', () => {
    if (on == true) {
        // Si la bombilla está encendida, apagarla
        bottonEl.src = "/IMAGES/boff.jpg";
        bombilla_1_El.src = "/IMAGES/off.jpg";
    }
    else {
        // Si la bombilla está apagada, encenderla
        bottonEl.src = "/IMAGES/bon.jpg";
        bombilla_1_El.src = "/IMAGES/on.jpg";
    }
    // Alternar el estado de la bombilla
    on = !on;
});
rotateEl.addEventListener('change', () => {
    const value = rotateEl.value;
    //console.log(value); //Probar salida de valor
    bombilla_1_El.style.transform = `rotate(${value}deg)`;
    bombilla_2_El.style.transform = `rotate(${value}deg)`;
});
sizeEl.addEventListener('change', () => {
    const value = sizeEl.value;
    bombilla_1_El.style.width = `${value}%`; // Mantener la relación de aspecto
    bombilla_2_El.style.width = `${value}%`;
});
lightEl.addEventListener('change', () => {
    if (!on)
        return;
    const value = lightEl.value;
    bombilla_1_El.style.opacity = value;
});