class Selectable {
	get = {
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
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
	selectMultipleItems(container){
		this.get[container]().each(li => {
			cy.wrap(li).click();
		});
	}
}

export const selectablePage = new Selectable();