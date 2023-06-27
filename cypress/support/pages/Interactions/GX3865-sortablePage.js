import data from '@data/GX2-3865-sorteable.json';

class SorteablePage {
	get = {
		listContainer: () => cy.get('.vertical-list-container'),
		childrenListContainer: () => cy.get('.vertical-list-container').children(),
	};

	getRandomElement() {
		// Obtain all lists of the web
		const arrayItems = [];
		this.get.childrenListContainer().each(item => {
			arrayItems.push(item);
		});
		cy.log('Array items:', arrayItems);

		// create a random of elements of the lists
		const randomIndex = Cypress._.random(arrayItems - 1);

		return randomIndex;
	}
}

export const sortablePage = new SorteablePage();
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
