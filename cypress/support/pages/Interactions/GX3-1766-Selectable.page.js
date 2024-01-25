class Selectable {
	get = {
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
		selectedListItem: (randomItem) => cy.get('#verticalListContainer li').contains(randomItem),
		selectedGridItem: (randomItem) => cy.get('#gridContainer li').contains(randomItem)
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
					cy.wrap(li).click();
				}
			});
		});
	}	
	deselectOneItem(randomItem, container){
		this.get[container]().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).click();
				}
			});
		});
	}	
	selectMultipleItems(container){
		this.get[container]().each(li => {
			cy.wrap(li).click();
		});
	}
	deselectMultipleItems(container){
		this.get[container]().each(li => {
			cy.wrap(li).click();
		});
	}
}

export const selectablePage = new Selectable();