// Fonction pour charger Font Awesome via JavaScript
(function loadFontAwesome() {
    // Créer un élément script
    let script = document.createElement('script');
    // Définir l'URL du script Font Awesome
    script.src = 'https://kit.fontawesome.com/0db8d1bc69.js';
    // Définir l'attribut crossOrigin
    script.crossOrigin = 'anonymous';
    // Ajouter le script à l'en-tête du document
    document.head.appendChild(script);
})();

// Ajouter un événement au bouton pour ajouter une tâche
document.getElementById('addTaskButton').addEventListener('click', function() {
    // Récupérer le champ de texte et sa valeur
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim(); // Nettoie la chaine de caractere et l'espace

    // Vérifier que le champ de texte n'est pas vide
    if (taskText !== '') {
        // Récupérer la liste des tâches
        let taskList = document.getElementById('taskList');

        // Créer un nouvel élément de liste (li)
        let li = document.createElement('li');

        // Créer la case à cocher
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        // Ajouter un événement pour marquer la tâche comme complétée
        checkbox.addEventListener('change', function() {
            // En fonction de l'état de la case, ajouter ou retirer la classe "completed"
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Créer le texte de la tâche
        let span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        // Créer l'icône qui permet de supprimer la tâche
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash-alt task-delete';
        // Ajouter un événement pour supprimer la tâche
        deleteIcon.addEventListener('click', function() {
            // Supprimer l'élément de la liste
            taskList.removeChild(li);
        });

        // Ajouter les éléments créés à l'élément de la liste
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteIcon);

        // Ajouter l'élément à la liste
        taskList.appendChild(li);

        // Réinitialiser le champ de texte
        taskInput.value = '';
    }
});

