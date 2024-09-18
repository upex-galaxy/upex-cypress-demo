class libroBookStore {
	createUser(username: string, password: string, status: number) {
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
	loginUser(username: string, password: string, status: number) {
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
			});
	}

	getUser(userId: string, status: number) {
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
				return [response, response.body.userId];
			});
	}

	authorizeUser(username: string, password: string) {
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

	addListOfBooks(userId: string, isbn: string) {
		return cy
			.request({
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
			});
	}
}

export const librosApiPage = new libroBookStore();
