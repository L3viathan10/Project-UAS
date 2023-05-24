const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar2");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("actiive");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))




var nav = document.querySelector("nav")
		window.addEventListener("scroll", ()=>{
			if(document.documentElement.scrollTop > 20){
				nav.classList.add("sticky");
			}else{
				nav.classList.remove("sticky");
			}
		})


