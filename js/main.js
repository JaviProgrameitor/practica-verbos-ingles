//Variables

//Variable Generales
let html = document.documentElement;
let body = document.body;

//Variable Templates
const contenedorBurbujasContenido = document.querySelector(".contenedor-burbujas__contenido"),
  template = document.getElementById("template-burbujas").content,
  fragmento = document.createDocumentFragment();

let contador = 1;

//Variable Burbujas
const botonComenzarBurbujas = document.querySelector(".boton-comenzar"),
  contenedorTiempos = document.querySelector(".contenedor-burbujas__contenido-tiempos"),
  contenedorTemporizador = document.querySelector(".contenedor-burbujas__contenido-temporizador"),
  tarjetasTiempos = document.querySelectorAll(".burbujas-tiempos"),
  tarjetasTemporizador = document.querySelectorAll(".burbujas-temporizador"),
  mensajeTemporizador = document.querySelector(".mensaje-botones");

let tarjetasBurbujas;
let burbujasSeleccionadas = [];
let indexBurbujasSeleccionadas = [];

let indexTiemposSeleccionadas = [];
let tiemposVerbales = ["Español", "Infinitivo", "Pasado Simple", "Pasado Participio"];

let indexTemporizadorSeleccionadas = [];
let tiemposTemporizador = [0, 15, 10, 5];

