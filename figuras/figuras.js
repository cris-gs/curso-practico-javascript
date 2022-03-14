//Códico del cuadrado
console.group("Cuadrados");
// const ladoCuradrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuradrado+"cm");

function perimetroCuadrado(lado){
  return  lado * 4;
} 
//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+"cm");

function areaCuadrada(lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: "+areaCuadrada+"cm^2");
console.groupEnd();


//Códico del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTriangulo+"cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo mide: "+alturaTriangulo+"cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 

//console.log("El perímetro del triangulo es: "+perimetroTriangulo+"cm");

function areaTriangulo(base, altura){
    return (base*altura)/2
}
// console.log("El area del triangulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

//Códico del círculo
console.group("Círculos");
// const radioCirculo = 5;
function diametroCirculo(radio){
    return radio*2;
}
// console.log("El diametro del círculo es: "+diametroCirculo+"cm");

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// console.log("El perímetro del círculo es: "+perimetroCirculo+"cm")

function areaCirculo(radio){
   return (radio * radio) * PI;
} 
// console.log("El area del circulo es: "+areaCirculo+"cm^2");

console.groupEnd();


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}



//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
}