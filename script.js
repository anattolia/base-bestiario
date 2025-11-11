// Listas de imágenes
const listaCabezas = [
  "../celebridades/assets/img/cabeza1.png",
  "../celebridades/assets/img/cabeza2.png",
  "../celebridades/assets/img/cabeza3.png",
   "../celebridades/assets/img/cabeza4.png",
];
const listaTroncos = [
  "../celebridades/assets/img/tronco1.png",
  "../celebridades/assets/img/tronco2.png",
  "../celebridades/assets/img/tronco3.png",
   "../celebridades/assets/img/tronco4.png",
];
const listaPatas = [
  "../celebridades/assets/img/patas1.png",
  "../celebridades/assets/img/patas2.png",
  "../celebridades/assets/img/patas3.png",
  "../celebridades/assets/img/patas4.png",
];

// Elementos del DOM
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

const contenedorLocura = document.getElementById("locuraContenedor");
const cantidadBarras = 40; // cantidad de líneas a lo ancho

let barras = [];
let nivel = 0;      // nivel acumulado de locura
const incremento = 8; // cuánto sube por click
const maxAltura = 0.9 * window.innerHeight; // tope en px -- 90% de pantalla

// crear barras
for (let i = 0; i < cantidadBarras; i++) {
  const barra = document.createElement("div");
  barra.classList.add("barra-locura");
  // opción: dar un pequeño retraso en la transición para efecto orgánico
  barra.style.transitionDelay = (Math.random() * 0.18) + "s";
  contenedorLocura.appendChild(barra);
  barras.push(barra);
}

// funciones imagenes
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generarBestia() {
  const cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  const troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  const patasAleatorio = numeroAleatorio(0, listaPatas.length);

  cabeza.src = listaCabezas[cabezaAleatorio];
  tronco.src = listaTroncos[troncoAleatorio];
  patas.src = listaPatas[patasAleatorio];
}

function actualizarBarras() {
  barras.forEach(barra => { // para cada barra actualizar 
    const variacion = (Math.random() - 0.5) * 30; // gemera disperison tanto arriba como abajo - ca,bia el rango
    barra.style.height = (nivel + variacion) + "px";
  });
}

// Evento click: mezcla + sube locura
boton.addEventListener("click", function () {
  generarBestia();

  // aumentar nivel y actualizar barras
  nivel += incremento;

  // limitar el nivel para que no crezca indefinidamente
  const nivelMax = maxAltura;
  if (nivel > nivelMax) nivel = nivelMax;

  actualizarBarras();
});

// generar primera bestia y primer render de barras
generarBestia();
actualizarBarras();

 

