//TODOS LOS ELEMENTOS
const result = document.getElementById('result') as HTMLParagraphElement;
const oneEl = document.getElementById('one') as HTMLButtonElement;
const twoEl = document.getElementById('two') as HTMLButtonElement;
const threeEl = document.getElementById('three') as HTMLButtonElement;
const fourEl = document.getElementById('four') as HTMLButtonElement;
const fiveEl = document.getElementById('five') as HTMLButtonElement;
const sixEl = document.getElementById('six') as HTMLButtonElement;
const sevenEl = document.getElementById('seven') as HTMLButtonElement;
const eightEl = document.getElementById('eight') as HTMLButtonElement;
const nineEl = document.getElementById('nine') as HTMLButtonElement;
const zeroEl = document.getElementById('zero') as HTMLButtonElement;
const deleteEl = document.getElementById('delete') as HTMLButtonElement;
const plusEl = document.getElementById('plus') as HTMLButtonElement;
const minusEl = document.getElementById('minus') as HTMLButtonElement;
const multiplicationEl = document.getElementById('multiplication') as HTMLButtonElement;
const divideEl = document.getElementById('divide') as HTMLButtonElement;
const equalEl = document.getElementById('equal') as HTMLButtonElement;
const dotEl = document.getElementById('dot') as HTMLButtonElement;
const resetEl = document.getElementById('reset') as HTMLButtonElement;

let resultado = 0;

//TODOS LOS EVENTOS
oneEl.addEventListener('click', () => {
    result.innerText += '1';
});
twoEl.addEventListener('click', () => {
    result.innerText += '2';
});
threeEl.addEventListener('click', () => {
    result.innerText += '3';
});
fourEl.addEventListener('click', () => {
    result.innerText += '4';
});
fiveEl.addEventListener('click', () => {
    result.innerText += '5';
});
sixEl.addEventListener('click', () => {
    result.innerText += '6';
});
sevenEl.addEventListener('click', () => {
    result.innerText += '7';
});
eightEl.addEventListener('click', () => {
    result.innerText += '8';
});
nineEl.addEventListener('click', () => {
    result.innerText += '9';
});
zeroEl.addEventListener('click', () => {
    result.innerText += '0';
});
deleteEl.addEventListener('click', () => {
    result.innerText = result.innerText.slice(0, -1);
});
plusEl.addEventListener('click', () => {
    result.innerText += '+';
});
minusEl.addEventListener('click', () => {
    result.innerText += '-';
});
multiplicationEl.addEventListener('click', () => {
    result.innerText += '*';
});
divideEl.addEventListener('click', () => {
    result.innerText += '/';
});
resetEl.addEventListener('click', () => {
    result.innerText = '';
});
dotEl.addEventListener('click', () => {
    result.innerText += '.';
});
equalEl.addEventListener('click', () => {
    resultado = eval(result.innerText);
    result.innerText = resultado.toString();
});