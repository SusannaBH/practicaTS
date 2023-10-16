//TODOS LOS ELEMENTOS
const keyDOEl = document.getElementById('keyA') as HTMLButtonElement;
const keyREEl = document.getElementById('keyB') as HTMLButtonElement;
const keyMIEl = document.getElementById('keyC') as HTMLButtonElement;
const keyFAEl = document.getElementById('keyD') as HTMLButtonElement;
const keySOLEl = document.getElementById('keyE') as HTMLButtonElement;
const keyLAEl = document.getElementById('keyF') as HTMLButtonElement;
const keySIEl = document.getElementById('keyG') as HTMLButtonElement;
const keyDOSEl = document.getElementById('keyH') as HTMLButtonElement;

//FUNCION ASIGNACION TECLAS
document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'KeyA':
            keyDOEl.click();
            break;
        case 'KeyB':
            keyREEl.click();
            break;
        case 'KeyC':
            keyMIEl.click();
            break;
        case 'KeyD':
            keyFAEl.click();
            break;
        case 'KeyE':
            keySOLEl.click();
            break;
        case 'KeyF':
            keyLAEl.click();
            break;
        case 'KeyG':
            keySIEl.click();
            break;
        case 'KeyH':
            keyDOSEl.click();
            break;
        default:
                break;
    }
});

//TODOS LOS ELEMENTOS
keyDOEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key01.mp3');
    audio.currentTime = 0;
    audio.play();
});
keyREEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key02.mp3');
    audio.currentTime = 0;
    audio.play();
});
keyMIEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key03.mp3');
    audio.currentTime = 0;
    audio.play();
});
keyFAEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key04.mp3');
    audio.currentTime = 0;
    audio.play();
});
keySOLEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key05.mp3');
    audio.currentTime = 0;
    audio.play();
});
keyLAEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key06.mp3');
    audio.currentTime = 0;
    audio.play();
});
keySIEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key07.mp3');
    audio.currentTime = 0;
    audio.play();
});
keyDOSEl.addEventListener('click',() => {
    const audio = new Audio('/pianoKeys/key08.mp3');
    audio.currentTime = 0;
    audio.play();
});