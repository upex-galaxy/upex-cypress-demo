class Login {
	get = {
		loginBtn: () => cy.contains('button', 'Log in'),
		submitBtn: () => cy.get('button[type="submit"]'),
		usernameInput: () => cy.get('#login input[type="text"]'),
		passwordInput: () => cy.get('#login  input[type="password"]'),
		loginLinkText: () => cy.get('[type="button"]').filter(':contains("Hello")'),
		usernameErrorMessage: () => cy.get('#login span').filter(':contains("Name is")'),
		passwordErrorMessage: () => cy.contains('#login span', 'Password is'),
		logOutlink: () => cy.get('ul li a').filter(':contains("Log out")'),
	};

	clickLoginBtn() {
		this.get.loginBtn().click();
	}

	clicksubmitBtn() {
		this.get.submitBtn().click();
	}

	clickNavBtn() {
		this.get.loginLinkText().click();
	}

	clickLogOut() {
		this.get.logOutlink().click();
	}
}

export const login = new Login();
