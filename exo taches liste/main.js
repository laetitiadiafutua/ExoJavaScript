// Ajouter un événement au bouton pour ajouter une tâche
document.getElementById('addTaskButton').addEventListener('click', function() {
    // Récupérer le champ de texte et sa valeur
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim(); // Enlever les espaces inutiles

    // Vérifier que le champ de texte n'est pas vide
    if (taskText !== '') {
        // Récupérer la liste des tâches
        let taskList = document.getElementById('taskList');

        // Créer un nouvel élément de liste (li)
        const li = document.createElement('li');
        li.textContent = taskText; // Définir le texte de l'élément

        // Ajouter un événement 'click' afikn de supprimer la tâche
        li.addEventListener('click', function() {
            taskList.removeChild(li); // Supprimer l'élément de la liste
        });

        // Ajouter l'élément à la liste
        taskList.appendChild(li);

        // Réinitialiser le champ de texte avec une value
        taskInput.value = '';
    }
});
