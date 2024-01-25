class Selectable {
	get = {
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li')
	};
	clickListTab(){
		this.get.listTab().click();
	}
	clickGridTab(){
		this.get.gridTab().click();
	}
	selectOneItem(randomItem, container){
		this.get[container]().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
				}
			});
		});
	}	
	deselectOneItem(randomItem, container){
		this.get[container]().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
				}
			});
		});
	}	
	selectMultipleItems(container){
		this.get[container]().each(li => {
			cy.wrap(li).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}
	deselectMultipleItems(container){
		this.get[container]().each(li => {
			cy.wrap(li).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
}

export const selectablePage = new Selectable();