/*
Dada la siguiente lista:
*/

let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamerica",
    poblacion: 40000000
    },
{
    nombre: "Colombia",
    continente: "Sudamerica",
    poblacion: 50372000
    },

    {
    nombre: "Brasil",
    continente: "Sudamerica",
    poblacion: 300000000
    },
    {
    nombre: "Venezuela",
    continente: "Sudamerica",
    poblacion: 25000000
    },
    {
    nombre: "Chile",
    continente: "Sudamerica",
    poblacion: 10000000
    }
];


/*
Crear una función que reciba como parámetro un arreglo de objetos, un continente, y un número de población.
La función debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, 
y además, que su población sea mayor o igual a la del parámetro.
Si no encuentra coincidencias deberá retornar un array vacío
*/

function filtrarPaisesPorContinenteYPoblacion(paises, continente, poblacion){
    let resultado = [];
    for (let i = 0; i < paises.length; i++){
        if (paises[i].continente == continente && paises[i].poblacion >= poblacion){
            resultado.push(paises[i]);
        }
    }
    return resultado;
}

console.log(filtrarPaisesPorContinenteYPoblacion(paises, "Sudamerica", 25000000)) // Prueba con paises de sudamerica con mayor poblacion >= a 25000000

console.log(filtrarPaisesPorContinenteYPoblacion(paises, "Africa", 500000000)) //Prueba para paises de otro continente.


/*
2. Dado el siguiente array de numeros :
*/
let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];


/*
Crear una función llamada bubbleSort que reciba como parámetros el array y un string que 
represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente
	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función. 
*/

function bubbleSort(array, sentido){
    /*
        bubleSort optimizado para que si se ordena antes de terminar de iterar
        corte la iteracion y así no realizar vueltas de más por un arreglo ya ordenado.
        No retorna nada, solo ordena el arreglo original internamente.
    */

    let hubo_cambio = false;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if((sentido == "ASC" && array[j] > array[j + 1]) || (sentido == "DESC" && array[j] < array[j + 1])){
                hubo_cambio = true;
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
        if (!hubo_cambio) break;
        hubo_cambio = false;
    }
}

console.log(arrayDeNumeros)
bubbleSort(arrayDeNumeros, "ASC") //Prueba de BubbleSort en sentido ASC (menor a mayor)
console.log(arrayDeNumeros)

arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

console.log(arrayDeNumeros)
bubbleSort(arrayDeNumeros, "DESC")//Prueba de BubbleSort en sentido DESC (mayor a menor)
console.log(arrayDeNumeros)

/*
3.
Crear una matriz de 5 x 7.
*/

let matriz = [
    [1, 2, 3, 4, 5, 6 ,7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20 ,21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35]
]

/*
//Matriz creada por funcion
function crearMatriz(filas, columnas){
    let matriz = [];
    let contador = 1;
    for(let i = 0; i < filas; i++){
        matriz.push([]);
        for(let j = 0; j < columnas; j++){
            matriz[i].push(contador);
            contador++;
        }
    }
    return matriz;
}

Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
*/

function sumatoriaFila4(matriz){
    let suma = 0;
    for (let i = 0; i < matriz[3].length; i++) suma += matriz[3][i];
    return suma;
}

console.log(sumatoriaFila4(matriz)) // Prueba de la funcion suma para la matriz

/*
//Optimizacion para poder sumar los valores de cualquier fila pedida por parámetro

function sumatoriaFilaX(matriz, fila){
    let suma = 0;
    for (let i = 0; i < matriz[fila - 1].length; i++) suma += matriz[fila - 1][i];
    return suma;
}
*/

/*
Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.
*/

function devolverArrayDePares(matriz){
    let array_pares = [];
    for(let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] % 2 == 0) array_pares.push(matriz[i][j]);
        }
    }
    return array_pares;
}

console.log(devolverArrayDePares(matriz)) //Prueba de devolver pares para la matriz