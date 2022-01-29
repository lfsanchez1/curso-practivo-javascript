function calcularMediana(lista){

    lista.sort(function(a, b){return a-b});
    
    let mediana;
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const elemento1 =  lista[mitadLista - 1];
        const elemento2 =  lista[mitadLista];
        const promedioElemento1y2 = calculaMediaAritmetica([
            elemento1, 
            elemento2
        ]);
        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    }
    
    return mediana;
}


function calculaMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(        
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista / lista.length;
    return promedio;
}

function esPar(numero){
    if(numero % 2 === 0) return true;
    else return false;
}