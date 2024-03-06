import { selectPage } from '../../../support/pages/GX3-2438-SelectMenu.Page';

describe ('', () => {

	beforeEach('', () => {
		cy.visit('/select-menu');
		cy.url().should('contain', 'select');
	});

	// Dropdown Select Value
	it('2438 | TC1 | Validar que se pueda seleccionar una opción en el Dropdown Select Value', () => {

		selectPage.dropdownSelectValue();
		selectPage.get.selectValue().invoke('text').then(valueText => {
			//cy.wrap(valueText).should('contain', Cypress.env('textValue'));
			expect(valueText).to.contain(Cypress.env('textValue'));
		});

	});

	// Dropdown Select One
	it.only('2438 | TC2 | Validar la selección de una opción en el Dropdown Select One', () => {

		selectPage.dropdownSelectOne().then(selectValueText => {

			selectPage.get.selectOne().then(valueText => {
				cy.wrap(valueText).should('contain', selectValueText);
				expect(valueText).to.contain(selectValueText);
			});
		});

	});

	// Dropdown Old Style Select Menu
	it('2438 | TC3 | Validar la selección de una opción en el Dropdown Old Style Select Menu', () => {

		selectPage.dropDownOldStyleMenu();
		selectPage.get.oldStyleMenu().invoke('val').then((selectValue) => {
			expect(selectValue).not.to.equal('No options');
		});
	});

	// Dropdown Multiselect drop down
	it('2438 | TC4 | Validar la selección múltiple y la visualización de "No Options"', () => {
		// Tu código de prueba aquí
		// Asegúrate de que se pueda seleccionar múltiples opciones y que se muestre "No Options" correctamente
	});

	// Dropdown Standard multi select
	it('2438 | TC5 | Validar la selección de múltiples opciones en el Dropdown Standard multi select', () => {

		selectPage.dropDownMultiSelect();
		//.invoke('val').should('deep.equal', ['Green', 'Blue', 'Black', 'Red']);
		// Asegúrate de que se pueda seleccionar múltiples opciones en el Dropdown Standard multi select correctamente
	});

});