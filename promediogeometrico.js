function promgeo(datos){

    productoLista = 1;

    for (let i = 0; i < datos.length; i++){
        
        productoLista = productoLista*datos[i];
    }

    const promedioGeometrico = Math.pow(productoLista,(1/datos.length));

    return promedioGeometrico;

}