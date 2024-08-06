// DOM complètement chargé, script éxecuter
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter un titre h1 avec le texte "Bienvenue sur notre site"
    let h1 = document.createElement("h1");
    h1.textContent = "Bienvenue sur notre site";
    document.getElementById("content").appendChild(h1);

    // Ajouter un paragraphe avec du texte
    let paragraph = document.createElement("p");
    paragraph.textContent = "Nous sommes heureux de vous accueillir sur notre site. Profitez de votre visite !";
    document.getElementById("content").appendChild(paragraph);

    // Créer une liste non ordonnée avec trois éléments de liste
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.textContent = "Premier élément";
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    li2.textContent = "Deuxième élément";
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    li3.textContent = "Troisième élément";
    ul.appendChild(li3);

    document.getElementById("content").appendChild(ul);

    // Modifier le texte du deuxième élément de la liste
    ul.children[1].textContent = "Deuxième élément modifié";

    // Supprimer le troisième élément de la liste
    ul.removeChild(ul.children[2]); // Sélection du troisième élément de la liste (index 2)
    

    // Changer le style du premier élément de la liste
    ul.children[0].style.color = "red"; 

});


