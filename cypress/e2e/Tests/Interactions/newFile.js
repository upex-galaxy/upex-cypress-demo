import { lista } from '@pages/Interactions/GX2-5371-Sorteable.page.js';

describe('GX2-5371 | ✅ToolsQA | Interactions | Sortable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/sortable');
	});

	it('5372 | TC1: Validate the tabs “List” and “Gird” must be showing by default.', () => {
		cy.get('#demo-tab-list').should('be.visible');
		cy.get('#demo-tab-grid').should('be.visible');
	});

	it('5372 | TC2: Validate the tab “List” must be opened by default.', () => {
		cy.get('#demo-tab-list').should('have.attr', 'aria-selected', 'true');
		cy.get('#demo-tab-grid').should('have.attr', 'aria-selected', 'false');
	});

	it('5372 | TC3: Validate only one tab can be displayed at once.', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('#demo-tab-list').should('have.attr', 'aria-selected', 'false');
		cy.get('#demo-tab-grid').should('have.attr', 'aria-selected', 'true');
	});
	/* it('5372 | TC4: Validate “List” items have to be able to be ordered in any possible order.', () => {
		cy.get(, '@Two', '@Three', '@Four', '@Five', '@Six'];
		const estaOrdenada = lista.validarListaOrdenada(listaOrdenada);
		console.log(estaOrdenada);
	}); */
	it('5372 | TC4: Validate “Grid” items have to be able to be ordered in any possible order.', () => {
		// Write your test case two here
	});
	it('5372 | TC5: Validate Default order and List items: One, Two, Three, Four, Five, Six.', () => {
		lista.elementos.listaCompleta().should('have.length', 6);
		lista.elementos.uno().should('contain', 'One');
		lista.elementos.dos().should('contain', 'Two');
		lista.elementos.tres().should('contain', 'Three');
		lista.elementos.cuatro().should('contain', 'Four');
		lista.elementos.cinco().should('contain', 'Five');
		lista.elementos.seis().should('contain', 'Six');
	});
	it('5372 | TC6: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		// Write your test case two here
	});
	it('5372 | TC7: Validate Grid items have to be able to be stacked in any order.', () => {
		// Write your test case one here
	});
	it('5372 | TC8: Validate Default grid items One, Two, Three, Four, Five, Six, Seven, Eight, Nine.', () => {
		cy.get('#demo-tab-grid').click();
		lista.elementos.GridCompleta().should('have.length', 9);
		lista.elementos.unoGrid().should('contain', 'One');
		lista.elementos.dosGrid().should('contain', 'Two');
		lista.elementos.tresGrid().should('contain', 'Three');
		lista.elementos.cuatroGrid().should('contain', 'Four');
		lista.elementos.cincoGrid().should('contain', 'Five');
		lista.elementos.seisGrid().should('contain', 'Six');
		lista.elementos.sieteGrid().should('contain', 'Seven');
		lista.elementos.ochoGrid().should('contain', 'Eight');
		lista.elementos.nueveGrid().should('contain', 'Nine');
	});

	it('5372 | TC9: Validate Expected display: 3 x 3 grid.', () => {});
	it.only('5372 | TC10: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		cy.get('#demo-tab-list').click();

		let source = lista.elementos.dos;
		let destination = lista.elementos.tres;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
				source = '';
				destination = '';
			});

		source = lista.elementos.dos;
		destination = lista.elementos.cinco;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
				source = '';
				destination = '';
			});

		source = lista.elementos.tres;
		destination = lista.elementos.cinco;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
				source = '';
				destination = '';
			});

		source = lista.elementos.cuatro;
		destination = lista.elementos.uno;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
				source = '';
				destination = '';
			});

		source = lista.elementos.seis;
		destination = lista.elementos.dos;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
				source = '';
				destination = '';
			});

		source = lista.elementos.cinco;
		destination = lista.elementos.cuatro;
		lista.reorderItems(source, destination);
		destination()
			.invoke('text')
			.then(texto => {
				// Aquí asignamos el valor correcto al texto
				destination().should('contain', texto);
				source = '';
				destination = '';
			});
	});

	it('5372 | TC11: Validate List items have to be able to be stacked in any order.', () => {
		cy.get('#demo-tab-grid').click();
		let source = lista.elementos.dosGrid;
		let destination = lista.elementos.tresGrid;
		lista.reorderItems(source, destination, 'Two');

		source = lista.elementos.dosGrid;
		destination = lista.elementos.cincoGrid;
		lista.reorderItems(source, destination, 'Three');

		source = lista.elementos.tres;
		destination = lista.elementos.cinco;
		lista.reorderItems(source, destination, 'Four');

		source = lista.elementos.cuatro;
		destination = lista.elementos.uno;
		lista.reorderItems(source, destination, 'Three');

		source = lista.elementos.seis;
		destination = lista.elementos.dos;
		lista.reorderItems(source, destination, 'Six');

		source = lista.elementos.cinco;
		destination = lista.elementos.cuatro;
		lista.reorderItems(source, destination, 'Five');
	});
});
