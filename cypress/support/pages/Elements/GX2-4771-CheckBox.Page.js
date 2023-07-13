class Button {
	get = {
		ButtonExpandAll: () => cy.get('[class$="expand-all"]').eq(0),
		ButtonCollapseAll: () => cy.get('[class$="collapse-all"]').eq(0),
		FolderExpanded: () => cy.get('[class$="rct-node-expanded"]'),
		FolderCollapsed: () => cy.get('[class$="rct-node-collapsed"]'),
	};
}

export const Selected = new Button();
