// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navbar2");

// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("actiive");
// 	navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
// 	hamburger.classList.remove("active");
// 	navMenu.classList.remove("active");
// }))




var nav = document.querySelector("nav")
		window.addEventListener("scroll", ()=>{
			if(document.documentElement.scrollTop > 20){
				nav.classList.add("sticky");
			}else{
				nav.classList.remove("sticky");
			}
		})




		const mainMenu = document.getElementsByClassName('nav-mobile')[0];
		const closeMenu = document.getElementsByClassName('closeMenu')[0];
		const openMenu = document.getElementsByClassName('openMenu')[0];
		const menu = document.getElementsByClassName('dropdown-menu2')[0];
		const menu2 = document.getElementsByClassName('dropdown-menu2')[1];
		const menu3 = document.getElementsByClassName('dropdown-menu2')[2];
		const menu4 = document.getElementsByClassName('dropdown-menu2')[3];



		function handleSidebar() {
			openMenu.addEventListener('click', () => {
				mainMenu.style.left = "0"
				// mainMenu.style.transform = 'translateX(0)'
				// mainMenu.style.transition = '.5s'
				// mainMenu.classList.toggle('.slide');
				closeMenu.style.display = 'block';
				closeMenu.style.opacity = '1'
				openMenu.style.display = 'none';
			})
			closeMenu.addEventListener('click', () => {
				mainMenu.style.left = "-100%"
				openMenu.style.display = 'block';
				closeMenu.style.display = 'none';
				// menu.style.display = 'none';
				// menu2.style.display = 'none';
				// menu3.style.display = 'none';
				// menu4.style.display = 'none';

			})
		}

		handleSidebar()

		// $(document).ready(function () {
		// 	$(".nav-link2").click(function () {
		// 		$(this).next(".nav-mobile").slideToggle();
		// 	})
		// })
	








		window.addEventListener('scroll', function() {
			var element = document.getElementById('myElement');
			var position = element.getBoundingClientRect();
		  
			// Mengaktifkan animasi ketika elemen masuk ke dalam viewport
			if (position.top < window.innerHeight) {
			  element.classList.add('animate');
			}
		  });

		  
		  