let burbujas = [
  [
    [
      "Soplar",
      "Blow",
      "Blew",
      "Blown"
    ],
    [
      "Crecer",
      "Grow",
      "Grew",
      "Grown"
    ],
    [
      "Saber",
      "Know",
      "Knew",
      "Known"
    ],
    [
      "Lanzar",
      "Throw",
      "Threw",
      "Thrown"
    ],
    [
      "Dibujar",
      "Draw",
      "Drew",
      "Drawn"
    ],
    [
      "Volar",
      "Fly",
      "Flew",
      "Flown"
    ],
  ],
  [
    [
      "Mantener",
      "Keep",
      "Kept",
      "Kept"
    ],
    [
      "Dormir", 
      "Sleep",
      "Slept",
      "Slept"
    ],
    [
      "Barrer",
      "Sweep",
      "Swept",
      "Swept"
    ],
    [
      "Dejar",
      "Leave",
      "Left",
      "Left"
    ],
    [
      "Sentir",
      "Feel",
      "Felt",
      "Felt"
    ],
  ],
  [
    [
      "Permitir",
      "Let",
      "Let",
      "Let"
    ],
    [
      "Poner",
      "Put",
      "Put",
      "Put"
    ],
    [
      "Leer",
      "Read",
      "Read",
      "Read"
    ],
    [
      "Cerrar",
      "Shut",
      "Shut",
      "Shut"
    ],
    [
      "Cortar",
      "Cut",
      "Cut",
      "Cut"
    ],
    [
      "Golpear",
      "Hit",
      "Hit",
      "Hit"
    ],
    [
      "Lastimar",
      "Hurt",
      "Hurt",
      "Hurt"
    ],
  ],
  [
    [
      "Beber",
      "Drink",
      "Drank",
      "Drunk"
    ],
    [
      "Comenzar",
      "Begin",
      "Began",
      "Begun"
    ],
    [
      "Sonar",
      "Ring",
      "Rang",
      "Rung"
    ],
    [
      "Hundir",
      "Sink",
      "Sank",
      "Sunk"
    ],
    [
      "Cantar",
      "Sing",
      "Sang",
      "Sung"
    ],
    [
      "Nadar",
      "Swim",
      "Swam",
      "Swum"
    ],
  ],
  [
    [
      "Vender",
      "Sell",
      "Sold",
      "Sold"
    ],
    [
      "Contar",
      "Tell",
      "Told",
      "Told"
    ],
  ],
  [
    [
      "Pagar",
      "Pay",
      "Paid",
      "Paid"
    ],
    [
      "Decir",
      "Say",
      "Said",
      "Said"
    ],
    [
      "Acomodar",
      "Lay",
      "Laid",
      "Laid"
    ],
  ],
  [
    [
      "Romper",
      "Break",
      "Broke",
      "Broken"
    ],
    [
      "Hablar",
      "Speak",
      "Spoke",
      "Spoken"
    ],
    [
      "Robar",
      "Steal",
      "Stole",
      "Stolen"
    ],
    [
      "Elegir",
      "Choose",
      "Chosen",
      "Chosen"
    ],
    [
      "Congelar",
      "Freeze",
      "Frozen",
      "Frozen"
    ],
    [
      "Despertar",
      "Wake",
      "Woke",
      "Woken"
    ],
  ],
  [
    [
      "Traer",
      "Bring",
      "Brought",
      "Brought"
    ],
    [
      "Comprar",
      "Buy",
      "Bought",
      "Bought"
    ],
    [
      "Pelear",
      "Fight",
      "Fought",
      "Fought"
    ],
    [
      "Pensar",
      "Think",
      "Thought",
      "Thought"
    ],
    [
      "Atrapar",
      "Catch",
      "Caught",
      "Caught"
    ],
    [
      "Enseñar",
      "Teach",
      "Taught",
      "Taught"
    ]
  ],
  [
    [
      "Conducir",
      "Drive",
      "Drove",
      "Driven"
    ],
    [
      "Montar",
      "Ride",
      "Rode",
      "Ridden"
    ],
    [
      "Elevar",
      "Rise",
      "Rose",
      "Rosen"
    ],
    [
      "Escribir",
      "Write",
      "Wrote",
      "Written"
    ],
  ],
  [
    [
      "Ser o Estar",
      "Be",
      "Was / Were",
      "Been"
    ],
    [
      "Hacer",
      "Do",
      "Did",
      "Done"
    ],
    [
      "Comer",
      "Eat",
      "Ate",
      "Eaten"
    ],
    [
      "Ver",
      "See",
      "Saw",
      "Seen"
    ],
    [
      "Ir",
      "Go",
      "Went",
      "Gone"
    ],
    [
      "Correr",
      "Run",
      "Ran",
      "Run"
    ],
    [
      "Dar",
      "Give",
      "Gave",
      "Given"
    ],
    [
      "Caer",
      "Fall",
      "Fell",
      "Fallen"
    ],
  ],
  [
    [
      "Conseguir",
      "Get",
      "Got",
      "Got"
    ],
    [
      "Olvidar",
      "Forget",
      "Forgot",
      "Forgotten"
    ],
    [
      "Permanecer",
      "Stand",
      "Stood",
      "Stood"
    ],
    [
      "Entender",
      "Understand",
      "Understood",
      "Understood"
    ],
    [
      "Venir",
      "Come",
      "Came",
      "Come"
    ],
    [
      "Convertirse",
      "Become",
      "Became",
      "Become"
    ],
  ],
  [
    [
      "Aprender",
      "Learn",
      "Learnt",
      "Learnt"
    ],
    [
      "Significar",
      "Mean",
      "Meant",
      "Meant"
    ],
    [
      "Quemar",
      "Burn",
      "Burnt",
      "Burnt"
    ],
    [
      "Soñar",
      "Dream",
      "Dreamt",
      "Dreamt"
    ],
    [
      "Deletrear",
      "Spell",
      "Spelt",
      "Spelt"
    ],
    [
      "Oler",
      "Smell",
      "Smelt",
      "Smelt"
    ],
  ],
  [
    [
      "Gastar / Pasar",
      "Spend",
      "Spent",
      "Spent"
    ],
    [
      "Enviar",
      "Send",
      "Sent",
      "Sent"
    ],
    [
      "Construir",
      "Build",
      "Built",
      "Built"
    ],
    [
      "Prestar",
      "Lend",
      "Lent",
      "Lent"
    ],
    [
      "Doblar / Curvear",
      "Bend",
      "Bent",
      "Bent"
    ]
  ],
  [
    [
      "Tener",
      "Have",
      "Had",
      "Had"
    ],
    [
      "Perder",
      "Lose",
      "Lost",
      "Lost"
    ],
    [
      "Ganar",
      "Win",
      "Won",
      "Won"
    ],
    [
      "Cavar",
      "Dig",
      "Dug",
      "Dug"
    ],
    [
      "Sentar",
      "Sit",
      "Sat",
      "Sat"
    ],
    [
      "Brillar",
      "Shine",
      "Shone",
      "Shone"
    ],
    [
      "Mantener",
      "Hold",
      "Held",
      "Held"
    ],
    [
      "Crear",
      "Make",
      "Made",
      "Made"
    ],
    [
      "Encontar",
      "Find",
      "Found",
      "Found"
    ],
    [
      "Oír",
      "Hear",
      "Heard",
      "Heard"
    ],
  ],
  [
    [
      "Jurar",
      "Swear",
      "Swore",
      "Sworn"
    ],
    [
      "Vestir",
      "Wear",
      "Wore",
      "Worn"
    ],
    [
      "Rasgar",
      "Tear",
      "Tore",
      "Torn"
    ],
  ],
  [
    [
      "Alimentar",
      "Feed",
      "Fed",
      "Fed"
    ],
    [
      "Reunir",
      "Meet",
      "Met",
      "Met"
    ],
  ],
  [
    [
      "Agitar",
      "Shake",
      "Shook",
      "Shaken"
    ],
    [
      "Tomar",
      "Take",
      "Took",
      "Taken"
    ],
  ],
];

