/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
class Select {
	get = {
		selectValue: () => cy.get('#withOptGroup'),
		selectOne: () => cy.get('#selectOne'),
		oldStyleMenu: () => cy.get('select#oldSelectMenu'),
		multiSelect: () => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2),
		multiSelectColors: () => cy.get('[class="css-1rhbuit-multiValue"]'),
		containerDropdown: valueDropdown => cy.get(`[id^="react-select-${valueDropdown}-option-"]`),
		messageOptions: () => cy.get('[class=" css-1gl4k7y"]'),
		multiSelectCars: () => cy.get('[id="cars"]'),
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

			const options = select.find('option');

			const randomIndex = Cypress._.random(0, options.length - 1);

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
		this.get.multiSelectCars().select([2, 1, 0]);
	}

}

export const selectPage = new Select;
