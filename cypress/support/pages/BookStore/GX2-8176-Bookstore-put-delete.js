import data from '../../../fixtures/data/GX2-8176-Bookstore-put-delete.json';
let response1, response2, response3;
class BookStore {
	precondition() {
		return cy
			.api({
				failOnStatusCode: false,
				method: 'POST',
				url: `${data.dom}/Account/v1/GenerateToken`,
				body: {
					userName: data.username,
					password: data.password,
				},
			})
			.then(response => {
				Cypress.env('token', response.body.token);
				response1 = response;
				return cy.api({
					failOnStatusCode: false,
					method: 'POST',
					url: `${data.dom}/Account/v1/Authorized`,
					body: {
						userName: data.username,
						password: data.password,
					},
				});
			})
			.then(response => {
				response2 = response;
				return cy.api({
					method: 'POST',
					url: `${data.dom}/BookStore/v1/Books`,
					auth: {
						username: data.username,
						password: data.password,
					},
					body: {
						userId: data.userID,
						collectionOfIsbns: [
							{
								isbn: data.idBook1,
							},
							{
								isbn: data.idBook2,
							},
						],
					},
				});
			})
			.then(response => {
				response3 = response;
				Cypress.env('book1', response.body.books[0].isbn);
				Cypress.env('book2', response.body.books[1].isbn);
				return [response1, response2, response3];
			});
	}

	deleteBook({ isbn: isbn = '', userId: userId = '' }) {
		return cy
			.api({
				failOnStatusCode: false,
				method: 'DELETE',
				url: `${data.dom}/BookStore/v1/Book`,
				auth: {
					username: data.username,
					password: data.password,
				},
				body: {
					isbn: isbn == '' ? '' : isbn,
					userId: userId == '' ? '' : userId,
				},
			})
			.then(response => {
				return response;
			});
	}

	deleteAllBooks({ userId = '' }) {
		userId = userId == '' ? '' : userId;

		return cy
			.api({
				failOnStatusCode: false,
				method: 'DELETE',
				url: `${data.dom}/BookStore/v1/Books?UserId=${userId}`,
				auth: {
					username: data.username,
					password: data.password,
				},
			})
			.then(response => {
				return response;
			});
	}
}

export const BookStorePage = new BookStore();
