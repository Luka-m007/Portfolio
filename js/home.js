const skills = [
	{ language: 'HTML', experience: 4 },
	{ language: 'CSS', experience: 4 },
	{ language: 'JavaScript', experience: 3 },
	{ language: 'Git', experience: 3 },
	{ language: 'Figma', experience: 2 },
	{ language: 'Chrome', experience: 5 },
	{ language: 'VSCode', experience: 5 },
	{ language: 'GitHub', experience: 4 },
]

function mainSectionImg(homeContainer) {
	const homeImg = document.createElement('img')
	homeImg.classList.add('hero-img')
	homeImg.setAttribute('src', './img/home-img-desktop.jpg')
	homeContainer.append(homeImg)
}

function mainWrapperContainer() {
	const homeContainer = document.createElement('div')
	homeContainer.classList.add('wrapper', 'home-container', 'flex-column')
	mainSection.append(homeContainer)
	return homeContainer
}

// Main section - HOME
function homeSection() {
	mainSection.innerHTML = ''
	const homeContainer = mainWrapperContainer()

	mainSectionImg(homeContainer)
	const aboutAndSkils = document.createElement('div')
	homeContainer.append(aboutAndSkils)

	aboutAndSkils.classList.add('about-and-skils-container', 'flex-column')

	const aboutSection = document.createElement('div')
	const mySkillsSection = document.createElement('div')
	aboutAndSkils.append(aboutSection, mySkillsSection)

	const aboutH3 = document.createElement('h3')
	const mySkilsH3 = document.createElement('h3')
	const aboutP = document.createElement('p')
	const mySkillsContainer = document.createElement('div')
	aboutSection.append(aboutH3, aboutP)
	mySkillsSection.append(mySkilsH3, mySkillsContainer)


	aboutP.classList.add('main-text')
	aboutH3.classList.add('main-section-title')
	aboutSection.classList.add('about-me-section', 'flex-column')
	aboutH3.textContent = 'About me'
	
	mySkilsH3.classList.add('main-section-title')
	mySkilsH3.textContent = 'My Skills'
	mySkillsSection.classList.add('my-skills-section')
	mySkillsContainer.classList.add('my-skills-container')

	
	aboutP.textContent =
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'

	
	skills.forEach(skill => {
		const skillsItem = document.createElement('div')
		mySkillsContainer.append(skillsItem)
		const skillsImg = document.createElement('img')
		const skillsImgItem = document.createElement('div')
		skillsItem.append(skillsImg, skillsImgItem)
		const skillsTitle = document.createElement('h4')
		skillsImgItem.append(skillsTitle)
		const skillsExperienceDots = document.createElement('div')
		skillsImgItem.append(skillsExperienceDots)
	
		for (let i = 0; i < 5; i++) {
			const dot = document.createElement('div')
			dot.classList.add('dot')
			skillsExperienceDots.append(dot)
		}

		
		const skillsExperienceYears = document.createElement('h5')
		skillsImgItem.append(skillsExperienceYears)
		skillsExperienceYears.textContent = `${skill.experience} years`

		
		const experienceLevel = skillsExperienceYears.textContent.split(' ')[0]
		const dots = skillsExperienceDots.querySelectorAll('.dot')
		dots.forEach((dot, index) => {
			if (index < experienceLevel) {
				dot.classList.add('filled')
			}
		})

		
		skillsImgItem.classList.add('skills-img-item')
		skillsImg.setAttribute('src', `./img/${skill.language}-symbol.png`)
		skillsImg.setAttribute('alt', skill.language)
		skillsItem.classList.add('skills-item')
		skillsImg.classList.add('skills-img')
		skillsTitle.classList.add('skills-title')
		skillsTitle.textContent = skill.language
		skillsExperienceDots.classList.add('skills-experience-dots')
		skillsExperienceYears.classList.add('skills-experience-years')
	})
}

function caruseleContent() {
	const caruseleWrapper = document.createElement('div')
	const caruselContainer = document.createElement('div')
	const caruselSlider = document.createElement('div')
	const caruselBtnContainer = document.createElement('div')
	const btnSquareLeft = document.createElement('div')
	const btnSquareRight = document.createElement('div')
	const btnLeftUp = document.createElement('img')
	const btnRightDown = document.createElement('img')

	caruseleWrapper.classList.add('carusele-wrapper')
	caruselContainer.classList.add('carusel-container')
	caruselSlider.classList.add('carusel-slider')
	caruselBtnContainer.classList.add('carusel-btn-container')
	btnSquareLeft.classList.add('btn-carusel')
	btnSquareRight.classList.add('btn-carusel')
	btnLeftUp.classList.add('btn-left', 'btn-up')
	btnRightDown.classList.add('btn-right', 'btn-down')
	btnSquareLeft.setAttribute('id', 'left-btn')
	btnSquareRight.setAttribute('id', 'right-btn')
	btnLeftUp.setAttribute('src', './img/Arrow-right.png')
	btnLeftUp.setAttribute('alt', 'Strzałka skierowowana w lewą stronę')
	btnRightDown.setAttribute('src', './img/Arrow-right.png')
	btnRightDown.setAttribute('alt', 'Strzałka skierowowana w lewą stronę')

	mainSection.append(caruseleWrapper, caruselBtnContainer)
	caruseleWrapper.append(caruselContainer)
	caruselContainer.append(caruselSlider)
	caruselBtnContainer.append(btnSquareLeft, btnSquareRight)
	btnSquareLeft.append(btnLeftUp)
	btnSquareRight.append(btnRightDown)

	return {
		caruseleWrapper,
		caruselContainer,
		caruselSlider,
		caruselBtnContainer,
		btnSquareLeft,
		btnSquareRight,
		btnLeftUp,
		btnRightDown,
	}
}

