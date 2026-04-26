const projects = [
	{ title: 'Test', technologies: ['Test1', 'test2'] },
	{ title: 'Test1', technologies: ['Test3', 'test4'] },
	{ title: 'Test2', technologies: ['Test5', 'test6'] },
	{ title: 'Test3', technologies: ['Test7', 'test8'] },
]

const projectAlert = document.createElement('span')
projectAlert.textContent = 'There are no projects to display'
projectAlert.classList.add('project-alert')

//Function create project section
function projectsSection() {
	mainSection.innerHTML = ''

	const projectsContainer = document.createElement('div')
	const btnsContainer = document.createElement('div')
	const addBtnProject = createAddBtn('Add project')
	const projectCardsContainer = document.createElement('div')

	projectsContainer.classList.add('wrapper', 'projects-container')
	btnsContainer.classList.add('btn-container')
	projectCardsContainer.classList.add('project-cards-container')
	mainSection.append(projectsContainer)

	projectsContainer.append(btnsContainer, projectCardsContainer)
	btnsContainer.append(addBtnProject)

	projects.forEach(project => createProjectCard(projectCardsContainer, project))

	//Event listener
	addBtnProject.addEventListener('click', () => {
		showModal(projectCardsContainer)
	})
}

// Function create Btn
function createAddBtn(text) {
	const btn = document.createElement('button')
	const btnPlus = document.createElement('img')

	btn.classList.add('add-btn')
	btnPlus.classList.add('btn-plus')
	btn.textContent = text
	btnPlus.setAttribute('src', './img/plus-symbol.png')
	btnPlus.setAttribute('alt', 'Sybmol plusa')

	btn.append(btnPlus)

	return btn
}

//Function create project card
function createProjectCard(projectCardsContainer, project) {
	// Project card
	const projectCard = document.createElement('div')
	const projectImg = document.createElement('div')

	projectCard.classList.add('project-card')
	projectImg.classList.add('project-img')

	projectCardsContainer.append(projectCard)
	projectCard.append(projectImg)

	// Delete icon
	const deleteSquare = document.createElement('div')
	const deleteIcon = document.createElement('img')

	deleteSquare.classList.add('delete-square')
	deleteIcon.classList.add('delete-icon')

	deleteIcon.setAttribute('src', './img/wastebasket-symbol.png')
	deleteIcon.setAttribute('alt', 'Symbol kosza na śmieci, który służy do usuwania projektu')

	projectImg.append(deleteSquare)
	deleteSquare.append(deleteIcon)

	// Project Content
	const projectCardTitle = document.createElement('h3')
	const projectCardUl = document.createElement('ul')
	projectCardTitle.classList.add('project-card-title')
	projectCardUl.classList.add('project-card-ul')

	projectCardTitle.textContent = project.title
	project.technologies.forEach(el => {
		const projectCardLi = document.createElement('li')
		projectCardLi.classList.add('project-card-li')
		projectCardLi.textContent = el
		projectCardUl.append(projectCardLi)
	})

	projectImg.append(projectCardTitle, projectCardUl)

	// Event listener for delete icon
	deleteIcon.addEventListener('click', () => {
		const index = projects.findIndex(el => el === project)
		projects.splice(index, 1)
		deleteProjectCard(projectCard)

		// Message, no projects
		if (projects.length === 0) {
			projectCardsContainer.parentElement.append(projectAlert)
		}
	})
}

//Function delete project card
function deleteProjectCard(projectCard) {
	projectCard.remove()
}

// Function validation title in modal
function validationProjectTitile(projectTitile, projectLineFirst, projectTitleError, titileContainer) {
	if (projectTitile.value.length < 3) {
		projectLineFirst.classList.remove('project-line-active')
		projectLineFirst.classList.add('error')
		projectTitleError.classList.add('error-message')
		projectTitleError.classList.remove('error-message-undispl')
		titileContainer.style.margin = '0'

		return false
	} else if (projectTitile.value.length > 30) {
		projectLineFirst.classList.remove('project-line-active')
		projectLineFirst.classList.add('error')
		projectTitleError.textContent = 'The title must not exceed 30 characters.'
		projectTitleError.classList.add('error-message')
		projectTitleError.classList.remove('error-message-undispl')
		titileContainer.style.margin = '0'
		return false
	} else {
		projectLineFirst.classList.remove('error')
		projectLineFirst.classList.add('project-line-active')
		projectTitleError.classList.remove('error-message')
		projectTitleError.classList.add('error-message-undispl')
		titileContainer.style.margin = '0 0 3.75rem'
		return true
	}
}

// Function validation technologies in modal
function validationProjectTechnologies(
	projectTechnologies,
	projectLineSecond,
	projectTechnologiesError,
	technologiesContainer,
) {
	if (projectTechnologies.value.length <= 0) {
		projectLineSecond.classList.remove('project-line-active')
		projectLineSecond.classList.add('error')
		projectTechnologiesError.classList.remove('error-message-undispl')
		projectTechnologiesError.classList.add('error-message')
		technologiesContainer.style.margin = '0'
		return false
	} else {
		projectLineSecond.classList.remove('error')
		projectLineSecond.classList.add('project-line-active')
		projectTechnologiesError.classList.remove('error-message')
		projectTechnologiesError.classList.add('error-message-undispl')
		technologiesContainer.style.margin = '0 0 3.215rem'
		return true
	}
}

// Function validation form in modal
function vaidationProjectForm(
	projectTitile,
	projectTechnologies,
	projectTitleError,
	projectLineFirst,
	projectLineSecond,
	projectTechnologiesError,
	titileContainer,
	technologiesContainer,
) {
	const titleValid = validationProjectTitile(projectTitile, projectLineFirst, projectTitleError, titileContainer)
	const technologiesValid = validationProjectTechnologies(
		projectTechnologies,
		projectLineSecond,
		projectTechnologiesError,
		technologiesContainer,
	)
	return titleValid && technologiesValid
}

