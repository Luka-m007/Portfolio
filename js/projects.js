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
	const addBtnProject = createAddBtn('Add project', './img/plus-symbol.png', 'Symbol plusa', 'btn-plus')
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
function createAddBtn(text, src = null, alt = null, className) {
	const btn = document.createElement('button')

	btn.classList.add('add-btn')
	btn.textContent = text

	if (src) {
		const btnPlus = document.createElement('img')
		if (className) btnPlus.classList.add(className)
		btnPlus.setAttribute('src', src)
		btnPlus.setAttribute('alt', alt)
		btn.append(btnPlus)
	}

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

// Generic helper - reusable in any form validation
function setFieldValidity(isTrue, line, errorText, container) {
	line.classList.toggle('error', !isTrue)
	line.classList.toggle('project-line-active', isTrue)
	errorText.classList.toggle('error-message', !isTrue)
	errorText.classList.toggle('error-message-undispl', isTrue)
	container.classList.toggle('modal-container-no-margin', !isTrue)
	return isTrue
}

// Function validation title in modal
function validationProjectTitile(projectTitile, projectLineFirst, projectTitleError, titileContainer) {
	const title = projectTitile.value.length
	if (title < 3 || title > 30) {
		projectTitleError.textContent =
			title < 3 ? 'The title must be at least 3 characters long.' : 'The title must not exceed 30 characters.'
		return setFieldValidity(false, projectLineFirst, projectTitleError, titileContainer)
	}
	return setFieldValidity(true, projectLineFirst, projectTitleError, titileContainer)
}

// Function validation technologies in modal
function validationProjectTechnologies(
	projectTechnologies,
	projectLineSecond,
	projectTechnologiesError,
	technologiesContainer,
) {
	const technologies = projectTechnologies.value.length > 0
	technologiesContainer.classList.toggle('modal-container-tech', technologies)
	return setFieldValidity(technologies, projectLineSecond, projectTechnologiesError, technologiesContainer)
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

function containerForm(label, pError, name, id, placeholder, classes = {}) {
	const formContainer = document.createElement('div')
	const formLabel = document.createElement('label')
	const formInput = document.createElement('input')
	const formLine = document.createElement('div')
	const formPError = document.createElement('p')

	if (classes.formContainer) formContainer.classList.add(...classes.formContainer)
	if (classes.formLabel) formLabel.classList.add(...classes.formLabel)
	if (classes.formInput) formInput.classList.add(...classes.formInput)
	if (classes.formLine) formLine.classList.add(...classes.formLine)
	if (classes.formPError) formPError.classList.add(...classes.formPError)

	formLabel.setAttribute('for', id)

	formInput.setAttribute('type', 'text')
	formInput.setAttribute('id', id)
	formInput.setAttribute('name', name)
	formInput.setAttribute('placeholder', placeholder)

	formLabel.textContent = label
	formPError.textContent = pError

	formContainer.append(formLabel, formInput, formLine, formPError)

	return { formContainer, formLabel, formInput, formLine, formPError }
}

function createModalContent(modal) {
	const modalForm = document.createElement('form')
	modalForm.classList.add('modal-form')

	const {
		formContainer: titileContainer,
		formInput: projectTitleInput,
		formLine: projectLineFirst,
		formPError: projectTitleError,
	} = containerForm(
		'Project title',
		'The title must be at least 3 characters long.',
		'project-title',
		'projectTitle',
		'Project title',
		{
			formContainer: ['modal-container'],
			formLabel: ['modal-title'],
			formInput: ['modal-placeholder'],
			formLine: ['project-line', 'project-line-active'],
			formPError: ['error-message-undispl', 'modal-error-text'],
		},
	)

	const {
		formContainer: technologiesContainer,
		formInput: projectTechnologiesInput,
		formLine: projectLineSecond,
		formPError: projectTechnologiesError,
	} = containerForm(
		'Technologies',
		'Please add some technologies.',
		'project-technologies',
		'projectTechnologies',
		'html,css,javascript',
		{
			formContainer: ['modal-container'],
			formLabel: ['modal-title'],
			formInput: ['modal-placeholder'],
			formLine: ['project-line', 'project-line-active'],
			formPError: ['error-message-undispl', 'modal-error-text'],
		},
	)

	modal.append(modalForm)
	modalForm.append(titileContainer, technologiesContainer)

	// Button
	const btnsContainer = document.createElement('div')
	const addBtn = createAddBtn('Add project', './img/plus-symbol.png', 'Symbol plusa', 'btn-plus')

	btnsContainer.classList.add('btn-modal-container')
	addBtn.setAttribute('type', 'button')

	modal.append(btnsContainer)
	btnsContainer.append(addBtn)

	return {
		titileContainer,
		projectTitleInput,
		projectLineFirst,
		projectTitleError,
		technologiesContainer,
		projectTechnologiesInput,
		projectLineSecond,
		projectTechnologiesError,
		addBtn,
	}
}

// Function show modal
function showModal(projectCardsContainer) {
	const { modal, modalBackgroung, deleteXSymbol } = createModalForm()
	const {
		titileContainer,
		projectTitleInput,
		projectLineFirst,
		projectTitleError,
		technologiesContainer,
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
