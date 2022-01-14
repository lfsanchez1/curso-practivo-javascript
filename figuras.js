// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// Código del tríangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return (parseInt(lado1) + parseInt(lado2)) + parseInt(base);
}

function areaTriangulo(altura, base){
    return (base * altura) / 2;
} 
console.groupEnd();

// Código del círculo
console.group("Círculos");

// PI
const PI = Math.PI;

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí vamos con el HTML

function calcularPerimetroCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){

    const inputLado1 = document.getElementById("InputLado1Triangulo").value;
    const inputLado2 = document.getElementById("InputLado2Triangulo").value;
    const inputBase = document.getElementById("InputBaseTriangulo").value;      
    const perimetro = perimetroTriangulo(inputLado1,inputLado2,inputBase);
        
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputAlturaTriangulo").value;    
    const inputBase = document.getElementById("InputBaseTriangulo").value;      
    const area = areaTriangulo(inputAltura, inputBase);
    alert(area);
}

function calcularPerimetroCirculo(){

    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;    
    const area = areaCirculo(value);
    alert(area);
}