function createModalForm() {
	// Modal background
	const modalBackgroung = document.createElement('div')
	modalBackgroung.classList.add('modal-background')
	document.body.append(modalBackgroung)

	// Modal Container
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modalBackgroung.append(modal)

	//Modal close
	const deleteXSymbol = document.createElement('img')
	deleteXSymbol.setAttribute('src', './img/x-symbol.png')
	deleteXSymbol.setAttribute('alt', 'Symbol X, który służy do zamykania okna modalnego')
	deleteXSymbol.classList.add('delete-x-symbol')
	modal.append(deleteXSymbol)

	return { modal, modalBackgroung, deleteXSymbol }
}

function createModalContent(modal) {
	// Modal content

	const modalForm = document.createElement('form')
	const titileContainer = document.createElement('div')
	const projectTitleLabel = document.createElement('label')
	const projectTitleInput = document.createElement('input')
	const projectLineFirst = document.createElement('div')
	const projectTitleError = document.createElement('p')
	const technologiesContainer = document.createElement('div')
	const projectTechnologiesLabel = document.createElement('label')
	const projectTechnologiesInput = document.createElement('input')
	const projectLineSecond = document.createElement('div')
	const projectTechnologiesError = document.createElement('p')

	modalForm.classList.add('modal-form')

	titileContainer.classList.add('modal-container')

	projectTitleLabel.setAttribute('for', 'project-title')
	projectTitleLabel.textContent = 'Project title'
	projectTitleLabel.classList.add('modal-title')

	projectTitleInput.setAttribute('type', 'text')
	projectTitleInput.setAttribute('id', 'projectTitle')
	projectTitleInput.setAttribute('name', 'project-title')
	projectTitleInput.setAttribute('placeholder', 'Project title')
	projectTitleInput.classList.add('modal-placeholder')

	projectLineFirst.classList.add('project-line', 'project-line-active')

	projectTitleError.classList.add('error-message-undispl', 'modal-error-text')
	projectTitleError.textContent = 'The title must be at least 3 characters long.'

	technologiesContainer.classList.add('modal-container')

	projectTechnologiesLabel.setAttribute('for', 'project-technologies')
	projectTechnologiesLabel.textContent = 'Technologies'
	projectTechnologiesLabel.classList.add('modal-title')

	projectTechnologiesInput.setAttribute('type', 'text')
	projectTechnologiesInput.setAttribute('id', 'projectTechnologies')
	projectTechnologiesInput.setAttribute('name', 'project-technologies')
	projectTechnologiesInput.setAttribute('placeholder', 'html,css,javascript')
	projectTechnologiesInput.classList.add('modal-placeholder')

	projectLineSecond.classList.add('project-line', 'project-line-active')

	projectTechnologiesError.classList.add('error-message-undispl', 'modal-error-text')
	projectTechnologiesError.textContent = 'Please add some technologies.'

	modal.append(modalForm)
	modalForm.append(titileContainer, technologiesContainer)
	titileContainer.append(projectTitleLabel, projectTitleInput, projectLineFirst, projectTitleError)
	technologiesContainer.append(
		projectTechnologiesLabel,
		projectTechnologiesInput,
		projectLineSecond,
		projectTechnologiesError,
	)

	// Button
	const btnsContainer = document.createElement('div')
	const addBtn = createAddBtn('Add project')

	btnsContainer.classList.add('btn-modal-container')
	addBtn.setAttribute('type', 'submit')

	modal.append(btnsContainer)
	btnsContainer.append(addBtn)

	return {
		modalForm,
		titileContainer,
		projectTitleLabel,
		projectLineFirst,
		projectTitleError,
		technologiesContainer,
		projectTechnologiesLabel,
		projectTitleInput,
		projectTechnologiesInput,
		projectLineSecond,
		projectTechnologiesError,
		addBtn,
	}
}

// Function show modal
function showModal(projectCardsContainer) {
	const { modal, modalBackgroung, deleteXSymbol, modalForm } = createModalForm()
	const {
		titileContainer,
		projectTitleLabel,
		projectLineFirst,
		projectTitleError,
		technologiesContainer,
		projectTechnologiesLabel,
		projectTitleInput,
		projectTechnologiesInput,
		projectLineSecond,
		projectTechnologiesError,
		addBtn,
	} = createModalContent(modal)

	// EventListener close modal
	deleteXSymbol.addEventListener('click', () => {
		modalBackgroung.remove()
	})

	// EventListener add project
	projectTitleInput.addEventListener('input', () => {
		validationProjectTitile(projectTitleInput, projectLineFirst, projectTitleError, titileContainer)
	})

	projectTechnologiesInput.addEventListener('input', () => {
		validationProjectTechnologies(
			projectTechnologiesInput,
			projectLineSecond,
			projectTechnologiesError,
			technologiesContainer,
		)
	})
	addBtn.addEventListener('click', () => {
		const project = {
			title: projectTitleInput.value,
			technologies: projectTechnologiesInput.value.split(',').map(el => el.trim()),
		}

		const isValid = vaidationProjectForm(
			projectTitleInput,
			projectTechnologiesInput,
			projectTitleError,
			projectLineFirst,
			projectLineSecond,
			projectTechnologiesError,
			titileContainer,
			technologiesContainer,
		)

		if (!isValid) return

		projects.push(project)
		createProjectCard(projectCardsContainer, project)
		projectAlert.remove()
		modalBackgroung.remove()
	})
}
