const search = (function () {

	const init = function () {
			_setUpListners();
	};
	const _setUpListners = function () {
		searchBnt.addEventListener('click', toggleSearch);
	}		

	const searchBnt = getElement('#search-btn');
	const searchBlock = getElement('.search');
	const searchWrap = getElement('.search__wrap');

	function toggleSearch() {

		if (searchBlock.style.display === 'block') {
			searchWrap.addEventListener('transitionend', transitionEnd);
			function transitionEnd() {
				searchBlock.style.display = 'none';
				searchWrap.removeEventListener('transitionend', transitionEnd);
			}
			
		} else {
			searchBlock.style.display = 'block'
		}
		
		setTimeout(function() {
			searchWrap.classList.toggle('opened');
		})
	}
		
	return {
		init: init
	}

})();

search.init();