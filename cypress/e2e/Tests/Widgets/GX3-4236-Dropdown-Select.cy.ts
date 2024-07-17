describe('GX3-4236: Widgets | Dropdown - Select Menu', () => {

	beforeEach(() => {
		cy.visit('/select-menu');
	});

	it('GX3-4237 | CY TC1: Should select value option from Select Value dropdown-type', function () {
		cy.get('#withOptGroup').click(); // abrir dropdown.

		cy.get('[id^=react-select][id*=option]').then(options => {
			const randomIndex = Math.floor(Math.random() * options.length);
			cy.wrap(options).eq(randomIndex).then(selectedOption => {
				cy.wrap(selectedOption).invoke('text').then(selectedValueText => {
					cy.wrap(selectedOption).click();
					// Validation:
					cy.get('#withOptGroup').get('[class$=singleValue]').should('have.text', selectedValueText);
				});
			});
		});

		//? By Text:
		// cy.get('#withOptGroup').click(); // abrir dropdown.
		// cy.get('[id^=react-select][id*=option]').contains('A root option').click();
	});
});