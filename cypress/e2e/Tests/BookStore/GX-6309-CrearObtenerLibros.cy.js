import {seeBook} from '@pages/SeeBook.Page.js'

describe('✅BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
	let isbn, userID, token

	before('precondicion: usuario debe estar logueado', () => {
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/User',
			body: {
				userName: 'Petthrti',
				password: 'Pepe123*'
			},
		}).then((response) => {
			expect(response.status).to.eq(201)
			userID = response.body.userID
			cy.api({
				method: 'POST',
				url: 'https://demoqa.com/Account/v1/GenerateToken',
				body: {
					userName: 'Petthrti',
					password: 'Pepe123*'
				},
			}).then((response) => {
				expect(response.status).to.eq(200)
				token = response.body.token
				cy.log(`token: ${token}`)
                cy.log(`UserID: ${userID}`)
				cy.api({
					method: 'POST',
					url: 'https://demoqa.com/Account/v1/Authorized',
					body: {
						userName: 'Petthrti',
						password: 'Pepe123*'
					},
				}).then((response) => {
					expect(response.status).to.eq(200)
                    expect(response.body).to.be.an('boolean').and.eq(true)
				})
			})
		})
	})

	it('6310 | TC1: Validar visualizar un libro de la tienda', () => {
		cy.api({
			method: 'GET',
			url: 'https://demoqa.com/BookStore/v1/Books',
		}).then((response) => {
			expect(response.status).to.eq(200)
			isbn = response.body.books[1].isbn
			cy.api({
				method: 'GET',
				url: 'https://demoqa.com/BookStore/v1/Book',
				qs: {
					ISBN: isbn,
				},
			}).then((response) => {
				expect(response.status).to.eq(200)
			})
		})
	})

	it('6310 | TC2: Validar guardar libro en su coleccion', () => {
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/BookStore/v1/Books',
            auth: {
                bearer: token
			},
			body: {
				userId: userID,
				collectionOfIsbns: [
					{
						isbn: isbn,
					},
				],
			},
		}).then((response) => {
			expect(response.status).to.eq(201)
		})
	})

	it('6310 | TC3: Validar no poder guardar un libro no existente en la coleccion', () => {
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/BookStore/v1/Books',
			failOnStatusCode: false,
			headers: {
				authorization: 'Basic YXNkOlBlcGUxMjMq',
			},
			body: {
				userId: userID,
				collectionOfIsbns: [
					{
						isbn: isbn,
					},
				],
			},
		}).then((response) => {
			expect(response.status).to.eq(401)
		})
	})

    after('borra usuario', () => {
        cy.api({
			method: 'DELETE',
			url: `https://demoqa.com/Account/v1/User/${userID}`,
            auth: {
                bearer: token
			},
            body: {
				userId: userID
			}
		}).then((response) => {
			expect(response.status).to.eq(204)
		})
    })
})
