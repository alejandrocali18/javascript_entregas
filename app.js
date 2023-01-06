const container = document.getElementById("container");
const verCarrito = document.getElementById("carrito");
let carrito=[];

productos.forEach((product)=>{
    let content=document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h2>${product.nombre}</h2>
    <p class="precio">${product.precio} $</p>
    <p>${product.kilo} kilo</p>
    `;

    container.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click",() =>{
        carrito.push({
            img: product.img,
            nombre : product.nombre,
            precio : product.precio,
            kilo : product.kilo
        })
        console.log(carrito)
    })
})
verCarrito.addEventListener("click", () =>{
    console.log("anda")
})

















