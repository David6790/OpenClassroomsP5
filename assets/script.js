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


const slideImage = document.querySelector(" .banner-img");
const slideTagLine = document.querySelector("#banner > p");

let slideIndice = 0; 

document.querySelector(".arrow_left").addEventListener("click", function(){
	if (slideIndice <= 0){
		slideIndice = slides.length;	
	};
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice -1].image;
	slideTagLine.innerHTML = slides[slideIndice -1].tagLine;
	slideIndice--;
	console.log("indice droite" + slideIndice);
		
} );


document.querySelector(".arrow_right").addEventListener("click", function(){
	
	slideImage.src = "./assets/images/slideshow/" + slides[slideIndice +1].image;
	slideTagLine.innerHTML = slides[slideIndice +1].tagLine;
	slideIndice++;
	if (slideIndice >= slides.length-1){
		slideIndice = -1;
	};
	
	console.log(slideIndice);
})







