import the from '../../../fixtures/data/register.BookStore.json';

describe('✅ToolsQA | Book Store Applications | Profile/Register', () => {
	beforeEach('Precondición: Usuario no posee cuenta ya creada', () => {
		cy.visit(the.mainpage);
		cy.url().should('contain', the.assertions.web);
	});

	it('18742 | TC01 - Validar usuario se registra con todos los campos correctos', () => {
		cy.get(the.input.Firstname).type(the.data.Firstname);
		cy.get(the.input.Lastname).type(the.data.Lastname);
		cy.get(the.input.Username).type(the.data.Username);
		cy.get(the.input.Password).type(the.data.Password);
		cy.get(the.input.Captcha).click();
		cy.get(the.input.Register).click();
	});
});
