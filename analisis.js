//Helpers

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
};


function calcularMediaAricmetica(lista) {

    const sumaLista = lista.reduce(
        function (m, n) {
            return m + n;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana


function medianaSalariosCol(lista){

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personamitad1 = lista[mitad - 1];
        const personamitad2 = lista[mitad];
        const mediana = calcularMediaAricmetica([personamitad1,personamitad2]);
        return mediana;

    }else {
        const personamitad = lista[mitad];
        return personamitad;
    }

}



// Mediana General

const salariosCol = colombia.map(
    
    function(persona){
        return persona.salary;

});

const salariosColOrden = salariosCol.sort(
    function(a,b){
        return a - b;

    }
    );

const medianaGeneralCol = medianaSalariosCol(salariosColOrden);


// Mediana del top 10 %


const spliceStart = (salariosColOrden.length*90)/100;

const spliceCount = salariosColOrden.length - spliceStart

const salariosColTop10 = salariosColOrden.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log(

    medianaGeneralCol,
    medianaTop10Col,

);





