function binarySearch(array, number){
    //Envoltorio de la función recursiva. Recibe el array y el numero a buscar
    //Tambien funciona con otros tipos de datos mientras el array esté ordenado.
    //Devuelve null en caso de no encontrar el elemento del array 
    //Devuelve el índice del array en el que se encuentra el número.
    return recBinarySearch(array, number, 0, array.length -1);
}

function recBinarySearch (array, number, init, end){

    if (init > end ) return null;

    let mid = Math.trunc((init + end) / 2)
    console.log(mid, init, end)
    if (array[mid] == number) return mid
    else if (array[mid] < number) return recBinarySearch(array, number, mid + 1, end)
    else return recBinarySearch(array, number, init, mid - 1)

} 

let array = [1,6]

console.log(binarySearch(array, 6))
