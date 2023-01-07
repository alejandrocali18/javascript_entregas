const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
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

    shopContent.append(content);

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
        });
        console.log(carrito)
    });
});

verCarrito.addEventListener("click", () =>{

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${product.img}"
    <h3>${product.nombre}</h3>
    <p>${product.precio}`;

    modalContainer.append(carritoContent)
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);


    const totalbuying = document.createElement("div")
    totalbuying.className= "total-content"
    totalbuying.innerHTML= `total a pagar: ${total} $`
    modalContainer.append(totalbuying);
});

















