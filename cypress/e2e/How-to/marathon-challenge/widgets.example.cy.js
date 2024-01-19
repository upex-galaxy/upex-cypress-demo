describe('Cypress Challenge - Widgets', () => {
	it('Auto-Complete - TC1: Should autocomplete values in text input', function () {
		cy.visit('/auto-complete');

		cy.step('🧪Creating Function to select random color');
		const availableColors = ['Red', 'Blue', 'White', 'Yellow', 'Black', 'Voilet'];
		function selectRandomColor() {
			const givenRandomOption = Cypress._.random(availableColors.length - 1);
			cy.log('🔑 => ' + availableColors.length);
			cy.log('💡 => ' + givenRandomOption);
			const givenColor = availableColors[givenRandomOption];
			availableColors.splice(givenRandomOption, 1);
			cy.log('⭐️ => ' + givenColor);
			return givenColor;
		}

		cy.step('🧪#1: Select a single Color with Enter');
		const givenColor = selectRandomColor();
		cy.get('#autoCompleteMultipleInput').type(`${givenColor}{enter}`);
		cy.getAutocompletedValues().then(values => expect(values).includes(givenColor));

		cy.step('🧪#2: Select Multiple Colors with Enter');
		const givenColor2 = selectRandomColor();
		const givenColor3 = selectRandomColor();
		const givenColor4 = selectRandomColor();
		cy.get('#autoCompleteMultipleInput').type(`${givenColor2}{enter}`);
		cy.get('#autoCompleteMultipleInput').type(`${givenColor3}{enter}`);
		cy.get('#autoCompleteMultipleInput').type(`${givenColor4}{enter}`);
		cy.getAutocompletedValues().then(values => expect(values).deep.equal([givenColor, givenColor2, givenColor3, givenColor4]));

		cy.step('🧪#3: Select one Color by clicking');
		cy.get('#autoCompleteMultipleInput').type('A');

		//* Este codigo está elaborado con "Alias" usando el método as() en lugar de Then:
		cy.get('.auto-complete__menu [id*=react-select]').eq(1).as('colorToSelect');
		cy.get('@colorToSelect').click().invoke('text').as('colorName');
		cy.getAutocompletedValues().then(values => expect(values).includes(this.colorName));

		//* Este codigo también funciona y hace exactamente lo mismo que el de arriba pero usando Then:
		// cy.get('.auto-complete__menu [id*=react-select]')
		// 	.eq(1)
		// 	.then(colorToSelect => {
		// 		cy.wrap(colorToSelect)
		// 			.click()
		// 			.invoke('text')
		// 			.then(colorName => {
		// 				cy.getAutocompletedValues().then(values => expect(values).includes(colorName));
		// 			});
		// 	});

		cy.step('🧪#4: Select one Color by clicking');
		// NO ESTOY USANDO THEN, se puedo hacer lo mismo pero con un enfoque con Then.
		cy.get('#autoCompleteSingleContainer').type('E');
		cy.get('.auto-complete__menu [id*=react-select]').as('displayedColors');

		cy.get('@displayedColors')
			.its('length')
			.then(colorCount => {
				const index = Cypress._.random(colorCount - 1);
				cy.get('@displayedColors').eq(index).as('selectedColor');
			});

		// Y ESTO LO APLICO CON THEN, para repetir menos código, pero también se puede hacer con Alias.
		cy.get('@selectedColor')
			.click()
			.invoke('text')
			.then(singleColorName => {
				cy.get('.auto-complete__single-value').should('have.text', singleColorName);
			});
	});
});
