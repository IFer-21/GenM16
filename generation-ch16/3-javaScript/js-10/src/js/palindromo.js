const palindromo = (palabra) => {
    
    if(typeof palabra === "number"){
        return "Tiene que ser una palabra"
    }

    let palarbaInvertida = palabra.split("").reverse().join("")
    if (palarbaInvertida=== palabra){
        return "Es un palindromo"
    } else{
        return "No es un palindromo"
    }

}

//console.log(palindromo("ojo"));

module.exports = palindromo;