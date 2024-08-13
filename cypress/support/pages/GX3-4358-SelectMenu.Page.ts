class SelectMenu {
	get={
		selectValue: () => cy.get('#withOptGroup'),
		selectValueOptions:(index) => cy.get(`[id="react-select-2-option-1-${index}"]`),
		selectValueOptionsDos:() => cy.get('[class*="option"]'),
		selectValueText:() => this.get.selectValue().find('[class*="singleValue"]'),
		//TC2
		selectOne: () => cy.get('#selectOne'),
		selectOneOptionsDos:() => cy.get('[class*="option"]'),
		selectOneOptionsText:() => this.get.selectOne().find('[class*="singleValue"]'),
		//TC3
		selectOldStyleSelect:() => cy.get('#oldSelectMenu'),
		selectOldStyleSelectText:() => this.get.selectOldStyleSelect().find('option:selected'),
		//TC4
		selectMultiple:() => cy.get('[class*="placeholder"]').contains('Select...'),
		selectMultipleOptions:() => cy.get('[class*="option"]'),
		selectMultipleOptionsText:() => cy.get('[class="css-12jo7m5"]'),
	};
	//TC1---SELECT ONE
	clickSelectValue() {
		this.get.selectValue().click();
	};

	selectRandomSelectValue() {
		return this.get.selectValueOptionsDos().its('length').then(cantElem => {
			const randomsIndex =Cypress._.random(0,cantElem-1);
			this.get.selectValueOptionsDos().eq(randomsIndex).click();
			this.clickSelectValue();
			this.get.selectValueOptionsDos().eq(randomsIndex).invoke('text').then(text => {
				return text;
			});
		});
	};

	//TC2---SELECT ONE
	clickSelectOne() {
		this.get.selectOne().click();
	};
	selectRandomsSelectOne() {
		return this.get.selectOneOptionsDos().its('length').then(indexN => {
			const randomsSo =Cypress._.random(0,indexN-1);
			this.get.selectOneOptionsDos().eq(randomsSo).click();
			this.clickSelectOne();
			this.get.selectOneOptionsDos().eq(randomsSo).invoke('text').then(textSelect2 => {
				return textSelect2;
			});
		});
	};
	//TC3---SELECT OLD STYLE
	selectOldStyleSelect() {
		return this.get.selectOldStyleSelect().find('option').its('length').then(cantOps => {
			const randomsSel =Cypress._.random(0,cantOps-1);
			this.get.selectOldStyleSelect().find('option').eq(randomsSel).invoke('text').then(textSelect3 => {
				this.get.selectOldStyleSelect().select(randomsSel);
				cy.wrap(textSelect3).then(textSelect31 => {
					return textSelect31;
				});
			});
		});
	}
	//TC4---SELECT ONE
	clickMultipleValues() {
		this.get.selectMultiple().click();
	}
	selectRandomMultipleValue() {
		this.clickMultipleValues();
		let texto=[];
		for (let index = 0; index < 2; index++) {
			this.get.selectMultipleOptions().its('length').then(cantOps4 => {
				const randomsSel4 =Cypress._.random(0,cantOps4-1);
				this.get.selectMultipleOptions().eq(randomsSel4).click();
				this.get.selectMultipleOptionsText().eq(index).invoke('text').then(textSelect4 => {
					texto.push(textSelect4);

				});

			});
		}
		return cy.wrap(texto);

	}
}

export const selectMenuPage = new SelectMenu();