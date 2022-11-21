describe('US GX-2269 | TS: ✅BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
		before('Precondicion: User is loged at ToolsQA', () => {
			const username = 'LauraMontaño',
				password='L@ur@1998';
			// Caching session when logging in via API
			/* cy.session(username, () => {
				cy.request({
					method: 'POST',
					url: 'https://demoqa.com/Account/v1/GenerateToken',
					body: { "userName": username,"password": password },
				}).then(({ body }) => {
					window.localStorage.setItem('authToken', body.token)
				})
			}) */
			// Caching session when logging in via page visit
			/* cy.session(username, () => {
				cy.visit('https://demoqa.com/login')
				cy.get('#userName').type(username)
				cy.get('#password').type(password)
				cy.get('#login').click()
				//cy.url().should('contain', '/login-successful')
			}) */
			/* cy.visit('https://demoqa.com/login')
			cy.get('#userName').type(username)
			cy.get('#password').type(password)
			cy.get('#login').click()
			cy.url().should('contain',"profile")
			cy.visit('https://demoqa.com/books') */
		})
		it('2270 | TC1: Verify create and get book (FRONT-FRONT)', () => {
			cy.visit('https://demoqa.com/login')
			cy.get('#userName').type(username)
			cy.get('#password').type(password)
			cy.get('#login').click()
			cy.url().should('contain',"profile")
			cy.visit('https://demoqa.com/books')
			cy.fixture("DOM/toolsqa/BookStoreApplications/creatBook.Page").then((the)=>{
				const book = Math.floor(Math.random() * 8)
				cy.get('[role="rowgroup"]')
				.eq(book)
				.within(() => {
					cy.get('a').click()
				})
				cy.contains("div" ,"Title : ").siblings().then(($element)=>{
					const title = $element.text()
					cy.contains('Add To Your Collection').click()
					cy.on('window:alert', (text) => {
						expect(text).to.contains(the.msj.bookAdded);
					});
						cy.visit('https://demoqa.com/profile')
						cy.contains(title).should('be.visible')
					
				})
			})
			
		})
		it.only('2270 | TC2:  Verify create and get a book (BACK-FRONT)', () => {
			cy.fixture("DOM/toolsqa/BookStoreApplications/createBook.Page").then((the)=>{
				//We need to verify if the user is alredy register 
				cy.userIsRegister()
				//This request get the list of books in the Book Store then we store this list on books variable
				cy.request({
					method: 'GET',
					url: 'https://demoqa.com/BookStore/V1/Books',
				}).then(({body})=>{
					//Precondicion We suppose the user list of books is empty
					const index = Math.floor(Math.random() * body.books.length)+1
					cy.request({
						method: 'DELETE',
						failOnStatusCode: false,
						url: 'https://demoqa.com/Account/v1/Books',
						body: { "userId": the.user.id }
					})
					cy.log(body.books[index])
					//This request create a book in the user list of books
					cy.request({
					method: 'POST',
					url: 'https://demoqa.com/Account/v1/Books',
					body: {
						"userId": the.user.id,
						"collectionOfIsbns": [
							{
								"isbn": body.books[index].isbn
							}
						]
					}}).then(({body})=>{
						const book = books.filter(el=>el.isbn=body.isbn)
						cy.visit(the.url.profile)
						cy.contains(book.title).should('be.visible')
					})
				})
				
			})
		})
		it('2270 | TC3:  Verify create and get an existing book (FRONT-BACK)', () => {
			//Get the user list of books and try to add in the FRONT this book
			cy.fixture("DOM/toolsqa/BookStoreApplications/createBook.Page").then((the)=>{
				cy.request({
					method: 'POST',
					failOnStatusCode: false,
					url: `https://demoqa.com/Account/v1/User/${the.user.id}`,
					body: {"userId": the.user.id},
				}).then(({body})=>{
					cy.visit('https://demoqa.com/login')
					cy.get('#userName').type(username)
					cy.get('#password').type(password)
					cy.get('#login').click()
					cy.url().should('contain',"profile")
					cy.visit('https://demoqa.com/books')
					const book = Math.floor(Math.random() * body.length)
					cy.get('[role="rowgroup"]')
					.eq(book)
					.within(() => {
						cy.get('a').click()
					})
					cy.contains("div" ,"Title : ").siblings().then(($element)=>{
						const title = $element.text()
						cy.contains('Add To Your Collection').click()
						cy.on('window:alert', (text) => {
							expect(text).to.contains(the.msj.bookExist);
						});
							cy.visit('https://demoqa.com/profile')
							cy.contains(title).should('be.visible')
						
					})
				})
			})
		})
		it('2270 | TC4: Verify create and get an non-existent book (BACK-BACK)', () => {
			//Try to create an unexisting book throw request and try to get the same book 
		})
})

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
