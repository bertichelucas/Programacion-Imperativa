function imprimirDecimales(inicio, fin){
    //Imprime todos los decimales entre dos numeros enteros n
    //De la forma n.d
    //Siendo d un único digito
    for (let i = inicio * 10; i <= fin * 10; i++){
        if (i % 10 != 0){
            console.log(i /10)
        }
    }
}

imprimirDecimales(0, 9)