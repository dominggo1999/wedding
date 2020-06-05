const nav = document.querySelector('.navbar');
const preloader = document.querySelector('.preloader');
window.addEventListener("scroll",e=>{
	nav.classList.toggle('sticky',pageYOffset > 0);
})

// Smooth Scrolling
let scroll = new SmoothScroll('a[href*="#"]', 
	{
		speed: 1500,
		speedAsDuration: true
	}, 
	{
		easing: 'easeInCubic'
	}
);


// Preloader
setTimeout(()=>{
	preloader.classList.add("gone");
},5000);
