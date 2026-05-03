const headerSection = document.getElementById('header')
const mainSection = document.getElementById('main')
const liList = document.querySelectorAll('.nav-li')
const hamburgerMenu = document.querySelector('.nav-hamburger-menu')
const footerYear = document.querySelector('.footer-year')

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
	const navMobileContainer = document.querySelector('.nav-mobile-container')
	hamburgerMenu.classList.toggle('nav-menu-mobile')
	navMobileContainer.classList.toggle('nav-mobile-shown')

	liList.forEach(item => {
		item.addEventListener('click', () => {
			navMobileContainer.classList.remove('nav-mobile-shown')
		})
	})
})

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
	subtitle.classList.toggle('subtitle-mobile', page === 'projects')
}

function updateActiveLink(page) {
	liList.forEach(element => {
		element.classList.remove('active')
		if (element.id === page) {
			element.classList.add('active')
		}
	})
}

function renderPage(page) {
	switch (page) {
		case 'home':
			;(homeSection(), carusel(), headerTitle(page))
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

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

renderPage('home')
updateActiveLink('home')
liList.forEach(element => {
	element.addEventListener('click', e => {
		const page = e.target.id
		renderPage(page)
		updateActiveLink(page)
	})
})
currentYear()
