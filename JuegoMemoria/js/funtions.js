const d = document;
// imagenes del juego 
let imgN1 = [
    {nombre:"img1",url:"door-5.jpg"},
    {nombre:"img2",url:"fans-4.jpg"},
    {nombre:"img3",url:"soccer-1.jpg"},
    {nombre:"img4",url:"football-3.jpg"},
    {nombre:"img5",url:"foul-6.jpg"},
    {nombre:"img6",url:"soccer-7.jpg"},
    {nombre:"img1",url:"door-5.jpg"},
    {nombre:"img2",url:"fans-4.jpg"},
    {nombre:"img3",url:"soccer-1.jpg"},
    {nombre:"img4",url:"football-3.jpg"},
    {nombre:"img5",url:"foul-6.jpg"},
    {nombre:"img6",url:"soccer-7.jpg"}
];

//seleccionar el tablero html
let tablero = d.querySelector(".tablero");

// funciones para agregar las imagenes al tablero 
function agregarImagenes() {
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i)=>{
        let div = d.createElement("div"); //crear div 
        div.className = "col-3"; //darle clase a div
        let imagen = d.createElement("img"); //crear imagen
        imagen.src = "imagen/ocultar.jpg"; //agregar la ubicacion de la imagen
        imagen.className="img-fluid altura";
        div.appendChild(imagen); //agregar la imagen al div
        tablero.appendChild(div); //agregar el div al tablero
    });
}

agregarImagenes();