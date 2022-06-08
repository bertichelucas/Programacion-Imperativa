function sumarArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

let array1 = [1,2,3];
let array2 = [10,3,10];
let array3 = [-5,100,19];

console.log(sumarArray(array1));
console.log(sumarArray(array2));
console.log(sumarArray(array3));