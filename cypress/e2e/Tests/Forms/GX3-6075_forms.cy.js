describe('GX3-6075: ToolsQA | Forms | Practice Form', () => {
	beforeEach('Visitar la pagina de saucedemo', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('Validar rellenar el formulario de forma exitosa', () => {
		cy.get('#firstName').type('Milagros');
		cy.get('#lastName').type('Gonzalez');
		cy.get('#userEmail-wrapper').type('mili@gmail.com');
		cy.get('label[for="gender-radio-1"]').click();
		cy.get('label[for="gender-radio-2"]').click();
		cy.get('label[for="gender-radio-3"]').click();
		cy.get('#userNumber').type('1234567890');
	});
});
