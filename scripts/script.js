document.addEventListener('DOMContentLoaded', () => {
	const mobIcons = document.getElementById('mobIcons')
	const iconOpen = mobIcons.querySelector('.fa-bars')
	const iconClose = mobIcons.querySelector('.fa-xmark')
	const mobileMenu = document.getElementById('mobileMenu')

	mobIcons.addEventListener('click', () => {
		mobileMenu.classList.toggle('show-menu')
		mobIcons.querySelector('.fa-bars').classList.toggle('hide')
		mobIcons.querySelector('.fa-xmark').classList.toggle('hide')
	})

	const swiper = new Swiper('.swiper', {
	  loop: true,
	  pagination: {
	    el: '.swiper-pagination',
	  },
	});

	function highlightCurrentPage() {
    const currentPageUrl = window.location.href.split("/")
    const menuItem = document.querySelector(`#menu a[href="${currentPageUrl[currentPageUrl.length - 1]}"]`);

    if (menuItem) {
        menuItem.classList.add('current');
    }
}

highlightCurrentPage()
	document.getElementById('currentYear').textContent = new Date().getFullYear()
})

