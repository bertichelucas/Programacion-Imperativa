let sumar = (num1, num2) => num1 + num2

let restar = (num1, num2) => num1 -num2

let multiplicar = (num1, num2) => num1 * num2

let dividir = (num1, num2) => {
    if (num2 == 0) return null
    return num1 / num2
}

let promedioTresNumeros =(num1,num2,num3) => dividir(sumar(sumar(num1,num2),num3),3)

let porcentaje =(number, porcentaje) => multiplicar(number,dividir(porcentaje,100))

let generadorDePorcentaje = (num1, num2) => dividir(multiplicar(num1, 100),num2)

let cuadrado = num => multiplicar(num, num)

console.log(sumar(5 ,6))
console.log(restar(6,5))
console.log(multiplicar(2,3))
console.log(dividir(5,15))
console.log(cuadrado(5))
console.log(promedioTresNumeros(10,35,15))
console.log(porcentaje(160, 50))
console.log(generadorDePorcentaje(150, 200))

function tablaDeMultiplicar(numero) {
	let i = 1;
	while(i <=10){
		console.log(`${numero} * ${i} = ${numero * i}`);
		i++;
	} 
}

tablaDeMultiplicar(5);