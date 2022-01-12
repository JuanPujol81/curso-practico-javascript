function promedio(elementosPromedio){
    
    const suma = elementosPromedio.reduce(
        (valoresSumados = 0, elementoArray) => {
            return valoresSumados + elementoArray;
        }
            );


    const promedio = suma/elementosPromedio.length;
    return promedio;

}


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

const arraydeDatos = [1,1,1,1,1,1,5,5,5,5,5,5,5,5,2,3,1,2,3,4,2,2,2,1];

const elementsObject = {};

function calculaModa(arraydeDatos) {
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