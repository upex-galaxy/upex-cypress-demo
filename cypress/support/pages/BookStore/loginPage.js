class Login {
	get = {
		username: () => cy.get('input[placeholder="UserName"]'),
		password: () => cy.get('input[placeholder="Password"]'),
	};
}

export const login = new Login();
