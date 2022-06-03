function sumatoria(numero){
    let sum = 0;
    for (let i = 0; i <= numero; i++){
        sum += i;
    }
    return sum;
}

console.log(sumatoria(5))
console.log(sumatoria(100))