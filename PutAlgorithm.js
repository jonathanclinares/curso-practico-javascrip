

// put algorithm


function calculoDePuto(P,I,S){

    const putv2 = Math.pow(S,P);
    const angel = I;

    const final = putv2/angel;

    return final;

}


// funtion button

function Putt(){

    const inputPromiscuidad = document.getElementById("Promiscuidad");
    const Pro = inputPromiscuidad.value;

    const inputIndiferencia = document.getElementById("Indiferencia");
    const Inds = inputIndiferencia.value;

    const inputSalientes = document.getElementById("Salientes");
    const Sali = inputSalientes.value;

    const parisHilton = calculoDePuto(Pro,Inds,Sali);

    const resultado = document.getElementById("Resultado");

    resultado.innerText = "El nivel de puto que tienes es de " + parisHilton;


}