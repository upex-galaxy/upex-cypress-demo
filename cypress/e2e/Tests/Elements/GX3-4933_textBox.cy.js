describe('GX3-4933 ToolsQA | Elements | Text Box: Fill form and Submit', () => 
{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', 'text-box');
		cy.get('h1.text-center').should('have.text', 'Text Box');
	});
	it('TC1: Validar registrarse exitosamente', () =>
	{
		cy.fixture("cypress/fixtures/data/Elements/GX3-4933_textBox.json").then((the) => 
		{
			cy.get(the.FullName.inputName).type(the.FullName.data.TC1ValidName);
			cy.get(the.Email.inputEmail).type(the.Email.data.TC1ValidEmail);
			cy.get(the.CurrentAddress.inputCA).type(the.CurrentAddress.data.TC1ValidCA);
			cy.get(the.PermanentAddress.inputPA).type(the.PermanentAddress.data.TC1ValidPA);
			cy.get(the.submitButton).click();
			cy.get(the.name).should('contain.text', the.FullName.data.TC1ValidName);
			cy.get(the.email).should('contain.text', the.Email.data.TC1ValidEmail);
			cy.get(the.currentAddress).should('contain.text', the.CurrentAddress.data.TC1ValidCA);
			cy.get(the.permanentAddress).should('contain.text', the.PermanentAddress.data.TC1ValidPA);
    	})
	});
});