class DroppableElement {
	get = {
		simpleTab: () => cy.get('#droppableExample-tab-simple'),
		accceptTab: () => cy.get('#droppableExample-tab-accept'),
		preventPropogationTab: () => cy.get('#droppableExample-tab-preventPropogation'),
		revertableTab: () => cy.get('#droppableExample-tab-revertable'),
		//TC3
		dragmeBox: () => cy.get('#draggable'),
		droppableAction: () => cy.get('#droppable'),
		simpleDropContainer: () => cy.get('#simpleDropContainer'),
		//TC4
		acceptableBox: () => cy.get('#acceptable'),
		acceptDropContainer: () => cy.get('#acceptDropContainer'),
		containerDrop: () => cy.get('#droppable'),
		notAcceptableBox: () => cy.get('#notAcceptable'),
		//TC5
		dragBox: () => cy.get('#dragBox'),
		notGreedyDrop: () => cy.get('#notGreedyDropBox'),
		preventPropogationContainer: () => cy.get('#ppDropContainer'),
		notGreedyInnerDrop: () => cy.get('#notGreedyInnerDropBox'),
	};

	clickAcceptTab() {
		this.get.accceptTab().click();
	}
	clickPreventPropogationTab() {
		this.get.preventPropogationTab().click();
	}
	clickRevertableTab() {
		this.get.revertableTab().click();
	}

	simpleDrop() {
		const deltaOX = Cypress._.random(350, 380);
		this.get.dragmeBox().move({ deltaX: deltaOX, deltaY: 57 });
		this.get.simpleDropContainer().within(() => {
			this.get.containerDrop().as('simpleDropBox');
		});

		//this.get.dragmeBox().drag('#droppable:first',{ force:true });
	}
	acceptableDrop() {
		const deltaA = Cypress._.random(350, 380);
		this.get.acceptableBox().move({ deltaX: deltaA, deltaY: 55 });
		this.get.acceptDropContainer().within(() => {
			this.get.containerDrop().as('acceptDropBox');
		});
	}
	notAcceptableDrop() {
		const deltaA = Cypress._.random(345, 355);
		this.get.notAcceptableBox().move({ deltaX: deltaA, deltaY: 5 });
		this.get.acceptDropContainer().within(() => {
			this.get.containerDrop().as('notAcceptableDropBox');
		});
	}
	preventPropogationOuterDrop() {
		const deltaA = Cypress._.random(355, 365);
		this.get.dragBox().move({ deltaX: deltaA, deltaY: 5 });
		this.get.preventPropogationContainer().within(() => {
			this.get.notGreedyDrop().as('ppOuterDropBox');
			this.get.notGreedyDrop().within(() => {
				cy.get('p').eq(0).as('pLabelInNotGredyDrop'); //should('have.text','Dropped!')

			});
		});
	}

	preventPropogationDrop() {
		const deltaA = Cypress._.random(355, 365);
		this.get.dragBox().move({ deltaX: deltaA, deltaY: 96 });
		this.get.preventPropogationContainer().within(() => {
			this.get.notGreedyInnerDrop().as('ppDropBox');
		});
	}
}

export const droppaBlePage = new DroppableElement();
