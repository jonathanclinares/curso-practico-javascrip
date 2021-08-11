function calcularModa(data){
    const listaModa = {};

    data.map(
        function(element) {
            if (listaModa[element]){
                listaModa[element] += 1;
            } else {
                listaModa[element] = 1;
            }

        }
    );

    const lista1Array = Object.entries(listaModa).sort(
        function (a,b) {
        return a[1] - b[1];
    }
    )
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}

