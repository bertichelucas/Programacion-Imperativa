/*
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
*/

function propiedadUnica(array, propiedad){
    let nuevo_arreglo =[];
    for (let i = 0; i < array.length; i++){
        let object ={
            [propiedad]: array[i][propiedad]
        }
        nuevo_arreglo.push(object);
    }
    return nuevo_arreglo;
    
}

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

console.log(propiedadUnica(array, "edad"))
console.log(propiedadUnica(array, "nombre"))