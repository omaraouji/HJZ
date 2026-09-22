const prompt = require('prompt-sync')();

let texte = prompt("Entrez une chaîne :");

let compteur = 0;

for (let caractere of texte) {
    compteur++;
}
console.log(`La longueur de "${texte}" est de ${compteur} caractères.`);