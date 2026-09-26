
let tableau = [5, 3, 8, 4, 2];
console.log("Avant le tri :", tableau);

for (let i = 0; i < tableau.length - 1; i++) {

    for (let j = 0; j < tableau.length - 1 - i; j++) {

        if (tableau[j] > tableau[j + 1]) {
            let temp = tableau[j];
            tableau[j] = tableau[j + 1];
            tableau[j + 1] = temp;
        }
    }
}

console.log("Après le tri :", tableau);