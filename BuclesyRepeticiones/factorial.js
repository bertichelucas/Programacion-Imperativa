function factorial(numero){
    if (numero == 1) return 1;
    return numero * factorial(numero -1);
}

console.log(factorial(5))