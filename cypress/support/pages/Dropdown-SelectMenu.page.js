class Dropdown {
	get = {
		OldStyle: () => cy.get('#oldSelectMenu'),
		$array: () => cy.get('#oldSelectMenu>option'),
		Cars: () => cy.get('#cars'),
		MultiColor: () => cy.get('.css-1hwfws3').eq(2),
		$arrayColor: () => cy.get('.css-26l3qy-menu'),
	};

	SelectColor() {
		this.get.$array().then($colores => {
			const Amount = $colores.length;
			const Aleatorio = Cypress._.random(parseInt(Amount));

			this.get.OldStyle().select(Aleatorio);
			expect(Aleatorio).to.be.a('number');
		});
	}

	MultiSelect4colors() {
		this.get.MultiColor().click().type('Blu');
		this.get.$arrayColor().each(($el, index, $list) => {
			if ($el.text() === 'Blue') {
				cy.wrap($el).click();
			} else {
				//Do Nothing
			}
		});

		this.get.MultiColor().click().type('Gre{enter}');
		expect('.css-1rhbuit-multiValue').to.exist;
	}

	StandardMultiSelect() {
		this.get.Cars().select(['Volvo', 'Saab', 'Opel', 'Audi']).invoke('val');
		cy.should('deep.equal', ['volvo', 'saab', 'opel', 'audi']);
	}
}

export const Dropdowns = new Dropdown();
