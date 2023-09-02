import data from '@data/GX-30150-RadioButtons.json';

class Buttons {
	get = {
		YesButton: () => cy.get('[for="yesRadio"]'),
		ImpressiveButton: () => cy.get('[for="impressiveRadio"]'),
		NoButton: () => cy.get('#noRadio'),
		Response: () => cy.get('[class="mt-3"]'),
	};
	ClickOnYesButtons() {
		this.get.YesButton().should('contain', data.Buttons.Yes).click();
	}
	ClickOnImpressiveButton() {
		this.get.ImpressiveButton().should('contain', data.Buttons.Impressive).click();
	}
}

export const ButtonsSelected = new Buttons();
