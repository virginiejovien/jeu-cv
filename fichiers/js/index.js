'use strict';
     
window.addEventListener('DOMContentLoaded', function() {
      

/***************************************************************************
 **************************   IMAGE DE FOND DE JEU *************************
****************************************************************************/
    
    var fondJeu = window.document.getElementById('fondJeu');
    fondJeu.style.height = '689px';
    fondJeu.style.width = '1200px';

    
/***************************************************************************
 ******************   MES CONTAINERS DE SPRITE ET IMAGES  ******************
****************************************************************************/
//  cabane      
    var containerCabane = window.document.getElementById('containerCabane');
    containerCabane.style.top = '440px';
    containerCabane.style.left = '0px';
    containerCabane.style.width = '280px'; 
    containerCabane.style.height = '245px';  

//  cabane 2     
    var containerCabane2 = window.document.getElementById('containerCabane2');   
    containerCabane2.style.top = '440px';
    containerCabane2.style.left = '0px';
    containerCabane2.style.width = '280px'; 
    containerCabane2.style.height = '245px';     

//  Cocotier      
    var containerCocotier = window.document.getElementById('containerCocotier');
    containerCocotier.style.position = 'absolute';
    containerCocotier.style.overflow ='hidden';
    containerCocotier.style.top = '95px';
    containerCocotier.style.left = '940px';
    containerCocotier.style.width = '245px'; 
    containerCocotier.style.height = '574px';  

//  Anna  
    var containerAnna = window.document.getElementById('containerAnna');
    containerAnna.style.position = 'absolute';
    containerAnna.style.top = '550px';
    containerAnna.style.left = '600px';
    containerAnna.style.height = '126px';   
    containerAnna.style.width = '52px';   
    containerAnna.style.zIndex = '1';

//  Oiseau 1 
    var containerOiseau = window.document.getElementById('containerOiseau');
    containerOiseau.style.position = 'absolute';
    containerOiseau.style.top = '110px';
    containerOiseau.style.left = '200px';
    containerOiseau.style.height = '80px';   
    containerOiseau.style.width = '80px';   
    containerOiseau.style.zIndex = '1';

//  Oiseau2 
    var containerOiseau2 = window.document.getElementById('containerOiseau2');
    containerOiseau2.style.position = 'absolute';
    containerOiseau2.style.top = '120px';
    containerOiseau2.style.left = '100px';
    containerOiseau2.style.height = '80px';   
    containerOiseau2.style.width = '80px';   
    containerOiseau2.style.zIndex = '1';

//  Oiseau 3 
    var containerOiseau3 = window.document.getElementById('containerOiseau3');
    containerOiseau3.style.position = 'absolute';
    containerOiseau3.style.top = '115px';
    containerOiseau3.style.left = '300px';
    containerOiseau3.style.height = '80px';   
    containerOiseau3.style.width = '80px';   
    containerOiseau3.style.zIndex = '1';

//  Oiseau 4 
    var containerOiseau4 = window.document.getElementById('containerOiseau4');
    containerOiseau4.style.position = 'absolute';
    containerOiseau4.style.top = '118px';
    containerOiseau4.style.left = '0px';
    containerOiseau4.style.height = '80px';   
    containerOiseau4.style.width = '80px';   
    containerOiseau4.style.zIndex = '1';

//  Oiseau 5 
    var containerOiseau5 = window.document.getElementById('containerOiseau5');
    containerOiseau5.style.position = 'absolute';
    containerOiseau5.style.top = '113px';
    containerOiseau5.style.left = '100px';
    containerOiseau5.style.height = '80px';   
    containerOiseau5.style.width = '80px';
    containerOiseau5.style.display = 'none';    
    containerOiseau5.style.zIndex = '1';

//  Oiseau 6 
    var containerOiseau6 = window.document.getElementById('containerOiseau6');
    containerOiseau6.style.position = 'absolute';
    containerOiseau6.style.top = '119px';
    containerOiseau6.style.left = '400px';
    containerOiseau6.style.height = '80px';   
    containerOiseau6.style.width = '80px';
    containerOiseau6.style.display = 'none';   
    containerOiseau6.style.zIndex = '1';

    //  Oiseau 7 
    var containerOiseau7 = window.document.getElementById('containerOiseau7');
    containerOiseau7.style.position = 'absolute';
    containerOiseau7.style.top = '114px';
    containerOiseau7.style.left = '700px';
    containerOiseau7.style.height = '80px';   
    containerOiseau7.style.width = '80px';
    containerOiseau7.style.display = 'none';   
    containerOiseau7.style.zIndex = '1';

    //  Oiseau 8 
    var containerOiseau8 = window.document.getElementById('containerOiseau8');
    containerOiseau8.style.position = 'absolute';
    containerOiseau8.style.top = '117px';
    containerOiseau8.style.left = '100px';
    containerOiseau8.style.height = '80px';   
    containerOiseau8.style.width = '80px';
    containerOiseau8.style.display = 'none';   
    containerOiseau8.style.zIndex = '1';

    //  noix de coco 
    var containerNoix = window.document.getElementById('containerNoix');
    containerNoix.style.position = 'absolute';
    containerNoix.style.top = '113px';
    containerNoix.style.left = '1080px';
    containerNoix.style.height = '38px';   
    containerNoix.style.width = '40px';   
    containerNoix.style.zIndex = '0';


/***************************************************************************
 *********************** MES MASQUES DE SPRITES ET IMAGES  *****************
****************************************************************************/  
//  Anna   
    var masqueAnna = window.document.getElementById('masqueAnna');   
    masqueAnna.style.overflow = 'hidden';   
    masqueAnna.style.position = 'relative';
    masqueAnna.style.margin = 'auto';
    masqueAnna.style.height = '122px';
    masqueAnna.style.width = '52px';
    masqueAnna.style.zIndex = '3';

//  Cabane   
    var masqueCabane= window.document.getElementById('masqueCabane'); 
    masqueCabane.style.height = '245px';
    masqueCabane.style.width = '145px';
    masqueCabane.style.zIndex = '0';
    
//  Cabane deux 
    var masqueCabane2= window.document.getElementById('masqueCabane2');   
    masqueCabane2.style.height = '245px';
    masqueCabane2.style.width = '145px';
    masqueCabane2.style.zIndex = '5';

//  Cocotier  
    var masqueCocotier= window.document.getElementById('masqueCocotier');   
    masqueCocotier.style.position = 'relative';
    masqueCocotier.style.margin = 'auto';
    masqueCocotier.style.height = '520px';
    masqueCocotier.style.top = '52px';
    masqueCocotier.style.width = '30px';    
    
//  Cocotier  
    var masqueCocotier= window.document.getElementById('masqueCocotier');   
    masqueCocotier.style.position = 'relative';
    masqueCocotier.style.margin = 'auto';
    masqueCocotier.style.height = '520px';
    masqueCocotier.style.top = '52px';
    masqueCocotier.style.width = '30px';

        
/***************************************************************************
 ****************************   MES SPRITES ET IMAGES **********************
****************************************************************************/  
//  Anna
    var imageAnna = window.document.getElementById('contenuAnna');
    imageAnna.src = 'fichiers/images/Anna.png';
    imageAnna.alt = 'Anna';
    imageAnna.title = 'Anna est une aventurière';
    imageAnna.style.position = 'absolute';
    imageAnna.style.top = '-273px';
    imageAnna.style.left = '-888px';

//  Cabane
    var imageCabane = window.document.getElementById('cabane');
    imageCabane.src = 'fichiers/images/cabane.png';
    imageCabane.alt = 'cabane complète';
    imageCabane.title = 'cabane bleue';
    imageCabane.style.position = 'absolute';
    imageCabane.style.top = '-1px';
    imageCabane.style.left = '-48px';
    imageCabane.style.width = '260px';

//  Cabane deux
    var imageCabane2 = window.document.getElementById('cabane2');
    imageCabane2.src = 'fichiers/images/cabane2.png';
    imageCabane2.alt = 'cabane scindée';
    imageCabane2.title = 'cabane bleue';
    imageCabane2.style.position = 'absolute';
    imageCabane2.style.top = '-1px';
    imageCabane2.style.left = '-48px';
    imageCabane2.style.width = '260px';    
        
//  Cocotier
    var imageCocotier = window.document.getElementById('Cocotier');
    imageCocotier.src = 'fichiers/images/cocotier.png';
    imageCocotier.alt = 'Cocotier';
    imageCocotier.title = 'cocotier dans lequel Anna doit récupérer des noix de coco';
    imageCocotier.style.position = 'absolute';
    imageCocotier.style.top = '-50px';
    imageCocotier.style.left = '-106px';
    imageCocotier.style.width = '245px';

//  Noix de coco
    var imageNoix = window.document.getElementById('Noix');
    imageNoix.src = 'fichiers/images/noix.png';
    imageNoix.alt = 'Noix';
    imageNoix.alt = 'Noix de coco';
    imageNoix.style.position = 'absolute';
    imageNoix.style.top = '-1px';
    imageNoix.style.left = '-2px';
    imageNoix.style.width = '40px';


/***************************************************************************
****************************  MES VARIABLES GLOBALES  **********************
****************************************************************************/  
//  Déplacement de mon sprite Anna en fonction des commandes claviers 
    var x = 2;
    var y = 2;

//  variables pour la gestion du score number et des messages string   
    var round = 1;
    var leScore = 0;
    var reussi = false;
    var message = '';

//  déclaration d'un objet touches pour la  gestion de la rémanence des touches   
    var touches = { 
        droite: false,
        gauche: false,
        monte: false,
        descend: false   
    }

//  déclaration des variables pour la gestion des animations et des mouvements d'animation
    var identifiantInterval;
    var identifiantInterval2;
    var identifiantInterval3;
    var identifiantInterval4;
    var identifiantInterval5;
    var identifiantInterval6;
    var identifiantInterval7;
    var identifiantInterval8;
    var animationEnCours = false;  
    var animNoix = true;
    var animNoixRejouer = true;
    var animationSon = true;


/***************************************************************************
****************************  AFFICHAGES MESSAGES    ***********************
****************************************************************************/  
//boites de dialogue, tableaux d'affichage (ergonomie et interface jeu avec le joueur)     
    //score
    var boiteScore = window.document.getElementById('score');
    var interfaceScore = window.document.getElementById('leScore');
    interfaceScore.innerHTML = leScore; 
    //Level
    var boiteRound = window.document.getElementById('round');
    var interfaceRound = window.document.getElementById('leRound');
    interfaceRound.innerHTML = round; 
    //Son
    var playSon = window.document.getElementById('son');
    //Mute son
    var muteSon = window.document.getElementById('mute');
    //alerte
    var messageAlerte = window.document.getElementById('messageAlerte');
    var alerte = window.document.getElementById('alerte');
    messageAlerte.innerHTML = message; 
    //tableaux règles du jeu, et tableaux qui présentent mon cv
    var interTableauAffichage = window.document.getElementById('affichage');
    var tableauAffichageCv1 = window.document.getElementById('affichage1');
    var tableauAffichageCv2 = window.document.getElementById('affichage2');
    var tableauAffichageCv3 = window.document.getElementById('affichage3');   
    
//gestion du clic droit 

    //cache les tableaux d'affichage et boites de dialogue et lance le son   
    interTableauAffichage.addEventListener('click', function(event) {
        interTableauAffichage.style.display = 'none'; 
        bandeSon.play();
    });
    //play le son   
    playSon.addEventListener('click', function(event) {
       bandeSon.play();
       animationSon = true;
    });     
    //coupe le son   
    muteSon.addEventListener('click', function(event) {
       animationSon = false;
       bandeSon.pause();
       criCoco.pause();
       criOiseau.pause();
    });     
    //au clic on passe au level suivant 
    //cache le tableau d'affichage cv1 au clic et on continue à jouer    
    tableauAffichageCv1.addEventListener('click', function(event) {    
        tableauAffichageCv1.style.display = 'none';
        rejouer();
    });

    //cache le tableau d'affichage cv2 au clic et on continue à jouer    
    tableauAffichageCv2.addEventListener('click', function(event) {    
        tableauAffichageCv2.style.display = 'none';
        rejouer();
    });

      

/***************************************************************************
***************************  REJOUER ET CONTINUER A JOUER     **************
****************************************************************************/       
//  Passer au level suivant, remise à zero du score
//  animation noix de coco qui tombe du ciel et se place dans le cocotier
    function rejouer() {
        reussi = false;
        containerAnna.style.top = '550px';
        containerAnna.style.left = '600px';  
        imageAnna.style.top = '-273px';
        imageAnna.style.left = '-888px';
        masqueAnna.style.height = '122px';
        masqueAnna.style.width = '52px';
        leScore = 0;
        alerte.style.display = 'none';
        interfaceScore.innerHTML = leScore;
        containerAnna.style.display = 'block';
        boiteScore.style.display = 'block';  
        animationNoixRejouer();  
        containerNoix.style.display = 'block';  
        round = round + 1;
    //  lancement de l'annimation de mon cinquième et sixième objets oiseaux "ptéranodon"  dans un setInterval au level2           
        containerOiseau5.style.display = "block";
        containerOiseau6.style.display = "block";              
        identifiantInterval5 = window.setInterval(oiseau5.voleVersLaDroite.bind(oiseau5), 150);  
        identifiantInterval6 = window.setInterval(oiseau6.voleVersLaDroite.bind(oiseau6), 250);              
        interfaceRound.innerHTML = round;             
       
        if (round == 3) {
     //  lancement de l'annimation de mon septième et huitième objets oiseaux "ptéranodon"  dans un setInterval au level3     
            containerOiseau7.style.display = "block";
            containerOiseau8.style.display = "block";                        
            identifiantInterval7 = window.setInterval(oiseau7.voleVersLaDroite.bind(oiseau7), 170);  
            identifiantInterval8 = window.setInterval(oiseau8.voleVersLaDroite.bind(oiseau8), 200);    
        }                    
    };

//  un clic pour faire disparaitre les messages d'alerte 
    alerte.addEventListener('click', function(event) {
        alerte.style.display = 'none';
    });

/***************************************************************************
****************************  ANIMATIONS    ********************************
****************************************************************************/     
//  changement de level : animation de la noix de coco qui part du ciel et qui se replace dans le cocotier
    function animationNoixRejouer() {
        if (animNoixRejouer) {      
            containerNoix.style.animation = 'monAnimationNoixRejouer1 1s 1 linear backwards';
            animNoixRejouer = false;
        } else {
            containerNoix.style.animation = 'monAnimationNoixRejouer2 1s 1 linear backwards';
            animNoixRejouer = true;
        }
    };

//  Noix de coco attrapée par Anna : animation de la noix de coco qui part dans la cabane
    function animationNoix() {
        if (animNoix) {      
            containerNoix.style.animation = 'monAnimationNoix1 1s 1 linear backwards';
            animNoix = false;
        } else {
            containerNoix.style.animation = 'monAnimationNoix2 1s 1 linear backwards';
            animNoix = true;
        }
    };

/***************************************************************************
************************  MES FONCTIONS CONSTRUCTEURS  *********************
****************************************************************************/ 

/***************************************************************************
**********************   FONCTION  CONSTRUCTEUR AUDIO  *********************
****************************************************************************/   
    function Son(src, volume, loop) {
        this.son = new Audio(src);
        this.son.volume = (volume !== undefined) ? volume : 1;
        this.son.loop = loop || false;
    }
    
    Son.prototype.play = function () {
        this.son.play();
    };
    
    Son.prototype.pause = function () {
        this.son.pause();
    };
    Son.prototype.mute = function () {
        this.son.muted();
    };
    
    //  Mes deux Objets sons créé à partir de bon objet constructeur son
    var bandeSon = new Son('fichiers/musique/bande-son.mp3',0.2,true);
    var criOiseau = new Son('fichiers/musique/sonVautours.mp3',0.4,false);
    var criCoco = new Son('fichiers/musique/sifflet.mp3',0.4,false);

/***************************************************************************
**********************  FONCTION  CONSTRUCTEUR D'OISEAU *******************
****************************************************************************/  

    function Oiseau (imageOiseau, masqueOiseau, containerOiseau, voleADroite) {
        this.imageOiseau = window.document.getElementById(imageOiseau);        
        this.masqueOiseau = window.document.getElementById(masqueOiseau);
        this.containerOiseau = window.document.getElementById(containerOiseau);        
        this.voleADroite = voleADroite;
        this.indice = this.voleADroite.length;
        this.nbVol = 0;
        this.sequenceVol = 1;
        this.vole = function() {
            if (this.nbVol >= this.indice) {
                this.nbVol = 0;
            }            
            if (this.sequenceVol >= 1) {
                this.masqueOiseau.style.height = this.voleADroite[this.nbVol].hauteurMasqueOiseau;
                this.masqueOiseau.style.width = this.voleADroite[this.nbVol].largeurMasqueOiseau;
                this.imageOiseau.style.top = this.voleADroite[this.nbVol].topOiseauImage;
                this.imageOiseau.style.left = this.voleADroite[this.nbVol].leftOiseauImage;
                this.sequenceVol = 0;
                this.nbVol++;
            }            
                this.sequenceVol =  this.sequenceVol + 1;
            };
        this.voleVersLaDroite = function() {
            var o = 5;                  
            var positionAnnaDansArbreX = (parseFloat(containerAnna.style.left) + (parseFloat(containerAnna.style.width) - parseFloat(masqueAnna.style.width))) - x;
            var positionAnnaDansArbreY = (parseFloat(containerAnna.style.top) - y);
    
            var margeOiseauX = (parseFloat(this.containerOiseau.style.width) - parseFloat(this.masqueOiseau.style.width)) / 2;
            var positionDebutOiseauX = (parseFloat(this.containerOiseau.style.left) + margeOiseauX);
            var positionFinOiseauX = (parseFloat(this.containerOiseau.style.left) + margeOiseauX) + parseFloat(this.masqueOiseau.style.width);
            var positionOiseauDroit = (parseFloat(this.containerOiseau.style.left) + parseFloat(this.containerOiseau.style.width) + o);
            var margeOiseauY = (parseFloat(this.containerOiseau.style.height) - parseFloat(this.masqueOiseau.style.height)) / 2;
            var positionDebutOiseauY = (parseFloat(this.containerOiseau.style.top) + margeOiseauY);
            var positionFinOiseauY = (parseFloat(this.containerOiseau.style.top) + margeOiseauY) + parseFloat(this.masqueOiseau.style.height);
            var positionOiseauTop = (parseFloat(this.containerOiseau.style.top) + parseFloat(this.masqueOiseau.style.top));
            // Détection collision avec le bord droit du fond du jeu  
            var positionFondX = (parseFloat(fondJeu.style.width));  
            
            if (((positionAnnaDansArbreX >= positionDebutOiseauX) && (positionAnnaDansArbreX <= positionFinOiseauX)) && ((positionAnnaDansArbreY >= positionDebutOiseauY) && (positionAnnaDansArbreY <= positionFinOiseauY))) {
                this.containerOiseau.style.left = (parseFloat(this.containerOiseau.style.left) - o) + 'px';
                this.containerOiseau.style.left = '0px';
                positionOiseauDroit = this.containerOiseau.style.left;

                if ((leScore > 0) && (!reussi)) {
                    leScore = leScore - 1; 
                } 

                interfaceScore.innerHTML = leScore; 
                
                if (animationSon) {
                    criOiseau.play(); 
                } 

                annaTombe();

            } else {
                this.containerOiseau.style.left = (parseFloat(this.containerOiseau.style.left) + o) + 'px';
            }   

            if ( positionFondX < positionOiseauDroit) {
                this.containerOiseau.style.left = (parseFloat(this.containerOiseau.style.left) - o) + 'px';
                this.containerOiseau.style.left = '0px';
                positionOiseauDroit = this.containerOiseau.style.left;
            } else {   
                this.containerOiseau.style.left = (parseFloat(this.containerOiseau.style.left) + o) + 'px';
            }   
            this.vole();
        };  
    }; 


//  Mon premier objet oiseau1 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
    var voleADroite = [{
        hauteurMasqueOiseau: '60px',
        largeurMasqueOiseau: '66px',
        topOiseauImage: '1px',
        leftOiseauImage: '1px'
        },{
        hauteurMasqueOiseau: '32px',
        largeurMasqueOiseau: '75px',
        topOiseauImage: '-26px',
        leftOiseauImage: '-71px'
        },{
        hauteurMasqueOiseau: '26px',
        largeurMasqueOiseau: '68px',
        topOiseauImage: '-36px',
        leftOiseauImage: '-155px'
        },{
        hauteurMasqueOiseau: '63px',
        largeurMasqueOiseau: '60px',
        topOiseauImage: '-80px',
        leftOiseauImage: '-86px'
        },{
        hauteurMasqueOiseau: '39px',
        largeurMasqueOiseau: '63px',
        topOiseauImage: '-81px',
        leftOiseauImage: '-160px'
        },{
        hauteurMasqueOiseau: '28px',
        largeurMasqueOiseau: '71px',
        topOiseauImage: '-74px',
        leftOiseauImage: '-229px'
        }];

//  Création du 1er oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau1 = new Oiseau('contenuOiseau', 'masqueOiseau', 'containerOiseau', voleADroite);
    oiseau1.imageOiseau.src = 'fichiers/images/pteranodon1.png';
    oiseau1.imageOiseau.alt = 'pteranodon';
    oiseau1.imageOiseau.title = 'Ptéranodon orange';

    
//  Mon deuxième objet oiseau2 : un ptéradonon
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
    var voleADroite2 = [{
        hauteurMasqueOiseau: '60px',
        largeurMasqueOiseau: '66px',
        topOiseauImage: '1px',
        leftOiseauImage: '1px'
        },{
        hauteurMasqueOiseau: '32px',
        largeurMasqueOiseau: '75px',
        topOiseauImage: '-26px',
        leftOiseauImage: '-71px'
        },{
        hauteurMasqueOiseau: '26px',
        largeurMasqueOiseau: '68px',
        topOiseauImage: '-36px',
        leftOiseauImage: '-155px'
        },{
        hauteurMasqueOiseau: '63px',
        largeurMasqueOiseau: '60px',
        topOiseauImage: '-80px',
        leftOiseauImage: '-86px'
        },{
        hauteurMasqueOiseau: '39px',
        largeurMasqueOiseau: '63px',
        topOiseauImage: '-81px',
        leftOiseauImage: '-160px'
        },{
        hauteurMasqueOiseau: '28px',
        largeurMasqueOiseau: '71px',
        topOiseauImage: '-74px',
        leftOiseauImage: '-229px'
        }];

//  Création du 2ème oiseau à partir de la fonction constructeur d'Oiseau    
    var oiseau2 = new Oiseau('contenuOiseau2', 'masqueOiseau2', 'containerOiseau2', voleADroite2);
    oiseau2.imageOiseau.src = 'fichiers/images/pteranodon2.png';
    oiseau2.imageOiseau.alt = 'pteranodon';
    oiseau2.imageOiseau.title = 'Ptéranodon orange'; 

    
//  Mon troisième objet oiseau3 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
    var voleADroite3 = [{
        hauteurMasqueOiseau: '60px',
        largeurMasqueOiseau: '66px',
        topOiseauImage: '1px',
        leftOiseauImage: '1px'
        },{
        hauteurMasqueOiseau: '32px',
        largeurMasqueOiseau: '75px',
        topOiseauImage: '-26px',
        leftOiseauImage: '-71px'
        },{
        hauteurMasqueOiseau: '26px',
        largeurMasqueOiseau: '68px',
        topOiseauImage: '-36px',
        leftOiseauImage: '-155px'
        },{
        hauteurMasqueOiseau: '63px',
        largeurMasqueOiseau: '60px',
        topOiseauImage: '-80px',
        leftOiseauImage: '-86px'
        },{
        hauteurMasqueOiseau: '39px',
        largeurMasqueOiseau: '63px',
        topOiseauImage: '-81px',
        leftOiseauImage: '-160px'
        },{
        hauteurMasqueOiseau: '28px',
        largeurMasqueOiseau: '71px',
        topOiseauImage: '-74px',
        leftOiseauImage: '-229px'
        }];

//  Création du 3ème oiseau à partir de la fonction constructeur d'Oiseau  
    var oiseau3 = new Oiseau('contenuOiseau3', 'masqueOiseau3', 'containerOiseau3', voleADroite3);
    oiseau3.imageOiseau.src = 'fichiers/images/pteranodon3.png';
    oiseau3.imageOiseau.alt = 'pteranodon';
    oiseau3.imageOiseau.title = 'Ptéranodon orange à tâches blanches'; 


//  Mon quatrième objet oiseau4 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
    var voleADroite4 = [{
        hauteurMasqueOiseau: '60px',
        largeurMasqueOiseau: '66px',
        topOiseauImage: '1px',
        leftOiseauImage: '1px'
        },{
        hauteurMasqueOiseau: '32px',
        largeurMasqueOiseau: '75px',
        topOiseauImage: '-26px',
        leftOiseauImage: '-71px'
        },{
        hauteurMasqueOiseau: '26px',
        largeurMasqueOiseau: '68px',
        topOiseauImage: '-36px',
        leftOiseauImage: '-155px'
        },{
        hauteurMasqueOiseau: '63px',
        largeurMasqueOiseau: '60px',
        topOiseauImage: '-80px',
        leftOiseauImage: '-86px'
        },{
        hauteurMasqueOiseau: '39px',
        largeurMasqueOiseau: '63px',
        topOiseauImage: '-81px',
        leftOiseauImage: '-160px'
        },{
        hauteurMasqueOiseau: '28px',
        largeurMasqueOiseau: '71px',
        topOiseauImage: '-74px',
        leftOiseauImage: '-229px'
        }];

//  Création du 4ème oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau4 = new Oiseau('contenuOiseau4', 'masqueOiseau4', 'containerOiseau4', voleADroite4);
    oiseau4.imageOiseau.src = 'fichiers/images/pteranodon4.png';
    oiseau4.imageOiseau.alt = 'pteranodon';
    oiseau4.imageOiseau.title = 'Ptéranodon orange'; 


//  Mon cinquième objet oiseau5 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
    var voleADroite5 = [{
    hauteurMasqueOiseau: '60px',
    largeurMasqueOiseau: '66px',
    topOiseauImage: '1px',
    leftOiseauImage: '1px'
    },{
    hauteurMasqueOiseau: '32px',
    largeurMasqueOiseau: '75px',
    topOiseauImage: '-26px',
    leftOiseauImage: '-71px'
    },{
    hauteurMasqueOiseau: '26px',
    largeurMasqueOiseau: '68px',
    topOiseauImage: '-36px',
    leftOiseauImage: '-155px'
    },{
    hauteurMasqueOiseau: '63px',
    largeurMasqueOiseau: '60px',
    topOiseauImage: '-80px',
    leftOiseauImage: '-86px'
    },{
    hauteurMasqueOiseau: '39px',
    largeurMasqueOiseau: '63px',
    topOiseauImage: '-81px',
    leftOiseauImage: '-160px'
    },{
    hauteurMasqueOiseau: '28px',
    largeurMasqueOiseau: '71px',
    topOiseauImage: '-74px',
    leftOiseauImage: '-229px'
    }];

//  Création du 5ème oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau5 = new Oiseau('contenuOiseau5', 'masqueOiseau5', 'containerOiseau5', voleADroite5);
    oiseau5.imageOiseau.src = 'fichiers/images/pteranodon5.png';
    oiseau5.imageOiseau.alt = 'pteranodon';
    oiseau5.imageOiseau.title = 'Ptéranodon orange';
     

//  Mon sixème objet oiseau6 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
var voleADroite6 = [{
    hauteurMasqueOiseau: '60px',
    largeurMasqueOiseau: '66px',
    topOiseauImage: '1px',
    leftOiseauImage: '1px'
    },{
    hauteurMasqueOiseau: '32px',
    largeurMasqueOiseau: '75px',
    topOiseauImage: '-26px',
    leftOiseauImage: '-71px'
    },{
    hauteurMasqueOiseau: '26px',
    largeurMasqueOiseau: '68px',
    topOiseauImage: '-36px',
    leftOiseauImage: '-155px'
    },{
    hauteurMasqueOiseau: '63px',
    largeurMasqueOiseau: '60px',
    topOiseauImage: '-80px',
    leftOiseauImage: '-86px'
    },{
    hauteurMasqueOiseau: '39px',
    largeurMasqueOiseau: '63px',
    topOiseauImage: '-81px',
    leftOiseauImage: '-160px'
    },{
    hauteurMasqueOiseau: '28px',
    largeurMasqueOiseau: '71px',
    topOiseauImage: '-74px',
    leftOiseauImage: '-229px'
    }];

//  Création du 6ème oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau6 = new Oiseau('contenuOiseau6', 'masqueOiseau6', 'containerOiseau6', voleADroite6);
    oiseau6.imageOiseau.src = 'fichiers/images/pteranodon6.png';
    oiseau6.imageOiseau.alt = 'pteranodon';
    oiseau6.imageOiseau.title = 'Ptéranodon orange';  

//  Mon septième objet oiseau7 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
var voleADroite7 = [{
    hauteurMasqueOiseau: '60px',
    largeurMasqueOiseau: '66px',
    topOiseauImage: '1px',
    leftOiseauImage: '1px'
    },{
    hauteurMasqueOiseau: '32px',
    largeurMasqueOiseau: '75px',
    topOiseauImage: '-26px',
    leftOiseauImage: '-71px'
    },{
    hauteurMasqueOiseau: '26px',
    largeurMasqueOiseau: '68px',
    topOiseauImage: '-36px',
    leftOiseauImage: '-155px'
    },{
    hauteurMasqueOiseau: '63px',
    largeurMasqueOiseau: '60px',
    topOiseauImage: '-80px',
    leftOiseauImage: '-86px'
    },{
    hauteurMasqueOiseau: '39px',
    largeurMasqueOiseau: '63px',
    topOiseauImage: '-81px',
    leftOiseauImage: '-160px'
    },{
    hauteurMasqueOiseau: '28px',
    largeurMasqueOiseau: '71px',
    topOiseauImage: '-74px',
    leftOiseauImage: '-229px'
    }];
    
//  Création du 7ème oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau7 = new Oiseau('contenuOiseau7', 'masqueOiseau7', 'containerOiseau7', voleADroite7);
    oiseau7.imageOiseau.src = 'fichiers/images/pteranodon7.png';
    oiseau7.imageOiseau.alt = 'pteranodon';
    oiseau7.imageOiseau.title = 'Ptéranodon orange';  

    //  Mon huitième objet oiseau8 : un ptéranodon 
//  déclaration de ses propres caractéristiques avant de le créer à partir de la fonction constructeur Oiseau
var voleADroite8 = [{
    hauteurMasqueOiseau: '60px',
    largeurMasqueOiseau: '66px',
    topOiseauImage: '1px',
    leftOiseauImage: '1px'
    },{
    hauteurMasqueOiseau: '32px',
    largeurMasqueOiseau: '75px',
    topOiseauImage: '-26px',
    leftOiseauImage: '-71px'
    },{
    hauteurMasqueOiseau: '26px',
    largeurMasqueOiseau: '68px',
    topOiseauImage: '-36px',
    leftOiseauImage: '-155px'
    },{
    hauteurMasqueOiseau: '63px',
    largeurMasqueOiseau: '60px',
    topOiseauImage: '-80px',
    leftOiseauImage: '-86px'
    },{
    hauteurMasqueOiseau: '39px',
    largeurMasqueOiseau: '63px',
    topOiseauImage: '-81px',
    leftOiseauImage: '-160px'
    },{
    hauteurMasqueOiseau: '28px',
    largeurMasqueOiseau: '71px',
    topOiseauImage: '-74px',
    leftOiseauImage: '-229px'
    }];
    
//  Création du 8ème oiseau à partir de la fonction constructeur d'Oiseau
    var oiseau8 = new Oiseau('contenuOiseau8', 'masqueOiseau8', 'containerOiseau8', voleADroite8);
    oiseau8.imageOiseau.src = 'fichiers/images/pteranodon8.png';
    oiseau8.imageOiseau.alt = 'pteranodon';
    oiseau8.imageOiseau.title = 'Ptéranodon orange';  

/**********************************************************************************
*******************  EXECUTION DU VOL DE MES 4 PREMIERS OISEAUX  ******************
***********************************************************************************/
//  lancement de l'annimation de mes quatre objets oiseaux "ptéranodon"  dans des setInterval
    identifiantInterval = window.setInterval(oiseau1.voleVersLaDroite.bind(oiseau1), 190);
    identifiantInterval2 = window.setInterval(oiseau2.voleVersLaDroite.bind(oiseau2), 220); 
    identifiantInterval3 = window.setInterval(oiseau3.voleVersLaDroite.bind(oiseau3), 150);
    identifiantInterval4 = window.setInterval(oiseau4.voleVersLaDroite.bind(oiseau4), 300);
    

/******************************************************************************
******************  FONCTION D'ANIMATION  QUI FAIT TOMBER ANNA  ***************
******************************************************************************/
// Lorsqu'il y a collision entre Anna et un Oiseau, Anna se retrouve en bas du cocotier
    function annaTombe() {          
        containerAnna.style.top = (parseFloat(containerAnna.style.top) + 374) + 'px';   
    };

/******************************************************************************
*************************    OBJET DU SPRITE ANNA   ***************************
******************************************************************************/  
    var anna = {
        positionAnna: {
            monte: [{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-150px',
                    leftAnnaImage: '-775px'
                    },{
                    hauteurMasqueAnna: '123px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-149px',
                    leftAnnaImage: '-723px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-150px',
                    leftAnnaImage: '-775px'
                    }],
            descend: [{
                    hauteurMasqueAnna: '126px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-11px',
                    leftAnnaImage:   '-722px'
                    },{
                    hauteurMasqueAnna: '126px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-11px',
                    leftAnnaImage: '-671px'
                    },{
                    hauteurMasqueAnna: '124px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-11px',
                    leftAnnaImage: '-620px'
                    },{ 
                    hauteurMasqueAnna: '124px',
                    largeurMasqueAnna: '34px',
                    topAnnaImage: '-11px',
                    leftAnnaImage: '-568px'
                    }],
            animationMarcheGauche: [{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '52px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-888px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '35px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-844px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '52px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-888px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '35px',
                    topAnnaImage: '-275px',
                    leftAnnaImage: '-790px'
                    },{
                    hauteurMasqueAnna: '121px',
                    largeurMasqueAnna: '33px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-742px'
                    }],
            animationMarcheDroite: [{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '52px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-961px'
                    },{
                    hauteurMasqueAnna: '123px',
                    largeurMasqueAnna: '35px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-1021px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '52px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-961px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '33px',
                    topAnnaImage: '-275px',
                    leftAnnaImage: '-1077px'
                    },{
                    hauteurMasqueAnna: '122px',
                    largeurMasqueAnna: '33px',
                    topAnnaImage: '-273px',
                    leftAnnaImage: '-1127px'
                    }]   
        },
        nb: 0,
        sequence: 5,
        animationMonte: function() {
            // Position Anna pour detection collision avec la zone du cocotier pour monter à l'arbre
            var positionAnnaDroitMonte = (parseFloat(containerAnna.style.left) + (parseFloat(containerAnna.style.width) - parseFloat(masqueAnna.style.width))) +  x;
            var positionAnnaHaut = (parseFloat(containerAnna.style.top) - y);          
            // détection collision avec la zone du Cocotier pour faire monter Anna 
            var margeCocotier = (parseFloat(containerCocotier.style.width) - parseFloat(masqueCocotier.style.width)) / 2;
            var positionDebutCocotier = (parseFloat(containerCocotier.style.left) + margeCocotier);
            var positionFinCocotier = (parseFloat(containerCocotier.style.left) + margeCocotier) + parseFloat(masqueCocotier.style.width);
            var positionCocotierTop = parseFloat(containerCocotier.style.top) + parseFloat(masqueCocotier.style.top);            
            //empêcher les animations et les mouvements de simulation "monte" du sprite Anna en dehors de la zone du cocotier
            if ((positionAnnaDroitMonte >= positionDebutCocotier) && (positionAnnaDroitMonte <= positionFinCocotier) && (positionAnnaHaut > positionCocotierTop)) {
                if (this.nb >= this.positionAnna.monte.length) {
                    this.nb = 0;
                }
                if (this.sequence >= 5) {
                masqueAnna.style.height = this.positionAnna.monte[this.nb].hauteurMasqueAnna;
                masqueAnna.style.width  = this.positionAnna.monte[this.nb].largeurMasqueAnna;
                imageAnna.style.top = this.positionAnna.monte[this.nb].topAnnaImage;
                imageAnna.style.left = this.positionAnna.monte[this.nb].leftAnnaImage;
                this.sequence = 0;
                this.nb++;
                }
                this.sequence = this.sequence + 1;
            }            
        },    
        animationDescend: function() {
            // Position Anna pour detection collision avec le bas du fond du jeu
            var positionAnnaBas = (parseFloat(containerAnna.style.top) + parseFloat(containerAnna.style.height) - y);           
            // Détection collision avec le bas du fond du jeu     
            var positionFondY = (parseFloat(fondJeu.style.height) - 8);
            //empêcher les animations et les mouvements du sprite Anna en cas de collision 
            if (positionFondY < positionAnnaBas) {
                return
            }
            if (this.nb >= this.positionAnna.descend.length) {
                this.nb = 0;
            }
            if (this.sequence >= 5) {
                masqueAnna.style.height = this.positionAnna.descend[this.nb].hauteurMasqueAnna;
                masqueAnna.style.width = this.positionAnna.descend[this.nb].largeurMasqueAnna;
                imageAnna.style.top = this.positionAnna.descend[this.nb].topAnnaImage;
                imageAnna.style.left = this.positionAnna.descend[this.nb].leftAnnaImage;
                this.sequence = 0;
                this.nb++;
            } 
            this.sequence = this.sequence + 1;
        },        
        animationMarcheGauche: function() {
            //detection position Anna pour qu'elle ne puisse plus faire l'animation de marche
            var positionAnnaY = (parseFloat(containerAnna.style.top) - y);   
            //detection position limite jeu  
            var baseFinMouvement = (((parseFloat(fondJeu.style.height)) - (parseFloat(containerAnna.style.height))) - 20); 
            //empêcher les animations et les mouvements du sprite Anna en cas de collision 
            if (positionAnnaY < baseFinMouvement) {
                return
            }
            if (this.nb >= this.positionAnna.animationMarcheGauche.length) {
                this.nb = 0;
            }
            if (this.sequence >= 5) { 
                masqueAnna.style.height = this.positionAnna.animationMarcheGauche[this.nb].hauteurMasqueAnna;
                masqueAnna.style.width = this.positionAnna.animationMarcheGauche[this.nb].largeurMasqueAnna;
                imageAnna.style.top = this.positionAnna.animationMarcheGauche[this.nb].topAnnaImage;
                imageAnna.style.left = this.positionAnna.animationMarcheGauche[this.nb].leftAnnaImage;
                this.sequence = 0;
                this.nb++;
            }            
            this.sequence = this.sequence + 1;
        },   
        animationMarcheDroite: function() {
            // detection position Anna pour qu'elle ne puisse plus faire des animations de marche                      
            // Limitte pour que le sprite Anna ne puisse plus simuler des mouvements de marche(animation) à droite 
            var positionAnnaY = (parseFloat(containerAnna.style.top) + y); 
            var positionAnnaDroit = (parseFloat(containerAnna.style.left) + parseFloat(containerAnna.style.width)) + x;    
            // Détection collision avec le bord droit du fond du jeu  
            var positionFondX = (parseFloat(fondJeu.style.width));     
            var baseFinMouvement = (((parseFloat(fondJeu.style.height)) - (parseFloat(containerAnna.style.height))) - 20);     
            //empêcher les animations et les mouvements du sprite Anna à l'intérieur du cocotier
            if (positionAnnaY >= baseFinMouvement) {            
                if (positionFondX < positionAnnaDroit) {
                    return
                }
            }
             //empêcher les animations et les mouvements du sprite avec le bord droit du fond du jeu
            if (positionAnnaY < baseFinMouvement) {
                return
            }
            if (this.nb >= this.positionAnna.animationMarcheDroite.length) {
                this.nb = 0;
            }         
            if (this.sequence >= 5) {
                masqueAnna.style.height = this.positionAnna.animationMarcheDroite[this.nb].hauteurMasqueAnna;
                masqueAnna.style.width = this.positionAnna.animationMarcheDroite[this.nb].largeurMasqueAnna;
                imageAnna.style.top = this.positionAnna.animationMarcheDroite[this.nb].topAnnaImage;
                imageAnna.style.left = this.positionAnna.animationMarcheDroite[this.nb].leftAnnaImage;
                this.sequence = 0;
                this.nb++;
            }            
            this.sequence =  this.sequence + 1;
        },        
        marcheVersLaGauche: function() {           
            // Position Anna pour la detection colision avec la porte de la cabane
            var positionAnnaXg = (parseFloat(containerAnna.style.left) + (parseFloat(containerAnna.style.width) - parseFloat(masqueAnna.style.width))) - x;
            var positionAnnaY = (parseFloat(containerAnna.style.top) - y);           
            // détection collision dans la cabane   
            var positionContainerCabane = (parseFloat(containerCabane.style.left) + (parseFloat(containerCabane.style.width)));
            var margeCabane = (positionContainerCabane - (parseFloat(masqueCabane.style.width))) / 2;
            var positionCollisionCabane = (parseFloat(masqueCabane.style.width)) + margeCabane;           
            // Limitte pour que le sprite Anna ne puisse plus se déplacer à droite ou à gauche quand elle est dans l'arbre 
            // je laisse volontairement une petite marge de 20px pour prendre en compte les rochers) et donner un peu de facilité de mouvement pour faire monter Anna
            var baseFinMouvement = (((parseFloat(fondJeu.style.height)) - (parseFloat(containerAnna.style.height))) - 20);           
            if (positionAnnaY >= baseFinMouvement) {
                if (positionAnnaXg < positionCollisionCabane) {
                    if (leScore >=10) {
                        containerAnna.style.display = 'none';                       
                        if (round == 1) {
                            tableauAffichageCv1.style.display = 'block';                            
                        } else { 
                            if (round == 2) {
                                tableauAffichageCv2.style.display = 'block';                                
                            } else {
                                if (round == 3) {
                                    tableauAffichageCv3.style.display = 'block';               
                                }                    
                            }
                        }                        
                    } else {
                        // cacher les tableaux d'affichage pour permettre l'affichage des messages
                        interTableauAffichage.style.display = 'none';
                        message ="<br/>" + "Anna!!!" + "<br/>" + "tu n'as pas assez" + "<br/>" + " de noix de coco!!!";
                        alerte.style.display = 'block';
                        messageAlerte.style.padding = '30px';
                        messageAlerte.innerHTML = message; 
                    }                    
                } else {             
                    containerAnna.style.left = (parseFloat(containerAnna.style.left) - x) + 'px'; 
                }  
            }
        },   
        marcheVersLaDroite: function() {            
            // Position Anna pour la detection colision avec la limitte droite du fond du jeu
            var positionAnnaDroit = (parseFloat(containerAnna.style.left) + parseFloat(containerAnna.style.width)) +  x;
            var positionAnnaY = (parseFloat(containerAnna.style.top) + y);           
            // Détection collision avec le bord droit du fond du jeu  
            var positionFondX = (parseFloat(fondJeu.style.width));           
            // Limitte pour que le sprite Anna ne puisse plus se déplacer à droite ou à gauche quand elle est dans l'arbre 
            // je laisse volontairement une petite marge de 20px pour prendre en compte les rochers) et donner un peu de facilité de mouvement pour faire monter Anna
            var baseFinMouvement = (((parseFloat(fondJeu.style.height)) - (parseFloat(containerAnna.style.height))) - 20);          
            if (positionAnnaY >= baseFinMouvement) {
                if (positionFondX < positionAnnaDroit) {
                    return                   
                } else {             
                    containerAnna.style.left = (parseFloat(containerAnna.style.left) + x) + 'px';              
                }  
            }
        },   
        mouvementDescend: function() {           
            // Position Anna pour detection collision avec le bas du fond du jeu
            var positionAnnaBas = (parseFloat(containerAnna.style.top) + parseFloat(containerAnna.style.height) - y);           
            // Détection collision avec le bas du fond du jeu     
            var positionFondY = (parseFloat(fondJeu.style.height) - 8);            
            if (positionFondY < positionAnnaBas) {
                return                   
            } else {             
                containerAnna.style.top = (parseFloat(containerAnna.style.top) + y) + 'px';
            }  
        },
        mouvementMonte: function() {
            if (leScore < 10) {
                alerte.style.display = 'none';
            }           
            // Position Anna pour detection collision dans le cocotier
            var positionAnnaDroitMonte = (parseFloat(containerAnna.style.left) + (parseFloat(containerAnna.style.width) - parseFloat(masqueAnna.style.width))) +  x;
            var positionAnnaHaut = (parseFloat(containerAnna.style.top) - y);          
            // détection collision dans le Cocotier   
            var margeCocotier = (parseFloat(containerCocotier.style.width) - parseFloat(masqueCocotier.style.width)) / 2;
            var positionDebutCocotier = (parseFloat(containerCocotier.style.left) + margeCocotier);
            var positionFinCocotier = (parseFloat(containerCocotier.style.left) + margeCocotier) + parseFloat(masqueCocotier.style.width);
            var positionCocotierTop = (parseFloat(containerCocotier.style.top) + parseFloat(masqueCocotier.style.top));
            // détection collision avec la noix de coco  
            var positionNoixTop = (parseFloat(containerNoix.style.top) + parseFloat(containerNoix.style.height));
            var animSonCoco = true;
            if (positionAnnaHaut < positionNoixTop) {
                annaTombe();
                leScore = leScore + 1;  
                interfaceScore.innerHTML = leScore;  
                if (leScore >=10) {
                    animSonCoco = false;
                    if (round == 3) {
                        message = "<br/>" +" Fantastique !!!" + "<br/>" + "Tu as fini ta quête   " + "<br/>" + "ton ultime récompense t'attend";                        
                    }
                     else { 
                        if (round == 2) {
                            message = "<br/>" +"Bien joué Anna !!!" + "<br/>" + "Tu as encore gagné !!!" + "<br/>" + "ta récompense t'attend dans la cabane";                        
                        } else {
                            interTableauAffichage.style.display = 'none';
                            message = "<br/>" +" Bravo Anna!!!" + "<br/>" + "Tu as gagné!!" + "<br/>" + "une récompense t'attend dans la cabane";
                        }                        
                    }
                    reussi = true;
                    containerNoix.style.display = 'none'; 
                    boiteScore.style.display = 'none';     
                    messageAlerte.style.padding = '15px 38px';                  
                    alerte.style.display = 'block'; 
                    messageAlerte.innerHTML = message;                        
                } 
                if ((animationSon) && (animSonCoco)) {
                    criCoco.play();  
                }       
                animationNoix();
            }            
            if ((positionAnnaDroitMonte >= positionDebutCocotier) && (positionAnnaDroitMonte <= positionFinCocotier) && (positionAnnaHaut > positionCocotierTop)) {
                containerAnna.style.top = (parseFloat(containerAnna.style.top) - y) + 'px';
            } 
        }
    }; 
    
/***************************************************************************
****************************  FONCTION EVENEMENTS CLAVIER  *****************
****************************************************************************/    
    // Touche enfoncée
    window.addEventListener('keydown', function(event) {            
        var code = event.keyCode;
        switch(code) {
            case 37:
            //instructions qui fait aller ver la gauche mon personnage "Anna"
                touches.gauche = true;
            
            break;
            case 38:
            //instructions qui fait monter mon personnage "Anna"
                touches.monte = true;
            
            break;
            case 39:
            //instructions qui fait aller ver la droite mon personnage "Anna"
                touches.droite = true;

            break;
            case 40:
            //instructions qui fait descendre mon personnage "Anna"
                touches.descend = true; 
        
            break;
            case 13:
            //Touche entrée
            //Retire les boites de dialogues et les tableaux d'affichage et lance au level la bande son
                if (interTableauAffichage.style.display != 'block') {
                    bandeSon.play();
                }
                              
                interTableauAffichage.style.display = 'none';
                alerte.style.display = 'none';

                if (tableauAffichageCv1.style.display == 'block') {
                    tableauAffichageCv1.style.display = 'none';
                    rejouer();
                }

                if (tableauAffichageCv2.style.display == 'block') {
                    tableauAffichageCv2.style.display = 'none';
                    rejouer();
                }
                    
            break;
        };
    });

    // Touche relachée
    window.addEventListener('keyup', function(event) {
        var code = event.keyCode;
        switch(code) {
            case 37:
            //*instructions gauche
                touches.gauche = false;
                animationEnCours = false;
            
            break;
            case 38:
            //instructions monte
                touches.monte = false;
                animationEnCours = false;
            
            break;
            case 39:
            //instructions droite
                touches.droite = false;
                animationEnCours = false;
                
            break;
            case 40:
            //instructions descend
                touches.descend = false;
                animationEnCours = false;
            
            break;
            case 13:
            //touche entrée                
                animationEnCours = false;
            
            break;
        };
    }); 

/***************************************************************************
*************  FONCTION PRINCIPALE: par rapport aux evenements *************
****************************************************************************/    
    
function principale() {
        if (touches.gauche) {
            // réagir au fait que la touche gauche est enfoncée
            //*instructions*
            animationEnCours = true;
            anna.marcheVersLaGauche();
            anna.animationMarcheGauche();
        }
        if (touches.droite) {
            // réagir au fait que la touche droite est enfoncée
            //*instructions*
            animationEnCours = true;
            anna.marcheVersLaDroite();
            anna.animationMarcheDroite();
        }
        if (touches.monte) {
            // réagir au fait que la touche monte est enfoncée
            //*instructions*
            animationEnCours = true;
            anna.mouvementMonte();
            anna.animationMonte();
        }
        if (touches.descend) {
        // réagir au fait que la touche descend est enfoncée
        //*instructions*
            animationEnCours = true;
            anna.mouvementDescend();
            anna.animationDescend();
        }        
    };
    // commencer à observer l'appui des touches 
    setInterval(principale, 25);     
});
     

   