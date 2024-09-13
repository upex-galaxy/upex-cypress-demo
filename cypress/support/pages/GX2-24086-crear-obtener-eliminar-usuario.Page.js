/* eslint-disable @typescript-eslint/naming-convention */
class BookStoreAPIUser {
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

	getUser(userId, status) {
		cy.request({
			failOnStatusCode: false,
			url: `https://demoqa.com/Account/v1/User/${userId}`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${Cypress.env('token')}`
			}
		}).then(response => {
			expect(response.status).to.equal(status);
			return response, response.body.userId;
		});
	}

	deleteUser(userId, status) {
		cy.request({
			failOnStatusCode: false,
			url: `https://demoqa.com/Account/v1/User/${userId}`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${Cypress.env('token')}`
			}
		}).then(response => {
			expect(response.status).to.equal(status);
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

	loginUser(username, password, status) {
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
}
export const bookStoreApiUserPage = new BookStoreAPIUser();
