document.addEventListener('DOMContentLoaded', () => {
	let articles = [
		{
			"title": "З чого почати цифрові зміни",
			"subtitle": "Спочатку опишіть процес і визначте мету. Це допоможе обрати інструменти під потребу, а не навпаки.",
			"link": "services.html#servicesList",
			"image": "images/blog1.jpg",
			"alt": "Ілюстрація до нотатки про цифрові зміни",
		},
		{
			"title": "Коли бізнесу потрібна CRM",
			"subtitle": "Якщо звернення губляться між чатами й таблицями, спільна історія контактів допоможе впорядкувати роботу.",
			"link": "services.html#servicesList",
			"image": "images/blog2.jpg",
			"alt": "Ілюстрація до нотатки про CRM",
		},
		{
			"title": "Як обрати процес для автоматизації",
			"subtitle": "Почніть із повторюваних дій, для яких зрозумілі правила, відповідальні та джерела даних.",
			"link": "services.html#servicesList",
			"image": "images/blog3.jpg",
			"alt": "Ілюстрація до нотатки про автоматизацію",
		},
		{
			"title": "Які показники збирати у звіт",
			"subtitle": "Почніть з управлінського запитання. Визначте потрібні показники, джерела та період оновлення даних.",
			"link": "services.html#servicesList",
			"image": "images/blog4.jpg",
			"alt": "Ілюстрація до нотатки про бізнес-звіти",
		},
		{
			"title": "Навіщо навчати команду після запуску",
			"subtitle": "Узгодьте робочі сценарії та відповідальних. Інструкції допомагають застосовувати новий інструмент послідовно.",
			"link": "services.html#servicesList",
			"image": "images/blog1.jpg",
			"alt": "Ілюстрація до нотатки про навчання команди",
		},

	]

	function createElement(item) {
		const blogList = document.getElementById('blogList')

		const blogItem = document.createElement('div')
		blogItem.className = 'blog-row-item col col-1-2 col-1-4'

		const blogImg = document.createElement('div')
		blogImg.className = 'blog-img'

		let image = document.createElement('img')
		image.src = item.image
		image.alt = item.alt

		const blogContent = document.createElement('div')
		blogContent.className = 'blog-content d-flex'

		let blogTitle = document.createElement('div')
		blogTitle.textContent = item.title
		blogTitle.className = 'blog-title bold'

		let blogSubtitle = document.createElement('div')
		blogSubtitle.textContent = item.subtitle
		blogTitle.className = 'blog-subtitle main-text'

		const blogBtn = document.createElement('a')
		blogBtn.className = 'btn btn__blue'
		blogBtn.href = item.link
		blogBtn.textContent = 'Переглянути послуги'

		blogImg.append(image)

		blogContent.append(blogSubtitle)
		blogContent.append(blogTitle)
		blogContent.append(blogBtn)

		blogItem.append(blogImg)
		blogItem.append(blogContent)

		blogList.append(blogItem)
	}

	articles.slice(0,4).forEach((element) => {
	  createElement(element)
	});
	
})

