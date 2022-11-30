const the = require('../../../../fixtures/DOM/toolsqa/BookStoreApplications/GX-2285/userID.Page.json')
const username = 'DiazDaniel'
const password = '3K$M1o2yZ'

describe(the.Test.US, () => {
	before(() => {
		// CREAR USUARIO:
		cy.api({
			method: 'POST',
			url: the.Account.createUser,
			body: {
				userName: username,
				password: password,
			},
		}).then((response) => {
			expect(response.status).to.equal(201)
			expect(response.body.username).to.be.equal(username)
			userID = response.body.userID
			cy.log(userID)

			// GENERAR TOKEN:
			cy.api({
				method: 'POST',
				url: the.Account.generateToken,
				body: {
					userName: username,
					password: password,
				},
			}).then(({body}) => {
				expect(body.token).to.be.an('string')
				expect(body.status).to.be.equal('Success')
				expect(body.result).to.be.equal('User authorized successfully.')

				// GET TOKEN AND SAVE IT:
				token = body.token
				cy.log(token)

				// VERIFICAR AUTH:
				cy.api({
					method: 'POST',
					url: the.Account.verifyAuth,
					body: {
						userName: username,
						password: password,
					},
				}).then(({body}) => {
					expect(body).to.be.an('boolean')
					expect(body).to.be.true

					// OBTENER COLLECTION:
					cy.api({
						url: the.Profile.GetCollection + userID,
						auth: {
							bearer: token,
							userName: username,
							password: password,
						},
					}).then(({body}) => {
						expect(body.books).to.be.empty
					})
					// GET ONE BOOK FROM STORE:
					cy.api({
						url: the.Store.AllBooks,
					}).then(({body}) => {
						expect(body.books.length).to.be.greaterThan(1)

						let random = () => Math.floor(Math.random() * body.books.length - 1) + 1
						const forStore = random()
						let forUser = random()
						while (forStore == forUser) {
							forUser = random()
						}
						const storeBook = body.books[forStore].isbn
						cy.log(`This is the Book I want: ${storeBook}`)
						const userBook = body.books[forUser].isbn
						cy.log(`This is the Book I will get: ${userBook}`)

						// TAKE A BOOK FROM STORE:
						cy.api({
							method: 'POST',
							url: the.Store.TakeBook,
							auth: {
								bearer: token,
							},
							body: {
								userId: userID,
								collectionOfIsbns: [
									{
										isbn: userBook,
									},
								],
							},
						}).then(({body}) => {
							cy.log(`This one should be my current Book in Collection:${userBook}`)
							const obj = body.books.find(({isbn}) => isbn === userBook)
							cy.log(obj)
							expect(obj).include({
								isbn: userBook,
							})
							cy.log(`I Sent ${userBook} and I received Response body: ${obj.isbn}`)
						})

						cy.log('SAVE VARIABLES IN FIXTURE FILES')
						cy.writeFile('cypress/fixtures/DOM/toolsqa/BookStoreApplications/GX-2285/userData.Page.json', {
							userID: userID,
							token: token,
							storeIsbn: storeBook,
							userIsbn: userBook,
						})
					})
				})
			})
		})
	})
	it(the.Test.TC2, () => {
		cy.fixture('DOM/toolsqa/BookStoreApplications/GX-2285/userData.Page').then((data) => {
			// VERIFICAR AUTH
			cy.api({
				method: 'POST',
				url: the.Account.verifyAuth,
				body: {
					userName: username,
					password: password,
				},
			}).then(({body}) => {
				expect(body).to.be.an('boolean')
				expect(body).to.be.true

				// OBTENER LA COLLECTION DEBERÍA HABER UN LIBRO:
				cy.api({
					url: the.Profile.GetCollection + data.userID,
					auth: {
						bearer: data.token,
						userName: username,
						password: password,
					},
				}).then(({body}) => {
					expect(body.books).to.be.not.empty
					const desiredBook = data.storeIsbn
					const currentBook = data.userIsbn
					const books = body.books.map(({isbn}) => isbn)
					expect(currentBook).to.be.oneOf(books)
					expect(desiredBook).to.not.be.oneOf(books)
				})

				// TC: CAMBIAR EL LIBRO DE COLLECTION:
				cy.api({
					method: 'PUT',
					url: the.Store.SwitchBook + data.userIsbn, // This is my current Book in Collection
					auth: {
						bearer: data.token,
					},
					body: {
						userId: data.userID,
						isbn: data.storeIsbn, // The Store's Book I want to change with my current Book
					},
				}).then((response) => {
					expect(response.status).to.equal(200)
					const updatedBook = data.storeIsbn
					const removedBook = data.userIsbn
					const books = response.body.books.map(({isbn}) => isbn)
					expect(updatedBook).to.be.oneOf(books)
					expect(removedBook).to.not.be.oneOf(books)
				})
			})
		})
	})
	it(the.Test.TC1, () => {
		cy.fixture('DOM/toolsqa/BookStoreApplications/GX-2285/userData.Page').then((data) => {
			// VERIFICAR AUTH
			cy.api({
				method: 'POST',
				url: the.Account.verifyAuth,
				body: {
					userName: username,
					password: password,
				},
			}).then(({body}) => {
				expect(body).to.be.an('boolean')
				expect(body).to.be.true
				// OBTENER LA COLLECTION DEBERÍA HABER UN LIBRO:
				cy.api({
					url: the.Profile.GetCollection + data.userID,
					auth: {
						bearer: data.token,
						userName: username,
						password: password,
					},
				}).then(({body}) => {
					expect(body.books).to.be.not.empty
					const currentBook = data.storeIsbn
					const books = body.books.map(({isbn}) => isbn)
					expect(currentBook).to.be.oneOf(books)
				})
				//Borrar Libro de la colección
				cy.api({
					method: 'DELETE',
					url: the.Store.DeleteBook + data.userID,
					auth: {
						bearer: data.token,
						username: username,
						password: password,
					},
					body: {
						isbn: data.storeIsbn,
					},
				}).then((response) => {
					expect(response.status).to.equal(204)
				})
			})
		})
	})
	after(() => {
		cy.fixture('DOM/toolsqa/BookStoreApplications/GX-2285/userData.Page').then((data) => {
			//Eliminación de Usuario
			cy.api({
				method: 'DELETE',
				url: the.Account.DeleteUser + data.userID,
				auth: {
					username: username,
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
})
