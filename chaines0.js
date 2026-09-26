const prompt = require('prompt-sync')();

let c = prompt("Entrez un text :");
let inverse = c.split("").reverse().join("");

console.log(inverse);

