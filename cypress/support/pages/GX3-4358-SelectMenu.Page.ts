import { text } from 'stream/consumers';

class SelectMenu {
	get={
		selectValue: () => cy.get('#withOptGroup'),
		selectValueOptions:(index) => cy.get(`[id="react-select-2-option-1-${index}"]`),
		selectValueOptionsDos:() => cy.get('[class*="option"]'),
		selectValueText:() => this.get.selectValue().find('[class*="singleValue"]'),
		selectOne: () => cy.get('#selectOne'),
		selectOneOptions:() => cy.get('[class*="option"]'),
		selectOneOptionsText:() => this.get.selectOne().find('[class*="option"]'),
		multiSelect:() => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2),
		oldStyleSelect:() => cy.get('#oldSelectMenu')
	};
	//TC1---SELECT ONE
	clickSelectValue() {
		this.get.selectValue().click();
	};

	selectRandomSelectValue() {
		return this.get.selectValueOptionsDos().its('length').then(cantElem => {
			const randomsIndex =Cypress._.random(0,cantElem);
			this.get.selectValueOptionsDos().eq(randomsIndex).click();
			this.clickSelectValue();
			return this.get.selectValueOptionsDos().eq(randomsIndex).invoke('text').then(text => {

				return text;
			});
		});
	};

	//TC2---SELECT ONE
	clickSelectOne() {
		selectMenuPage.get.selectOne().click();
	};
	selectRandomsSelectOne() {
		return selectMenuPage.get.selectOneOptions().its('length').then(indexN => {
			const randomsSo =Cypress._.random(0,indexN);
			this.get.selectOneOptions().eq(randomsSo).click();
			this.clickSelectOne();
			return this.get.selectOneOptions().eq(randomsSo).invoke('text').then(textSelect2 => {
				return textSelect2;
			});
		});
	};
	//TC3---SELECT OLD STYLE
	selectOldStyleSelect() {
		this.get.oldStyleSelect().find('option').its('length').then(cantOps => {
			const randomsSel =Cypress._.random(0,cantOps);
			this.get.oldStyleSelect().select(randomsSel);
			this.get.oldStyleSelect().select(randomsSel).invoke('text').then(textselec3 => {
				return textselec3;
			});
		});
		//TC4---SELECT ONE

	}

}

export const selectMenuPage = new SelectMenu();