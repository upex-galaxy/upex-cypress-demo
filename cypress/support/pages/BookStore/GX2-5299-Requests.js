class Requests {
	SignUp(username, password) {
		return cy
			.request({
				method: 'POST',
				url: '/Account/v1/User',
				failOnStatusCode: false,
				body: {
					userName: username,
					password: password,
				},
			})
			.then(response => {
				return response;
			});
	}
	generateToken(username, password) {
		return cy
			.request({
				method: 'POST',
				url: '/Account/v1/GenerateToken',
				body: {
					userName: username,
					password: password,
				},
			})
			.then(response => {
				return response;
			});
	}
	checkUserContent(token, userid) {
		return cy
			.request({
				method: 'GET',
				url: `/Account/v1/User/${userid}`,
				failOnStatusCode: false,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(response => {
				return response;
			});
	}
	deleteAccount(token, userid) {
		return cy
			.request({
				method: 'DELETE',
				url: `/Account/v1/User/${userid}`,
				failOnStatusCode: false,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(response => {
				return response;
			});
	}
}
export const requests = new Requests();
