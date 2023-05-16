const mostrarImg = document.querySelector("#mostrar-resultado");
const numIngresado = document.querySelector ("#valor-recibido");

const IMG_1 = "https://w7.pngwing.com/pngs/62/460/png-transparent-mercedes-benz-sls-amg-car-mercedes-benz-c-class-2018-mercedes-benz-amg-gt-car-dealer-compact-car-car-performance-car.png" 

function mostrarSaludo() {
    interacionesMax = 0;
    interacionesMax = numIngresado.value; 
    for (let i = 0; i < interacionesMax; i++) {
        mostrarImg.src =+ IMG_1 ;
    }
}

/* for (let i = 0; i < interacionesMax; i++) {
    pResultado.innerHTML += "Hola <br>";
} */