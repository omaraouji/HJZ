const prompt = require('prompt-sync')();
let number = prompt("Enter nuber of the tabel")
let tabel = [];

for ( i = 0 ; i < number; i++) {

    let n = prompt("entre le nombr:");
    tabel.push(n);
} 

console.log(tabel);

