/*
let food= prompt("")

switch (){
    case "":
    console.log("")
    break;
    case "":
        console.log("")
        break;
        case "":
            console.log("")
            break;
            default:
                console.log("")
                break;
}
*/


/*ciclo for*/

for (let i = 0; i <= 5; i++) {
    alert(`Me salio y no rompi nada I es: ${i}`);
}

/*Condicional*/

let efectivo = 4000
let tarjeta = 6000
let pagar = 11000
let disponible = efectivo + tarjeta;

if (efectivo > pagar || tarjeta > pagar || disponible >= pagar) {
    console.log("podemos hacer la compra");
} else {
    console.log("gracias vuelva pronto")
}