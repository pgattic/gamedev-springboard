
// generic JS that applies to most of the pages

const $=(x)=>{return document.querySelector(x)}

menuShowing = false;
$("#mobile-nav").onclick = () => {
	menuShowing = !menuShowing;
	if (menuShowing) {
		$('#menu-buttons').classList.add("menu-showing");
	} else {
		$('#menu-buttons').classList.remove("menu-showing");
	}
}



