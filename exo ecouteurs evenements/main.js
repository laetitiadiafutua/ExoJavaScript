// DOM chargé, ajouter les écouteurs d'événements
document.addEventListener('DOMContentLoaded', function() {
    // Change le texte du div lorsqu'on clique sur le bouton / fonction à appliquer lorsque l'evenement se produit
    document.getElementById('changeTextButton').addEventListener('click', function() {
        document.getElementById('textDiv').textContent = "Le texte a changé!"; 
    });

    // Change la couleur du champ de texte lorsqu'il reçoit le focus (=evenement de formulaire)
    document.getElementById('focusInput').addEventListener('focus', function() {
        
    });

    // Restaure la couleur du champ de texte lorsqu'il perd le focus
    document.getElementById('focusInput').addEventListener('focus', function() {
        
    });
});




