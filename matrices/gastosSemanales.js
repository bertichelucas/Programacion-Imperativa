const matriz = [
    [11,22,33,44,55,66,1],
    [53,44,65,123,5235,-20,9],
    [560,43,123,55,1,4,6],
    [1,2,3,4,5,6,7]
]

function calcularTotalFila(matriz, numfila){
    let sum = 0
    for (let i = 0; i < matriz[numfila - 1].length; i++){
        sum += matriz[numfila -1][i]
    }
    return sum
}

function calcularTotalColumna(matriz, columna){
    let sum = 0
    for(let i = 0; i < matriz.length; i++){
        sum += matriz[i][columna - 1]
    }
    return sum
}

//console.log(calcularTotalFila(matriz, 4))
//console.log(calcularTotalColumna(matriz, 1))

function calcularTotalMatriz(matriz){
    let sum = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            sum += matriz[i][j]
        }
    }
    return sum
}

console.log(calcularTotalMatriz(matriz))
console.log(calcularTotalFila(matriz, 1) + calcularTotalFila(matriz, 2) + calcularTotalFila(matriz, 3) + calcularTotalFila(matriz, 4))