describe('✅BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
	let isbn, userID, token

	before('precondicion: usuario debe estar logueado', () => {
		cy.fixture('data/createObtenerLibros').then((the) => {
			cy.api({
				method: 'POST',
				url: the.url.createUser,
				failOnStatusCode: false,
				body: {
					userName: the.username,
					password: the.password,
				},
			}).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.body.username).to.be.equal(the.username)
				userID = response.body.userID
			})

            cy.visit('https://demoqa.com/login')
            cy.get('#userName').type(the.username)
            cy.get('#password').type(the.username)

			cy.api({
				method: 'POST',
				url: the.url.generateToken,
				failOnStatusCode: false,
				body: {
					userName: the.username,
					password: the.password,
				},
			}).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body.status).to.be.equal('Success')
				expect(response.body.result).to.be.equal('User authorized successfully.')
				token = response.body.token
				cy.api({
					method: 'POST',
					url: the.url.authorized,
					body: {
						userName: the.username,
						password: the.password,
					},
				}).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.body).to.be.an('boolean').and.eq(true)
				})
			})
		})
	})

	it('6310 | TC1: Validar visualizar un libro de la tienda', () => {
		cy.fixture('data/createObtenerLibros').then((the) => {
			cy.api({
				method: 'GET',
				url: the.url.getBooks,
			}).then((response) => {
				expect(response.status).to.eq(200)
				isbn = response.body.books[1].isbn
				cy.api({
					method: 'GET',
					url: the.url.getBook,
					qs: {
						ISBN: isbn,
					},
				}).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.body.isbn).to.be.equal(isbn)
				})
			})
		})
	})

	it('6310 | TC2: Validar guardar libro en su coleccion', () => {
		cy.fixture('data/createObtenerLibros').then((the) => {
			cy.api({
				method: 'POST',
				url: the.url.saveBook,
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
			}).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.body.books[0].isbn).to.be.equal(isbn)
			})
		})
	})

	it('6310 | TC3: Validar no poder guardar un libro no existente en la coleccion', () => {
		cy.fixture('data/createObtenerLibros').then((the) => {
			cy.api({
				method: 'POST',
				url: the.url.saveBook,
				failOnStatusCode: false,
				body: {
					userId: userID,
					collectionOfIsbns: [
						{
							isbn: the.noExistBook,
						},
					],
				},
			}).then((response) => {
				expect(response.status).to.eq(401)
				expect(response.body.message).to.be.equal('User not authorized!')
			})
		})
	})

	after('borra usuario', () => {
		cy.api({
			method: 'DELETE',
			url: `https://demoqa.com/Account/v1/User/${userID}`,
			auth: {
				bearer: token,
			},
			body: {
				userId: userID,
			},
		}).then((response) => {
			expect(response.status).to.eq(204)
		})
	})
})
