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
const dot1 = dots.children.item(0);
const dot2 = dots.children.item(1);
const dot3= dots.children.item(2);
const dot4 = dots.children.item(3);




document.querySelector(".arrow_left").addEventListener("click", function(){
	if (slideIndice <= 0){
		slideIndice = slides.length;	
	};
	console.log(slideIndice);
	switch(slideIndice){
		case 4:
			dot1.classList.remove("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.add("dot_selected");
		break;
		case 3:
			dot1.classList.remove("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.add("dot_selected");
			dot4.classList.remove("dot_selected");
		break;	
		case 2:
			dot3.classList.remove("dot_selected");
			dot2.classList.add("dot_selected");
			dot1.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");	
		break;	
		case 1:
			dot4.classList.remove("dot_selected");	
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot1.classList.add("dot_selected");
		break;	
	}
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice -1].image;
	slideTagLine.innerHTML = slides[slideIndice -1].tagLine;
	slideIndice--;		
} );


document.querySelector(".arrow_right").addEventListener("click", function(){
	if (slideIndice >= slides.length-1){
		slideIndice = -1;
	};
	switch(slideIndice){
		case -1:
			dot1.classList.add("dot_selected");
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");
		break;
		case 0:
			dot1.classList.remove("dot_selected");
			dot2.classList.add("dot_selected");
			dot3.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");
		break;	
		case 1:
			dot3.classList.add("dot_selected");
			dot2.classList.remove("dot_selected");
			dot1.classList.remove("dot_selected");
			dot4.classList.remove("dot_selected");	
		break;	
		case 2:
			dot4.classList.add("dot_selected");	
			dot2.classList.remove("dot_selected");
			dot3.classList.remove("dot_selected");
			dot1.classList.remove("dot_selected");
		break;	
	}
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice +1].image;
	slideTagLine.innerHTML = slides[slideIndice +1].tagLine;
	slideIndice++;
	console.log(slideIndice);
})





