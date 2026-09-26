const prompt = require('prompt-sync')();

let candidats = [];


    console.log(`
========================================
 GESTION DES ÉLECTIONS - MENU PRINCIPAL
========================================
<1. Ajouter un nouveau candidat
<2. Ajouter plusieurs candidats à la fois
<3. Afficher la liste des candidats
<4. Voter pour un candidat
<5. Modifier les informations d'un candidat
<6. Supprimer un candidat
<7. Rechercher un candidat par nom
<8>. Afficher les statistiques de l'élection
<9. Quitter
========================================`);



let choix;
do {

    choix = prompt('Votre choix : ');

        switch (choix) {
            case '1':
                ajouterCandidat();
                break;
            case '2':
                ajouterPlusieursCandidats();
                break;
            case '3':
                afficherListeCandidats();
                break;
            case '4':
                voterPourCandidat();
                break;
            case '5':
                modifierCandidat();
                break;
            case '6':
                supprimerCandidat();
                break;
            case '7':
                rechercherCandidat();
                break;
            case '8':
                afficherStatistiques();
                break;
             case '9':
                console.log('Au revoir !');
                break;
            default:
                console.log('Choix invalide, réessayez.');
        }

       

} while (choix !== '9');

function ajouterCandidat() {

    let cin = prompt("entre cin :");
    let nom = prompt("entre nom :");
    let prenom = prompt("entre prenom :");
    let partiPolitique = prompt("entre le parti politique :");
    let age = Number(prompt("entre age :"));


let candidat = {
    cin: cin,
    nom: nom,
    prenom: prenom,
    partiPolitique: partiPolitique,
    age: age,
    electeurs: []

};

candidats.push(candidat);
console.log("bravo"); 
}

function ajouterPlusieursCandidats() {
    let nombre = Number(prompt("combien de candidats ajouter ?"));
    for (let i =0 ; i < nombre; i++) {
        ajouterCandidat();
    }
}
function afficherListeCandidats() {
    for (let candidat of candidats) {
        console.log("CIN :", candidat.cin);
        console.log("Nom :", candidat.nom);
        console.log("Prénom :", candidat.prenom);
        console.log("Parti politique :", candidat.partiPolitique);
        console.log("Âge :", candidat.age);
        console.log("Nombre de votes :", candidat.electeurs.length);

    }
}
function voterPourCandidat() {

    let cinElecteur = prompt("entre cin electeur :");
    let cinCandidat = prompt("entre cin candidat :");

    let candidat = candidats.find(c => c.cin === cinCandidat);

    if (!candidat) {

        console.log("candidat non trouve.");
        return;
    }

    for (let c of candidats) {

        if (c.electeurs.includes(cinElecteur)) {
            console.log("deja vote.");
            return;
        }

    }
    candidat.electeurs.push(cinElecteur);

    console.log("Vote enregistré avec succès !");
    
}
function modifierCandidat() {

    let cin = prompt("entre cin candidat a modifier :");

    let candidat = candidats.find(c => c.cin === cin );

    if (!candidat) {

        console.log("candidat non trouve.");
        return;
    }

    candidat.nom = prompt("nv nom :");
    candidat.prenom = prompt("nv prenom :");
    candidat.partiPolitique = prompt("nv partiPolitique :");
    candidat.age = Number(prompt("nv age :"));

    console.log("Candidat modifié avec succès !")

}