class bookStore {
	get = {
		newUserButton: () => cy.get('#newUser'),
		reCaptcha: () => cy.get('[class="recaptcha-checkbox-border"]'),
		userNameInput: () => cy.get('#userName'),
		passwordInput: () => cy.get('#password'),
		registerButton: () => cy.get('#register'),
		loginButton: () => cy.get('#login'),
		logoutButton: () => cy.get('[class*="btn-primary"]').contains('Log out'),
		errorMsgLogin: () => cy.get('#name'),
		userNameValueAfterLogin: () => cy.get('#userName-value'),
		foundRowsInUserPage: () => cy.get('[class=rt-noData]'),
	};
	userLoginFrontEnd({ username }) {
		this.get.userNameInput().type(username);
		this.get.passwordInput().type('Bad*12345');
		this.get.loginButton().click();
	}
	registerUserByAPI({ username, Password }) {
		cy.log('Create New user');
		let response = [];
		cy.api({
			method: 'POST',

			url: 'https://demoqa.com/Account/v1/User',
			failOnStatusCode: false,
			body: {
				userName: username,
				password: Password,
			},
		}).then(Response => {
			const status = Response.status;
			const id = Response.body.userID;
			const user = Response.body.username;
			const Message = Response.body.message;
			response.push(status);
			response.push(id);
			response.push(user);
			response.push(Message);
		});
		return response;
	}
	getUserByAPI({ userID, token }) {
		cy.log('Get User By API');
		let response = [];
		cy.api({
			method: 'GET',

			url: `https://demoqa.com/Account/v1/User/${userID}`,
			failOnStatusCode: false,
			auth: {
				bearer: token,
			},
			body: {
				userId: userID,
			},
		}).then(Response => {
			const status = Response.status;
			const Message = Response.body.userId;
			const Books = Response.body.books;

			response.push(status);
			response.push(Message);
			response.push(Books);
		});
		return response;
	}
	authorizedUserByAPI({ username, token }) {
		cy.log('Authorized user By API');
		let response = [];
		cy.api({
			method: 'POST',

			url: 'https://demoqa.com/Account/v1/Authorized',
			failOnStatusCode: false,
			auth: {
				bearer: token,
			},
			body: {
				userName: username,
				password: 'Bad*12345',
			},
		}).then(Response => {
			const status = Response.status;
			response.push(status);
		});
		return response;
	}
	GenerateTokenByAPI({ username }) {
		cy.log('generate Token By API');
		let response = [];
		cy.api({
			method: 'POST',

			url: 'https://demoqa.com/Account/v1/GenerateToken',
			failOnStatusCode: false,
			body: {
				userName: username,
				password: 'Bad*12345',
			},
		}).then(Response => {
			const status = Response.status;
			response.push(status);
			const token = Response.body.token;
			response.push(token);
			const Status = Response.body.status;
			response.push(Status);
			const result = Response.body.result;
			response.push(result);
		});
		return response;
	}
	DeleteUserByAPI({ userID, token }) {
		cy.log('Delete User By API');
		let response = [];
		cy.api({
			method: 'DELETE',

			url: `https://demoqa.com/Account/v1/User/${userID}`,
			failOnStatusCode: false,
			auth: {
				bearer: token,
			},
			body: {
				userId: userID,
			},
		}).then(Response => {
			const status = Response.status;
			response.push(status);
		});
		return response;
	}
}
export const BookStore = new bookStore();
