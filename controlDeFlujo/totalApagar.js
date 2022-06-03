/*
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
*/

function totalAPagar(vehiculo, litrosConsumidos){
    let precioPorLitro = 0;
    let adicional = 50;
    if (vehiculo == "coche") precioPorLitro = 86;
    else if (vehiculo =="moto") precioPorLitro = 55;
    else precioPorLitro =55;

    if (litrosConsumidos > 25) adicional =25;

    return litrosConsumidos * precioPorLitro + adicional;
}