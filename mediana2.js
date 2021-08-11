function calcularMediaA


ricmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(datos){

    const datos1 = datos.sort(function(a,b){return a - b});


    const mitadDatos = parseInt(datos1.length / 2);

    function esPar(putoNumerito){

        if(putoNumerito % 2===0){
            return true;
        }else {
            return false;
        }
    
    }

    let mediana;

    if(esPar(datos1.length)){

        const dat1 = datos1[mitadDatos];
        const dat2 = datos1[mitadDatos - 1];

        const promedioDatos1y2 = calcularMediaAricmetica([
            dat1,
            dat2,
        ]);

        mediana = promedioDatos1y2;
        

    } else{
        mediana = datos1[mitadDatos];
    }
    return mediana;

} 