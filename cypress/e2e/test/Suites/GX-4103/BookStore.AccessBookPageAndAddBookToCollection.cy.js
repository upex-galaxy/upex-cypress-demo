import {faker} from '@faker-js/faker'
const userName = faker.internet.email()
const password = faker.internet.password() + '@@'

describe('GX-4103 BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
	let isbn

	before('Create User', () => {
		// Create user (by API POST)
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/User',
			body: {
				userName: userName,
				password: password,
			},
		}).then((response) => {
			expect(response.status).to.equal(201)
			expect(response.body.username).to.be.equal(userName)
			userID = response.body.userID
			cy.log(`Username: ${userName} -- Password: ${password} -- UserID: ${userID}`)
		})

		// Verificate user created (by IU)
		cy.visit('https://demoqa.com/login')
		cy.get('input[id="userName"]').type(userName)
		cy.get('input[id="password"]').type(password)
		cy.get('[id="login"]').click()
		cy.get('[id="userName-value"]').invoke('text').should('eq', userName)
	})

	beforeEach('Generate token, authorization and go to Library', () => {
		//getting session cookies (API POST)
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/GenerateToken',
			body: {
				userName: userName,
				password: password,
			},
		}).then(({body}) => {
			expect(body.status).to.be.equal('Success')
			expect(body.result).to.be.equal('User authorized successfully.')
			expire = body.expires
			token = body.token
			cy.log(`Token: ${token} -- Expires: ${expire}`)
			// Authentication & navigate to Books (API POST)
			cy.api({
				method: 'POST',
				url: 'https://demoqa.com/Account/v1/Authorized',
				body: {
					userName: userName,
					password: password,
				},
			}).then(({body}) => {
				expect(body).to.be.an('boolean').and.eq(true)
				cy.setCookie('userID', userID)
				cy.setCookie('userName', userName)
				cy.setCookie('token', token)
				cy.setCookie('expires', expire)
			})
			// Verify session (by UI)
			cy.visit('https://demoqa.com/books')
			cy.get('[id="userName-value"]').invoke('text').should('eq', userName)
		})
	})

	it('4104 | TC1: User access the PDP of a book', () => {
		//Access PDP of the first book of the list 
		cy.get('a[href*="/books?book="]').eq(0).click()
		// Capture book isbm from url (UI)
		cy.url().then((url) => {
			isbn = url.split('?book=')[1]
			cy.get("div[id='ISBN-wrapper']").find("label[id='userName-value']").invoke('text').should('eq', isbn)
			// Verify book exists (By API GET)
			cy.api('https://demoqa.com/Bookstore/v1/Book/' + isbn).should((response) => {
				expect(response.status).to.eq(200)
			})
		})
	})

	it('4104 | TC2: The user obtains a Book from the Bookstore', () => {
		//Access PDP of the first book of the list 
		cy.get('a[href*="/books?book="]').eq(0).click()
		// Capture book isbm from url (UI)
		cy.url().then((url) => {
			isbn = url.split('?book=')[1]
			// Add book to my collection (API POST)
			cy.api({
				method: 'POST',
				url: 'https://demoqa.com/BookStore/v1/Books',
				auth: {
					bearer: token,
				},
				body: {
					userId: userID,
					collectionOfIsbns: [
						{
							isbn: isbn,
						},
					],
				},
			}).then(() => {
				// verify by UI that the added book is present in the collection
				cy.contains('Login').click()
				cy.get('[id=submit]').click()
				cy.get('a[href*="profile"').click()
				cy.get(`a[href*="profile?book=${isbn}"]`).should('be.visible')
			})
		})
	})

	after(() => {
		//User deletion
		cy.api({
			method: 'DELETE',
			url: 'https://demoqa.com/Account/v1/User/' + userID,
			auth: {
				username: userName,
				password: password,
			},
			body: {
				userId: userID,
			},
		}).then((respuesta) => {
			expect(respuesta.status).equal(204)
		})
	})
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
