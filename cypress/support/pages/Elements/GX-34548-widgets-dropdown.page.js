class dropdown {
	get = {
		selectValue: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(0),
		selectGroup2: () => cy.get("div[id^='withOptGroup']"),
		selectOne: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(2),
		selectTitle: () => cy.get('.css-1wa3eu0-placeholder').eq(0),
		oldStyle: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(4),
		oldSelectMenu: () => cy.get('select#oldSelectMenu>option'),
		multiselectDropdown: () =>  cy.get('.col-md-6.col-sm-12>p>b').eq(0),
		optionMenu: () => cy.get('[id*=react-select][id*=option]'),
		multiselect: () => cy.get('[class="css-1rhbuit-multiValue"]'),
		closedMultiSelect: () => cy.get('[class=" css-1wy0on6"]').eq(2),
		standardMultiselect: () => cy.get('.col-md-6.col-sm-12>p>b').eq(1),
		itemMultiselectStandard: () => cy.get('select[id^=cars] option'),
	};

	clickSelectValue() {
		this.get.selectValue().click();
	}
	clickSelectGroup() {
		this.get.selectGroup2().click();
	}
	clickSelectOne() {
		this.get.selectOne().click();
	}
	itemSelectOption() {
		this.get.selectGroup2().should('be.visible').click();
	}
	itemSelectTitle() {
		this.get.selectTitle().should('be.visible').click();
	}
	clickOldStyle() {
		this.get.oldStyle().click();
	}
	clickmultidropdown() {
		this.get.multiselectDropdown().click()
	}
	itemMultiSelect() {
		const elementRandom = Math.floor(Math.random() * 3);
		this.get.multiselect().click();
		this.get.optionMenu().eq(elementRandom).click();
		this.get.closedMultiSelect().click()
		}
	
	clickStandardMultiselec() {
		this.get.standardMultiselect().click()
	}
	
	itemOldStyle() {
		
		const color = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White', 'Voilet', 'Indigo', 'Magenta', 'Aqua']
		const selectElement = this.get.oldSelectMenu();
		const randomColor =color[Math.floor(Math.random() * color.length)] ;
		selectElement.invoke('val', randomColor)
	
		Cypress.env('selectColor' ,randomColor)
	}
	itemMultiStandard() {
		
		const cars = ['Volvo', 'Saab', 'Opel', 'Audi']
		const selectElement = this.get.itemMultiselectStandard();
		const randomCars =cars[Math.floor(Math.random() * cars.length)] ;
		selectElement.invoke('val', randomCars)
	
		Cypress.env('selectCars' ,randomCars)
	}
}

export const menuDropdown = new dropdown();
