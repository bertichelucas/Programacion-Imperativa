/*
Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
*/

function diezSiguientes(numero){
    for (let i = numero; i < numero + 10; i ++){
        console.log(i + 1)
    }
}

diezSiguientes(10)