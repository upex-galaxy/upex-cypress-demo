describe('Account TextBox'), () =>
{
	beforeEach('Visitar la página de registro',() =>
	{
		cy.visit('https://demoqa.com/text-box');
		cy.contatins('Test Box').should('be.visible');
		cy.url().should('contain','text-box');
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the)=>
		cy.contains(the.{

		};

	}
	);
};
cy.contains('Log in');
cy.fixture('');