//Variables Contenedor Respuestas
let contenedorRespuestas = document.querySelector(".contenedor-respuestas");
let padreRespuestas = document.querySelector(".padre-respuestas");
let divRespuesta = document.createElement("div");
let tiempoRestante;

//Variables Modal Trabajo
const modalTrabajo = document.querySelector(".modal"),
  modalCarga = document.querySelector(".modal__carga"),
  modalMensajeCarga = document.querySelector(".modal__mensaje-carga"),
  modalContenido = document.querySelector(".modal__contenido"),
  modalReloj = document.querySelector(".temporizador"),
  modalPregunta = document.querySelector("[data-pregunta]"),
  modalContenidoOpciones = document.querySelector("[data-contenido-opciones]"),
  modalOpciones = Array.from(document.querySelectorAll("[data-opciones]")),
  modalBoton = document.querySelector(".modal__boton"),
  audioCarga = document.querySelector(".audio-carga"),
  audioReloj = document.querySelector(".audio-reloj"),
  audioRespuestaCorrecta = document.querySelector(".audio-opcion-correcta"),
  audioRespuestaIncorrecta = document.querySelector(".audio-opcion-incorrecta");

const divSalir = document.createElement("div"),
  modalSalirBoton = document.createElement("i");

divSalir.classList.add("modal__salir");
modalSalirBoton.classList.add("fa-solid","fa-trash", "modal__icon-salir");

divSalir.appendChild(modalSalirBoton);

let n2 = 0;
let n1 = 0;
let numeroPregunta = 1;
let unaVezFuncion = 0;
let ordenCajas = [
  [
    0,
    1,
    2,
    3
  ],
  [
    1,
    0,
    2,
    3
  ],
  [
    2,
    1,
    0,
    3
  ],
  [
    3,
    1,
    2,
    0
  ],
];
let respuestaUsuario = "";
let indexOpcion = [];

//Variable Cambio theme
const botonTheme = document.querySelector(".boton-theme"),
  toggle = document.querySelector(".toggle"),
  toggleHandler = document.querySelector(".toggle__handler"),
  star = document.querySelectorAll(".star"),
  textos = document.querySelectorAll("[data-theme-texto]");

let storageTheme;

//Templates
burbujas.forEach(el => {
  template.querySelector(".burbuja-span").textContent = `Burbuja ${contador}`;
  contador++;

  let clone = document.importNode(template, true);
  fragmento.appendChild(clone);
});

contenedorBurbujasContenido.appendChild(fragmento);

//Tarjetas Burbujas
tarjetasBurbujas = document.querySelectorAll(".burbujas");

contenedorBurbujasContenido.addEventListener("click", (e) => {
  let padre = e.target.offsetParent;
  let elementoIndex;

  //Se agregan estos estilos al dar clicka cada uno de las burbujas
  if(e.target && e.target.tagName === "DIV" && detectarIndex(contenedorBurbujasContenido, e.target) >= 0) {
    e.target.classList.toggle("seleccionada");

    elementoIndex = detectarIndex(contenedorBurbujasContenido, e.target);

    //Detectar si ya se dió click al elemento para agregarlo al array
    agregarIndex(elementoIndex);
  }

  if(e.target && e.target.tagName === "SPAN" && e.target.className) {
    padre.classList.toggle("seleccionada");

    elementoIndex = detectarIndex(contenedorBurbujasContenido, padre);

    //Detectar si ya se dió click al elemento para agregarlo al array
    agregarIndex(elementoIndex);
  }

  
});

