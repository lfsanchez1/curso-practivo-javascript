// Funciones helpers o utils
function esPar(numero){
    return  (numero % 2 === 0);
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
    
// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)){
        const elemento1 =  lista[mitad - 1];
        const elemento2 =  lista[mitad];
        const promedioElemento1y2 = calculaMediaAritmetica([
            elemento1, 
            elemento2
        ]);
        mediana = promedioElemento1y2;
        return mediana;
    }else{
        mediana = lista[mitad];
        return mediana;
    }
}


// Mediana General
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

const medianaGeneralCol = medianaSalarios(salariosColSorted);




console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
