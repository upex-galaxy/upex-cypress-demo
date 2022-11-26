const userNameID = "CiscoMiau5"
const passwordID = '3K$M1o2yZ'

describe('✅BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {

	it('2294 | TC1:  Validar por backend la eliminación de un libro aleatorio de la tienda', () => {
		//Creación de usuario
		let book
		cy.api({
			method: 'GET',
			url: 'https://demoqa.com/BookStore/v1/Books'
		}).then(({body})=>{
			
			//Libro aleatorio
			const bookRandom = Math.floor(Math.random() * 8);
			cy.log(bookRandom)
			const book = body.books[bookRandom].isbn
			
		})
		
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/User',
			body: {
				userName: userNameID,
				password: passwordID,
			},
		}).then(({body}) => {
			
			const userID = body.userID
								cy.api({
						    method: 'DELETE',
						    url: `https://demoqa.com/BookStore/v1/Books?UserId=${userID}`,
							auth: {
								username: userNameID,
								password: passwordID,
							},
						    body: {
						        isbn: book,
						    }
				})
				.then((respuesta) => {
					
					cy.api({
						method: 'DELETE',
						url: `https://demoqa.com/Account/v1/User/${userID}`,
						auth: {
							username: userNameID,
							password: passwordID,
						},
						body: {
							userId: userID,
						},
					})

				}).then((respuesta)=>{expect(respuesta.status).equal(204)})
		})
	})
	xit('2294 | TC2:  Validar por backend la modificación de un libro aleatorio de la tienda', () => {
		//Creación de usuario
		let book
		cy.api({
			method: 'GET',
			url: 'https://demoqa.com/BookStore/v1/Books'
		}).then(({body})=>{
			
			//Libro aleatorio
			const bookRandom = Math.floor(Math.random() * 8);
			cy.log(bookRandom)
			const book = body.books[bookRandom].isbn
			
		})
		
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/User',
			body: {
				userName: userNameID,
				password: passwordID,
			},
		}).then(({body}) => {
			
			const userID = body.userID
								cy.api({
						    method: 'PUT',
						    url: `https://demoqa.com/BookStore/v1/Books/${book}`,
							auth: {
								username: userNameID,
								password: passwordID,
							},
							qs: {
								username: userNameID,
						        isbn: book
								
						    },
						    body: {
								username: userNameID,
						        isbn: book,
								
						    }
				})
				.then((respuesta) => {
					
					cy.api({
						method: 'DELETE',
						url: `https://demoqa.com/Account/v1/User/${userID}`,
						auth: {
							username: userNameID,
							password: passwordID,
						},
						body: {
							userId: userID,
						},
					})

				}).then((respuesta)=>{expect(respuesta.status).equal(204)})
		})
	})
})