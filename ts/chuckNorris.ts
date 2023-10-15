//TODOS LOS ELEMENTOS
const link = "https://api.chucknorris.io/jokes/random";
const buttonEl = document.getElementById('buttonNext') as HTMLButtonElement;
const textEl = document.getElementById('text') as HTMLParagraphElement;

//EVENTO
buttonEl.addEventListener('click', () => {
    fetch(link)
    .then(data => data.json())
    .then(res => {
        textEl.innerText = res.value
    })
})