contenedorTiempos.addEventListener("click", (e) => {
  let elementoIndex;

  //Se agregan estos estilos al dar click a cada una de las burbujas
  if(e.target && e.target.tagName === "DIV" && detectarIndex(contenedorTiempos, e.target) >= 0) {
    if(indexTiemposSeleccionadas.length == 0) {
      e.target.classList.add("seleccionada");
    }

    else if(!indexTiemposSeleccionadas.length == 0) {
      contenedorTiempos.children[indexTiemposSeleccionadas[0]].classList.remove("seleccionada");
      e.target.classList.add("seleccionada");
    }

    elementoIndex = detectarIndex(contenedorTiempos, e.target);
  }

  //Detectar si ya se dió click al elemento para agregarlo al array
  if(indexTiemposSeleccionadas.length == 0 && detectarElemento(indexTiemposSeleccionadas, elementoIndex)) {
    indexTiemposSeleccionadas.push(elementoIndex);
  }

  else if(detectarElemento(indexTiemposSeleccionadas, elementoIndex)) {
    indexTiemposSeleccionadas.splice(0, 1, elementoIndex);
  }
});

contenedorTemporizador.addEventListener("click", (e) => {
  let elementoIndex;

  //Se agregan estos estilos al dar click a cada una de las burbujas
  if(e.target && e.target.tagName === "DIV" && detectarIndex(contenedorTemporizador, e.target) >= 0) {
    if(indexTemporizadorSeleccionadas.length == 0) {
      e.target.classList.add("seleccionada");
    }

    else if(!indexTemporizadorSeleccionadas.length == 0) {
      contenedorTemporizador.children[indexTemporizadorSeleccionadas[0]].classList.remove("seleccionada");
      e.target.classList.add("seleccionada");
    }

    elementoIndex = detectarIndex(contenedorTemporizador, e.target);
  }

  //Detectar si ya se dió click al elemento para agregarlo al array
  if(indexTemporizadorSeleccionadas.length == 0 && detectarElemento(indexTemporizadorSeleccionadas, elementoIndex)) {
    indexTemporizadorSeleccionadas.push(elementoIndex);
  }

  else if(detectarElemento(indexTemporizadorSeleccionadas, elementoIndex)) {
    indexTemporizadorSeleccionadas.splice(0, 1, elementoIndex);
  }
});

botonComenzarBurbujas.addEventListener("click", () => {
  if(!indexBurbujasSeleccionadas.length == 0 && !indexTiemposSeleccionadas.length == 0 && !indexTemporizadorSeleccionadas.length == 0) {
    let numeroContadorMensajeCarga = 3;
    audioCarga.play();
    unaVezFuncion = 0;

    mensajeTemporizador.textContent = "";
    body.classList.add("body-modal");
    modalTrabajo.style.setProperty("display", "flex");
    modalCarga.style.setProperty("display", "flex");

    modalMensajeCarga.innerHTML = `El juego comienza en <strong>${numeroContadorMensajeCarga}</strong> segundos.`;
    
    let contadorMensajeCarga = setInterval(() => {
      numeroContadorMensajeCarga = numeroContadorMensajeCarga - 1;
      modalMensajeCarga.innerHTML = `El juego comienza en <strong>${numeroContadorMensajeCarga}</strong> segundos.`;

      if(numeroContadorMensajeCarga == -1) {
        numeroContadorMensajeCarga = 5;
        audioCarga.pause();
        audioCarga.currentTime = 0;
        clearInterval(contadorMensajeCarga);

        modalCarga.style.setProperty("display", "none");
        modalContenido.style.setProperty("display", "grid");
        juegoVerbos();
        asignandoVerbos();
        modalBoton.textContent = "Continuar";
        modalContenido.appendChild(divSalir);

        if(tiemposTemporizador[indexTemporizadorSeleccionadas[0]] > 0) {
          let numeroModalReloj = tiemposTemporizador[indexTemporizadorSeleccionadas[0]];
          modalReloj.textContent = numeroModalReloj;
          audioReloj.play();

          tiempoRestante = setInterval(() => {
            numeroModalReloj = numeroModalReloj - 1;
            modalReloj.textContent = numeroModalReloj;
            
            if(numeroModalReloj == 0) {
              clearInterval(tiempoRestante);
              validarRespuesta(respuestaUsuario, divRespuesta);
              audioReloj.pause();
              audioReloj.currentTime = 0;
              unaVezFuncion = 1;
            }
          }, 1000);
        }
      }
    }, 1000);
  }

  else {
    mensajeTemporizador.textContent = "Selecciona una burbuja, un tiempo gramátical y el tiempo para contestar."
  }
});

