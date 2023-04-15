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

const slideImage = document.querySelector(" .banner-img");
const slideTagLine = document.querySelector("#banner > p");
let slideIndice = 0;

const dots = document.querySelectorAll(".dot");
let dotIndice = 0;

function updateDot() {
  dots.forEach(function (dot, index) {
    if (index === dotIndice) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function updateSlide(i) {
  slideImage.src = "./assets/images/slideshow/" + slides[slideIndice + i].image;
  slideTagLine.innerHTML = slides[slideIndice + i].tagLine;
}

function changeDirection(direction) {
  if (direction === "left") {
    dotIndice--;
    if (slideIndice <= 0) {
      slideIndice = slides.length;
    }
    if (dotIndice < 0) {
      dotIndice = dots.length - 1;
    }
    updateDot();
    updateSlide(-1);
    slideIndice--;
  } else {
    dotIndice++;
    if (slideIndice >= slides.length - 1) {
      slideIndice = -1;
    }
    if (dotIndice >= dots.length) {
      dotIndice = 0;
    }
    updateDot();
    updateSlide(1);
    slideIndice++;
  }
}

document.querySelector(".arrow_left").addEventListener("click", function () {
  changeDirection("left");
});

document.querySelector(".arrow_right").addEventListener("click", function () {
  changeDirection("right");
});
