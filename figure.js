//Codigo del cuadrado

console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");
const perimetroCuadrado = 4 * ladoCuadrado;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + " cm²");
console.groupEnd();

//Codigo del triangulo

console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del Triangulo miden " + ladoTriangulo1 + " cm , " + ladoTriangulo2 + " cm , y " + baseTriangulo + " cm");
console.log("La altura del triangulo es de  " + alturaTriangulo + " cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + " cm²");
console.groupEnd();

//Codigo de la circunferencia

console.group("Circunferencia")
const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
console.log("El radio del Circulo es de " + radio + " cm");
console.log("El diametro del Circulo es de " + diametro + " cm");
console.log("PI es: " + pi);
const perimetroCirculo = pi * diametro;
console.log("El perimetro del Circulo es " + perimetroCirculo + " cm");
const areaCirculo = (radio * radio) * pi;
console.log("El area del Circulo es " + areaCirculo + " cm²");
console.groupEnd();