const homeLink = document.getElementById('homeLink');
const infoLink = document.getElementById('infoLink');
const testLink = document.getElementById('testLink');

const homeBlock = document.getElementById('homeBlock');
const infoBlock = document.getElementById('infoBlock');
const testBlock = document.getElementById('testBlock');

const navLinks = document.querySelectorAll('.nav-link');

function switchActiveLink(clickedLink) {
	navLinks.forEach(link => {
		link.classList.remove('active');
	});
	clickedLink.classList.add('active');
}

homeLink.addEventListener('click', function(event) {
	event.preventDefault();
	switchActiveLink(homeLink);
	homeBlock.classList.add('visible');
	homeBlock.classList.remove('hidden');
	infoBlock.classList.add('hidden');
	infoBlock.classList.remove('visible');
	testBlock.classList.add('hidden');
	testBlock.classList.remove('visible');
});

infoLink.addEventListener('click', function(event) {
	event.preventDefault();
	switchActiveLink(infoLink);
	infoBlock.classList.add('visible');
	infoBlock.classList.remove('hidden');
	homeBlock.classList.add('hidden');
	homeBlock.classList.remove('visible');
	testBlock.classList.add('hidden');
	testBlock.classList.remove('visible');
});

testLink.addEventListener('click', function(event) {
	event.preventDefault();
	switchActiveLink(testLink);
	testBlock.classList.add('visible');
	testBlock.classList.remove('hidden');
	homeBlock.classList.add('hidden');
	homeBlock.classList.remove('visible');
	infoBlock.classList.add('hidden');
	infoBlock.classList.remove('visible');
});