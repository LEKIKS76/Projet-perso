// Réponses prédéfinies pour chaque question
const answers = {
    1: "Vous pouvez adopter un chiot en nous contactant via notre formulaire de contact ou en vous rendant directement dans notre élevage.",
    2: "Les prix varient selon la race et l'âge des chiots. Vous pouvez consulter notre page des tarifs pour plus d'informations.",
    3: "Il est important de lui fournir une alimentation de qualité, des visites régulières chez le vétérinaire et beaucoup d'affection et d'attention."
  };
  
  // Sélectionner tous les boutons de questions
  const questionButtons = document.querySelectorAll('.question');
  
  // Sélectionner l'élément où la réponse sera affichée
  const answerElement = document.getElementById('answer');
  
  // Ajouter un événement "click" à chaque bouton de question
  questionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Obtenir l'identifiant de la question sélectionnée
      const answerId = button.getAttribute('data-answer');
      
      // Afficher la réponse correspondante
      answerElement.innerHTML = answers[answerId];
    });
  });
  
  // Gestion de l'ouverture et de la fermeture de la chatbox
  const openChatButton = document.querySelector('.open-chat');
  const faqChatbox = document.querySelector('.faq-chatbox');
  const closeChatButton = document.querySelector('.close-chat');
  
  // Ouvrir la chatbox
  openChatButton.addEventListener('click', function() {
    faqChatbox.classList.toggle('open'); // Ouvrir/fermer la chatbox
  });
  
  // Fermer la chatbox
  closeChatButton.addEventListener('click', function() {
    faqChatbox.classList.remove('open'); // Fermer la chatbox
  });
  