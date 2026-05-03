function aboutSection() {
	mainSection.innerHTML = ''
	const homeContainer = mainWrapperContainer()
	mainSectionImg(homeContainer)

	const aboutMyBackground = document.createElement('div')
	const aboutMyHobbies = document.createElement('div')
	const btnContainer = document.createElement('div')
	const btnContact = createAddBtn('Contact Me', './img/Arrow-right.png', 'Strzałka w prawo', 'btn-contact')

	aboutMyBackground.classList.add('about-me-section', 'flex-column')
	aboutMyHobbies.classList.add('about-me-section', 'flex-column')
	btnContainer.classList.add('btn-container')

	mainSection.append(btnContainer)
	homeContainer.append(aboutMyBackground, aboutMyHobbies)
	btnContainer.append(btnContact)

	const aboutBackgroungTitle = document.createElement('h3')
	const aboutHobbiesTitle = document.createElement('h3')
	const aboutBackgroungText = document.createElement('p')
	const aboutHobbiesText = document.createElement('p')

	aboutBackgroungTitle.classList.add('main-section-title')
	aboutHobbiesTitle.classList.add('main-section-title')
	aboutBackgroungText.classList.add('main-text', 'about-text')
	aboutHobbiesText.classList.add('main-text', 'about-text')
	btnContainer.classList.add('remove-padding')
	btnContact.setAttribute('id', 'contact-btn')

	aboutBackgroungTitle.textContent = 'My background'
	aboutHobbiesTitle.textContent = 'My hobbies and interests'
	aboutBackgroungText.textContent = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`

	aboutHobbiesText.textContent = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`

	aboutMyBackground.append(aboutBackgroungTitle, aboutBackgroungText)
	aboutMyHobbies.append(aboutHobbiesTitle, aboutHobbiesText)

	handleContactBtn()
}

function handleContactBtn() {
	const contactBtn = document.getElementById('contact-btn')

	contactBtn.addEventListener('click', () => {
		renderPage('contact')
		updateActiveLink('contact')
	})
}
