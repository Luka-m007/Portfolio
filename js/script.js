const headerSection = document.getElementById('header')
const mainSection = document.getElementById('main')
const liList = document.querySelectorAll('.nav-ul')

// Header section
const titleContainer = document.createElement('div')
const title = document.createElement('h1')
const subtitle = document.createElement('h2')
titleContainer.classList.add('title-container')
title.classList.add('title')
subtitle.classList.add('subtitle')
headerSection.append(titleContainer)
titleContainer.append(title, subtitle)

const headerContent = {
	home: { title: 'Jan Kowalski', subtitle: 'Web-designer' },
	projects: { title: 'My Projects', subtitle: 'Mage with love' },
	about: { title: 'About Me', subtitle: `It's a-me, Jan!` },
	contact: { title: 'Contact Me', subtitle: 'Say hello to me' },
	messages: { title: 'Messages', subtitle: 'Message from the interested person' },
}

function headerTitle(page) {
	title.textContent = headerContent[page].title
	subtitle.textContent = headerContent[page].subtitle
}

// Main section
function homeSection() {
	mainSection.innerHTML = ''
	const homeContainer = document.createElement('div')
	homeContainer.classList.add('wrapper', 'home-container', 'flex-column')
	mainSection.append(homeContainer)

	const homeImg = document.createElement('img')
	const aboutAndSkils = document.createElement('div')
	homeContainer.append(homeImg, aboutAndSkils)

	homeImg.classList.add('hero-img')
	homeImg.setAttribute('src', './img/home-img-desktop.jpg')
	aboutAndSkils.classList.add('about-and-skils-container', 'flex-column')

	const aboutSection = document.createElement('div')
	const mySkillsSection = document.createElement('div')
	aboutAndSkils.append(aboutSection, mySkillsSection)

	const aboutH3 = document.createElement('h3')
	const mySkilsH3 = document.createElement('h3')
	const aboutP = document.createElement('p')
	aboutSection.append(aboutH3, aboutP)
	mySkillsSection.append(mySkilsH3)

	aboutP.classList.add('main-text')
	aboutH3.classList.add('main-section-title')
	mySkilsH3.classList.add('main-section-title')
	aboutSection.classList.add('about-me-section', 'flex-column')
	mySkilsH3.textContent = 'My Skills'
	aboutH3.textContent = 'About me'

	aboutP.textContent =
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
}

// homeSection()

function renderPage(page) {
	switch (page) {
		case 'home':
			;(homeSection(), headerTitle(page))
			break
		case 'projects':
			;(projectsSection(), headerTitle(page))
			break
		case 'about':
			;(aboutSection(), headerTitle(page))
			break
		case 'contact':
			;(contactSection(), headerTitle(page))
			break
		case 'messages':
			;(messagesSection(), headerTitle(page))
			break
	}
}

renderPage('home')

liList.forEach(element => {
	element.addEventListener('click', e => renderPage(e.target.id))
})
