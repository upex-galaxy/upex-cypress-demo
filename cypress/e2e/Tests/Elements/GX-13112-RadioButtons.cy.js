describe('TC Fixture - RadioButtons', () => {
	beforeEach('Precondición: Usuario situado en seccion radio buttons', () => {
		cy.visit('https://demoqa.com/');
		cy.viewport(1920, 1080);
		cy.fixture('DOM/radioButtons.Page').then(the => {
			cy.contains(the.elements).click();
			cy.contains(the.radio).click();
			cy.url().should('contain', the.radioButtonURL);
		});
	});

	it('US 13113  | TC#1: Validar seleccionar radio button "Yes"', () => {
		cy.fixture('DOM/radioButtons.Page').then(the => {
			cy.get(the.radioButtons.yesButton).check({ force: true });
			cy.get(the.radioButtons.yesButton).should('be.checked');
			cy.get(the.flag).contains(the.flagMessage);
			cy.get(the.flagText).should('have.text', the.flagMessageOption.yes);
		});
	});

	it('US 13112  | TC#2: Validar seleccionar radio button "Impressive"', () => {
		cy.fixture('DOM/radioButtons.Page').then(the => {
			cy.get(the.radioButtons.impressiveButton).check({ force: true });
			cy.get(the.radioButtons.impressiveButton).should('be.checked');
			cy.get(the.flag).contains(the.flagMessage);
			cy.get(the.flagText).should('have.text', the.flagMessageOption.impressive);
		});
	});

	it('US 13112  | TC#3: Validar radio button "no" está disabled', () => {
		cy.fixture('DOM/radioButtons.Page').then(the => {
			cy.get(the.noDisabled).should('be.disabled');
		});
	});
});