// function caruseleCards(caruselSlider) {
// 	for (let i = 0; i < 3; i++) {
// 		createProjectCard(caruselSlider, projects[i])
// 	}
// }

function caruseleCards(caruselSlider) {
	projects.forEach(project => {
		createProjectCard(caruselSlider, project)
	})
}

function deleteBtnsCarusel(caruselBtnContainer) {
	if (projects.length > 3) {
		caruselBtnContainer.style.display = 'flex'
	}
}

function carusel() {
	const { caruselSlider, caruselBtnContainer } = caruseleContent()
	caruseleCards(caruselSlider)
	deleteBtnsCarusel(caruselBtnContainer)

	let startIndex = 0
	updateCarouselCards(startIndex)

	const prevBtn = document.getElementById('left-btn')
	const nextBtn = document.getElementById('right-btn')

	nextBtn.addEventListener('click', () => {
		startIndex = (startIndex + 1) % projects.length
		updateCarouselCards(startIndex)
	})

	prevBtn.addEventListener('click', () => {
		startIndex = (startIndex - 1 + projects.length) % projects.length
		updateCarouselCards(startIndex)
	})
}

function updateCarouselCards(startIndex) {
	const cards = document.querySelectorAll('.project-card')
	cards.forEach((card, i) => {
		const project = projects[(startIndex + i) % projects.length]
		const cardTitle = card.querySelector('.project-card-title')
		const ul = card.querySelector('.project-card-ul')
		cardTitle.textContent = project.title
		ul.innerHTML = ''
		project.technologies.forEach(tech => {
			const li = document.createElement('li')
			li.classList.add('project-card-li')
			li.textContent = tech
			ul.append(li)
		})
	})
}

// function carusel() {
// 	const {
// 		caruseleWrapper,
// 		caruselContainer,
// 		caruselSlider,
// 		caruselBtnContainer,
// 		btnSquareLeft,
// 		btnSquareRight,
// 		btnLeftUp,
// 		btnRightDown,
// 	} = caruseleContent()
// 	caruseleCards(caruselSlider)
// 	// caruselLogic(caruselSlider)

// 	let startIndex = 0
// 	updateCarouselCards(startIndex)

// 	const prevBtn = document.getElementById('left-btn')
// 	const nextBtn = document.getElementById('right-btn')

// 	nextBtn.addEventListener('click', () => {
// 		startIndex = startIndex >= projects.length - 1 ? 0 : startIndex + 1
// 		updateCarouselCards(startIndex)
// 	})

// 	prevBtn.addEventListener('click', () => {
// 		startIndex = startIndex <= 0 ? projects.length - 1 : startIndex - 1
// 		updateCarouselCards(startIndex)
// 	})
// }

// function caruselLogic(caruselSlider) {
// 	const slide = document.querySelector('.carusel-slider')
// 	const project = document.querySelectorAll('.project-card')
// 	const prevBtn = document.getElementById('left-btn')
// 	const nextBtn = document.getElementById('right-btn')

// 	const allCards = Array.from(caruselSlider.children)
// 	const cloneCount = 3

// 	let counter = cloneCount
// 	const gap = 41
// 	const size = project[0].clientWidth + gap

// 	allCards.slice(0, cloneCount).forEach(card => {
// 		caruselSlider.append(card.cloneNode(true))
// 	})
// 	allCards.slice(-cloneCount).forEach(card => {
// 		caruselSlider.prepend(card.cloneNode(true))
// 	})

// 	slide.style.transform = `translateX(${-size * counter}px)`

// 	const projectLength = document.querySelectorAll('.project-card').length

// 	slide.addEventListener('transitionend', () => {
// 		if (counter >= projectLength - cloneCount) {
// 			slide.style.transition = 'none'
// 			counter = cloneCount
// 			slide.style.transform = `translateX(${-size * counter}px)`
// 		}
// 		if (counter <= cloneCount - 1) {
// 			slide.style.transition = 'none'
// 			counter = projectLength - cloneCount - 1
// 			slide.style.transform = `translateX(${-size * counter}px)`
// 		}
// 	})

// 	nextBtn.addEventListener('click', () => {
// 		if (counter >= projectLength - cloneCount) return
// 		slide.style.transition = 'transform 0.5s ease-in-out'
// 		counter++
// 		slide.style.transform = `translateX(${-size * counter}px)`
// 	})

// 	prevBtn.addEventListener('click', () => {
// 		if (counter <= cloneCount - 1) return
// 		slide.style.transition = 'transform 0.5s ease-in-out'
// 		counter--
// 		slide.style.transform = `translateX(${-size * counter}px)`
// 	})
// }
