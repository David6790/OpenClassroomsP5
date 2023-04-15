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

const slideImage = document.querySelector(" #banner-slide");
const slideTagLine = document.querySelector("#banner > p");
let slideIndice = 0;

const dots = document.querySelectorAll(".dot");

function updateDot(i) {
  dots.forEach(function (dot, index) {
    if (index === slideIndice + i) {
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

document.querySelector(".arrow_left").addEventListener("click", function () {
  changeDirection("left");
});

document.querySelector(".arrow_right").addEventListener("click", function () {
  changeDirection("right");
});