//Modal trabajo 
modalBoton.addEventListener("click", ()=> {
  if(unaVezFuncion == 1) {
    eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-correcta");
    eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-incorrecta");
    eliminarEstilosBurgujas(modalOpciones, "opciones-incorrectas");
    indexOpcion = [];
    respuestaUsuario = "";
    unaVezFuncion = 0;

    if(tiemposTemporizador[indexTemporizadorSeleccionadas[0]] > 0) {
      let numeroModalReloj = tiemposTemporizador[indexTemporizadorSeleccionadas[0]];
      modalReloj.textContent = numeroModalReloj;
      audioReloj.play();

      tiempoRestante = setInterval(() => {
        numeroModalReloj = numeroModalReloj - 1;
        modalReloj.textContent = numeroModalReloj;
        
        if(numeroModalReloj == 0) {
          clearInterval(tiempoRestante);
          validarRespuesta(respuestaUsuario, divRespuesta);
          unaVezFuncion = 1;
          audioReloj.pause();
          audioReloj.currentTime = 0;
        }
      }, 1000);
    }
    
    if(n2 < (burbujasSeleccionadas[n1].length - 1)) {
      n2 = n2 + 1;
    }

    else if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 < (burbujasSeleccionadas.length - 1)) {
      n1 = n1 + 1;
      n2 = 0;
    }

    if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 == (burbujasSeleccionadas.length - 1) && modalBoton.textContent == "Terminar") {
      modalTrabajo.style.setProperty("display", "none");
      modalContenido.style.setProperty("display", "none");
      body.classList.remove("body-modal");
      clearInterval(tiempoRestante);
      eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-correcta");
      eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-incorrecta");
      eliminarEstilosBurgujas(modalOpciones, "opciones-incorrectas");
      n2 = 0;
      n1 = 0;
      numeroPregunta = 1;
      unaVezFuncion = 0;
      audioReloj.pause();
      audioReloj.currentTime = 0;

      let separador = document.createElement("div");
      separador.classList.add("separador");

      divRespuesta.appendChild(separador);
      divRespuesta.classList.add("contenedor-respuestas__respuesta");
      contenedorRespuestas.appendChild(divRespuesta);
      padreRespuestas.classList.add("contenedor-activo");
    }

    if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 == (burbujasSeleccionadas.length - 1)) {
      modalBoton.textContent = "Terminar";
    }

    juegoVerbos();
    asignandoVerbos();
  };
});

modalContenidoOpciones.addEventListener("click", (e) => {
  if(e.target && e.target.tagName === "DIV" && detectarIndex(modalContenidoOpciones, e.target) >= 0) {
    if(unaVezFuncion == 0) {
      respuestaUsuario = e.target.textContent;

      clearInterval(tiempoRestante);

      if(indexOpcion.length == 0) {
        indexOpcion.push(detectarIndex(modalContenidoOpciones, e.target));
      }

      validarRespuesta(respuestaUsuario, divRespuesta);
      audioReloj.pause();
      audioReloj.currentTime = 0;
      unaVezFuncion = 1;
    }
  };
});

divSalir.addEventListener("click", () => {
  modalTrabajo.style.setProperty("display", "none");
  modalContenido.style.setProperty("display", "none");
  modalCarga.style.setProperty("display", "none");
  body.classList.remove("body-modal");
  clearInterval(tiempoRestante);
  eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-correcta");
  eliminarEstilosBurgujas(modalOpciones, "opcion-seleccionada-incorrecta");
  eliminarEstilosBurgujas(modalOpciones, "opciones-incorrectas");

  indexOpcion = [];
  respuestaUsuario = "";
  n1 = 0;
  n2 = 0;
  numeroPregunta = 1;
  unaVezFuncion = 0;
  audioReloj.pause();
  audioReloj.currentTime = 0;

  let separador = document.createElement("div");
  let informar = document.createElement("span");

  informar.textContent = "--- JUEGO INTERRUMPIDO ---";
  informar.classList.add("respuesta-incorrecta");
  separador.classList.add("separador");

  divRespuesta.appendChild(informar);
  divRespuesta.appendChild(separador);
  divRespuesta.classList.add("contenedor-respuestas__respuesta");
  contenedorRespuestas.appendChild(divRespuesta);
  padreRespuestas.classList.add("contenedor-activo");
});

