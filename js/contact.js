function contactSection() {
	mainSection.innerHTML = ''

	const { wrapper, nameField, emailField, messageField } = contactForm()
	contactBtn(wrapper)

	const btnSendMessage = document.getElementById('btn-send-message')

	nameField.input.addEventListener('input', () => {
		validateContactName(nameField)
	})

	emailField.input.addEventListener('input', () => {
		validateContactEmail(emailField)
	})

	messageField.input.addEventListener('input', () => {
		validateContactMessage(messageField)
	})

	btnSendMessage.addEventListener('click', () => {
		const message = {
			name: nameField.input.value,
			email: emailField.input.value,
			message: messageField.input.value,
		}

		const isValid = validateContactForm(nameField, emailField, messageField)

		if (!isValid) return

		messages.push(message)

		nameField.input.value = ''
		emailField.input.value = ''
		messageField.input.value = ''
	})
}

function contactBtn(wrapper) {
	const btnContainer = document.createElement('div')
	btnContainer.classList.add('btn-container', 'btn-padding-contact')

	const sendMessameBtn = createAddBtn('Send Message', '', '', 'btn-send-message')
	sendMessameBtn.setAttribute('id', 'btn-send-message')
	btnContainer.append(sendMessameBtn)
	wrapper.append(btnContainer)
}

function contactForm() {
	const wrapper = document.createElement('div')
	const formContainer = document.createElement('div')
	const formTitle = document.createElement('h2')
	const form = document.createElement('form')
	const nameEmailContainer = document.createElement('div')

	const {
		formContainer: nameContainer,
		formInput: nameInput,
		formLine: nameLine,
		formPError: nameError,
	} = containerForm(
		'Name',
		'The name must be at least 3 characters long',
		'project-title',
		'nameContainer',
		'Your Name',
		{
			formContainer: ['modal-container', 'contact-container'],
			formLabel: ['modal-title'],
			formInput: ['modal-placeholder'],
			formLine: ['project-line', 'project-line-active'],
			formPError: ['error-message-undispl', 'modal-error-text'],
		},
	)

	const {
		formContainer: emailContainer,
		formInput: emailInput,
		formLine: emailLine,
		formPError: emailError,
	} = containerForm(
		'Email',
		'Please enter a valid email address',
		'project-title',
		'emailContainer',
		'email@example.com',
		{
			formContainer: ['modal-container', 'contact-container'],
			formLabel: ['modal-title'],
			formInput: ['modal-placeholder'],
			formLine: ['project-line', 'project-line-active'],
			formPError: ['error-message-undispl', 'modal-error-text'],
		},
	)

	const {
		formContainer: messageContainer,
		formInput: messageInput,
		formLine: messageLine,
		formPError: messageError,
	} = containerForm(
		'Message',
		'The message cannot be empty',
		'project-title',
		'messageContainer',
		'Hello, my name is . . .',
		{
			formContainer: ['modal-container', 'contact-container'],
			formLabel: ['modal-title'],
			formInput: ['modal-placeholder'],
			formLine: ['project-line', 'project-line-active'],
			formPError: ['error-message-undispl', 'modal-error-text'],
		},
	)

	wrapper.classList.add('wrapper')
	formContainer.classList.add('form-container')
	formTitle.classList.add('form-title')
	nameEmailContainer.classList.add('name-email-container')
	formTitle.textContent = 'Contact me'
	mainSection.append(wrapper)
	wrapper.append(formContainer)
	formContainer.append(formTitle, form)
	nameEmailContainer.append(nameContainer, emailContainer)
	form.append(nameEmailContainer, messageContainer)

	return {
		nameField: { input: nameInput, line: nameLine, error: nameError, container: nameContainer },
		emailField: { input: emailInput, line: emailLine, error: emailError, container: emailContainer },
		messageField: { input: messageInput, line: messageLine, error: messageError, container: messageContainer },
		wrapper,
	}
}

function validateContactName({ input, line, error, container }) {
	const name = input.value.length
	if (name < 3 || name > 20) {
		error.textContent =
			name < 3 ? 'The name must be at least 3 characters long.' : 'The name must not exceed 20 characters.'
		return setFieldValidity(false, line, error, container)
	}
	return setFieldValidity(true, line, error, container)
}

function validateContactEmail({ input, line, error, container }) {
	const emailValid =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			input.value,
		)
	if (!emailValid) {
		error.textContent = 'Please enter a valid email address.'
	}
	return setFieldValidity(emailValid, line, error, container)
}

function validateContactMessage({ input, line, error, container }) {
	const message = input.value.length
	if (message === 0 || message > 100) {
		error.textContent = message === 0 ? 'The message cannot be empty.' : 'The message must not exceed 100 characters.'
		return setFieldValidity(false, line, error, container)
	}
	return setFieldValidity(true, line, error, container)
}

function validateContactForm(nameField, emailField, messageField) {
	const isNameValid = validateContactName(nameField)
	const isEmailValid = validateContactEmail(emailField)
	const isMessageValid = validateContactMessage(messageField)
	return isNameValid && isEmailValid && isMessageValid
}
