
function imprimirInverso(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

let arreglo = [0,3,4,5,2,1,7,9, 5];

imprimirInverso(arreglo);

function arregloInvertido(array){
    //Invierte el arreglo inplace
    let aux;
    for(let i = 0; i < array.length /2; i++){
        aux = array[i];
        array[i] = array[array.length - 1 -i];
        array[array.length - 1 - i] = aux;
    }
    return array;
}

console.log(arregloInvertido(arreglo))
console.log(arreglo)

function nuevoArregloInvertido(array){
    //Recibe un arreglo y retorna un nuevo arreglo con los elementos invertidos.
    nuevoArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        nuevoArray.push(array[i]);
    }
    return nuevoArray
}

let arreglo2 = [7,7,7,7,666,6,6];

console.log(nuevoArregloInvertido(arreglo2))
console.log(arreglo2)