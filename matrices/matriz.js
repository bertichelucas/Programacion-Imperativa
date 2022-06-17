function createMatrix(x, y){
    //Recibe dos numeros y crea una matriz de x filas
    //e y columnas
    let arrayMatrix = []
    for (let i = 0; i < x; i++){
        arrayMatrix.push([])
        for (let j = 0; j < y; j++){
            arrayMatrix[i].push('.')
        }
    }
    return arrayMatrix
}

console.log(createMatrix(3,4))
console.table(createMatrix(6,5))