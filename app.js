let apellido;
let nombre; 
let calificacion;
let i;

apellido = prompt("escriba su apellido")
nombres = prompt("escriba su nombre")
calificacion = parseInt(prompt("escribe tu calificacion"))

alert(
    "el promedio de: " + " " + nombres + " " + apellido + " " + " es de: " + calificacion)

if (calificacion >= 7) {
    alert("felicidades pasaste")
} else {
    alert("desaprobaste")
}

for (let i = 7; i <= 10; i++) {
    alert(`se aprueba si tu calificacion es de: ${i}`)
}