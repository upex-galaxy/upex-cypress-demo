class DroppablePage {
	//Declarando los Tipados de Elementos de esta Página
	draggableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementOne: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableParagraph: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;

	tabAcceptElement: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	acceptableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	notAcceptableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementTwo: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	tabPropagation: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	propagationElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	InnerDropNotGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	InnerDropGreedyElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableGreedyParagraph: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;

	tabRevert: () => Cypress.Chainable<JQuery<HTMLLinkElement>>;

	revertableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementFour: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	notRevertableElement: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	droppableElementThree: () => Cypress.Chainable<JQuery<HTMLDivElement>>;

	constructor() {
		//Elementos de esta Página:
		this.draggableElement = () => cy.get('#draggable');
		this.droppableElementOne = () => cy.get('#draggable + div');
		this.droppableParagraph = () => cy.get('#draggable + div > p');
		this.tabAcceptElement = () => cy.get("[data-rb-event-key='accept']");
		this.acceptableElement = () => cy.get('#acceptable');
		this.notAcceptableElement = () => cy.get('#notAcceptable');
		this.droppableElementTwo = () => cy.get('#acceptDropContainer > div:nth-child(2)');
		this.tabPropagation = () => cy.get("[data-rb-event-key='preventPropogation']");
		this.propagationElement = () => cy.get('#dragBox');
		this.droppableElementThree = () => cy.get('#notGreedyDropBox');
		this.InnerDropNotGreedyElement = () => cy.get('#notGreedyInnerDropBox');
		this.InnerDropGreedyElement = () => cy.get('#greedyDropBoxInner');
		this.droppableGreedyParagraph = () => cy.get('#greedyDropBox > p');
		this.tabRevert = () => cy.get("[data-rb-event-key='revertable']");
		this.revertableElement = () => cy.get('#revertable');
		this.droppableElementFour = () => cy.get('#revertableDropContainer > div:nth-child(2)');
		this.notRevertableElement = () => cy.get('#notRevertable');
	}

	//idea de tener simplificado El Test, para pasarle el then
	//Suite, solo se llama al POM, con valor de parámetros.
	//POM Acciones.

	async dragAndDrop(_element: string, _target: object): Promise<boolean> {
		await this.draggableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async dragAndDropAccept(_element: string, _target: object): Promise<boolean> {
		await this.acceptableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async dragAndDropNotAccept(_element: string, _target: object): Promise<boolean> {
		await this.notAcceptableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async dragAndDropPropagation(_element: string, _target: object): Promise<boolean> {
		await this.propagationElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async dragAndDropRevertable(_element: string, _target: object): Promise<boolean> {
		await this.revertableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async dragAndDropNotRevertable(_element: string, _target: object): Promise<boolean> {
		await this.notRevertableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return true;
	}

	async notDragAndDrop(_element: string, _target: object): Promise<boolean> {
		await this.draggableElement().drag(_element, _target);
		//cuando el drag and drop se completa:
		return false;
	}
}

export const droppablePage = new DroppablePage();
