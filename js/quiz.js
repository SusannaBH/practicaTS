"use strict";
//ARRAY DE PREGUNTAS
const preguntas = ["¿Cuál es el planeta más grande del sistema solar?",
    "¿Quién escribió la famosa novela 'Cien años de soledad'?",
    "¿Cuál es la capital de Francia?",
    "¿Cuál es el río más largo del mundo?",
    "¿Quién pintó la famosa obra 'La noche estrellada'?"];
//ARRAY CON OPCIONES
const opciones1 = ["Marte", "Venus", "Júpiter", "Mercurio"];
const opciones2 = ["Mario Vargas Llosa", "Gabriel García Márquez", "Pablo Neruda", "Isabel Allende"];
const opciones3 = ["Berlín", "París", "Madrid", "Londres"];
const opciones4 = ["Nilo", "Amazonas", "Yangtsé", "Misisipi"];
const opciones5 = ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Salvador Dalí"];
const opciones = [opciones1, opciones2, opciones3, opciones4, opciones5];
//ARRAY DE RESPUESTAS CORRECTAS (cual es la respuesta correcta de las 4 soluciones posibles)
const correctas = [3, 2, 2, 1, 3];
//Variables
let posicionActual = 0; //Posicion actual
let acertadas = 0; //Preguntas acertadas
let falladas = 0; //Preguntas falladas
//TODOS LOS ELEMENTOS DE LAS PANTALLAS
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');
//FUNCION COMENZAR JUEGO
function startPlay() {
    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
    changeQuestion();
}
//FUNCION CAMBIAR PREGUNTA
function changeQuestion() {
    //RESPUESTAS ACERTADAS EN PANTALLA JUEGO
    const scoreEl = document.getElementById('score');
    scoreEl.innerText = acertadas.toString();
    //ELEMENTOS DE PREGUNTA Y RESPUESTAS
    let questionEl = document.getElementById('question');
    let answer1El = document.getElementById('answer1');
    let answer2El = document.getElementById('answer2');
    let answer3El = document.getElementById('answer3');
    let answer4El = document.getElementById('answer4');
    if (preguntas.length <= posicionActual) {
        finishPlay();
    }
    else {
        questionEl.innerText = preguntas[posicionActual];
        answer1El.innerText = opciones[posicionActual][0];
        answer2El.innerText = opciones[posicionActual][1];
        answer3El.innerText = opciones[posicionActual][2];
        answer4El.innerText = opciones[posicionActual][3];
    }
}
//FUNCION COMPROBAR RESPUESTA
function checkAnswer(opcionCheck) {
    let answerEl = document.getElementById('answer' + (opcionCheck + 1));
    if (answerEl && (opcionCheck + 1) == correctas[posicionActual]) { //ACIERTO
        answerEl.className = "opcion acertada";
        acertadas++;
    }
    else { //FALLO
        answerEl.className = "opcion fallada";
        let answerAEl = document.getElementById('answer' + correctas[posicionActual]);
        answerAEl.className = "opcion acertada";
        falladas++;
    }
    posicionActual++;
    setTimeout(changeQuestion, 1000);
}
//FUNCION PARA TERMINAR EL JUEGO
function finishPlay() {
    pantalla2.style.display = "none";
    pantalla3.style.display = "block";
    let acertadasEL = document.getElementById('acertadas');
    let falladasEL = document.getElementById('falladas');
    acertadasEL.innerText = acertadas.toString();
    falladasEL.innerText = falladas.toString();
}
//FUNCION PARA VOLVER A EMPEZAR
function volverAJugar() {
    pantalla3.style.display = "none";
    pantalla1.style.display = "block";
}
//PREGUNTAS Y RESPUESTAS
/*
¿Cuál es el planeta más grande del sistema solar?
Marte
Venus
Júpiter
Mercurio
-- Júpiter

¿Quién escribió la famosa novela "Cien años de soledad"?
Mario Vargas Llosa
Gabriel García Márquez
Pablo Neruda
Isabel Allende
-- Gabriel García Márquez

¿Cuál es la capital de Francia?
Berlín
París
Madrid
Londres
-- París

¿Cuál es el río más largo del mundo?
Nilo
Amazonas
Yangtsé
Misisipi
-- Nilo

¿Quién pintó la famosa obra "La noche estrellada"?
Pablo Picasso
Leonardo da Vinci
Vincent van Gogh
Salvador Dalí
-- Vincent van Gogh
*/ 
