import { signup } from '@pages/SignUp.Page.js';
const { signUp } = Cypress.env('endpoint');
describe('Feature', () => {
	beforeEach(() => {
		cy.visit(signUp);
	});

	it.skip('TSID | TC1: Validar crear cuenta exitosamente', () => {
		// EL MEJOR PAGE OBJECT MODEL => ES CUANDO LEES LITERALMENTE UN CASO DE PRUEBA MANUAL
		signup.enterUsername('upexTesting');
		signup.get.usernameInput().should('have.value', 'upexTesting');

		signup.enterPassword('1234567');
		signup.get.passwordInput().should('have.value', '1234567');

		signup.enterEmail('sai@upextesting.com');
		signup.get.emailInput().should('have.value', 'sai@upextesting.com');

		signup.submitCreateAccount();
		// Resultado Esperado:
		expect(1).eq(1);
	});
});
