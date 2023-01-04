/*    ARRAY     */
const mercaderia =[
    {nombre: "naranja", precio:50, kilos: 1},
    {nombre: "mandarina", precio:70, kilos: 1},
    {nombre: "uva", precio:100, kilos: 1},
    {nombre: "pera", precio:80, kilos: 1},
    {nombre: "coco", precio:130, kilos: 1},
]
let bolsa = []

/*   FIN ARRAY       */

/*           VARIABLES                                 */


function bienVenido(){
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");

    alert("bienvenido a la fruteria" + " " + nombre + " " + apellido + " ")
}
bienVenido();

let quellevas = prompt("va a comprar fruta si o no?")

while(quellevas != "si" && quellevas!= "no"){
    alert("ingresar si o no")
    quellevas = prompt("llevas algo si o no")
}

if(quellevas == "si"){
    alert("esto es lo que tenemos")
    let tenemosEsto = mercaderia.map((mercaderia) => mercaderia.nombre + " " + mercaderia.precio + "$")
    alert(tenemosEsto.join(" - "))
} else if(quellevas == "no"){
    alert("gracias por venir")
}
while(quellevas != "no"){
    let mercaderia = prompt("llevar a la bolsa")
    let precio = 0 

    if(mercaderia == "naranja" || mercaderia == "mandarina" || mercaderia == "uva" || mercaderia == "pera" || mercaderia == "coco"){
        switch(mercaderia){
            case "naranja":
            precio = 50;
            break;
            case "mandarina":
            precio = 70;
            break;
            case "uva":
            precio = 100;
            break;
            case "pera":
            precio = 80;
            break;
            case "coco":
            precio = 130;
            break;
            default:
                break;
        }
        let kilos = parseInt(prompt("cuantos kilos quiere?"))
        bolsa.push({mercaderia, kilos, precio}) 
    } else{
        alert("no tenemos mas")
    }
    quellevas = prompt("algo mas lleva?")
    
    while (quellevas == "no"){
        alert("gracias por venir")
        bolsa.forEach((bolsaLista) => {
            console.log(`mercaderia: ${bolsaLista.mercaderia}, kilos: ${bolsaLista.kilos}, precio es ${bolsaLista.precio} debe
            ${bolsaLista.kilos * bolsaLista.precio}`)
        })
        break;
    }
}

const Totalbolsa = bolsa.reduce((acc, el)=> acc + el.precio * el.kilos, 0)
console.log(`a pagar es: ${Totalbolsa}`)


/*              OBJECT CONSTRUCTOR                                                     */ 

function Mercaderia(nombre, precio, kilos){
    this.nombre = nombre;
    this.precio = precio;
    this.kilos = kilos;
}
const mercaderiaUno = new Mercaderia("Naranja", 50, 1);
const mercaderiaDos = new Mercaderia("Mandarina", 70, 1);
const mercaderiaTres = new Mercaderia("Uva", 100, 1);
const mercaderiaCuatro = new Mercaderia("Pera", 80, 1);
const mercaderiaCinco = new Mercaderia("Coco", 130, 1);

console.log(mercaderiaUno);
console.log(mercaderiaDos);
console.log(mercaderiaTres);
console.log(mercaderiaCuatro);
console.log(mercaderiaCinco);
/*              FIN CONSTRUTOR                           */


/*            
se que me hace falta todo 
tube complicaciones estos dias
pero se lo voy a tener todo para el 5 de la 
disculpe 
*/