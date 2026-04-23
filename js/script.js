const headerSection = document.getElementById('header')
const mainSection = document.getElementById('main')
const liList = document.querySelectorAll('.nav-li')

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

// renderPage('home')
// updateActiveLink('home')
liList.forEach(element => {
	element.addEventListener('click', e => {
		const page = e.target.id
		renderPage(page)
		updateActiveLink(page)
	})
})
