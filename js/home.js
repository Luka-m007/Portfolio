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

// Main section - HOME
function homeSection() {
	mainSection.innerHTML = ''
	const homeContainer = document.createElement('div')
	homeContainer.classList.add('wrapper', 'home-container', 'flex-column')
	mainSection.append(homeContainer)

	const homeImg = document.createElement('img')
	const aboutAndSkils = document.createElement('div')
	homeContainer.append(homeImg, aboutAndSkils)

	//img
	homeImg.classList.add('hero-img')
	homeImg.setAttribute('src', './img/home-img-desktop.jpg')
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

	//about me classlist
	aboutP.classList.add('main-text')
	aboutH3.classList.add('main-section-title')
	aboutSection.classList.add('about-me-section', 'flex-column')
	aboutH3.textContent = 'About me'
	//my skills classlist
	mySkilsH3.classList.add('main-section-title')
	mySkilsH3.textContent = 'My Skills'
	mySkillsSection.classList.add('my-skills-section')
	mySkillsContainer.classList.add('my-skills-container')

	//about me text
	aboutP.textContent =
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'

	//items container skills
	skills.forEach(skill => {
		//skills item container
		const skillsItem = document.createElement('div')
		mySkillsContainer.append(skillsItem)
		const skillsImg = document.createElement('img')
		const skillsImgItem = document.createElement('div')
		skillsItem.append(skillsImg, skillsImgItem)
		const skillsTitle = document.createElement('h4')
		skillsImgItem.append(skillsTitle)
		const skillsExperienceDots = document.createElement('div')
		skillsImgItem.append(skillsExperienceDots)
		//skills experience dots
		for (let i = 0; i < 5; i++) {
			const dot = document.createElement('div')
			dot.classList.add('dot')
			skillsExperienceDots.append(dot)
		}

		//skills experience years
		const skillsExperienceYears = document.createElement('h5')
		skillsImgItem.append(skillsExperienceYears)
		skillsExperienceYears.textContent = `${skill.experience} years`

		//skills experience dots active
		const experienceLevel = skillsExperienceYears.textContent.split(' ')[0]
		const dots = skillsExperienceDots.querySelectorAll('.dot')
		dots.forEach((dot, index) => {
			if (index < experienceLevel) {
				dot.classList.add('filled')
			}
		})

		//classlist
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
