    'use strict';
    
    // Fonction pour afficher une réponse et cacher les autres
    function toggleAnswer(answerNumber) {
        // Cacher toutes les réponses
        for (let i = 1; i <= 4; i++) {
            document.getElementById('answer' + i).style.display = 'none';
        }
        // Afficher la réponse 
        document.getElementById('answer' + answerNumber).style.display = 'block';
    }