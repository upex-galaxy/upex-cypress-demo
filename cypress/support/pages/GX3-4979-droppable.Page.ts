class DroppablePage {
	//Declarando los Tipados de Elementos de esta Página
	draggableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementOne: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableParagraph: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;

	acceptableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementTwo: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	dragBoxElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	 InnerDropNotGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	 InnerDropGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	 revertableElementElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	 notRevertableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	//droppableElementThree: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	//queda encontrar el tipo de elemento que utilizaré yo.
	constructor () {
		
		//Elementos de esta Página:
		//	 this.elemento = () => cy.get('[form=login]').contains('button', 'Log in')
		this.draggableElement = () => cy.get("#draggable");
		this.droppableElementOne = () => cy.get("#draggable + div");
		this.droppableParagraph = () => cy.get("#draggable + div > p");
		this.acceptableElement = () => cy.get("#acceptable");
		this.acceptableElement = () => cy.get("#notAcceptable");
		this.droppableElementTwo = () => cy.get("#acceptDropContainer > div:nth-child(2)")
		this.dragBoxElement = () => cy.get("#dragBox");
		this.InnerDropNotGreedyElement = () => cy.get("#notGreedyInnerDropBox");
		this.InnerDropGreedyElement = () => cy.get("#greedyDropBoxInner");
		this.revertableElementElement = () => cy.get("#revertable");
		this.notRevertableElement= () => cy.get("#notRevertable");
		//this.droppableElementThree = () => cy.get("#notGreedyDropBox");
	}

	//Métodos de Acción de esta página 
	dragAndDrop(_element: string,  _target: object) {
		this.draggableElement().drag(_element, _target)
	}
}

export const droppablePage = new DroppablePage();