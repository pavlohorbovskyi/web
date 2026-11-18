document.addEventListener('DOMContentLoaded', () => {
	let services = [
		{
			"title": "Цифрова стратегія",
			"icon": "images/services/service1.png",
			"subtitle": "Аналізуємо процеси та формуємо план цифрових змін: пріоритети, інструменти й критерії результату.",
			"link": "about.html",
			"image": "images/marketing.jpg",
			"alt": "Ілюстрація планування цифрового розвитку",
		},
		{
			"title": "Автоматизація процесів",
			"icon": "images/services/service2.png",
			"subtitle": "Поєднуємо CRM і робочі сервіси, налаштовуємо рух звернень, завдання та обмін даними.",
			"link": "projects.html",
			"image": "images/marketing2.jpg",
			"alt": "Ілюстрація автоматизації робочих процесів",
		},
		{
			"title": "Вебрішення для бізнесу",
			"icon": "images/services/service3.png",
			"subtitle": "Проєктуємо сайти та вебінструменти зі зрозумілою навігацією для клієнтів і команди.",
			"link": "projects.html",
			"image": "images/marketing3.jpg",
			"alt": "Ілюстрація вебрішень для бізнесу",
		},
		{
			"title": "Бізнес-аналітика",
			"icon": "images/services/service3.png",
			"subtitle": "Узгоджуємо показники, поєднуємо джерела даних і створюємо звіти для управлінських рішень.",
			"link": "about.html",
			"image": "images/marketing4.png",
			"alt": "Ілюстрація аналізу бізнес-даних",
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
		if (index == 0) {
			serviceBtn.className = 'btn btn__violet'
		} else {
			serviceBtn.className = 'btn btn__blue'
		}
		serviceBtn.href = item.link
		serviceBtn.textContent = 'Про рішення'

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

	services.forEach((element, index) => {
	  createElement(element, index)
	  
	});
	
})

