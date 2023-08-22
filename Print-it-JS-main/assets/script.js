// Tableau des slides ou liste

const slides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log('images du carroussel chargées');


// ETAPE 2 : flèches

const rightArrow = document.querySelector(".arrow_right");
const leftArrow =document.querySelector('.arrow_left');

rightArrow.addEventListener('click', handleRightClick);
leftArrow.addEventListener('click', handleLeftClick);

function handleRightClick() {
	console.log('click droit');
}
function handleLeftClick() {
	console.log('Clic gauche');
}

// ETAPE 3 : bullets

// Récupérer les points existants
const dots = document.querySelectorAll('.dot');

// Compter le nombre de points
let numDots = dots.length;

// Définir le point actif
let currentDot = 0;

// Rendre le premier point actif
dots[currentDot].classList.add('dot_selected');

// Fonction pour changer le point actif
function changeDot() {

dots[currentDot].classList.remove('dot_selected');

currentDot++;

if(currentDot >= numDots) {
currentDot = 0;
}

dots[currentDot].classList.add('dot_selected');

}

// Gestion des événements
rightArrow.addEventListener('click', changeDot);

dots.forEach(dot => {
dot.addEventListener('click', nextSlide)
});



// ETAPE 4 ! 

//selection des éléments
const slideImage = document.querySelector('banner-img');
const slidetexte = document.querySelector('slide-text');

let currentSlide = 0;

function nextSlide() {
	changeDot();
	const current = slides[currentSlide];
	slideImage.src = current.image;
	slideText.innerHTML = current.tagLine;

	currentSlide++;
	if(currentSlide >= slides.length) {
		currentSlide = 0
	}
}

rightArrow.addEventListener('click', nextSlide);
