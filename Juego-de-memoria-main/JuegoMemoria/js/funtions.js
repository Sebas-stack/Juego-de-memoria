const d = document;

// imagenes del juego 
let imgN1 = [
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"},
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"}
];
let imgN2 = [
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img7",url:"imagenes/bicho.jpg"},
    {nombre:"img8",url:"imagenes/messi.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"},
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"},
    {nombre:"img7",url:"imagenes/bicho.jpg"},
    {nombre:"img8",url:"imagenes/messi.jpg"}
];
let imgN3 = [
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img7",url:"imagenes/bicho.jpg"},
    {nombre:"img8",url:"imagenes/messi.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"},
    {nombre:"img1",url:"imagenes/door-5.jpg"},
    {nombre:"img2",url:"imagenes/fans-4.jpg"},
    {nombre:"img3",url:"imagenes/soccer-1.jpg"},
    {nombre:"img4",url:"imagenes/football-3.jpg"},
    {nombre:"img5",url:"imagenes/foul-6.jpg"},
    {nombre:"img6",url:"imagenes/soccer-7.jpg"},
    {nombre:"img7",url:"imagenes/bicho.jpg"},
    {nombre:"img8",url:"imagenes/messi.jpg"},
    {nombre:"img9",url:"imagenes/neymar.jpg"},
    {nombre:"img9",url:"imagenes/neymar.jpg"},
    {nombre:"img10",url:"imagenes/benzema.jpg"},
    {nombre:"img10",url:"imagenes/benzema.jpg"}
];


//seleccionar el tablero html
let tablero = d.querySelector(".tablero");
let nombreImg = [];  //guardar nombres de las imagenes
let idImg = []; 
let imagenNivel;
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel")
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos"); 
let tiempo = 60;
let mostrarTiempo = d.querySelector(".tiempodejuego")
let tiempoPasado;
let btn = d.querySelector(".btn-info");
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/estadio.mp3")
let sonidoPerder = new Audio("./sonidos/gameover-3.mp3")
let sonidoAdivinar = new Audio("./sonidos/adivinar.mp3")
let mostrarJugador = d.querySelector(".jugador")
let tabla = d.querySelector(".tablas tbody")
let fondoBody = d.querySelector("body");

//setTimeout() //ejecuta una vez cuando pasa un tiempo
//setInterval(); //esta funcion se ejecuta determinado tiempo infinitamente
d.addEventListener("DOMContentLoaded",()=>{
    fondoBody.classList.add("fondo1")
    mostrarDatos();
})


// agregar evento al boton 
btn.addEventListener("click",function () {
    // alert("empecemos")
    // comprobar el tiempo del juego 
    if (estoyJugando==false && nivel==1) {
        ventanaModal();
    
    }else if(estoyJugando==false && nivel==2){
        nivel2();
    }else if(estoyJugando==false && nivel==3){
        nivel3();
    }
    

})






// funciones para agregar las imagenes al tablero 
function agregarImagenes() {
    // agregar imagenes dependiendo el nivel 
        
    if (nivel==1) {
        imagenNivel = imgN1;
    }else if(nivel==2){
        imagenNivel = imgN2;
    }else if(nivel==3){
        imagenNivel = imgN3;
    }

    // colocar imagenes aleatorias 
    imagenNivel.sort(()=>Math.random()-0.5)

    //recorrer con un foreach las imagenes del array
    imagenNivel.forEach((img, i)=>{
        let div = d.createElement("div"); //crear div 
        div.className = "col-3 my-2"; //darle clase a div
        let imagen = d.createElement("img"); //crear imagen
        imagen.src = "imagenes/players-8.jpg"; //agregar la ubicacion de la imagen
        imagen.className="img-fluid altura";
        imagen.id = i;//agregar 
        imagen.addEventListener("click",mostrarImagenes);
        div.appendChild(imagen); //agregar la imagen al div
        tablero.appendChild(div); //agregar el div al tablero
    });
}


// funcion para mostrar las imagenes ocultas
function mostrarImagenes() {
    sonidoSeleccionar.play();
    let imgID = this.getAttribute("id");
    // alert("imagen #"+imgID)
    this.src=imagenNivel[imgID].url;
    //guardar los nombres de imagen
    nombreImg.push(imagenNivel[imgID].nombre)
    //guardar ID  de imagen
    idImg.push(imgID);

    // activar la funcion de comprar imagenes 
    if (nombreImg.length == 2) {

        setTimeout(()=>{
            compararImagenes();
        },1000);
    // }   else if(idImg=idImg){
    //     alert("selecciona Otra imagen")
    //     // allImg[idImg].src = "imagenes/players-8.jpg";
        
    }
}

