const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/**
 * raccrocher les éléments HTML au script
 */
const slideImage = document.querySelector(" .banner-img");
const slideTagLine = document.querySelector("#banner > p");

/**
 * déclaration et initialisation de l'indice du slide à zero
 */
let slideIndice = 0; 
let dotIndice = 0; 


const dots = document.querySelector(".dots");
const dotsArray = [dots.children.item(0), dots.children.item(1), dots.children.item(2), dots.children.item(3)];

function updateDot(){
	dotsArray.forEach(function(dot,slideIndice){
		if(slideIndice === dotIndice){
			dot.classList.add("dot_selected");
		}
		else{
			dot.classList.remove("dot_selected");
		}
	});
}



document.querySelector(".arrow_left").addEventListener("click", function(){
	dotIndice -- ;
	if (slideIndice <= 0){
		slideIndice = slides.length;	
	}
	if(dotIndice< 0){
		dotIndice = dotsArray.length-1;
	}

	updateDot();
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice -1].image;
	slideTagLine.innerHTML = slides[slideIndice -1].tagLine;
	slideIndice--;
			
} );

document.querySelector(".arrow_right").addEventListener("click", function(){
	dotIndice++;
	if (slideIndice >= slides.length-1){
		slideIndice = -1;
	}
	if(dotIndice >= dotsArray.length){
		dotIndice = 0;
	}
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice +1].image;
	slideTagLine.innerHTML = slides[slideIndice +1].tagLine;
	updateDot();
	slideIndice++;
	
});





