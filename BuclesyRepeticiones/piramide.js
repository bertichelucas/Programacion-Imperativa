function piramide(numero){
    for (let i = numero; i > 0; i--){
        let string = ""
        for (j = 0; j < i; j++){
            string += i
        }
        console.log(string)
    }
}

piramide(10000)

console.log("6")