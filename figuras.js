//codigo del cuadrado

console.group("Cuadrados");


function perimetroCuadrado(lado) { 
    return parseFloat(lado)+parseFloat(lado)+parseFloat(lado)+parseFloat(lado);
}

function areaCuadrado(lado){
return lado * lado;
}

console.groupEnd()


//codigo del triangulo

console.group("triangulos");

 function perimetroTriangulo(lado1,lado2,base){
     return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
 } 

 function areaTriangulo(base,altura){
     return (base*altura) / 2;
 }
 console.groupEnd()

//Codigo del Circulo

//Diametro

function diametroCirculo(radio){
    return radio *2;
}

//Pi

const PI = Math.PI;
console.log("PI: " + PI)

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
} 

console.groupEnd();

//Codigo triangulo Isoseles

function perimetroIsoseles(lado1,lado2,lado3){

    if (lado1 === lado2 && lado2 === lado3){
        return lado1*3;
    }else{
        return "No seas bobito!!, los triangulos isoseles tienen los 3 lados iguales";
    }
}

function areaIsoseles(a,b,c){

    if (a === b && b === c){
        return (a*(Math.sqrt((a * a) + (b * b))))/2;;
    }else{
        return "No seas bobito!!, los triangulos isoseles tienen los 3 lados iguales";
    }

}








//Funcion de vinculacion con HTML cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//Funcion de vinculacion con HTML del triangulo

function calcularPerimetroTriangulo(){

    const input = document.getElementById("InputTriangulo1");
    const value = input.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value1 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value2 = input3.value;

    const perimetro = perimetroTriangulo(value,value1,value2);
    alert(perimetro);
}

function calcularAreaTriangulo(){

    const input = document.getElementById("InputTriangulo3");
    const base = input.value;

    const input1 = document.getElementById("InputTriangulo4");
    const altura = input1.value;

    const area = areaTriangulo(base,altura);
    alert(area);


}

//Funcion de vinculacion con HTML del circulo

function calcularPerimetroCirculo(){

    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);

}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);

}

//Funcion de vinculacion con el HTML para el calculo del triangulo Isoseles

function calcularPerimetroIsoseles(){

    const input = document.getElementById("InputIsoseles");
    const lado1 = input.value;

    const input1 = document.getElementById("InputIsoseles1");
    const lado2 = input1.value;

    const input2 = document.getElementById("InputIsoseles2");
    const lado3 = input2.value;

    const perimetro = perimetroIsoseles(lado1,lado2,lado3)
    alert(perimetro);

}

function calcularAreaIsoseles(){

    const input = document.getElementById("InputIsoseles");
    const lado1 = input.value;

    const input1 = document.getElementById("InputIsoseles1");
    const lado2 = input1.value;

    const input2 = document.getElementById("InputIsoseles2");
    const lado3 = input2.value;

    const area = areaIsoseles(lado1,lado2,lado3)
    alert(area);

}
