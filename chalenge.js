const prompt = require('prompt-sync');

let nombre = Number(prompt("entrez un nombre : "))

if (nombre % 2 === 0) {
    console.log("pair");
} else {
    console.log("impair");
}