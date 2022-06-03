
function valoracionPeliculas(valoracion){

    switch (valoracion){
        case "Muy Mala": return "Lo lamentamos mucho";
        case "Mala": return "Lo lamentamos";
        case "Mediocre": return "Lo sentimos";
        case "Buena": return "Nos alegramos";
        case "Muy buena": return "Nos alegramos mucho";
        default: return "Ingresaste un valor invalido";
    }
}