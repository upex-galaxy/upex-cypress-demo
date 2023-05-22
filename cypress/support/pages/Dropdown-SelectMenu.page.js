class Dropdown {
	get = {
		OldStyle: () => cy.get('#oldSelectMenu'),
		$array: () => cy.get('#oldSelectMenu>option'),
		Cars: () => cy.get('#cars'),
		MultiColor: () => cy.get('.css-1hwfws3').eq(2),
		$arrayColor: () => cy.get('.css-26l3qy-menu'),
		$arrayValue: () => cy.get('.css-26l3qy-menu'),
		Title: () => cy.get('#selectOne'),
		TitleList: () => cy.get('div [id*="react-select-3-option-0"]'),
		FirstValue: () => cy.get('#withOptGroup'),
	};

	SelectValue() {
		this.get.FirstValue().click();
		// this.get.$arrayValue();
	}

	SelectOne() {
		this.get.Title().click();
		// this.get.TitleList().select(4);

		this.get.TitleList().then($list => {
			const Amount = $list.length;
			const Aleatorio = Cypress._.random(parseInt(Amount));
			cy.log(Aleatorio);

			this.get.TitleList().eq(Aleatorio).click({ force: true });
			expect(Aleatorio).to.be.a('number');
		});
	}

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
		this.get.$arrayColor().each($el => {
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
