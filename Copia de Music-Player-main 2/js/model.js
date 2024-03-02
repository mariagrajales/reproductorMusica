let listaMusica = [
    {
        img: 'images/les_files.jpg',
        name: 'Les Filles Désir',
        artist: 'Vendredi sur Mer',
        music: 'music/Vendredi.mp3'
    },
    {
        img: 'images/cross.jpg',
        name: 'Cross',
        artist: 'LiL PEEP x $uicideboy$',
        music: 'music/cross.mp3'
    },
    {
        img: 'images/middie.jpg',
        name: 'Middle',
        artist: 'DJ Snake',
        music: 'music/Middle.mp3'
    },
    {
        img: 'images/happier.jpg',
        name: 'Happier',
        artist: 'Marshmello',
        music: 'music/Happier.mp3'
    }
];

let indicePista = 0;
let reproduciendo = false;
let aleatorio = false;

function cargarPista(indice) {
    clearInterval(temporizadorActualizacion);
    reiniciar();

    indicePista = indice;

    let pistaActual = listaMusica[indicePista];
    artePista.style.backgroundImage = `url(${pistaActual.img})`;
    nombrePista.textContent = pistaActual.name;
    artistaPista.textContent = pistaActual.artist;
    reproduciendoAhora.textContent = `Reproduciendo música ${indicePista + 1} de ${listaMusica.length}`;

    pista.src = pistaActual.music;
    pista.load();

    temporizadorActualizacion = setInterval(establecerActualizacion, 1000);

    pista.addEventListener('ended', siguientePista);
    colorFondoAleatorio();
}

function reproducirPista() {
    pista.play();
    reproduciendo = true;
    artePista.classList.add('rotate');
    onda.classList.add('loader');
    botonReproducirPausar.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pausarPista() {
    pista.pause();
    reproduciendo = false;
    artePista.classList.remove('rotate');
    onda.classList.remove('loader');
    botonReproducirPausar.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function siguientePista() {
    if (!aleatorio) {
        indicePista = (indicePista + 1) % listaMusica.length;
    } else {
        indicePista = Math.floor(Math.random() * listaMusica.length);
    }
    cargarPista(indicePista);
    reproducirPista();
}

function anteriorPista() {
    indicePista = (indicePista - 1 + listaMusica.length) % listaMusica.length;
    cargarPista(indicePista);
    reproducirPista();
}

function colorFondoAleatorio() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a = '#';

    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }

    let color1 = populate(a);
    let color2 = populate(a);
    let angulo = 'to right';

    let degradado = `linear-gradient(${angulo}, ${color1}, ${color2})`;
    document.body.style.background = degradado;
}

function reiniciar() {
    tiempoActual.textContent = "00:00";
    duracionTotal.textContent = "00:00";
    deslizadorBuscar.value = 0;
}

function buscarHacia() {
    let buscarA = pista.duration * (deslizadorBuscar.value / 100);
    pista.currentTime = buscarA;
}

function establecerVolumen() {
    pista.volume = deslizadorVolumen.value / 100;
}

function establecerActualizacion() {
    let posicionBuscar = 0;
    if (!isNaN(pista.duration)) {
        posicionBuscar = pista.currentTime * (100 / pista.duration);
        deslizadorBuscar.value = posicionBuscar;

        let minutosActuales = Math.floor(pista.currentTime / 60);
        let segundosActuales = Math.floor(pista.currentTime - minutosActuales * 60);
        let minutosDuracion = Math.floor(pista.duration / 60);
        let segundosDuracion = Math.floor(pista.duration - minutosDuracion * 60);

        segundosActuales = segundosActuales < 10 ? "0" + segundosActuales : segundosActuales;
        segundosDuracion = segundosDuracion < 10 ? "0" + segundosDuracion : segundosDuracion;
        minutosActuales = minutosActuales < 10 ? "0" + minutosActuales : minutosActuales;
        minutosDuracion = minutosDuracion < 10 ? "0" + minutosDuracion : minutosDuracion;

        tiempoActual.textContent = minutosActuales + ":" + segundosActuales;
        duracionTotal.textContent = minutosDuracion + ":" + segundosDuracion;
    }
}

function pistaAleatoria() {
    aleatorio ? pausarAleatorio() : reproducirAleatorio();
}

function reproducirAleatorio() {
    aleatorio = true;
    iconoAleatorio.classList.add('randomActive');
}

function pausarAleatorio() {
    aleatorio = false;
    iconoAleatorio.classList.remove('randomActive');
}

function repetirPista() {
    cargarPista(indicePista);
    reproducirPista();
}

let pista = new Audio();
let temporizadorActualizacion;
