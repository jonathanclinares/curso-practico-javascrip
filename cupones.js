var descuento;



function calcularDescuento (descuento, precio){

    const factorCalculoDescuento = 100 - descuento;

    const precioFinal = (precio*factorCalculoDescuento)/100

    return precioFinal;

}



function calculo(){

    const inputCupon = document.getElementById("vergCodigo");
    const descuento = inputCupon.value;

    const inputPrecio = document.getElementById("precioso");
    const precio = inputPrecio.value;

    if (descuento === "verga10"){

        const final = calcularDescuento(10, precio);

        const Resultado = document.getElementById("resultado");

        Resultado.innerText = "Hola Put@ el precio de tu producto sexual sera de " + final;

    }else if (descuento === "verga20"){

        const final = calcularDescuento(20, precio);

        const Resultado = document.getElementById("resultado");

        Resultado.innerText = "Hola Put@ el precio de tu producto sexual sera de " + final;

    }else if (descuento === "vagina30"){

        const final = calcularDescuento(30, precio);

        const Resultado = document.getElementById("resultado");

        Resultado.innerText = "Hola Put@ el precio de tu producto sexual sera de " + final;

    }else {

        const Resultado = document.getElementById("resultado");
        
        Resultado.innerText = "Hola, no tienes descuento puto, lo siento :("

    }



}
