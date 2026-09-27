// =====================================
// ABRIR LA CARTA
// =====================================

const boton =
    document.getElementById("abrirCarta");

const carta =
    document.getElementById("carta");


boton.addEventListener("click", function() {

    carta.style.display = "block";

    carta.classList.add("mostrar");

    crearCorazones();

    escribirTexto();

});



// =====================================
// CREAR CORAZONES
// =====================================

function crearCorazones() {

    for (let i = 0; i < 30; i++) {

        const corazon =
            document.createElement("div");

        corazon.innerHTML = "💗";

        corazon.classList.add("corazon");

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(corazon);


        setTimeout(function() {

            corazon.remove();

        }, 5000);

    }

}



// =====================================
// SNOOPY 1
// =====================================

const snoopy1 =
    document.getElementById("snoopy1");

const mensajeSnoopy1 =
    document.getElementById("mensajeSnoopy1");


snoopy1.addEventListener("click", function(event) {

    event.stopPropagation();

    mensajeSnoopy1.classList.toggle(
        "mostrar-mensaje"
    );

});



// =====================================
// SNOOPY 2
// =====================================

const snoopy2 =
    document.getElementById("snoopy2");

const mensajeSnoopy2 =
    document.getElementById("mensajeSnoopy2");


snoopy2.addEventListener("click", function(event) {

    event.stopPropagation();

    mensajeSnoopy2.classList.toggle(
        "mostrar-mensaje"
    );

});



// =====================================
// SNOOPY 3
// =====================================

const snoopy3 =
    document.getElementById("snoopy3");

const mensajeSnoopy3 =
    document.getElementById("mensajeSnoopy3");


snoopy3.addEventListener("click", function(event) {

    event.stopPropagation();

    mensajeSnoopy3.classList.toggle(
        "mostrar-mensaje"
    );

});



// =====================================
// SNOOPY 4
// =====================================

const snoopy4 =
    document.getElementById("snoopy4");

const mensajeSnoopy4 =
    document.getElementById("mensajeSnoopy4");


snoopy4.addEventListener("click", function(event) {

    event.stopPropagation();

    mensajeSnoopy4.classList.toggle(
        "mostrar-mensaje"
    );

});



// =====================================
// MÁQUINA DE ESCRIBIR
// =====================================

const textoEscrito =
    document.getElementById("textoEscrito");


const texto =
    "Hay personas que llegan a nuestra vida " +
    "y terminan convirtiéndose en recuerdos " +
    "muy especiales. 💗";


let posicion = 0;


function escribirTexto() {

    if (posicion < texto.length) {

        textoEscrito.innerHTML +=
            texto.charAt(posicion);

        posicion++;

        setTimeout(
            escribirTexto,
            50
        );

    }

}



// =====================================
// SOBRE SECRETO
// =====================================

const sobre =
    document.getElementById("sobre");

const mensajeOculto =
    document.getElementById("mensajeOculto");


sobre.addEventListener("click", function() {

    sobre.classList.toggle("sobre-abierto");

    mensajeOculto.style.display = "block";

});