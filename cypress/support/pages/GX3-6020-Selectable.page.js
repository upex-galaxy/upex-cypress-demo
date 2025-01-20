class Selectable {
	get = {
		list: () => cy.get('#demo-tab-list'),
		buttonsgrid: () => cy.get('#demo-tab-grid'),
		listItems: () => cy.get('#verticalListContainer li'),
		gridItems: () => cy.get('#gridContainer li')
	};
}
export const selectablePage = new Selectable();
