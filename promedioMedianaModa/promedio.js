
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i<lista.length;i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    //console.log("La suma es de: "+sumaLista);
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista1 = sumaLista/lista1.length;
    return promedioLista1;
}

