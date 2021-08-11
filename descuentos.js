

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;

}

function Calcular(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    var resultP = document.getElementById("ResultP");

    resultP.innerText = "El puto precio con descuento es USD $" + precioConDescuento;
 
}