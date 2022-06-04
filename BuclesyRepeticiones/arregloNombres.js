/*
    Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
*/

const nombres =  ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];

function arregloNombres(nombres){
    let  cant = nombres.length;
    for (let i = 0; i < cant; i++){
        console.log(nombres[i]);
    }
}

arregloNombres(nombres);