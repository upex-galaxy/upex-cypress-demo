import FillForm from '@data/Elements/GX3-4933_textBox.json'
describe('GX3-4933 ToolsQA | Elements | Text Box: Fill form and Submit', () => 
{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', 'text-box');
		cy.get('h1.text-center').should('have.text', 'Text Box');
	});
	it('TC1: Validar registrarse exitosamente', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid1);
			cy.get('#userEmail').type(FillForm.Email.valid1);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid1);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid1);
			cy.get('#submit').click();
			cy.get('#name').should('contain.text', FillForm.FullName.valid1);
			cy.get('#email').should('contain.text', FillForm.Email.valid1);
			cy.get('p#currentAddress.mb-1').should('contain.text', FillForm.CurrentAddress.valid1);
			cy.get('p#permanentAddress.mb-1').should('contain.text', FillForm.PermanentAddress.valid1);
    	
	});
});