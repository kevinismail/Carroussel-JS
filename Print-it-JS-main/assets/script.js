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
const slideImage = document.querySelector('.banner-img');
const slideText = document.querySelector('.slide-text');

console.log(slideText);

let currentSlide = 0;



// ETAPE 2 : flèches

const rightArrow = document.querySelector(".arrow_right");
const leftArrow =document.querySelector('.arrow_left');

rightArrow.addEventListener('click', handleRightClick);
leftArrow.addEventListener('click', handleLeftClick);

function handleRightClick()  {
 
	
	nextSlide();
	console.log(currentSlide)
	}

	
	function handleLeftClick() {
	prevSlide();
	console.log(currentSlide)
	}
	
	// Ajouter fonction prevSlide
	
	function prevSlide() {
	currentSlide--;
	
	if(currentSlide < 0) {
	currentSlide = slides.length - 1;
	}
	
	displaySlide();
	changeDot('prev');
	}
	// Ajouter fonction nexSlide

	function nextSlide() {
	
		currentSlide++;
		
		if(currentSlide >= slides.length) {
		currentSlide = 0;
		}
		
		displaySlide();
		changeDot('next');
		}
		
// ETAPE 3 : bullets

// Récupérer les points existants
const dots = document.querySelectorAll('.dot');

// Compter le nombre de points
let numDots = dots.length;

// Définir le point actif
let currentDot = 0;
let direction; // déclarer direction pour les dots

// Rendre le premier point actif
dots[currentDot].classList.add('dot_selected');

// Fonction pour changer le point actif
function changeDot(dir) {
	direction= dir;

	// Retirer classe active
	dots[currentDot].classList.remove('dot_selected');  
  
	if(currentSlide === 0 && direction === 'next') {
	  currentDot = numDots - 1;
	} else if(currentSlide === slides.length - 1 && direction === 'prev') {
	  currentDot = 0;
	} else if(direction === 'next') {
	  currentDot++; 
	} else {
	  currentDot--;
	}
  
	if(currentDot < 0) {
	  currentDot = numDots - 1;
	}
  
	if(currentDot >= numDots) {
	  currentDot = 0;
	}
  
	// Ajouter classe active
	dots[currentDot].classList.add('dot_selected');
  
  }

// Gestion des événements

dots.forEach(dot => {

	dot.addEventListener('click', () => {
  
	  // Changer slide au clic
	  currentDot = dots.indexOf(dot);
	  displaySlide(); 
	  changeDot();
  
	});
});  

// ETAPE 4 ! 

//selection des éléments


	changeDot();
	const current = slides[currentSlide];
	slideImage.src = current.image;
	slideText.innerHTML = current.tagLine;

	


function displaySlide() {
	const current = slides[currentSlide];
	
	slideImage.src = current.image;
	slideText.innerHTML = current.tagLine;
	
	}
	
