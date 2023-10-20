"use strict";
//TODOS LOS ELEMENTOS DE SECTION 1
const link1 = "https://api.chucknorris.io/jokes/random";
const button1El = document.getElementById('button1Next');
const text1El = document.getElementById('text1');
//EVENTO
button1El.addEventListener('click', () => {
    fetch(link1)
        .then(data => data.json())
        .then(res => {
        text1El.innerText = res.value;
    });
});
//TODOS LOS ELEMENTOS DE SECTION 2
const categoryName = document.getElementById('category');
const link2 = "https://api.chucknorris.io/jokes/random?category=" + categoryName.value;
const button2El = document.getElementById('button2Next');
const text2El = document.getElementById('text2');
//EVENTO
button2El.addEventListener('click', () => {
    fetch(link2)
        .then(data => data.json())
        .then(res => {
        text2El.innerText = res.value;
    });
});
// resetEl.result;      https://api.chucknorris.io/jokes/search?query={query}
// frase.legth > 0 , frase añadir un ramdon, frase[random].value
//TODOS LOS ELEMENTOS DE SECTION 3
//const textInput = document.getElementById('textoInput') as HTMLInputElement;
//const link3 = "https://api.chucknorris.io/jokes/search?query=" + textInput.value;
const button3El = document.getElementById('button3Next');
const text3El = document.getElementById('text3');
//EVENTO
button3El.addEventListener('click', () => {
    const textInput = document.getElementById('textoInput');
    const link3 = "https://api.chucknorris.io/jokes/search?query=" + textInput.value;
    fetch(link3)
        .then(data => data.json())
        .then(res => {
        const frase = res.result;
        if (frase.length > 0) {
            const metodoRandom = Math.floor(Math.random() * frase.length);
            text3El.innerText = frase[metodoRandom].value;
        }
        else {
            alert("No hay frases con esa palabra");
        }
    })
        .catch(error => {
        console.error('ERROR');
    });
});
