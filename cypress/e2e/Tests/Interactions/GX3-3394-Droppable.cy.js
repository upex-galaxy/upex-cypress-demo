import { droppablePage } from '../../../support/pages/GX3-3394-Droppable.page';
describe('2318 | Interactions | Dragabble', () => {
	// eslint-disable-next-line chai-friendly/no-unused-expressions
	beforeEach(() => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('include', 'droppable');
	});

	it.skip('3395 | TC01:Validar movimiento exitoso de "Arrástrame" dentro de "Soltar aquí" ', () => {
		 droppablePage.moverDragbox();
		 droppablePage.get.dropHere().should('have.css', 'background-color', 'rgb(70, 130, 180)');
		 droppablePage.get.dropHere().should('have.text', 'Dropped!');
	});
	it('3395 | TC02:Validar movimiento exitoso de "Aceptable" dentro de "Soltar aquí" ', () => {
		 cy.get('#droppableExample-tab-accept').click();
		 cy.get('#acceptDropContainer').should('be.visible');

		cy.get('#acceptable')
			.trigger('mousedown', { which: 1 })
			.trigger('mousemove', { clientX: 200, clientY: 20 });
		cy.get('.drop-box.ui-active').should('have.css', 'background-color', 'rgb(60, 179, 113)');

		cy.get('#acceptable')
			.trigger('mousemove', { clientX: 364, clientY: 82 })
			.trigger('mouseup', { force: true });

		/*.trigger('mousemove', { clientX: 366, clientY: 72 });

		/*cy.get('#acceptable').trigger('mousedown', { which: 1 });
		cy.get('#droppable').trigger('mousemove', { clientX: 366, clientY: 72 })
			.trigger('mouseup', { force: true });
		/*.should('have.css', 'background-color', 'rgb(0, 0, 255)') // Blue color
			.contains('Dropped!');*/

	});
} );