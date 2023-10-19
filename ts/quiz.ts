//ARRAY DE PREGUNTAS
const preguntas = ["¿Cuál es el planeta más grande del sistema solar?",
                    "¿Quién escribió la famosa novela 'Cien años de soledad'?",
                    "¿Cuál es la capital de Francia?",
                    "¿Cuál es el río más largo del mundo?",
                    "¿Quién pintó la famosa obra 'La noche estrellada'?"];

//ARRAY CON OPCIONES
const opciones1: string[] = ["Marte","Venus","Júpiter","Mercurio"];
const opciones2: string[] = ["Mario Vargas Llosa","Gabriel García Márquez","Pablo Neruda","Isabel Allende"];
const opciones3: string[] = ["Berlín","París","Madrid","Londres"];
const opciones4: string[] = ["Nilo","Amazonas","Yangtsé","Misisipi"];
const opciones5: string[] = ["Pablo Picasso","Leonardo da Vinci","Vincent van Gogh","Salvador Dalí"];
const opciones: string[][] = [opciones1, opciones2, opciones3, opciones4, opciones5];

//ARRAY DE RESPUESTAS CORRECTAS (cual es la respuesta correcta de las 4 soluciones posibles)
const correctas = [3,2,2,1,3];

//Variables
let posicionActual = 0; //Posicion actual
let acertadas = 0; //Preguntas acertadas
let falladas = 0; //Preguntas falladas

//TODOS LOS ELEMENTOS DE LAS PANTALLAS
const pantalla1 = document.getElementById('pantalla1') as HTMLElement;
const pantalla2 = document.getElementById('pantalla2') as HTMLElement;
const pantalla3 = document.getElementById('pantalla3') as HTMLElement;

//FUNCION COMENZAR JUEGO
function startPlay(){
    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
    changeQuestion();
}

//FUNCION CAMBIAR PREGUNTA
function changeQuestion(){
    
    //RESPUESTAS ACERTADAS EN PANTALLA JUEGO
    const scoreEl = document.getElementById('score') as HTMLSpanElement;
    scoreEl.innerText = acertadas.toString();
    //ELEMENTOS DE PREGUNTA Y RESPUESTAS
    let questionEl = document.getElementById('question') as HTMLElement;
    let answer1El = document.getElementById('answer1') as HTMLButtonElement;
    let answer2El = document.getElementById('answer2') as HTMLButtonElement;
    let answer3El = document.getElementById('answer3') as HTMLButtonElement;
    let answer4El = document.getElementById('answer4') as HTMLButtonElement;
    
    if(preguntas.length <= posicionActual){
        finishPlay();
    }
    else{
        questionEl.innerText = preguntas[posicionActual];
        answer1El.innerText = opciones[posicionActual][0];
        answer2El.innerText = opciones[posicionActual][1];
        answer3El.innerText = opciones[posicionActual][2];
        answer4El.innerText = opciones[posicionActual][3];
    }
}
//FUNCION COMPROBAR RESPUESTA
function checkAnswer(opcionCheck: number){
    let answerEl = document.getElementById('answer' + (opcionCheck+1)) as HTMLButtonElement;

    if (answerEl && (opcionCheck+1) == correctas[posicionActual]) { //ACIERTO
        answerEl.className = "opcion acertada";
        acertadas++;
    }
    else{ //FALLO
        answerEl.className = "opcion fallada";
        let answerAEl = document.getElementById('answer' + correctas[posicionActual]) as HTMLButtonElement;
        answerAEl.className = "opcion acertada";
        falladas++;
    }
    posicionActual++;
    setTimeout(changeQuestion, 1000);
}

//FUNCION PARA TERMINAR EL JUEGO
function finishPlay(){
    pantalla2.style.display = "none";
    pantalla3.style.display = "block";
    
    let acertadasEL = document.getElementById('acertadas') as HTMLSpanElement;
    let falladasEL = document.getElementById('falladas') as HTMLSpanElement;
    acertadasEL.innerText = acertadas.toString();
    falladasEL.innerText = falladas.toString();
}

//FUNCION PARA VOLVER A EMPEZAR
function volverAJugar(){
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