/*Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
siguientes criterios:
● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
mostrar el string “Digital” en lugar del número.
● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
mostrar el string “House” en su lugar del número.
● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
“Digital House” en lugar del número.*/

function digitalHouse(a, b){
    for (let i = 1; i<= 100; i++){
        let print_value = i;
        if ( i % a == 0 && i % b == 0) print_value = "Digital House"
        else if (i % a == 0) print_value = "Digital"
        else if (i % b == 0) print_value = "House"
        console.log(print_value)
    }
}

digitalHouse(3,5)