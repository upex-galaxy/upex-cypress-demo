import loginSaucePage from '@pages/GX3-6142-Account-Login_and_access.Page';

const dataTests = require('../../../fixtures/data/SwagLabs/GX3-6142-SwagLabs-login.json');
const dataUrls = require('../../../fixtures/data/SwagLabs/GX3-6142-SwagLabs-UnauthorizedAccess.json');

describe('GX3-6142: SwagLabs login', () => {
	beforeEach('Preconditions: User must be on login Page', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.contains('Swag Labs');
	});
	dataTests.forEach((dataTest: { tc: string; username: string; password: string; errorMessage: string }) => {
		it(dataTest.tc, () => {
			if (dataTest.username !== null) {
				loginSaucePage.typeUsername(dataTest.username);
			}
			if (dataTest.password !== null) {
				loginSaucePage.typePassword(dataTest.password);
			}
			loginSaucePage.clickLoginButton();
			if (dataTest.errorMessage === null) {
				cy.url().should('include', '/inventory.html');
			} else {
				loginSaucePage.elements.errorMessage().should('be.visible').and('have.text', `${dataTest.errorMessage}`);
			}
		});
	});
});

describe('GX3-6142: SwagLabs Unauthorized Access', () => {
	dataUrls.forEach((dataUrl: { tc: string; url: string; errorMessage: string }) => {
		it(dataUrl.tc, () => {
			cy.visit(`${dataUrl.url}`, { failOnStatusCode: false });
			cy.url().then(url => {
				expect(url).to.be.equal('https://www.saucedemo.com/');
			});
			loginSaucePage.elements.errorMessage().should('be.visible').and('have.text', `${dataUrl.errorMessage}`);
		});
	});
});
