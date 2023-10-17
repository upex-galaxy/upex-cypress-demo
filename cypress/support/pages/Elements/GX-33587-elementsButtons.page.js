class elementButtons {
	get = {
		firstButton: () => cy.get('[class="btn btn-primary"]').eq(0),
		secondButton: () => cy.get('[class="btn btn-primary"]').eq(1),
		thirdButton: () => cy.get('[class="btn btn-primary"]').eq(2),
		firstMessage: () => cy.get('#doubleClickMessage'),
		secondMessage: () => cy.get('#rightClickMessage'),
		thirdMessage: () => cy.get('#dynamicClickMessage'),
	};
}

export const elementbuttons = new elementButtons();
// btn btn-primary
