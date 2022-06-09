//Esto no es un objeto literal. Prueba de clases en Js
class alumno{
    constructor(nombre, nroLegajo, listaNotas){
        this.nombre = nombre;
        this.nroLegajo = nroLegajo;
        this.listaNotas = listaNotas;
    }

    calcularPromedio(){
        let sum = 0;
        for(let i = 0; i < this.listaNotas.length; i++){
            sum += this.listaNotas[i];
        }
        return sum / this.listaNotas.length;
    }

    estaAprobado(nota){
        return this.calcularPromedio() >= nota;
    }
}

let alumn1 = new alumno('Juan', 10321, [7,6,4,9,2]);

console.log(alumn1.calcularPromedio())
console.log(alumn1.estaAprobado(7))