// funcion para comparar las imagenes 

function compararImagenes() {
    let allImg = d.querySelectorAll(".tablero .col-3 img")
    // verificar si las imagenes son iguales 

    if (nombreImg[0] == nombreImg[1]) {
            if(idImg[0] != idImg[1]){
                sonidoAdivinar.play();
                // alert("Que calidad")
                allImg[idImg[0]].src = "";
                allImg[idImg[1]].src = "";
                allImg[idImg[0]].removeEventListener("click",mostrarImagenes)
                allImg[idImg[1]].removeEventListener("click",mostrarImagenes)
                aciertos++;
                mostrarAciertos.textContent = aciertos;
            }else{
                alert("Escoge otra imagen")
                sonidoPerder.play();
                allImg[idImg[0]].src = "imagenes/players-8.jpg";
                intentos++
                mostrarIntentos.textContent = intentos;
            }}
    else{
        // alert("Que paquete")
        allImg[idImg[0]].src = "imagenes/players-8.jpg";
        allImg[idImg[1]].src = "imagenes/players-8.jpg";
        intentos++
        mostrarIntentos.textContent = intentos;
    }
    // Reiniciar las variables 
    nombreImg=[];
    idImg = [];


// comprobar si se adivinaron las imagenes
if (nivel == 1 && aciertos==6) {
    alert("felicidades")
    fondoBody.classList.replace("fondo1","fondo2")

    // recargar la pagina
    //location.reload(); //reinicia la pagina
    totalIntentos += intentos;
    totalTiempo += tiempo;
    tiempoSobrante +=(60-tiempo);
    obtenerDatos();
    nivel++;
    mostrarNivel.textContent=nivel;
    intentos = 0;
    mostrarIntentos.textContent=intentos;
    aciertos = 0;
    mostrarAciertos.textContent=aciertos;
    clearInterval(tiempoPasado);
    tiempo = 660;
    mostrarTiempo.textContent = tiempo;
    estoyJugando = false;
    agregarImagenes();
    quitarImg();

}else if(nivel ==2 && aciertos ==8){
    alert("fellicidades pasaste al siguiente nivel")
    nivel++;
    mostrarNivel.textContent=nivel;
    intentos = 0;
    mostrarIntentos.textContent=intentos;
    aciertos = 0;
    mostrarAciertos.textContent=aciertos;
    clearInterval(tiempoPasado);
    tiempo = 440;
    mostrarTiempo.textContent = tiempo;
    estoyJugando = false;
    agregarImagenes();
    quitarImg();
}else if(nivel == 3 && aciertos ==10){
    alert("felicidades ganaste el juego")
    location.reload();
}
}

function nivel1() {
    agregarImagenes()
    mostrarNivel.textContent = nivel;
    tiempoJuego();
}
function nivel2() {
    agregarImagenes()
    mostrarNivel.textContent = nivel;
    tiempoJuego();
}
function nivel3() {
    agregarImagenes();
    tiempoJuego();
}

function tiempoJuego() {
     // controlar el tiempo de juego 
        tiempoPasado = setInterval(()=>{
        tiempo--
        mostrarTiempo.textContent = tiempo;
        if (tiempo==0) {
            alert("Sigue intentando")
            sonidoPerder.play();
            clearInterval(tiempoPasado);
            location.reload();
        }
    },500)
}

function quitarImg() {
    let imgQuitar = d.querySelectorAll(".tablero div")
    imgQuitar.forEach((img)=>{
        img.remove();
    })
}

// mostrar venta modal

function ventanaModal() {
    let modal = d.querySelector("#exampleModal");
    let cerrarModal =d. querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador")
    let btnJugador = d.querySelector(".Registrar-jugador")
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            modal.classList.remove("show");
            modal.style.display="none";
        })
    })
    modal.classList.add("show");
    modal.style.display = "block";
    btnJugador.addEventListener("click",()=>{
        // mostara el nombre en el tablero 


        mostrarJugador.textContent = inputJugador.value;
        // cerrar modal
        modal.classList.remove("show");
        modal.style.display="none";
        // iniciar el nivel 1
        estoyJugando = true;
        nivel1();
    });
}

