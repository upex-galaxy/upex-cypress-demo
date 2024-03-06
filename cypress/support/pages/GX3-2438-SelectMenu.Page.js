/* eslint-disable @typescript-eslint/no-unsafe-argument */
class Select {
	get = {
		selectValue: () => cy.get('#withOptGroup'),
		selectOptions: () => cy.get('[id^="react-select-2-option"]'),
		selectOne: () => cy.get('#selectOne'),
		selectOneOptions: () => cy.get('[id^="react-select-3-option-0-"]'),
		oldStyleMenu: () => cy.get('select#oldSelectMenu'),
		multiSelect: () => cy.get('.css-tlfecz-indicatorContainer').eq(2),

	};

	//TC1
	dropdownSelectValue() {
		this.get.selectValue().click();
		this.get.selectOptions().then(arrayValues => {
			const num = Cypress._.random(0, arrayValues.length -1);
			const textValue = arrayValues[num].innerText;
			Cypress.env('textValue', textValue);
			cy.wrap(arrayValues).eq(num).click();
		});
	}

	//TC2
	dropdownSelectOne() {
		return new Promise (resolve => {
			this.get.selectOne().click();
			this.get.selectOneOptions().then(arrayValues => {
				const num = Cypress._.random(0, arrayValues.length -1);
				const textValue = arrayValues[num].innerText;
				//Cypress.env('textValue', textValue);
				cy.wrap(arrayValues).eq(num).click();
				resolve(textValue);
			});
		});

	}

	//TC3
	dropDownOldStyle() {
		this.get.oldStyleMenu().click();
	}

	dropDownOldStyleMenu() {

		this.get.oldStyleMenu().then((select) => {
			// Obtén todas las opciones disponibles
			const options = select.find('option');

			// Selecciona un índice al azar
			const randomIndex = Cypress._.random(0, options.length - 1);

			// Dispara el evento de cambio de selección para la opción aleatoria
			select.val(options.eq(randomIndex).val()).trigger('change');
		});
	}

	//TC5
	dropDownMultiSelect() {
		this.get.multiSelect();
	}

}

export const selectPage = new Select;