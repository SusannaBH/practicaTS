//TODOS LOS ELEMENTOS
const botton = document.getElementById('switch') as HTMLImageElement;
const bombilla = document.getElementById('lightbulb') as HTMLImageElement;

//FUNCION 


//TODOS LOS EVENTOS
botton.addEventListener('click',()=>{
    let on = true;
    if (on) {
        //Si está encendido, restaurar la imagen inicial
        botton.src = "/IMAGES/bon.jpg";
        bombilla.src = "/IMAGES/on.jpg";
    } else {
        //Si está apagado, cambiar a la segunda imagen
        botton.src = "/IMAGES/boff.jpg";
        bombilla.src = "/IMAGES/off.jpg";
    }
    //Alternar el estado
    on = !on;
});

