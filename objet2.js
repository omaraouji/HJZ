
const rectangle = {
    longueur: 15,
    largeur: 10
};

function calculerAire(rectangle) {
    return rectangle.longueur * rectangle.largeur;
}

console.log(calculerAire(rectangle));