/*
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/

function traductorCondicional(palabra){
    switch (palabra){
        case "perro":
            return "dog";
        case "pelota":
            return "ball";
        case "arbol":
            return "tree";
        case "genio":
            return "genius";
        default:
            return "La palabra ingresada es incorrecta";
    }
}

console.log(traductorCondicional("perro"));
console.log(traductorCondicional("gato"));