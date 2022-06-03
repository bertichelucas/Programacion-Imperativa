/*
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto. */

function numeroSecreto(numero){
    let numSecreto = Math.floor((Math.random() *10) + 1);
    if (numero == numSecreto) return "Congratulations you've chosen the secret number";
    return "NT. The number was " + numSecreto + " and your number was " + numero;
}


console.log(numeroSecreto(2))