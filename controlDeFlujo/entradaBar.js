let edad = 9 //(el número es a modo de ejemplo, podés cambiarlo o
//crear otras para tener varias pruebas)

function entradaAlBar(edad){
    if(edad < 18 &&  edad >= 0) {
        console.log ("No puede ingresar al bar");}
    else if (edad < 0){
        console.log ("la edad es invalida");
    }
    else if (edad >= 18 && edad < 21){
    console.log("si puede pasar al bar, pero no puede tomar alcohol.")}
    
    else {
        console.log("Puede pasar al bar y tomar alcohol.")
        
    }
    if (edad == 21){
        console.log("felicidades")
    }
    if (edad % 2 == 1){
        console.log("Sabias que tu edad es impar")
    }
    
}

console.log(entradaAlBar(edad))
//21 podes pasar al bar 
// Ademas te felicitan por llegar a mayoria de edad

/*
else if (edad == 21){
    console.log("felicidades")
    console.log("Puede pasar al bar y tomar alcohol.")
} else { 
console.log("Puede pasar al bar y tomar alcohol.")
}
*/