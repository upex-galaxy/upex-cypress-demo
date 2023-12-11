describe('🧪GX3-806 | TS: ⚡️ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('PRC: El usuario debe ubicarse en la Radio Button Page', () => {
		cy.visit('https://demoqa.com/radio-button');
	});

	it('GX3-807 | TC1: Validar que RB "Yes" pueda ser seleccionado', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Yes');
	});

	it('GX3-807 | TC2: Validar que RB "Impressive" pueda ser seleccionado', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
	});

	it('GX3-807 | TC3: Validar NO poder seleccionar RB "No"', () => {
		cy.get('#noRadio').should('be.disabled');
	});

	it('GX3-807 | TC4: Validar que RB "Yes" contenga la etiqueta "Yes"', () => {
		cy.get('label[for=yesRadio]').should('contain', 'Yes');
	});

	it('GX3-807 | TC5: Validar que RB "Impressive" contenga la etiqueta "Impressive"', () => {
		cy.get('label[for=impressiveRadio]').should('contain', 'Impressive');
	});

	it('GX3-807 | TC6: Validar que RB "No" contenga la etiqueta "No"', () => {
		cy.get('label[for=noRadio]').should('contain', 'No');
	});
});
