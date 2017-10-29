const menu = (function () {

	const init = function () {
			_setUpListners();
	};
	const _setUpListners = function () {
		window.addEventListener('scroll', checkSlide);
		if (window.innerWidth <= 480) {
			window.removeEventListener('scroll', checkSlide);
		}
		menuBtn.addEventListener('click', openMenu);
	}		

	const menu = getElement('.menu__inner');
	const menuHeight = menu.clientHeight;
	const menuBtn = getElement('.menu__title');
	const footer = getElement('footer');
	let menuOfSetTop = menu.offsetTop;

	function checkSlide() {

		let footerOffSetTop = footer.offsetTop;

		if (window.scrollY >= menuOfSetTop) {
			menu.classList.add('sticked');
		} else {
			menu.classList.remove('sticked');
		}

		if ((window.scrollY + menu.clientHeight) >= footerOffSetTop + 15) {
			menu.classList.add('unsticked')
		} else {
			menu.classList.remove('unsticked')
		};
	}

	function openMenu() {
		const menuList = menu.querySelector('.menu__list');
		let menuListHeight = menuList.clientHeight;

		if (menu.clientHeight < menuListHeight) {
			menu.style.height = menuHeight + menuListHeight + 'px';
		} else {
			menu.style.height = menuHeight + 'px';
		}
	}
		
	return {
		init: init
	}

})();

menu.init();