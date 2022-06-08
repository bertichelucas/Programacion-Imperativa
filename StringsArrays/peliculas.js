
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function upperCase(array){
    //Recibe un array de strings y pasa a mayusculas cada una
    //de las mismas. Modifica el array internamente
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
}

upperCase(peliculas);
console.log(peliculas);

let peliculasAnimadas = ["toy story", "finding nemo", "kung-fu panda", "wally", "fornite"]

function combinarArrays(array1, array2){
//Une los elementos de los arrays insertando los elementos
//del array2 en el array1. Devuelve el primer array.
    upperCase(array2);
    for(let i =0; i < array2.length; i++){
        array1.push(array2[i]);
    }
    return array1;
}

console.log(combinarArrays(peliculas,peliculasAnimadas));

function compararArrays(array1, array2){
    //Recibe dos arrays compara sus elementos. si son iguales
    //devuelve true.
    if(array1.length != array2.length){
        return -1;
    }
    for(let i = 0; i < array1.length; i++){
        if (array1[i] != array2[i]) return false;
    }
    return true;
}

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

console.log(compararArrays(asiaScores,euroScores))