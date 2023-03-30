//cambiar esto
let clickMenuOpen = document.getElementById("desplegar");
let clickMenuClose = document.getElementById("contraer");

clickMenuOpen.addEventListener("click", () => {
	document.getElementById("desplegable").style.top = "20px";
	document.getElementById("desplegable").style.opacity = "1";
	document.getElementById("desplegable").style.visibility = "visible";
	document.getElementById("desplegar").style.visibility = "hidden";
	document.getElementById("contraer").style.visibility = "visible";
});
clickMenuClose.addEventListener("click", () => {
	document.getElementById("desplegable").style.top = "-60px";
	document.getElementById("desplegable").style.opacity = "0";
	document.getElementById("desplegable").style.visibility = "hidden";
	document.getElementById("contraer").style.visibility = "hidden";
	document.getElementById("desplegar").style.visibility = "visible";
});
