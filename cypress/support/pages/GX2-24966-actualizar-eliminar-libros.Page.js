class BookStore {
	createUser(username, password, status) {
		return cy
			.request({
				failOnStatusCode: false,
				url: 'https://demoqa.com/Account/v1/User',
				method: 'POST',

				body: {
					userName: username,
					password: password
				}
			})
			.then(response => {
				expect(response.status).to.equal(status);
				return response.body.userID;
			});
	}

	token(username, password, status) {
		return cy
			.request({
				failOnStatusCode: false,
				url: 'https://demoqa.com/Account/v1/GenerateToken',
				method: 'POST',
				body: {
					userName: username,
					password: password
				}
			})
			.then(response => {
				expect(response.status).to.equal(status);
				Cypress.env('token', response.body.token);
				return response;
			});
	}

	authorizeUser(username, password) {
		return cy
			.request({
				failOnStatusCode: false,
				url: 'https://demoqa.com/Account/v1/Authorized',
				method: 'POST',
				headers: {
					Authorization: `Bearer ${Cypress.env('token')}`
				},
				body: {
					userName: username,
					password: password
				}
			})
			.then(response => {
				expect(response.status).to.equal(200);
				return response;
			});
	}

	getUser(userId, status) {
		return cy
			.request({
				failOnStatusCode: false,
				url: `https://demoqa.com/Account/v1/User/${userId}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${Cypress.env('token')}`
				}
			})
			.then(response => {
				expect(response.status).to.equal(status);
				return response, response.body.userId;
			});
	}

	getBooks() {
		return cy
			.request({
				url: 'https://demoqa.com/BookStore/v1/Books',
				method: 'GET'
			})
			.then(response => {
				expect(response.status).to.equal(200);
				return response;
			});
	}

	addBookList(userId, isbn) {
		return cy
			.request({
				failOnStatusCode: false,
				url: 'https://demoqa.com/BookStore/v1/Books',
				method: 'POST',
				headers: {
					Authorization: `Bearer ${Cypress.env('token')}`
				},
				body: {
					userId: userId,
					collectionOfIsbns: [
						{
							isbn: isbn
						}
					]
				}
			})
			.then(response => {
				expect(response.status).to.equal(201);
				return response;
			});
	}

	deleteBook(isbn, userId, status) {
		return cy
			.request({
				failOnStatusCode: false,
				url: 'https://demoqa.com/BookStore/v1/Book',
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${Cypress.env('token')}`
				},
				body: {
					isbn: isbn,
					userId: userId
				}
			})
			.then(response => {
				expect(response.status).to.equal(status);
				return response;
			});
	}

	updateBook(userId, ISBN, isbn, status) {
		cy.request({
			failOnStatusCode: false,
			url: `https://demoqa.com/BookStore/v1/Books/${ISBN}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${Cypress.env('token')}`
			},
			body: {
				userId: userId,
				isbn: isbn
			}
		}).then(response => {
			expect(response.status).to.equal(status);
			return response;
		});
	}
}
export const bookStoreDeleteUpdatePage = new BookStore();
