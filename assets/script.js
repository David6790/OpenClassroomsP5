const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// deux constantes pour se raccrocher aux élements DOM
const slideImage = document.getElementById("banner-slide");
const slideTagLine = document.querySelector("#banner > p");

// constante pour se raccrocher à tout les elements Dots
const dots = document.querySelectorAll(".dot");

// Initialisation de l'indice des slides à 0
let slideIndice = 0;

// fonction Pour générer les dots en fonction du slide indice. un foreach pour parcourir la liste des élements dots. cette fonction prends un parametre i. Parametre qui me permettrait d'ajuster la fonction en fonction de si on slidait à gauche ou si on slidait à droite.
function updateDot(i) {
  dots.forEach(function (dot, index) {
    if (index === slideIndice + i) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// fonction pour generer les slides. Cette fonction prends un parametre i. Parametre qui me permettrait d'ajuster la fonction en fonction de si on slidait à gauche ou si on slidait à droite.
function updateSlide(i) {
  slideImage.src = "./assets/images/slideshow/" + slides[slideIndice + i].image;
  slideTagLine.innerHTML = slides[slideIndice + i].tagLine;
}

// fonction qui gère l'ensemble des operations losque l'utilisateur clique sur la fleche de gauche ou sur la fleche de droite. En fonction de la direction, elle fait appelle aux fonctions crées plus haut: updateDot() et updateSlide(). En fonction de la direction cliquée, les fonctions updateDots() et updateSlide() prennent des parametres i différents.
function changeDirection(direction) {
  if (direction === "left") {
    if (slideIndice <= 0) {
      slideIndice = slides.length;
    }
    updateDot(-1);
    updateSlide(-1);
    slideIndice--;
  } else {
    slideIndice++;
    if (slideIndice >= slides.length) {
      slideIndice = 0;
    }
    updateDot(0);
    updateSlide(0);
  }
}
// eventlistner pour la gauche qui fait appelle à la fonction changeDirection et en lui injectant le parametre "left"
document.querySelector(".arrow_left").addEventListener("click", function () {
  changeDirection("left");
});
// eventlistner pour la droite qui fait appelle à la fonction changeDirection et en lui injectant un parametre autre que 'left'
document.querySelector(".arrow_right").addEventListener("click", function () {
  changeDirection("right");
});