//--cambio theme
botonTheme.addEventListener("click", () => {
  cambioTheme("toggle", toggle, "toggle-theme-dark", true);
  cambioTheme("toggle", toggleHandler, "toggle__handler-theme-dark", false);
  cambioTheme("toggle", html, "theme-dark", false);
  textos.forEach(tex => {
    cambioTheme("toggle", tex, "theme-dark-texto", false);
  });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("toggle", tb, "theme-dark-burbujas", false);
    });
  tarjetasTiempos.forEach(tbt => {
    cambioTheme("toggle", tbt, "theme-dark-burbujas", false);
  });
  tarjetasTemporizador.forEach(tbt => {
    cambioTheme("toggle", tbt, "theme-dark-burbujas", false);
  });
});

//windows
window.addEventListener("DOMContentLoaded", () => {
  //cambio theme
  if(localStorage.getItem("theme") == "desactivado") {
    cambioTheme("remove", toggle, "toggle-theme-dark", false);
    cambioTheme("remove", toggleHandler, "toggle__handler-theme-dark", false);
    cambioTheme("remove", html, "theme-dark", false);
    textos.forEach(tex => {
      cambioTheme("remove", tex, "theme-dark-texto", false);
    });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("remove", tb, "theme-dark-burbujas", false);
    });
    tarjetasTiempos.forEach(tbt => {
      cambioTheme("remove", tbt, "theme-dark-burbujas", false);
    });
    tarjetasTemporizador.forEach(tbt => {
      cambioTheme("remove", tbt, "theme-dark-burbujas", false);
    });
  }

  else if(localStorage.getItem("theme") == "activado") {
    cambioTheme("add", toggle, "toggle-theme-dark", false);
    cambioTheme("add", toggleHandler, "toggle__handler-theme-dark", false);
    cambioTheme("add", html, "theme-dark", false);
    textos.forEach(tex => {
      cambioTheme("add", tex, "theme-dark-texto", false);
    });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("add", tb, "theme-dark-burbujas", false);
    });
    tarjetasTiempos.forEach(tbt => {
      cambioTheme("add", tbt, "theme-dark-burbujas", false);
    });
    tarjetasTemporizador.forEach(tbt => {
      cambioTheme("add", tbt, "theme-dark-burbujas", false);
    });
  }

  else {
    localStorage.setItem('theme', 'desactivado');
    storageTheme = localStorage.getItem('theme');
  }
});

//Funciones

//--cambio theme
function cambioTheme(tipo, elemento, clase, theme) {
  if(tipo == "add") {
    elemento.classList.add(clase);
  }

  else if(tipo == "toggle") {
    elemento.classList.toggle(clase);
  }

  else if(tipo == "remove") {
    elemento.classList.remove(clase);
  }

  //localstorage
  if(theme) {
    if(localStorage.getItem("theme") == "desactivado") {
      localStorage.setItem("theme", "activado");
      storageTheme = localStorage.getItem("theme");
    }
  
    else if(localStorage.getItem("theme") == "activado") {
      localStorage.setItem("theme", "desactivado");
      storageTheme = localStorage.getItem("theme");
    }

    else {
      localStorage.setItem('theme', 'activado');
      storageTheme = localStorage.getItem('theme');
    }
  }
};

function detectarIndex(array, elemento) {
  let hijos = array.children;
  let newHIjos = Array.from(hijos);
  let indexhijo = newHIjos.indexOf(elemento);

  return indexhijo;
};

function detectarElemento(variable, posicion) {
  let comprobarIndex = variable.indexOf(posicion);

  if(posicion == undefined) {
    return false
  }

  else if(comprobarIndex == -1) {
    return true;
  }

  else if(comprobarIndex => 0) {
    return false;
  }
};

