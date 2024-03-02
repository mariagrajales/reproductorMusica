let reproduciendoAhora = document.querySelector('.now-playing');
let artePista = document.querySelector('.track-art');
let nombrePista = document.querySelector('.track-name');
let artistaPista = document.querySelector('.track-artist');
let botonReproducirPausar = document.querySelector('.playpause-track');
let siguienteBtn = document.querySelector('.next-track');
let anteriorBtn = document.querySelector('.prev-track');
let deslizadorBuscar = document.querySelector('.seek_slider');
let deslizadorVolumen = document.querySelector('.volume_slider');
let tiempoActual = document.querySelector('.current-time');
let duracionTotal = document.querySelector('.total-duration');
let onda = document.getElementById('wave');
let iconoAleatorio = document.querySelector('.fa-random');

function inicializarInterfaz() {
    // Configurar la interfaz de usuario inicial
    botonReproducirPausar.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';

    // Asignar eventos a los elementos de la interfaz
    botonReproducirPausar.addEventListener('click', manejarEventoReproducirPausar);
    siguienteBtn.addEventListener('click', siguientePista);
    anteriorBtn.addEventListener('click', anteriorPista);
    deslizadorBuscar.addEventListener('input', buscarHacia);
    deslizadorVolumen.addEventListener('input', establecerVolumen);
    iconoAleatorio.addEventListener('click', manejarEventoAleatorio);
}

function actualizarInterfaz(reproduciendo) {
    if (reproduciendo) {
        botonReproducirPausar.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    } else {
        botonReproducirPausar.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
}

function actualizarBarraBusqueda() {
    let posicionBuscar = (pista.currentTime / pista.duration) * 100;
    deslizadorBuscar.value = isNaN(posicionBuscar) ? 0 : posicionBuscar;
}

function manejarEventoReproducirPausar() {
    if (reproduciendo) {
        pausarPista();
    } else {
        reproducirPista();
    }
    actualizarInterfaz(reproduciendo);
}

function manejarEventoAleatorio() {
    pistaAleatoria();
    actualizarInterfazAleatorio(aleatorio);
}

function actualizarInterfazAleatorio(aleatorio) {
    if (aleatorio) {
        iconoAleatorio.classList.add('randomActive');
    } else {
        iconoAleatorio.classList.remove('randomActive');
    }
}

window.addEventListener('load', inicializarInterfaz);
