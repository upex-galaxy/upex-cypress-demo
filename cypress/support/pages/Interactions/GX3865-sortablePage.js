class SorteablePage {
	get = {
		listContainer: () => cy.get('.vertical-list-container'),
		childrenListContainer: () => cy.get('.vertical-list-container').children(),
		gridContainer: () => cy.get('.create-grid'),
		childrenGridContainer: () => cy.get('.create-grid').children(),
		gridTab: () => cy.get('#demo-tab-grid'),
		navTab: () => cy.get('.nav-tabs'),
		childrenTabs: () => cy.get('.nav-tabs').children(),
		tabList: () => cy.get('[id="demo-tab-list"]'),
	};

	//About Tabs
	getActiveTabs() {
		return this.get.tabList().filter((index, tab) => {
			return Cypress.$(tab).attr('aria-selected') === 'true' && Cypress.$(tab).hasClass('active');
		});
	}
	//About List----------------------------
	// Obtain arrayItems of the DOM
	getArrayItem() {
		return new Cypress.Promise(resolve => {
			const arrayItems = [];
			this.get
				.childrenListContainer()
				.each(item => {
					arrayItems.push(item);
				})
				.then(() => {
					resolve(arrayItems); // Array[6]<div....
				});
		});
	}

	// Obtain text arrayItems
	getTextArrayItem() {
		return new Cypress.Promise(resolve => {
			const arrayItemsText = [];
			this.get
				.childrenListContainer()
				.each(item => {
					arrayItemsText.push(item.text());
				})
				.then(() => {
					resolve(arrayItemsText); // ["One", "Two", "Three", "Four", "Five", "Six"],
				});
		});
	}

	// Create random of the arrayItems
	async getRandomItem() {
		const arrayItems = await this.getArrayItem();
		const randomIndex = Cypress._.random(1, arrayItems.length);
		cy.log(randomIndex);
		return randomIndex; // 1,2,3,4,5,6
	}

	// Move Random Item
	async triggerItem() {
		const arrayItems = await this.getArrayItem();
		// Indice aleatorio para el valor inicial correspondiente al array
		const startRandomValue = await this.getRandomItem();
		const startTarget = arrayItems[startRandomValue];
		// Obtener el texto de startTarget
		const startTargetText = await startTarget.text();

		// Indice aleatorio para el valor final correspondiente al array
		const endRandomValue = await this.getRandomItem();
		const endTarget = arrayItems[endRandomValue];
		// Obtener el texto de endTarget
		const endTargetText = await endTarget.text();

		// Start position. .offset se obtiene la posicion de un elemento. objeto con top y left. coordenadas x e y
		const startPosition = startTarget.offset();
		// Posicion final
		const dropPosition = endTarget.offset();

		// Simular arrastre
		cy.get(startTarget)
			.trigger('mousedown', { which: 1, pageX: startPosition.left, pageY: startPosition.top, force: true })
			.trigger('mousemove', { which: 1, pageX: dropPosition.left, pageY: dropPosition.top, force: true })
			.trigger('mouseup', { force: true });

		return { startPosition, dropPosition, startTargetText, endTargetText }; // top: 638, left: 500.765625 //{ top: 589, left: 500.765625 } //"One" // "Two"
	}

	//About Grid----------------------------
	moveToGrid() {
		this.get.gridTab().click();
	}
	// Obtain text arrayItems
	getTextArrayGrid() {
		return new Cypress.Promise(resolve => {
			const arrayTextGrid = [];
			this.get
				.childrenGridContainer()
				.each(item => {
					arrayTextGrid.push(item.text());
				})
				.then(() => {
					resolve(arrayTextGrid); // ["One", "Two", "Three", "Four", "Five", "Six"],
				});
		});
	}

	getGridArrayItems() {
		return new Cypress.Promise(resolve => {
			const arrayGridItems = [];
			this.get
				.childrenGridContainer()
				.each(item => {
					arrayGridItems.push(item);
				})
				.then(() => {
					resolve(arrayGridItems); // Array[6]<div....
				});
		});
	}

	async getRandomGridItem() {
		const arrayItems = await this.getGridArrayItems();
		const randomIndex = Cypress._.random(1, arrayItems.length);
		return randomIndex; // 1,2,3,4,5,6,7,8,9
	}

	// Move Random Grind Item
	async triggerGridItem() {
		const arrayItems = await this.getGridArrayItems();
		// Indice aleatorio para el valor inicial correspondiente al array
		const startRandomValue = await this.getRandomGridItem();
		const startTarget = arrayItems[startRandomValue];
		// Obtener el texto de startTarget
		const startTargetText = await startTarget.text();

		// Indice aleatorio para el valor final correspondiente al array
		const endRandomValue = await this.getRandomGridItem();
		const endTarget = arrayItems[endRandomValue];
		// Obtener el texto de endTarget
		const endTargetText = await endTarget.text();

		// Start position. .offset se obtiene la posicion de un elemento. objeto con top y left. coordenadas x e y
		const startPosition = startTarget.offset();
		// Posicion final
		const dropPosition = endTarget.offset();

		// Simular arrastre
		cy.get(startTarget)
			.trigger('mousedown', { which: 1, pageX: startPosition.left, pageY: startPosition.top, force: true })
			.trigger('mousemove', { which: 1, pageX: dropPosition.left, pageY: dropPosition.top, force: true })
			.trigger('mouseup', { force: true });

		return { startPosition, dropPosition, startTargetText, endTargetText }; // top: 638, left: 500.765625 //{ top: 589, left: 500.765625 } //"One" // "Two"
	}
}

export const sortablePage = new SorteablePage();
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
