class BookStoreAPIUser {
	createUser(username, password) {
		return cy
			.request({
				failOnStatusCode: false,
				url: '/Account/v1/User',
				method: 'POST',

				body: {
					userName: username,
					password: password
				}
			})
			.then(response => {
				expect(response.status).to.equal(201);
				return response, response.body.userId;
			});
	}

	getUser(userId, status) {
		cy.request({
			failOnStatusCode: false,
			url: `/Account/v1/User/${userId}`,
			method: 'GET'
		}).then(response => {
			expect(response.status).to.equal(200);
			return response, response.body.userId;
		});
	}

	deleteUser(userId) {
		cy.request({
			failOnStatusCode: false,
			url: `/Account/v1/User/${userId}`,
			method: 'DELETE'
		}).then(response => {
			expect(response.status).to.equal(200);
		});
	}

	authorizeUser(username, password) {
		return cy
			.request({
				failOnStatusCode: false,
				url: '/Account/v1/Authorized',
				method: 'POST',
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

	loginUser(username, password) {
		return cy
			.request({
				failOnStatusCode: false,
				url: '/Account/v1/GenerateToken',
				method: 'POST',
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
}
export const bookStoreApiUserPage = new BookStoreAPIUser();
