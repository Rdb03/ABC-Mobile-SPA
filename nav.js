function navToggle() {
	
	const navBtn = document.getElementById('navBtn');
	const mainNav = document.getElementById('mainNav');
	const point = 980;
	
	navBtn.onclick = function () {
		
		let heightNav = mainNav.firstElementChild.offsetHeight;
		
		if (mainNav.classList.contains('nav-hidden')) {
			
			mainNav.classList.remove('nav-hidden');
			
			mainNav.style.height = heightNav + 'px';
			
		} else {
			
			mainNav.classList.add('nav-hidden');
			
			mainNav.style.height = 0;
			
		}
		
	}
	
	
	window.addEventListener("resize", resizeHandler, false);
	
	function resizeHandler() {
		
		let heightNav = mainNav.firstElementChild.offsetHeight;
		
		if (window.innerWidth >= point) {
			
			mainNav.style.height = 'auto';
			
		} else {
			
			if (mainNav.classList.contains('nav-hidden')) {
				
				mainNav.style.height = 0;
				
			} else {
				
				mainNav.style.height = heightNav + 'px';
				
			}
			
		}
		
	}
	
}

navToggle();