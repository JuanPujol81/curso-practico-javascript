//Codigo del cuadrado

console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");


function perimetroCuadrado(lado) {
    return 4 * lado;
}

//console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return  lado * lado;
}

//console.log("El area del cuadrado es " + areaCuadrado + " cm²");
console.groupEnd();

//Codigo del triangulo

console.group("Triangulo")


function hipotenusaIsoceles(lado) {
    const result = 2 * (lado * lado);
    return Math.sqrt(result);
}

function alturaTriangulo(lado) {
    const base = hipotenusaIsoceles(lado)/2;
    return [(lado * lado) + (base * base)];
}

function areaTriangulo(lado){
    const altura = alturaTriangulo(lado);
    const base = hipotenusaIsoceles(lado);
    return (base * altura) / 2;
}

function perimetroTriangulo(lado) {
    const base = hipotenusaIsoceles(lado);
    return lado + lado + base;
}


//console.log("El area del triangulo es " + areaTriangulo + " cm²");
console.groupEnd();

//Codigo de la circunferencia

console.group("Circunferencia")

/*const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
console.log("El radio del Circulo es de " + radio + " cm");
console.log("El diametro del Circulo es de " + diametro + " cm");
console.log("PI es: " + pi);*/

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}
//console.log("El perimetro del Circulo es " + perimetroCirculo + " cm");

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}
//console.log("El area del Circulo es " + areaCirculo + " cm²");
console.groupEnd();


function  calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function  calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


function  calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function  calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function  calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = Number(input.value);
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function  calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = Number(input.value);
    const area = areaTriangulo(value);
    alert(area);
}