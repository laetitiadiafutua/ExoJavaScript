// Ajoute un écouteur d'événements pour la soumission du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupère les valeurs des champs du formulaire et supprime les espaces superflus
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let file = document.getElementById('file').files[0];
    let errorMessage = document.getElementById('errorMessage'); // Récupère l'élément pour afficher les messages d'erreur
    errorMessage.textContent = ''; // Réinitialise le message d'erreur

    // Validation du champ Nom
    if (name === '') {
        errorMessage.textContent = 'Le champ Nom est obligatoire.'; // Affiche un message d'erreur si le nom est vide
        return; // Arrête l'exécution du code si une erreur est trouvée
    }

    // Validation du champ Téléphone (doit être un nombre et contenir au moins 10 chiffres)
    if (isNaN(phone) || phone.length < 10) {
        errorMessage.textContent = 'Le champ Téléphone doit contenir uniquement des chiffres et avoir au moins 10 chiffres.'; // Affiche un message d'erreur si la validation échoue
        return; // Arrête l'exécution du code si une erreur est trouvée
    }

    // Validation du champ Email (doit contenir un @ et un .)
    if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = 'Le champ Email doit contenir une adresse valide.'; // Affiche un message d'erreur si l'email est invalide
        return; // Arrête l'exécution du code si une erreur est trouvée
    }

    // Validation du champ Message
    if (message === '') {
        errorMessage.textContent = 'Le champ Message est obligatoire.'; // Affiche un message d'erreur si le message est vide
        return; // Arrête l'exécution du code si une erreur est trouvée
    }

    // Validation du fichier joint (doit être un PDF et faire moins de 3Mo)
    if (file) { // Vérifie si un fichier est sélectionné
        if (file.type !== 'application/pdf') {
            errorMessage.textContent = 'Le fichier joint doit être au format PDF.'; // Affiche un message d'erreur si le fichier n'est pas un PDF
            return; // Arrête l'exécution du code si une erreur est trouvée
        }
        if (file.size > 3 * 1024 * 1024) {
            errorMessage.textContent = 'Le fichier joint doit faire moins de 3Mo.'; // Affiche un message d'erreur si le fichier dépasse 3Mo
            return; // Arrête l'exécution du code si une erreur est trouvée
        }
    }

    // Si toutes les validations sont passées, affiche un message de succès
    alert('Formulaire soumis avec succès!'); // Affiche un message de succès
    
});

