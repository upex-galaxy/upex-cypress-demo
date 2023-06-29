import data from '@data/GX2-3865-sorteable.json';

class SorteablePage {
	get = {
		listContainer: () => cy.get('.vertical-list-container'),
		childrenListContainer: () => cy.get('.vertical-list-container').children(),
	};

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
					resolve(arrayItems); // Array[6]
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
		cy.log('array itemsss ---------------------------');
		cy.log(arrayItems);
		// Indice aleatorio para el valor inicial correspondiente al array
		const startRandomValue = await this.getRandomItem();
		const startTarget = arrayItems[startRandomValue];
		cy.log('random inicial del array-------------');
		cy.log(startTarget);
		cy.log(startRandomValue);

		console.log('start target--------------------------------------');
		console.log(startTarget);
		// Indice aleatorio para el valor final correspondiente al array
		const endRandomValue = await this.getRandomItem();
		const endTarget = arrayItems[endRandomValue];
		cy.log('random fiiiiiiiiiiiiiinal del array');
		cy.log(endTarget); // se imprime vacio a veces

		// Start position. .offset se obtiene la posicion de un elemento. objeto con top y left. coordenadas x e y
		const startPosition = startTarget.offset();
		cy.log('coordenadas x e y del start target');
		cy.log(startPosition);

		// Posicion final
		const dropPosition = endTarget.offset();
		cy.log('coordenadas x e y del droooooooooop target');
		cy.log(dropPosition);

		// Simular arrastre
		cy.log('Arrastre------------------------------------------');
		cy.get(startTarget)
			.trigger('mousedown', { which: 1, pageX: startPosition.left, pageY: startPosition.top, force: true })
			.trigger('mousemove', { which: 1, pageX: dropPosition.left, pageY: dropPosition.top, force: true })
			.trigger('mouseup', { force: true });

		return { startTarget, endTarget };
	}
}

export const sortablePage = new SorteablePage();
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

// glebbbalmutov // gleb bahmutov //
