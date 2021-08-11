
var cupon = [
"verga10",
"verga20",
"chelfa50",
]



function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;

}

function Calcular(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue){
        case "verga10":
            descuento = 10;
        break;
        case "verga20":
            descuento = 20;
        break;
        case "chelfa50":
            descuento = 50;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El puto precio con descuento es USD $" + precioConDescuento;
 
}