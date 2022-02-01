function calcularMediaArmonica(lista){
    const mediaArmonica = lista.length / lista.reduce(sumaNumerosInversos);
    return mediaArmonica;
}

function sumaNumerosInversos(sumaAcumulada, numero, posicion ){
    if(posicion === 1) return (1 / sumaAcumulada) + (1 / numero);
    return sumaAcumulada + (1 / numero);
}

