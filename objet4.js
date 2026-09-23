function addTech(a,b,c) {
    return {
        a: a,
        b: b,
        c: c
    };
}
let monLivre = addTech("omar", "compet", "pees");

console.log(`livre : ${monLivre.a}, you have ${monLivre.b}, ${monLivre.c}`);