import { removeLogs } from '@helper/RemoveLogs';
import { lista } from '@pages/Interactions/GX2-5371-Sorteable.page.js';

describe('GX2-5371 | ✅ToolsQA | Interactions | Sortable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/sortable');
	});

	it('5372 | TC1: Validate the tabs “List” and “Gird” must be showing by default.', () => {
		lista.elementos.listTab().should('be.visible');
		lista.elementos.gridTab().should('be.visible');
	});

	it('5372 | TC2: Validate the tab “List” must be opened by default.', () => {
		lista.elementos.listTab().should('have.attr', 'aria-selected', 'true');
		lista.elementos.gridTab().should('have.attr', 'aria-selected', 'false');
	});

	it('5372 | TC3: Validate only one tab can be displayed at once.', () => {
		lista.elementos.gridTab().click();
		lista.elementos.listTab().should('have.attr', 'aria-selected', 'false');
		lista.elementos.gridTab().should('have.attr', 'aria-selected', 'true');
	});

	it('5372 | TC4: Validate “List” items have to be able to be ordered in descending way .', () => {
		lista.elementos.listTab().click();

		let source = lista.elementos.uno;
		let destination = lista.elementos.seis;
		lista.reorderItems(source, destination);

		let source2 = lista.elementos.uno;
		let destination2 = lista.elementos.cinco;
		lista.reorderItems(source2, destination2);

		let source3 = lista.elementos.uno;
		let destination3 = lista.elementos.cuatro;
		lista.reorderItems(source3, destination3);

		let source4 = lista.elementos.uno;
		let destination4 = lista.elementos.tres;
		lista.reorderItems(source4, destination4);

		let source5 = lista.elementos.uno;
		let destination5 = lista.elementos.dos;
		lista.reorderItems(source5, destination5);

		lista.elementos.seis().should('contain', 'One');
		lista.elementos.cinco().should('contain', 'Two');
		lista.elementos.cuatro().should('contain', 'Three');
		lista.elementos.tres().should('contain', 'Four');
		lista.elementos.dos().should('contain', 'Five');
		lista.elementos.uno().should('contain', 'Six');
	});
	it('5372 | TC5: Validate “Grid” items have to be able to be ordered in descending way .', () => {
		lista.elementos.gridTab().click();
		let source = lista.elementos.unoGrid;
		let destination = lista.elementos.nueveGrid;
		lista.reorderItems(source, destination);

		let source1 = lista.elementos.unoGrid;
		let destination1 = lista.elementos.ochoGrid;
		lista.reorderItems(source1, destination1);

		let source2 = lista.elementos.unoGrid;
		let destination2 = lista.elementos.sieteGrid;
		lista.reorderItems(source2, destination2);

		let source3 = lista.elementos.unoGrid;
		let destination3 = lista.elementos.seisGrid;
		lista.reorderItems(source3, destination3);

		let source4 = lista.elementos.unoGrid;
		let destination4 = lista.elementos.cincoGrid;
		lista.reorderItems(source4, destination4);

		let source5 = lista.elementos.unoGrid;
		let destination5 = lista.elementos.cuatroGrid;
		lista.reorderItems(source5, destination5);

		let source6 = lista.elementos.unoGrid;
		let destination6 = lista.elementos.tresGrid;
		lista.reorderItems(source6, destination6);

		let source7 = lista.elementos.unoGrid;
		let destination7 = lista.elementos.dosGrid;
		lista.reorderItems(source7, destination7);

		lista.elementos.nueveGrid().should('contain', 'One');
		lista.elementos.ochoGrid().should('contain', 'Two');
		lista.elementos.sieteGrid().should('contain', 'Three');
		lista.elementos.seisGrid().should('contain', 'Four');
		lista.elementos.cincoGrid().should('contain', 'Five');
		lista.elementos.cuatroGrid().should('contain', 'Six');
		lista.elementos.tresGrid().should('contain', 'Seven');
		lista.elementos.dosGrid().should('contain', 'Eight');
		lista.elementos.unoGrid().should('contain', 'Nine');
	});
	it('5372 | TC6: Validate Default order and List items: One, Two, Three, Four, Five, Six.', () => {
		lista.elementos.listaCompleta().should('have.length', 6);
		lista.elementos.uno().should('contain', 'One');
		lista.elementos.dos().should('contain', 'Two');
		lista.elementos.tres().should('contain', 'Three');
		lista.elementos.cuatro().should('contain', 'Four');
		lista.elementos.cinco().should('contain', 'Five');
		lista.elementos.seis().should('contain', 'Six');
	});

	it('5372 | TC7: Validate Default grid items One, Two, Three, Four, Five, Six, Seven, Eight, Nine.', () => {
		lista.elementos.gridTab().click();
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

	it('5372 | TC8: Validate Expected display: 3 x 3 grid.', () => {
		lista.elementos.gridTab().click();
		lista.elementos.GridCompleta().should('have.length', 9);

		const expectedOrder = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];

		lista.elementos.GridCompleta().each(($item, index) => {
			const row = Math.floor(index / 3) + 1;
			const col = (index % 3) + 1;

			let numeroingles = lista.obtenerNombreMesEnIngles(col);
			cy.wrap($item)
				.should('contain', numeroingles[index])
				.then($item => {
					cy.log(`Fila: ${row}, Columna: ${col}`);
				});
		});
	});

	it('5372 | TC9: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		lista.elementos.listTab().click();

		let source = lista.elementos.dos;
		let destination = lista.elementos.tres;
		lista.reorderItems(source, destination);

		let source1 = lista.elementos.cuatro;
		let destination1 = lista.elementos.cinco;
		lista.reorderItems(source1, destination1);

		let source2 = lista.elementos.tres;
		let destination2 = lista.elementos.uno;
		lista.reorderItems(source2, destination2);

		let source3 = lista.elementos.uno;
		let destination3 = lista.elementos.cinco;
		lista.reorderItems(source3, destination3);

		let source4 = lista.elementos.seis;
		let destination4 = lista.elementos.dos;
		lista.reorderItems(source4, destination4);

		let source5 = lista.elementos.cinco;
		let destination5 = lista.elementos.cuatro;
		lista.reorderItems(source5, destination5);
	});

	it('5372 | TC10: Validate List items have to be able to be stacked in any order.', () => {
		lista.elementos.gridTab().click();

		let source = lista.elementos.dosGrid;
		let destination = lista.elementos.tresGrid;
		lista.reorderItems(source, destination);

		let source1 = lista.elementos.dosGrid;
		let destination1 = lista.elementos.cincoGrid;
		lista.reorderItems(source1, destination1);

		let source2 = lista.elementos.tresGrid;
		let destination2 = lista.elementos.cincoGrid;
		lista.reorderItems(source2, destination2);

		let source3 = lista.elementos.cuatroGrid;
		let destination3 = lista.elementos.unoGrid;
		lista.reorderItems(source3, destination3);

		let source4 = lista.elementos.seisGrid;
		let destination4 = lista.elementos.dosGrid;
		lista.reorderItems(source4, destination4);

		let source5 = lista.elementos.cincoGrid;
		let destination5 = lista.elementos.cuatroGrid;
		lista.reorderItems(source5, destination5);
	});
});
removeLogs();
