function bubbleSort(array){
    //Bubble Sort optimizado para que no realize todas las iteraciones en caso
    //De ordenarse por completo en pasos anteriores.
    for (let i = 0; i < array.length; i++){
        let array_anterior = [...array] //Spread operator
        for(let j = 0; j < array.length - 1; j++){
            if (array[j] > array[j + 1]){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        if (array.join() == array_anterior.join()){
            return array
        }
    }
    return array
}

let ejemplo = [9,6,4,33,26,5,1,8,17,6]

//console.log(bubbleSort(ejemplo))

let ejemplo2 = [1,2,3,4,5,6,7,9,8]

console.log(bubbleSort(ejemplo2))