// DOM chargé, exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélectionner tous les éléments avec la classe 'slide' et les stocker dans la variable 'slides'
    let slides = document.querySelectorAll('.slide');
    
    // Initialiser l'index de la diapositive actuelle à 0 (la première diapositive)
    let currentIndex = 0;

    // Fonction pour afficher la diapositive correspondant à l'index fourni et cacher les autres
    function showSlide(index) {
        // Parcourir toutes les diapositives
        slides.forEach((slide, i) => {
            // Si l'index de la diapositive courante est égal à l'index fourni, l'afficher, sinon la cacher
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Afficher la première diapositive au chargement de la page
    showSlide(currentIndex);

    // Fonction pour naviguer dans les diapositives
    function navigate(direction) {
        switch (direction) {
            case 'next':
                // Incrémenter l'index de la diapositive courante (aller à la diapositive suivante)
                currentIndex = (currentIndex + 1) % slides.length;
                break;
            case 'prev':
                // Décrémenter l'index de la diapositive courante (aller à la diapositive précédente)
                // Ajouter slides.length pour gérer le cas où l'index est négatif, puis utiliser le modulo pour boucler correctement
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                break;
            default:
                console.log('Unknown direction');
                return;
        }
        // Afficher la diapositive correspondant au nouvel index
        showSlide(currentIndex);
    }

    // Ajouter un événement de clic au bouton 'Suivant'
    document.querySelector('.next').addEventListener('click', () => {
        navigate('next');
    });

    // Ajouter un événement de clic au bouton 'Précédent'
    document.querySelector('.prev').addEventListener('click', () => {
        navigate('prev');
    });
});





