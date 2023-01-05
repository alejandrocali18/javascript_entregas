/*    ARRAY     */
const mercaderia =[
    {nombre: "naranja", precio:50, kilos: 1, img : './frutas/naranja.jpg'},
    {nombre: "mandarina", precio:70, kilos: 1, img : './frutas/mandarina.jpg'},
    {nombre: "uva", precio:100, kilos: 1, img : './frutas/uva.webp'},
    {nombre: "pera", precio:80, kilos: 1, img : './frutas/pera.jpg'},
    {nombre: "coco", precio:130, kilos: 1, img : './frutas/coco.jpg'},
]

const contenedorProductos = document.getElementById(`contenedorProducto`)


let bolsa = []

mercaderia.forEach((producto) =>{
    const div = document.createElement(`div`)
    div.classList.add('producto')
    div.innerHTML = `
    <img src= ${ producto . img } alt= "">
    <h3>${producto.nombre}</h3>
    <p>kilos: ${producto.kilos}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.nombre}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.nombre}`)
   
    boton.addEventListener(`click`, () => {
        agregarAbolsa(producto.nombre)
    })
})

const agregarAbolsa = (producNombre) =>{
    const item = mercaderia.find((produc) => produc.nombre === producNombre)
    bolsa.push(item)
    console.log("bolsa")
}

