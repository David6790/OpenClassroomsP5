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

// raccrocher les éléments HTML au script. L'image et le texte descriptif

const slideImage = document.querySelector(" .banner-img");
const slideTagLine = document.querySelector("#banner > p");

//Declaration des variables pour stocker la position des slides et la position des dots
let slideIndice = 0;
let dotIndice = 0;

// raccrocher l'élement de classe dots du HTML au javascript
const dots = document.querySelector(".dots");

// creation d'un array pour stocker les 4 divs de classe "dot" en tant qu'enfants de la la classe "dots"
const dotsArray = [
  dots.children.item(0),
  dots.children.item(1),
  dots.children.item(2),
  dots.children.item(3),
];

// creation d'une fonction qui permet de comparer l'indice du Dot à l'indice du slide. On demande à la fonction de parcourir le tableau "dotsArray": si l'indice du dot et l'indice du slide sont le même, ca veut dire qu'il sont sur la même image. Alors on demande au dot en question de  se rajouter la classe "dot_selected" afin d'obtenir le rendu visuel. En gros, à chaque clique, la fonction parcour le tableau une fois. Trouve le dot correspondant, le passe en "dot_selected" et sur le reste des dots, il supprime la classe "dot_selected" si il y en as
function updateDot() {
  dotsArray.forEach(function (dot, slideIndice) {
    if (slideIndice === dotIndice) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

//mise en place de l'ecoute de la fleche de gauche. Au click, la fonction fait deux choses : Elle decale le slide vers la gauche et elle execute la fonction updateDot(). Mise en place des conditions pour le slideIndice et pour le dotIndice pour gerer des cas de figures ou les indices depassent des valeurs limites de fonctionnement de nos fonctions.
document.querySelector(".arrow_left").addEventListener("click", function () {
  dotIndice--;
  if (slideIndice <= 0) {
    slideIndice = slides.length;
  }
  if (dotIndice < 0) {
    dotIndice = dotsArray.length - 1;
  }

  updateDot();

  slideImage.src = "./assets/images/slideshow/" + slides[slideIndice - 1].image;
  slideTagLine.innerHTML = slides[slideIndice - 1].tagLine;
  slideIndice--;
});

// Ecoute sur la fleche de droite, même principe de fonctionnement que la fleche de gauche. Adaptation des conditions et des opérations mathématiques pour faire slider vers la droite
document.querySelector(".arrow_right").addEventListener("click", function () {
  dotIndice++;
  if (slideIndice >= slides.length - 1) {
    slideIndice = -1;
  }
  if (dotIndice >= dotsArray.length) {
    dotIndice = 0;
  }

  updateDot();

  slideImage.src = "./assets/images/slideshow/" + slides[slideIndice + 1].image;
  slideTagLine.innerHTML = slides[slideIndice + 1].tagLine;
  slideIndice++;
});
