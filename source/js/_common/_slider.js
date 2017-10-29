const mySlideshow = (function () {

	const slides = getAllElements('.slider__item');
	const dotsContainer = getElement('.dots');
	const dots = getAllElements('.dot');
	let slideIndex = 0;

	const init = function () {
		if (window.innerWidth <= 780) {
			_setUpListners();
		}
	}

	const _setUpListners = function () {
		dotsContainer.addEventListener('click', _currentSlide);
		_showSlides();
		setInterval(_showSlides, 2000); // Change image every 2 seconds
	}

	function _currentSlide(e) {
		let i = 0;

		dots.forEach((item, index) => {
			if (e.target === item) {
				i = index;
			}
		});

		_showSlides(slideIndex = i);
	}

	function _showSlides() {

		slides.forEach(function(item) {
			item.classList.remove('fade');
			item.style.display = "none";
		});


		dots.forEach((item) => {
			item.className = item.className.replace(" active fade", "");
		});

		slideIndex++;

		if (slideIndex > slides.length) {slideIndex = 1};

		slides[slideIndex-1].style.display = "flex";
		slides[slideIndex-1].classList.add('fade');
		dots[slideIndex-1].className += " active fade";
	}

	

	return {
		 init: init
	}

})();

mySlideshow.init();