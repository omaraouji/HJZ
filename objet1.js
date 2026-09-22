let etudiant = {
    prenom: "omar",
    nom: "aouji",
    notes: [15,12,15,13]
};
console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);

console.log("Liste des notes : " + etudiant.notes.join(", "));

let somme = 0;
for (let note of etudiant.notes) {
    somme += note;
}
let moyenne = somme / etudiant.notes.length;
console.log(`Moyenne : ${moyenne}`);