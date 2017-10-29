(function() {
  'use strict';

	svg4everybody();

	var t;
	const btnUp = getElement('.btn-up');
	btnUp.addEventListener('click', up);
	function up() {

		let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
		console.log(top);

		if(top > 0) {
			window.scrollBy(0, -50);
			t = setTimeout(up, 2);
		} else {
			clearTimeout(t)
		};

		return false;
	}
	
})();

function getElement(elem) {
	return document.querySelector(elem);
}

function getAllElements(elem) {
	return document.querySelectorAll(elem);
}
