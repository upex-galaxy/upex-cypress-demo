export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

class selectMenuPage {
	get = {
		menuA: () => cy.get('#withOptGroup'),
		menuAOptions: () => cy.get('[tabindex="-1"]'),
		menuB: () => cy.get('#selectOne'),
		menuBOptions: () => cy.get('[tabindex="-1"]'),
		menuC: () => cy.get('#oldSelectMenu'),
		menuD: () => cy.get('#react-select-4-input'),
		menuE: () => cy.get('#cars'),
	};

	SelectMenuA(optionInteger) {
		this.get.menuA().click();
	}

	SelectMenuB() {
		this.get.menuB().click();
	}

	SelectMenuC() {
		this.get.menuC().select(getRandomInt(10));
	}

	SelectOptions(optionInteger) {
		return this.get
			.menuBOptions()
			.eq(optionInteger)
			.then(name => {
				cy.wrap(name).click();
			})
			.then(name => {
				return name.text();
			});
	}
}

export const SelectMenu = new selectMenuPage();
