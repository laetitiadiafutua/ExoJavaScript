// Fonction pour ajouter un nouvel élément à la liste
function ajouterElement() {
    let ul = document.getElementById("maListe"); // Récupèrer l'élément <ul> en fonction de son ID
    let li = document.createElement("li"); // Créer un nouvel élément <li>
    li.appendChild(document.createTextNode("Nouvel Element")); // Ajouter du texte au <li>
    ul.appendChild(li); // Ajouter le <li> à la fin de la liste <ul>
}

// Fonction pour supprimer le dernier élément de la liste
function supprimerElement() {
    let ul = document.getElementById("maListe"); // Récupère l'élément <ul> par son ID
    let li = ul.lastElementChild; // Récupère le dernier élément <li> de la liste
    if (li) { // Vérifier qu'il y a un élément à supprimer
        ul.removeChild(li); // Supprimer le dernier élément <li>
    }
    else {
        alert("La liste est vide")
    }
}

// Ajouter des écouteurs d'événements aux boutons après le chargement de la page / Garantir que tous les éléments du DOM sont disponibles avant d'assayer de leur ajouter des écouteurs d'événements.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ajouterBouton").addEventListener("click", ajouterElement);

    // DOM chargé, creation de la fonction à appliquer lorsque l'evenement se produit
    

    document.getElementById("supprimerBouton").addEventListener("click", supprimerElement); // Supprime le dernier lorsque l'on clique sur le bouton supprimer le dernier element
});

