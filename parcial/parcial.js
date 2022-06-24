
/***********EJERCICIO 1 ***********/

/*
Desarrollar una función para cada uno de las siguientes apartados: 
Que reciba por parámetro dos números, los multiplique, y si ese resultado es par, retorne ‘El resultado de multiplicar 
[num1] y [num2] es: [resultado] y es par’, caso contrario retornará ‘El resultado de multiplicar [num1] y [num2] es: [resultado] y es impar’
Que reciba por parámetro dos números y solo retorne su suma si ambos son múltiplos de 3, sino retornará ‘Los números deben ser múltiplos de 3’
*/

function productoDeDosNumerosEsPar(num1, num2){
    let producto = num1 * num2;
    if (producto % 2 == 0) return `El resultado de multiplicar ${num1} y ${num2} es: ${producto} y es par`;   
    return `El resultado de multiplicar ${num1} y ${num2} es: ${producto} y es impar`;
}

console.log(productoDeDosNumerosEsPar(5, 6)); //Caso un par x impar o par x par siempre da par
console.log(productoDeDosNumerosEsPar(5, 5)); //Caso impar x impar siempre da impar

function sumaDeMultiplosDeTres(num1 , num2){
    if (num1 % 3 == 0 && num2 % 3 == 0) return num1 + num2;
    return "Los números deben ser múltiplos de 3";
}

console.log(sumaDeMultiplosDeTres(6, 333)); //Caso dos múltiplos de 3
console.log(sumaDeMultiplosDeTres(5, 6)); //Caso un sólo múltiplo de 3
console.log(sumaDeMultiplosDeTres(17, 19)); //Caso ningun múltiplo de 3

/*********** EJERCICIO 2 ***********/

/*
Deberás escribir un objeto literal llamado empleado que contenga las siguientes propiedades que deberás completar con tus datos:
nombre string
empresa string
sueldos array de 12 números

Teniendo en cuenta los datos del punto número 1:
Crear un método del objeto que calcule el sueldo mayor del empleado y si supera los 80.000 retornará:  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] 
por lo tanto pagará impuesto a las ganancias’ , y sino retornará:  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] por lo tanto NO pagará impuesto a las ganancias’
*/


let empleado = {
    nombre: "Lucas Bertiche",
    empresa: "Digital House",
    sueldo: [1000, 5000, 500, 7000, 50000, 25, 900, 170000, 650, 8, 7, 6],

    calcularMayorSueldo:  function(){
        let mayor_sueldo = 0;
        for (let i = 0; i < this.sueldo.length; i++){
            if (this.sueldo[i] > mayor_sueldo) mayor_sueldo = this.sueldo[i];
        }

        if (mayor_sueldo > 80000) return `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${mayor_sueldo} por lo tanto pagará impuesto a las ganancias`;
        return  `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${mayor_sueldo} por lo tanto NO pagará impuesto a las ganancias`;
    }
}


console.log(empleado.calcularMayorSueldo()); //Prueba con un sueldo que supera los 80.000

/*********** EJERCICIO 3 ***********/

//Utilizando el siguiente array de objetos:
let autos = [{
    año  : 2015,
    color : "gris",
    puertas: 5
},
{
    año  : 2010,
    color : "rojo",
    puertas: 3
},
{
    año  : 2012,
    color : "gris",
    puertas: 4
},
{
    año: 2022,
    color: "rojo",
    puertas: 3
},
{
    año: 2018,
    color: "blanco",
    puertas: 4
}]

/*
Utilizando un método de array eliminar el último elemento del array autos.
Imprimir por consola el array antes y después de quitar el elemento para ver las diferencias.
Crear una función que reciba como parámetros el array y un color, y me devuelva un nuevo array con todos los objetos que coinciden con ese color recibido por parámetro.
Ejecutar la función y mostrar por consola el nuevo array.
*/

console.log(autos);
autos.pop();
console.log(autos);

function filtrarAutosPorColor(array, color){
    let coincidentes = [];
    for (let i = 0; i< array.length; i++){
        if (array[i].color == color) coincidentes.push(array[i]);
    }
    return coincidentes;
}

console.log(filtrarAutosPorColor(autos, 'gris')); //Prueba con un color que está en el array
console.log(filtrarAutosPorColor(autos, 'cyan')); //Prueba con un color que no está en el array