
const salarios = [
    {
        nombre: "Raul",
        salario: 500
    },
    {
        nombre: "Miguel",
        salario: 1500
    },
    {
        nombre: "Paul",
        salario: 1800
    },
    {
        nombre: "Rodolfo",
        salario: 1000
    },
    {
        nombre: "Fernando",
        salario: 2200
    },
    {
        nombre: "Pedro",
        salario: 200
    },
    {
        nombre: "Angel",
        salario: 500
    },
    {
        nombre: "Teresa",
        salario: 1500
    },
    {
        nombre: "Maria",
        salario: 1300
    },
    {
        nombre: "Julian",
        salario: 2400
    },
    {
        nombre: "Fernando",
        salario: 3400
    },
    {
        nombre: "Pedro",
        salario: 400
    },
    {
        nombre: "Angel",
        salario: 400
    },
    {
        nombre: "Teresa",
        salario: 400
    },
    {
        nombre: "Maria",
        salario: 600
    },
    {
        nombre: "Julian",
        salario: 1600
    },
    {
        nombre: "Raul",
        salario: 2600
    },
    {
        nombre: "Miguel",
        salario: 1000
    },
    {
        nombre: "Paul",
        salario: 2000
    },
    {
        nombre: "Teresa",
        salario: 100000000
    }
];


//************************************************************************************** */
//funcion para calcular el promedio, recibe un array de valores
function promedio(elementosPromedio){
    
    const suma = elementosPromedio.reduce(
        (valoresSumados = 0, elementoArray) => {
            return valoresSumados + elementoArray;
        }
            );


    const promedio = suma/elementosPromedio.length;
    return promedio;

}


//************************************************************************************** */
//funcion para calcular la mediana, recibe un array de valores
function mediana(elementosPromedio){
    
    const mitad = (elementosPromedio.length % 2 == 0) ? elementosPromedio.length/2 : Math.floor(elementosPromedio.length/2) ;
    let media=0;
    
    elementosPromedio.sort((a,b) => {return a-b;});
    if(elementosPromedio.length % 2 == 0)
        media = (elementosPromedio[mitad - 1] + elementosPromedio[mitad])/2;
    else
        media = elementosPromedio[mitad];
    return media;
}

//*************************************************************************************/
//funcion para calcular la moda, recibe un array de numeros
function calculaModa(arraydeDatos) {

    let elementsObject = {};
    arraydeDatos.map(
        function (element){
            if(elementsObject[element])
                elementsObject[element]++;
            else
            elementsObject[element] = 1;
        }
    );

    let arrayModas = [];
    let moda = 0;
    let valores = Object.values(elementsObject); // valores
    let campos = Object.keys(elementsObject); // propiedades
        for(let i=0; i< valores.length; i++)
            if(moda < valores[i])
                moda = valores[i];

        for(let i=0; i< valores.length; i++)
            if(moda == valores[i])
                arrayModas.push(campos[i]);
    return arrayModas;
}


//******************************************************************* */
//Funcion para calcular todos los datos, recibe un array de objetos con nombre y salario
function estudioEstadistico(salarios){
    let valores = [];
    for(let i = 0; i < salarios.length; i++){
        valores.push(salarios[i].salario);
    }
    
    let promedioGral = promedio(valores);
    let mediaGral = mediana(valores);
    let modaGral = calculaModa(valores);

    let top10 = Math.ceil((valores.length * 10)/100);
    let top10Array = [];
    valores.sort(function(a,b){return b-a;});
    top10Array = valores.slice(0,top10);

    let promedioTop10 = promedio(top10Array);
    let mediaTop10 = mediana(top10Array);
    let modaTop10 = calculaModa(top10Array);

    let text = document.getElementById("PromedioGeneral");
    text.textContent = "El promedio de salarios General es de " + promedioGral + " $";

    text = document.getElementById("MediaGeneral");
    text.textContent = "La media de salarios General es de " + mediaGral + " $";

    text = document.getElementById("PromedioTop10");
    text.textContent = "El promedio de salarios top 10% es de " + promedioTop10 + " $";

    text = document.getElementById("MediaTop10");
    text.textContent = "La media de salarios top 10% es de " + mediaTop10 + " $";

    text = document.getElementById("ParrafoInfo");
    text.textContent = "La Moda General es de: " + modaGral + " y la moda top 10% es de " + modaTop10;
}