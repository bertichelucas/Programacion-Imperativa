function palindromo(string){
    //Aproximacion recursiva de palindromo
    return rec_palindromo(string, 0 , string.length -1)
}

function rec_palindromo(string, startpos, endpos){
    if (startpos == endpos || endpos < startpos) return true; 
    if (string[startpos] == string[endpos]) return rec_palindromo(string, startpos + 1, endpos - 1);
    else return false;
}

console.log(palindromo("ana"))
console.log(palindromo("anna"))
console.log(palindromo("a"))
console.log(palindromo(""))
console.log(palindromo("Carlitos"))