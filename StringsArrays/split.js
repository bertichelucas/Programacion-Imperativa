function stringSplit(string){
    //Divide los caracteres de un string y los devuelve en un arreglo de caracteres
    let splitted_string  = [];
    for (let i = 0; i < string.length; i++){
        splitted_string.push(string[i])
    }
    return splitted_string;
}

console.log(stringSplit("hola"))