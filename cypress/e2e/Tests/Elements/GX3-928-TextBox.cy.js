import { removeLogs } from '@helper/RemoveLogs';

describe('GX3-928 | TX: ⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Acceso a la pagina', () => {
		cy.visit('/text-box');
		cy.url().should('contain', 'text-box');
	});
	it('929 | TC1: Validar ingresar data válida en los campos', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).type(ok.FullName.data.valido);
			cy.get(ok.Email.input).type(ok.Email.data.valido);
			cy.get(ok.CurrentAddress.input).type(ok.CurrentAddress.data.valido);
			cy.get(ok.PermanentAddress.input).type(ok.PermanentAddress.data.valido);
			cy.get(ok.SubmitButton).click();
			cy.get('#name').should('contain.text', ok.FullName.data.valido);
			cy.get('#email').should('contain.text', ok.Email.data.valido);
			cy.get('#currentAddress.mb-1').should('contain.text', ok.CurrentAddress.data.valido);
			cy.get('#permanentAddress.mb-1').should('contain.text', ok.PermanentAddress.data.valido);
		});
       
		//cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});

	it('929 | TC2: Validar ingresar con los campos vacíos', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).should('be.empty');
			cy.get(ok.Email.input).should('be.empty');
			cy.get(ok.CurrentAddress.input).should('be.empty');
			cy.get(ok.PermanentAddress.input).should('be.empty');
			cy.get(ok.SubmitButton).click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get('#permanentAddress.mb-1').should('not.exist');
		});
	});
    
	it('929 | TC3: Validar ingresar mail sin @ ', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.Email.input).type(ok.Email.data.invalido1);

			cy.get(ok.SubmitButton).click();

			cy.get(ok.Email.input).should('have.class', 'field-error');
		});
	});
    
	it('929 | TC4: Validar ingresar sin ningún dígito alfanumérico antes del símbolo @ ', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).type(ok.FullName.data.valido);
			cy.get(ok.Email.input).type(ok.Email.data.invalido2);
			cy.get(ok.CurrentAddress.input).type(ok.CurrentAddress.data.valido);
			cy.get(ok.PermanentAddress.input).type(ok.PermanentAddress.data.valido);
			cy.get(ok.SubmitButton).click();
			cy.get(ok.Email.input).should('have.class', 'mr-sm-2 field-error form-control');
		});
	});
    
	it('929 | TC5: Validar ingresar sin ningún dígito alfanumérico después del símbolo @ ', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).type(ok.FullName.data.valido);
			cy.get(ok.Email.input).type(ok.Email.data.invalido3);
			cy.get(ok.CurrentAddress.input).type(ok.CurrentAddress.data.valido);
			cy.get(ok.PermanentAddress.input).type(ok.PermanentAddress.data.valido);
			cy.get(ok.SubmitButton).click();
			cy.get('#name').should('not.exist');
			cy.get(ok.Email.input).should('have.class', 'field-error');
		});
	});
    
	it('929 | TC6: Validar ingresar con 1 dígito alfanumérico después del punto (.) ', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).type(ok.FullName.data.valido);
			cy.get(ok.Email.input).type(ok.Email.data.invalido5);
			cy.get(ok.CurrentAddress.input).type(ok.CurrentAddress.data.valido);
			cy.get(ok.PermanentAddress.input).type(ok.PermanentAddress.data.valido);
			cy.get(ok.SubmitButton).click();
			cy.get(ok.Email.input).should('have.class', 'mr-sm-2 field-error form-control');
		});
	});
    
	it('929 | TC7: Validar ingresar sin punto(.) en el mail', () => {
		cy.fixture('data/GX3-928-TextBox').then(ok => {
			cy.get(ok.FullName.input).type(ok.FullName.data.valido);
			cy.get(ok.Email.input).type(ok.Email.data.invalido4);
			cy.get(ok.CurrentAddress.input).type(ok.CurrentAddress.data.valido);
			cy.get(ok.PermanentAddress.input).type(ok.PermanentAddress.data.valido);
			cy.get(ok.SubmitButton).click();
			cy.get('#name').should('not.exist');
			cy.get(ok.Email.input).should('have.class', 'mr-sm-2 field-error form-control');
		});
	});
});