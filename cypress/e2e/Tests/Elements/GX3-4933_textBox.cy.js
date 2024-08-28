import FillForm from '@data/Elements/GX3-4933_textBox.json'
describe('GX3-4933 ToolsQA | Elements | Text Box: Fill form and Submit', () => 
{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', 'text-box');
		cy.get('h1.text-center').should('have.text', 'Text Box');
	});
	it('GX3-4934|TC1: Validar registrarse exitosamente', () =>
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
	it('GX3-4934|TC2: Validar poder registrarse cuando Email es válido y los demás campos están vacios', () =>
	{
			cy.get('#userEmail').type(FillForm.Email.valid2);
			cy.get('#submit').click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('contain.text', FillForm.Email.valid2);
			cy.get('p#currentAddress.mb-1').should('not.exist');
			cy.get('p#permanentAddress.mb-1').should('not.exist');
    	
	});

	it('GX3-4934|TC3: Validar no poder registrarse cuando Email no contiene @', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid3);
			cy.get('#userEmail').type(FillForm.Email.invalid2);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid3);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid3);
			cy.get('#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('GX3-4934|TC4: Validar no poder registrarse cuando Email no contiene username', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid4);
			cy.get('#userEmail').type(FillForm.Email.invalid3);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid4);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid4);
			cy.get('#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
	});
it('GX3-4934|TC5: Validar no poder registrarse cuando Email no contiene dominio', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid5);
			cy.get('#userEmail').type(FillForm.Email.invalid4);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid5);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid5);
			cy.get('#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
	});
it('GX3-4934|TC6: Validar no poder registrarse cuando Email no contiene punto', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid6);
			cy.get('#userEmail').type(FillForm.Email.invalid5);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid6);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid6);
			cy.get('#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
	});
it('GX3-4934|TC7: Validar no poder registrarse cuando Email no contiene extensión', () =>
	{
			cy.get('#userName').type(FillForm.FullName.valid6);
			cy.get('#userEmail').type(FillForm.Email.invalid6);
			cy.get('textarea[id=currentAddress]').type(FillForm.CurrentAddress.valid6);
			cy.get('textarea[id=permanentAddress]').type(FillForm.PermanentAddress.valid6);
			cy.get('#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
	});
});