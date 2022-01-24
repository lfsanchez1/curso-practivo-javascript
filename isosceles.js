function validarTriangulo(){    
    const inputLado1 = document.getElementById("InputLado1Triangulo").value;
    const inputLado2 = document.getElementById("InputLado2Triangulo").value;
    const inputBase = document.getElementById("InputBaseTriangulo").value;

    if(inputLado1 == "" || inputLado2 == "" || inputBase == "") alert("Los lados del triangulo no deben ser vacios");
    else if(inputLado1 <= 0 || inputLado2 <= 0 || inputBase <= 0) alert("Los lados del triangulo deben ser mayor a 0"); 
    else if(inputLado1 == inputLado2 == inputBase) alert("El triangulo es equilatero por favor ingresar los datos de un triangulo isosceles")    
    else if(inputLado1 == inputLado2) alturaTriangulo(inputLado1,inputLado2,inputBase);
    else if(inputLado1 == inputBase) alturaTriangulo(inputLado1,inputBase,inputLado2);
    else if(inputLado2 == inputBase) alturaTriangulo(inputLado2,inputBase,inputLado1);
    else alert("El triangulo no es isosceles por favor ingresar los datos nuevamente")
}

function alturaTriangulo(lado1,lado2,base){
    lado1 = lado1 * lado1;
    nuevoLado2 = (base/2)*(base/2);
    altura = Math.sqrt(lado1 - nuevoLado2);
    alert("La altura del triangulo es: "+altura);
}