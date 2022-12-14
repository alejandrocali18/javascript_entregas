/*-------------------primera entrega---------------------------


function mostrarMensaje(){
    let apellido;
    let nombre; 
    let calificacion;
    let i;
    
    
    
    alert(
        "el promedio de: " + " " + nombres + " " + apellido + " " + " es de: " + calificacion)
    
    if (calificacion >= 7) {
        alert("felicidades pasaste")
    } else {
        alert("desaprobaste vuelva a intentarlo")
    }
    
    for (let i = 7; i <= 10; i++) {
        alert(`se aprueba si tu calificacion es de: ${i}`)
    }
}

-------------------------------------------------*/

function Mercaderia(nombre, precio, kilos){
    this.nombre = nombre;
    this.precio = precio;
    this.kilos = kilos;
}

const mercaderiaUno = new Mercaderia("Naranja", 300, 5);
const mercaderiaDos = new Mercaderia("Mandarina", 200, 10);
const mercaderiaTres = new Mercaderia("Uva", 500, 25);
const mercaderiaCuatro = new Mercaderia("Pera", 250, 50);
const mercaderiaCinco = new Mercaderia("Coco", 750, 70);


console.log(mercaderiaUno);
console.log(mercaderiaDos);
console.log(mercaderiaTres);
console.log(mercaderiaCuatro);
console.log(mercaderiaCinco);

function compraMercaderia(){
    compro = prompt(`que vas a comprar?:
    1 - Naranja`)
}