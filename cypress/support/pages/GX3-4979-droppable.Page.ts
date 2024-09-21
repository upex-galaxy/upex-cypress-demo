class DroppablePage {
	//Declarando los Tipados de Elementos de esta Página

	//idea de declarar una variable usada para todos los drag areas.
	//allDragableElements: () => Cypress.Chainable<JQuery<HTMLDivElement>>; 

	droppableElementOne: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableParagraph: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;

	tabAcceptElement: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	droppableElementTwo: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	tabPropagation: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	InnerDropNotGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	InnerDropGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableGreedyParagraph: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;

	tabRevert: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	droppableElementFour: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	notRevertableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementThree: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	constructor () {
		//Elementos de esta Página:
		this.droppableElementOne = () => cy.get("#draggable + div");
		this.droppableParagraph = () => cy.get("#draggable + div > p");
		this.tabAcceptElement = () => cy.get("[data-rb-event-key='accept']")
		this.droppableElementTwo = () => cy.get("#acceptDropContainer > div:nth-child(2)")
		this.tabPropagation = () => cy.get("[data-rb-event-key='preventPropogation']");
		this.droppableElementThree = () => cy.get("#notGreedyDropBox");
		this.InnerDropNotGreedyElement = () => cy.get("#notGreedyInnerDropBox");
		this.InnerDropGreedyElement = () => cy.get("#greedyDropBoxInner");
		this.droppableGreedyParagraph = () => cy.get("#greedyDropBox > p");
		this.tabRevert = () => cy.get("[data-rb-event-key='revertable']");
		this.droppableElementFour = () => cy.get("#revertableDropContainer > div:nth-child(2)");
		this.notRevertableElement = () => cy.get("#notRevertable");
	}

	//Métodos de Acción de esta página 
/*	dragAndDropSimpleTab(_element: string,  _target: object) {
		this.draggableElement().drag(_element, _target)
	} 
*/

	dragAndDrop(elementoDom: Cypress.Chainable<JQuery<HTMLDivElement>>,_element: string,  _target: object) {
		//Sería decir que a una determinada variable. //la cual se pasaría como parámetro. //Para luego usarse en el test.
		//que a partir de esa misma se hace un dragAndDrop usando element y target.

		//Quedaría:
		elementoDom.as("dragArea").drag(_element, _target)

	}
}

export const droppablePage = new DroppablePage();