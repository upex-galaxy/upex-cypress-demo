class Button {
	get = {
		ButtonExpandAll: () => cy.get('[class$="expand-all"]').eq(0),
		ButtonCollapseAll: () => cy.get('[class$="collapse-all"]').eq(0),
	};
}

export const Selected = new Button();