function agregarIndex(elementoIndex) {
  if(detectarElemento(indexBurbujasSeleccionadas, elementoIndex)) {
    indexBurbujasSeleccionadas.push(elementoIndex);
    burbujasSeleccionadas.push(burbujas[elementoIndex]);
  }

  else {
    indexBurbujasSeleccionadas.splice(indexBurbujasSeleccionadas.indexOf(elementoIndex), 1);
    burbujasSeleccionadas.splice(burbujasSeleccionadas.indexOf(burbujas[elementoIndex]), 1);
  }
}

function eliminarEstilosBurgujas (variable, clase) {
  variable.forEach(el => {
    el.classList.remove(clase);
  })
};

function numeroAleatorio(min, maxi) {
  let resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  
  return resultado;
};

function juegoVerbos() {
  let verbo;

  if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Español" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Simple" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Participio") {
    verbo = 1;
  }

  else if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Infinitivo") {
    verbo = 0;
  }

  modalPregunta.textContent = `${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]}`;
};

function asignandoVerbos() {
  let posVerbo = numeroAleatorio(0, 3);
  //1
  let burbujaAleatoria1 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio1 = numeroAleatorio(0, (burbujas[burbujaAleatoria1].length - 1));

  //2
  let burbujaAleatoria2 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio2 = numeroAleatorio(0, (burbujas[burbujaAleatoria2].length - 1));

  //3
  let burbujaAleatoria3 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio3 = numeroAleatorio(0, (burbujas[burbujaAleatoria3].length - 1));

  modalOpciones[ordenCajas[posVerbo][0]].textContent = burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][1]].textContent = burbujas[burbujaAleatoria1][verboAleatorio1][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][2]].textContent = burbujas[burbujaAleatoria2][verboAleatorio2][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][3]].textContent = burbujas[burbujaAleatoria3][verboAleatorio3][indexTiemposSeleccionadas[0]];
};

function validarRespuesta(res, caja) {
  let respuesta = res;
  let spanRespuesta = document.createElement("span");
  let verbo;

  if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Español" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Simple" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Participio") {
    verbo = 1;
  }

  else if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Infinitivo") {
    verbo = 0;
  }

  if(respuesta == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
    spanRespuesta.textContent = `${numeroPregunta}. El ${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]} es ${burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]}.`;
    spanRespuesta.classList.add("respuesta-correcta")
  }

  else if(respuesta == "" && indexOpcion.length == 0) {
    spanRespuesta.textContent = `${numeroPregunta}. SIN RESPONDER. El ${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]} es ${burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]}.`;
    spanRespuesta.classList.add("respuesta-incorrecta");
  }

  else if(respuesta != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
    spanRespuesta.textContent = `${numeroPregunta}. El ${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]} no es ${respuestaUsuario}, es ${burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]}.`;
    spanRespuesta.classList.add("respuesta-incorrecta");
  }

  estilosValidacion(respuesta, indexOpcion[0]);

  numeroPregunta = numeroPregunta + 1;
  caja.appendChild(spanRespuesta);
};

function estilosValidacion(resUsuario, indiceUsuario) {
  let array = Array.from(modalOpciones);

  if(resUsuario == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]] && indexOpcion.length != 0) {
    audioRespuestaCorrecta.play();
    array[indiceUsuario].classList.add("opcion-seleccionada-correcta");

    for(let i = 0; i <= (array.length - 1); i++) {
      if(i != indiceUsuario && array[i].textContent == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opcion-seleccionada-correcta");
      }
      
      if(i != indiceUsuario && array[i].textContent != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opciones-incorrectas");
      }
    }
  }

  else if(resUsuario != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]] && indexOpcion.length != 0) {
    audioRespuestaIncorrecta.play();
    array[indiceUsuario].classList.add("opcion-seleccionada-incorrecta");

    for(let i = 0; i <= (array.length - 1); i++) {
      if(i != indiceUsuario && array[i].textContent == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opcion-seleccionada-correcta");
      }
      
      if(i != indiceUsuario && array[i].textContent != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opciones-incorrectas");
      }
    }
  }

  else if(resUsuario == "" && indexOpcion.length == 0) {
    audioRespuestaIncorrecta.play();
    for(let i = 0; i <= (array.length - 1); i++) {
      if(array[i].textContent == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opcion-seleccionada-correcta");
      }
      
      if(array[i].textContent != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
        array[i].classList.add("opciones-incorrectas");
      }
    }
  }
}