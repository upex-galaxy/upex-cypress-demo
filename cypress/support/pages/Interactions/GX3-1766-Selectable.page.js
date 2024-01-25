class Selectable {
	get = {
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
	};
	clickListTab(){
		this.get.listTab().click();
	}
	clickGridTab(){
		this.get.gridTab().click();
	}
	selectOneListItem(randomItem){
		this.get.listContainer().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).click();
				}
			});
		});
	}
	itemIsSelected(randomItem){
		this.get.listContainer().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).should('have.css', 'background-color', 'rgb(0, 123, 255)');
				}
			});
		});
	}
	itemIsNotSelected(randomItem){
		this.get.listContainer().each(li => {
			cy.wrap(li).invoke('text').then((text) => {
				if (text === randomItem) {
					cy.wrap(li).should('have.css', 'background-color', 'rgb(255, 255, 255)');
				}
			});
		});
	}
}

export const selectablePage = new Selectable();