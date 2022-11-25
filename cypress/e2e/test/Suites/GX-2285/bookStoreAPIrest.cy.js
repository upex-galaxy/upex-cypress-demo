const userNameID = "Kanesme"
const passwordID = '3K$M1o2yZ'

describe('✅BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {

	it('2294 | TC1:  Validar por backend la eliminación de un libro de la tienda', () => {
		//Creación de usuario
		cy.api({
			method: 'GET',
			url: 'https://demoqa.com/BookStore/v1/Books'
		}).then(({body})=>{
			
			const bookRandom = Math.floor(Math.random() * body.books.lenght);
			cy.log(bookRandom)
			const miau2 = body.books[3].isbn
			cy.log(miau2)
		})
		const miau = "cisco miauuuu"
		cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/User',
			body: {
				userName: userNameID,
				password: passwordID,
			},
		}).then(({body}) => {
			// //Generando Token (al pedo porque no se utiliza)
			cy.log(miau)
			const userID = body.userID
			// cy.log(userID)
			// cy.api({
			// 	method: 'POST',
			// 	url: 'https://demoqa.com/Account/v1/GenerateToken',
			// 	body: {
			// 		userName: userNameID,
			// 		password: passwordID,
			// 	},
			// })
			// 	.then(({body}) => {
			// 		// Autorizando Usuario (?)
			// 		const token = body.token
			// 		cy.api({
			// 			method: 'POST',
			// 			url: 'https://demoqa.com/Account/v1/Authorized',
			// 			body: {
			// 				userName: userNameID,
			// 				password: passwordID,
			// 			},
			// 		}).then((response) => {
			// 			cy.log(response)
			// 		})
			// 	}).then(()=>{
					cy.api({
						    method: 'DELETE',
						    url: `https://demoqa.com/BookStore/v1/Books?UserId=${userID}`,
							auth: {
								username: userNameID,
								password: passwordID,
							},
						    body: {
						        isbn: '9781449325862',
						    }
				})
				.then(() => {
					
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
				})
		})
	})
})
// })

// cy.api({
//     method: 'GET',
//     url: 'https://demoqa.com/BookStore/v1/Books',
// })
//     .then(({ body }) => {
//         cy.log(body)
//     })
// cy.api({
//     method: 'DELETE',
//     url: 'https://demoqa.com/BookStore/v1/Books?UserId=KaneHaru',
//     qs: {
//         isbn: '9781449325862',
//     }
// })
