describe('GX3-1120 | TS: ToolQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Usuario deberá estar situado en la pagina de text box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	it('GX3 -1121 | TC1: Validar que se visualice el envío exitoso cuando todos los campos tienen data valida', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.valida);
			cy.get(the.Email.input).type(the.Email.data.valida);
			cy.get(the.Cadress.input).type(the.Cadress.data.valida);
			cy.get(the.Padrees.input).type(the.Padrees.data.valida);
			cy.get(the.Submit).click();
			cy.get(the.mensaje);
		});
	});
	it('GX3 -1121 | TC2: Validar que se visualice el envío exitoso cuando todos los campos están vacíos menos el “Email"', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.valida);
			cy.get(the.Submit);
			cy.get(the.mensaje);
		});
	});
	it('GX3 -1121 | TC3: Validar que se visualice el envío exitoso cuando todos los campos llenos e “Email” esta vacío', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.valida);
			cy.get(the.Cadress.input).type(the.Cadress.data.valida);
			cy.get(the.Padrees.input).type(the.Padrees.data.valida);
			cy.get(the.Submit).click();
			cy.get(the.mensaje);
		});
	});
	it('GX3 -1121 | TC4: Validar que se visualice el bordo rojo en “email” NO contenga al menos un carácter antes del “@”', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.BadEmail1);
			cy.get(the.Submit).click();
			cy.get(the.Error).should('have.class', 'field-error');
		});
	});
	it('GX3 -1121 | TC5: Validar que se visualice el bordo rojo en “email” NO contenga al menos un carácter después del “@”', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.BadEmail2);
			cy.get(the.Submit).click();
			cy.get(the.Error).should('have.class', 'field-error');
		});
	});
	it('GX3 -1121 | TC6: Validar que se visualice el bordo rojo en “email” cuando este NO contiene el “.” después del “@"', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.BadEmail3);
			cy.get(the.Submit).click();
			cy.get(the.Error).should('have.class', 'field-error');
		});
	});
	it('GX3 -1121 | TC7: Validar que se visualice el bordo rojo en “email” cuando este NO contiene “@” ', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.BadEmail4);
			cy.get(the.Submit).click();
			cy.get(the.Error).should('have.class', 'field-error');
		});
	});
	it('GX3 -1121 | TC8: Validar que se visualice el bordo rojo en “email” cuando este NO contiene mínimo 2 caracteres después del  “.”', () => {
		cy.fixture('data/GX3-1120-ToolsQA-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.BadEmail5);
			cy.get(the.Submit).click();
			cy.get(the.Error).should('have.class', 'field-error');
		});
	});
});
