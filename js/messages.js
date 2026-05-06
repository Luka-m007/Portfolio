const messages = [
	{
		name: 'Karol',
		email: 'karol@gmail.com',
		message: 'Hello, I am interested in your work. Can you tell me more about your projects?',
	},
	{ name: 'Anna', email: 'anna@gmail.com', message: 'Hi, I would like to know more about your services.' },
	{ name: 'Piotr', email: 'piotr@gmail.com', message: 'Good day, I am looking for collaboration opportunities.' },
]

function messagesSection() {
	mainSection.innerHTML = ''
	const container = messagesContainer()
	messages.forEach(message => {
		createMessageText(container, message)
	})
}

function messagesContainer() {
	const wrapper = document.createElement('div')
	const messageContainer = document.createElement('div')
	wrapper.classList.add('wrapper')
	messageContainer.classList.add('messages-container')

	wrapper.append(messageContainer)
	mainSection.append(wrapper)
	return messageContainer
}

function createMessageText(messagesContainer, message) {
	const messageContain = document.createElement('div')
	const messageName = document.createElement('span')
	const messageEmail = document.createElement('span')
	const messageContent = document.createElement('span')

	messageContain.classList.add('message-contain')
	messageName.classList.add('message-span')
	messageEmail.classList.add('message-span')
	messageContent.classList.add('message-span')

	messageName.textContent = `Name: ${message.name}`
	messageEmail.textContent = `Email: ${message.email}`
	messageContent.textContent = `Message: ${message.message}`

	messagesContainer.append(messageContain)
	messageContain.append(messageName, messageEmail, messageContent)
}
