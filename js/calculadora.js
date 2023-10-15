"use strict";
//TODOS LOS ELEMENTOS
const result = document.getElementById('result');
const oneEl = document.getElementById('one');
const twoEl = document.getElementById('two');
const threeEl = document.getElementById('three');
const fourEl = document.getElementById('four');
const fiveEl = document.getElementById('five');
const sixEl = document.getElementById('six');
const sevenEl = document.getElementById('seven');
const eightEl = document.getElementById('eight');
const nineEl = document.getElementById('nine');
const zeroEl = document.getElementById('zero');
const deleteEl = document.getElementById('delete');
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const multiplicationEl = document.getElementById('multiplication');
const divideEl = document.getElementById('divide');
const equalEl = document.getElementById('equal');
const dotEl = document.getElementById('dot');
const resetEl = document.getElementById('reset');
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
