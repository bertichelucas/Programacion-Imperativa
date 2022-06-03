function localSandwiches(tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let total = 0;
    if (tipoSandwich == "pollo")total += 150;
    else if (tipoSandwich == "carne") total += 200;
    else total += 100;

    if (tipoPan =="blanco") total += 50;
    else if (tipoPan == "negro") total += 60;
    else if (tipoPan == "s/gluten") total += 75;

    if (queso) total += 20;
    if (tomate) total += 15;
    if (lechuga) total += 10;
    if (cebolla) total += 15;
    if (mayonesa) total += 5;
    if (mostaza) total += 5;
    return total;
}