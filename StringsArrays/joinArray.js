function joinArray(array){
    let res = "";
    for(let i = 0; i < array.length; i++){
        res += array[i];
    }
    return res;
}

let array1 = ["h","o","l","a"];
let array2 = ["c","h","a","u"];

console.log(joinArray(array1))
console.log(joinArray(array2))