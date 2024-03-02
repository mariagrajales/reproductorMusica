function manejarEventoReproducirPausar() {
    if (reproduciendo) {
        pausarPista();
    } else {
        reproducirPista();
    }
    actualizarInterfaz(reproduciendo);
}

function manejarEventoSiguientePista() {
    siguientePista();
    actualizarInterfaz(reproduciendo);
}

function manejarEventoAnteriorPista() {
    anteriorPista();
    actualizarInterfaz(reproduciendo);
}

function manejarEventoBuscar() {
    buscarHacia();
}

function manejarEventoVolumen() {
    establecerVolumen();
}

function manejarEventoAleatorio() {
    pistaAleatoria();
    actualizarInterfazAleatorio(aleatorio);
}

// Asignar eventos a los elementos de la interfaz
botonReproducirPausar.addEventListener('click', manejarEventoReproducirPausar);
siguienteBtn.addEventListener('click', manejarEventoSiguientePista);
anteriorBtn.addEventListener('click', manejarEventoAnteriorPista);
deslizadorBuscar.addEventListener('input', manejarEventoBuscar);
deslizadorVolumen.addEventListener('input', manejarEventoVolumen);
iconoAleatorio.addEventListener('click', manejarEventoAleatorio);
