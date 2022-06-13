const alicia = [25, 50, 60];
const bob = [75, 50, 40];

function encontrarGanador(a, b){
    /* Recibe dos arrays de numeros y compara sus valores
    posicion por posicion. Quien tenga el puntaje más alto
    gana 1 punto. Gana el que tenga más puntos.
    Devuelve 0 en caso de empate, numero positivo en caso
    de ganar a y negativo en caso de ganar b*/
    if (a.length != b.length) return false;
    let winner = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) winner++;
        else if (b[i] > a[i])winner--;
    }
    return winner
}


console.log(encontrarGanador(alicia,bob))