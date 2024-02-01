import * as json from '@data/GX3-1760-logInLogOut.json';
import { login } from '@pages/GX3-1760_LoginLogOut.Page';

describe('GX3-1760 - SpaceBeyond | Account | Log-In and Log-Out', () => {
	beforeEach(() => {
		cy.visit('https://demo.testim.io');
		login.clickLoginBtn();
	});

	it('GX3-1760 | TC1: Validate user log in successfully', () => {
		login.get.usernameInput().type(json.validAccount.username);
		login.get.passwordInput().type(json.validAccount.password);
		login.clicksubmitBtn();

		login.get.loginLinkText().should('contain.text', 'Hello');
	});

	it('GX3-1760 | TC2: Validate unable to log in successfully', () => {
		login.clicksubmitBtn();
		login.get.usernameErrorMessage().should('have.text', 'Name is a required field.');
		login.get.passwordErrorMessage().should('have.text', 'Password is a required field.');
	});

	it('GX3-1760 | TC3: Validate that the user logs out', () => {
		login.get.usernameInput().type(json.validAccount.username);
		login.get.passwordInput().type(json.validAccount.password);
		login.clicksubmitBtn();
		login.clickNavBtn();
		login.clickLogOut();

		login.get.loginBtn().should('have.text', 'Log in');
	});
});
