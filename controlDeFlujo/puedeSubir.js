function puedeSubir(altura, acompañada, penalizada){
    if (penalizada) return false;
    if (altura >= 1.40 && altura < 2 )return true; 
    else if (altura <1.40 && altura >= 1.20 && acompañada) return true;
    return false;
}

console.log(puedeSubir(1.0, true, false))

console.log(puedeSubir(1.50, false ,false))

console.log(puedeSubir(1.30, false, true))
