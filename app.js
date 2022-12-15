/*           VARIABLES                                 */
let saludo;
let nombre;
let apellido;
let llevar;
let compra;
let banana;
let naranja;
let manzana;
let uva;
let choclo;
let carrito;
let venta;
let despido;
let inicioCompra;
let frutas;

function bienVenido(){
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");

    alert("bienvenido" + " " + nombre + " " + apellido + " " + "que va a llevar?")
}
bienVenido();


/*              OBJECT CONSTRUCTOR                                                     */ 

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
/*              FIN CONSTRUTOR                           */


/*    ARRAY     */

let bolsa = ["banana", "naranja", "manzana", "uva", "choclo"]

bolsa[2] = "manzana";

/*   FIN ARRAY       */