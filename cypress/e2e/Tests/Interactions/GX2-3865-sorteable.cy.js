import { sortablePage } from '@pages/Interactions/GX3865-sortablePage';
import data from '@data/GX2-3865-sorteable.json';

describe('This is your test project title', () => {
	before(() => {
		// runs once before all tests
	});
	beforeEach(() => {
		cy.visit('/sortable');
	});
	afterEach(() => {
		// runs after every it() test block
	});
	after(() => {
		// runs once after all tests
	});
	context('This is your test suite title', () => {
		// -- Start: Cypress Tests --
		it('3866 | TC1: Verify change list order', () => {
			// Lists elements are in the expected order' one, two, three...
			const arrayTexts = [];

			sortablePage.get
				.listContainer()
				.children()
				.each(div => {
					const text = div.text();
					arrayTexts.push(text);
				});

			cy.wrap(data.listItems).should('deep.equal', arrayTexts);

			// Move random element to first position
			cy.log('drag and drop----------------------------------------');
			sortablePage.triggerItem();
			//sortablePage.triggerElement();

			// Move random element to last position

			// Move random element to middle position

			// Move random element to ranom position

			// Move 1 element at a time
		});
		it('3866 | TC2: Verify move Grid elements', () => {
			// Write your test case two here
		});
	});
});

// List
// chequear que este en el orden esperado. one, two, three... son 6 elementos.
// mover elementos a la primera posicion, otro a la ultima posicion y otro a la del medio
// mover elemento random a una posicion random
// no poder mover mas de 1 elemento a la vez
//
// Grid
// existencia de 9(1 a 9) items en el orden esperado(una grid de 3x3)
// mover elementos a la primera posicion, otro a la ultima posicion y otro a la del medio
// mover elemento random a una posicion random
// no poder mover mas de 1 elemento a la vez
