//ARRAY DE PREGUNTAS
let preguntas = ["¿Cuál es el planeta más grande del sistema solar?",
                    "¿Quién escribió la famosa novela 'Cien años de soledad'?",
                    "¿Cuál es la capital de Francia?",
                    "¿Cuál es el río más largo del mundo?",
                    "¿Quién pintó la famosa obra 'La noche estrellada'?"];

//ARRAY CON OPCIONES
let opciones = [];
opciones.push(["Marte","Venus","Júpiter","Mercurio"]);
opciones.push(["Mario Vargas Llosa","Gabriel García Márquez","Pablo Neruda","Isabel Allende"]);
opciones.push(["Berlín","París","Madrid","Londres"]);
opciones.push(["Nilo","Amazonas","Yangtsé","Misisipi"]);
opciones.push(["Pablo Picasso","Leonardo da Vinci","Vincent van Gogh","Salvador Dalí"]);

//ARRAY DE RESPUESTAS CORRECTAS
let correctas = [3,2,2,1,3];

//Variables
let posicionActual = 0; //Posicion actual
let acertadas = 0; //Preguntas acertadas
let falladas = 0; //Preguntas falladas

//FUNCION COMENZAR JUEGO
const pantalla1 = document.getElementById('pantalla1') as HTMLElement;
const pantalla2 = document.getElementById('pantalla2') as HTMLElement;

function comenzarJuego(){
    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
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