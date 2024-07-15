function navToggle() {
	const navBtn = document.getElementById('navBtn');
	const mainNav = document.getElementById('mainNav');
	const navLinks = document.querySelectorAll('.nav-link');
	const point = 980;
	
	function toggleMenu() {
		let heightNav = mainNav.scrollHeight;
		
		if (mainNav.classList.contains('nav-hidden')) {
			mainNav.classList.remove('nav-hidden');
			mainNav.style.height = heightNav + 'px';
			setTimeout(() => {
				mainNav.style.height = 'auto';
				mainNav.classList.add('nav-visible');
			}, 300);
		} else {
			mainNav.classList.remove('nav-visible');
			mainNav.style.height = heightNav + 'px';
			setTimeout(() => {
				mainNav.style.height = '0';
				mainNav.classList.add('nav-hidden');
			}, 10);
		}
	}
	
	navBtn.onclick = toggleMenu;
	
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth < point) {
				toggleMenu();
			}
		});
	});
	
	window.addEventListener("resize", resizeHandler, false);
	
	function resizeHandler() {
		if (window.innerWidth >= point) {
			mainNav.style.height = 'auto';
		} else {
			if (mainNav.classList.contains('nav-hidden')) {
				mainNav.style.height = 0;
			} else {
				let heightNav = mainNav.scrollHeight;
				mainNav.style.height = heightNav + 'px';
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', navToggle);
