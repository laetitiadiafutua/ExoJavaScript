// DOM chargé, exécuter le script
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner toutes les sections avec la classe "fade-section"
    let sections = document.querySelectorAll(".fade-section");

    // Créer un nouvel observer afin de détecter les intersections et réagir aux changements de visibilité d'un élément cible par rapport à son conteneur racine (le viewport)
    let observer = new IntersectionObserver((entries, observer) => {
        // Utilisée pour exécuter des actions lorsque des éléments deviennent visibles ou invisibles lors du défilement de la page
        entries.forEach(entry => {// La méthode forEach est utilisée pour itérer(repéter ou recommencer) sur chaque entrée dans le tableau
            // Vérifier si l'élément est visible dans le viewport 
            if (entry.isIntersecting) {
                let section = entry.target; // L'élément est visible 
                // Utiliser requestAnimationFrame pour une animation plus fluide
                requestAnimationFrame(() => {
                    section.classList.add("fade-in");  // Declenche l'animation 
                });
                // Une fois l'element animation terminé arrêter d'observer 
                // observer.unobserve(section);
            }
        });
    },
    
    { threshold: 0.5 }); //Option de l'API, déclencher l'observation lorsque 10% de l'élément est visible (entre 0 et 1)

    // Observer chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
});
