class Selectable {
	get = {
		arrayElements: gridList=> cy.get(`#demo-tabpane-${gridList} li`),
		GridBtn:() => cy.get('#demo-tab-grid'),
	};


	getNumberArray(gridList){
		return this.get.arrayElements(gridList).then(elements =>{
			const valueArray = elements.length;
			return valueArray;
		})
	}

	clickTabGrid(){
		this.get.GridBtn().click();
	}

	selectAllButtons(gridList, num){
		this.get.arrayElements(gridList).eq(num).click()
	}
};

export const selectablePage = new Selectable;