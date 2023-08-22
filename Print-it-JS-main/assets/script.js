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


// Déclaration variables flèches

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

