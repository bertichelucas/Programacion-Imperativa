/*
    Devuelve la cantidad de numeros impares y la cantidad de numeros pares dados entre un intervalo
    de dos numeros.
    Precondicion: el primer numero ingresado debe ser menor o igual al segundo numero. De lo contrario el intervalo no es valido

    Logica:
    entre dos numeros a y b con a <= b tenemos n numeros
    de esos n numeros se sabe que la mitad son pares y la mitad impares
    Por lo tanto simplemente calculo de esa manera la cantidad de pares e impares
    A esas cantidades les sumo los bordes a y b en caso de ser pares o impares

    Esto nos salva de tener que iterar en o(n)
    Simplemente se vuelve o(1) ya que son operaciones puramente matemáticas

*/

function cantidadParesImpares(num1, num2){
    if (num1 > num2 ) return "Intervalo No valido";
    
    let pares = 0;
    let impares = 0;
    if (num1 % 2== 0) pares++;
    else impares ++;

    if (num2 % 2 == 0)pares++;
    else impares++;

    pares = Math.ceil((pares + (num2 - num1 -1)) /2)
    impares = Math.ceil((impares + (num2 - num1 -1)) / 2)
    return `Pares: ${pares} e Impares ${impares}`;
}

console.log(cantidadParesImpares(0,10));