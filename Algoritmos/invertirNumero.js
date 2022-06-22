function invertirNumero(num){
    //Recibe un número y devuelve el mismo numero pero invertido
    let rev_number = 0
    let last_digit = 0
    while (num >= 1){
        last_digit = num % 10
        rev_number = rev_number * 10 + last_digit
        num  = num / 10
        num -= num % 1
    }
    return rev_number
}


console.log(invertirNumero(321))
console.log(invertirNumero(1512412412))