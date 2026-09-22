const prompt = require('prompt-sync')();

//let c = prompt("entre un chain c");
//let c = prompt("entre un chain c");

//if (a = b) {
    //console.log()
//}

//let a = prompt("Entrez la première chaîne :");
//let b = prompt("Entrez la deuxième chaîne :");

//let resultat = a + " " + b;

//console.log(resultat);

//let a = prompt("Entrez la pr chaîne :");
//let b = prompt("Entrez la deu chaîne :");

//if (a === b) {
    //console.log("Les chaînes sont égales");
//} else {
    //console.log("Les chaînes sont différentes");
//}

let c = prompt("Entrez un text :");

let inverse = c.split("").reverse().join("");

console.log(inverse);
