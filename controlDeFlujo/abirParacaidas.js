
/*
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

function abirParacaidas(velocidad, altura){
    if (velocidad < 1000 && 2000 <= altura < 3000) return true;
    return false;
}

console.log(abirParacaidas(1500, 2500))
console.log(abirParacaidas(900, 2500))
console.log(abirParacaidas(500, 2000))