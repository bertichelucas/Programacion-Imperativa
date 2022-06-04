const prompt = require("prompt-sync")({ sigint: true });

function numeros(){
    let cant = parseInt(prompt('Ingrese la cantidad de notas: '));
    let suma = 0;

    for(let i= 0; i < cant; i++){
        suma += parseInt(prompt('Ingrese la nota: '));
        console.log(suma);
    }
    return suma / cant;
}

console.log(numeros());

///