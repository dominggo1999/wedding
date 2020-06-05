const nav = document.querySelector('.navbar');

window.addEventListener("scroll",e=>{
	nav.classList.toggle('sticky',pageYOffset > 0);
})