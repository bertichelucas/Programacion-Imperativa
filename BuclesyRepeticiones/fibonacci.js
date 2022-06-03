function fibonnacci(cantidad){
    if (cantidad == 0 || cantidad == 1) return 1;
    return fibonnacci(cantidad- 1) + fibonnacci(cantidad - 2);
}

console.log(fibonnacci(50))