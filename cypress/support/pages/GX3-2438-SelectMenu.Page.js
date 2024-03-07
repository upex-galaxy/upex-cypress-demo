/* eslint-disable @typescript-eslint/no-unsafe-argument */
class Select {
	get = {
		selectValue: () => cy.get('#withOptGroup'),
		// selectOptions: () => cy.get('[id^="react-select-2-option"]'),
		selectOne: () => cy.get('#selectOne'),
		// selectOneOptions: () => cy.get('[id^="react-select-3-option-0-"]'),
		oldStyleMenu: () => cy.get('select#oldSelectMenu'),
		multiSelect: () => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2),
		multiSelectColors: () => cy.get('[class="css-1rhbuit-multiValue"]'),
		containerDropdown: valueDropdown => cy.get(`[id^="react-select-${valueDropdown}-option-"]`),
		messageOptions: () => cy.get('[class=" css-1gl4k7y"]'),
		multiSelecCars: () => cy.get('[id="cars"]'),
	};

	//TC1
	dropdownSelectValue() {
		this.get.selectValue().click();
		this.get.containerDropdown(2).then(arrayValues => {
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
			this.get.containerDropdown(3).then(arrayValues => {
				const num = Cypress._.random(0, arrayValues.length -1);
				const textValue = arrayValues[num].innerText;
				cy.wrap(arrayValues).eq(num).click();
				resolve(textValue);
			});
		});

	}

	//TC3
	dropDownOldStyle() {
		this.get.oldStyleMenu().select();
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

	//TC4
	dropDownMultiSelect() {

		this.get.multiSelect().click();
		this.get.containerDropdown(4).then(colors => {
			cy.wrap(colors).each(element => {
				cy.wrap(element).click();

			});
		});

	}

	//TC5
	selectCars() {
		 this.get.multiSelecCars().then(cars => {
			cy.wrap(cars).each(element => {
				const valueCars = Cypress._.random(0, cars.length - 1);
				cy.wrap(element).select(valueCars);
			});
		});
	}

	// selectCars() {

	// 	this.get.multiSelecCars();

	// }

}

export const selectPage = new Select;
