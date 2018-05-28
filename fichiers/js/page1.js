'use strict';
    
window.addEventListener('DOMContentLoaded', function() {

  var fondJeu = window.document.getElementById('fondJeu');
  fondJeu.style.height = '689px';
  fondJeu.style.width = '1200px';
    
  var affichagePresentation = window.document.getElementById('tableauPresentation');
                
  affichagePresentation.addEventListener('click', function(event) {
      open('fichiers/pdf/cahier-des-charges.pdf');     
  });

}); 

   