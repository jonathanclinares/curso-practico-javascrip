function calcularMediaAricmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



const lista1 = [
    100,
    200,
    300,
    700,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){

    if(numerito % 2===0){
        return true;
    }else {
        return false;
    }

}

let mediana;

if(esPar(lista1.length)){

    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    const promedioElemento1y2 = calcularMediaAricmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
    

} else{
    mediana = lista1[mitadLista1];
}


function calcularMediana(datos){

    const mitadDatos = parseInt(datos.length / 2);

    function esPar(putoNumerito){

        if(putoNumerito % 2===0){
            return true;
        }else {
            return false;
        }
    
    }

    let mediana;

    if(esPar(datos.length)){

        const dat1 = datos[mitadDatos];
        const dat2 = datos[mitadDatos - 1];

        const promedioDatos1y2 = calcularMediaAricmetica([
            dat1,
            dat2,
        ]);

        mediana = promedioDatos1y2;
        

    } else{
        mediana = datos[mitadDatos];
    }
    

    }




} 