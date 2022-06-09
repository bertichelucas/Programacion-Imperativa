
//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];

/*Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.*/

let banco = {
    clientes: arrayCuentas,

    consultarCliente: function(titular){
        //Devuelve el primer objeto cliente cuyo titular sea igual al
        //pasado por parámetro.
        
        return this.clientes.find(element => element.titularCuenta == titular);
    },

    deposito: function(titular, dinero){
        //Consulta al cliente y deposita la cantidad de dinero indicada.
        let cliente = this.consultarCliente(titular);
        if (!cliente)return "Error el cliente no exsiste";
        cliente.saldoEnPesos += dinero;
        return "Deposito Realizado, su saldo es: " + cliente.saldoEnPesos;
    },

    extraccion: function(titular, monto){
        //Consulta al cliente
        let cliente = this.consultarCliente(titular);
        if (!cliente) return "Error el cliente no exsiste";
        if (cliente.saldoEnPesos < monto) return "Fondos Insuficientes";
        cliente.saldoEnPesos -= monto;
        return "Extraccion realizada correctamente, el nuevo saldo es: " + cliente.saldoEnPesos;


    }

}


console.log(banco.consultarCliente("Ansel Ardley"));
console.log(banco.deposito("Ansel Ardley", 500));
console.log(banco.consultarCliente("Ansel Ardley"));

console.log(banco.extraccion("pepito", 5000));
console.log(banco.extraccion("Ansel Ardley", 5000));
console.log(banco.extraccion("Ansel Ardley", 5000000));
console.log(banco.consultarCliente("Ansel Ardley"));