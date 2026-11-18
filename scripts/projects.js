document.addEventListener('DOMContentLoaded', () => {
	let projects = [
		{
			"title": "Облік звернень для сфери послуг",
			"subtitle": "Завдання: зібрати звернення в одному місці. Рішення: CRM зі статусами, історією контактів і нагадуваннями.",
			"link": "services.html#servicesList",
			"image": "images/project1.png",
			"alt": "Ілюстрація проєкту обліку звернень",
		},
		{
			"title": "Вебвітрина для роздрібного бізнесу",
			"subtitle": "Завдання: допомогти клієнту обрати товар. Рішення: зручний каталог із пошуком та зрозумілою структурою.",
			"link": "services.html#servicesList",
			"image": "images/project2.jpg",
			"alt": "Ілюстрація проєкту вебвітрини",
		},
		{
			"title": "Облік процесів для виробництва",
			"subtitle": "Завдання: узгодити роботу відділів. Рішення: єдині дані про замовлення, матеріали та етапи виконання.",
			"link": "services.html#servicesList",
			"image": "images/project3.jpg",
			"alt": "Ілюстрація проєкту обліку виробничих процесів",
		},
		{
			"title": "Аналітика для мережі послуг",
			"subtitle": "Завдання: бачити стан бізнесу. Рішення: зведені показники звернень, завантаження та продажів.",
			"link": "services.html#servicesList",
			"image": "images/project4.jpg",
			"alt": "Ілюстрація проєкту бізнес-аналітики",
		},

	]

	function createElement(item, index) {
		const servicesList = document.getElementById('servicesList')

		const serviceRow = document.createElement('div')
		serviceRow.className = 'row services-section-row d-flex mb-20'

		const serviceItem = document.createElement('div')
		serviceItem.className = 'row-item services-section-item d-flex v-centered'

		const serviceIcon = document.createElement('div')
		serviceIcon.className = 'services-item-icon'
		serviceIcon.style.backgroundImage = `url(${item.icon})`
		serviceIcon.style.backgroundRepeat = 'no-repeat'
		serviceIcon.style.backgroundPosition = 'center'
		serviceIcon.style.backgroundSize = 'cover'

		const serviceTitle = document.createElement('div')
		serviceTitle.className = 'services-item-title uppercase'
		serviceTitle.textContent = item.title

		const serviceSubitle = document.createElement('div')
		serviceSubitle.className = 'services-item-text'
		serviceSubitle.textContent = item.subtitle

		const serviceBtn = document.createElement('a')
		serviceBtn.className = 'btn btn__blue'
		serviceBtn.href = item.link
		serviceBtn.textContent = 'Напрями послуг'

		const serviceImg = document.createElement('div')
		serviceImg.className = 'row-item services-section-item'

		const serviceImgContent = document.createElement('img')
		serviceImgContent.src = item.image
		serviceImgContent.alt = item.alt
		

		serviceImg.append(serviceImgContent)

		serviceItem.append(serviceIcon)
		serviceItem.append(serviceTitle)
		serviceItem.append(serviceSubitle)
		serviceItem.append(serviceBtn)
		
		serviceRow.append(serviceItem)
		serviceRow.append(serviceImg)


		servicesList.append(serviceRow)
	}

	projects.forEach((element, index) => {
	  createElement(element, index)
	  
	});
	
})

