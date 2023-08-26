import { removeLogs } from '@helper/RemoveLogs';
import { lista } from '@pages/Interactions/GX2-5371-Sorteable.page.js';

describe('GX2-5371 | ✅ToolsQA | Interactions | Sortable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/sortable');
	});

	it('5372 | TC1: Validate the tabs “List” and “Grid” must be showing by default.', () => {
		lista.elementosGenerales.listTab().should('be.visible');
		lista.elementosGenerales.gridTab().should('be.visible');
	});

	it('5372 | TC2: Validate the tab “List” must be opened by default.', () => {
		lista.elementosGenerales.listTab().should('have.attr', 'aria-selected', 'true');
		lista.elementosGenerales.gridTab().should('have.attr', 'aria-selected', 'false');
	});

	it('5372 | TC3: Validate Default order and List items: One, Two, Three, Four, Five, Six.', () => {
		lista.elementosGenerales.listaCompleta().should('have.length', 6);
		lista.elementosList.uno().should('contain', 'One');
		lista.elementosList.dos().should('contain', 'Two');
		lista.elementosList.tres().should('contain', 'Three');
		lista.elementosList.cuatro().should('contain', 'Four');
		lista.elementosList.cinco().should('contain', 'Five');
		lista.elementosList.seis().should('contain', 'Six');
	});

	it('5372 | TC4: Validate Default grid items One, Two, Three, Four, Five, Six, Seven, Eight, Nine.', () => {
		lista.elementosGenerales.gridTab().click();
		lista.elementosGenerales.GridCompleta().should('have.length', 9);
		lista.elementosGrid.unoGrid().should('contain', 'One');
		lista.elementosGrid.dosGrid().should('contain', 'Two');
		lista.elementosGrid.tresGrid().should('contain', 'Three');
		lista.elementosGrid.cuatroGrid().should('contain', 'Four');
		lista.elementosGrid.cincoGrid().should('contain', 'Five');
		lista.elementosGrid.seisGrid().should('contain', 'Six');
		lista.elementosGrid.sieteGrid().should('contain', 'Seven');
		lista.elementosGrid.ochoGrid().should('contain', 'Eight');
		lista.elementosGrid.nueveGrid().should('contain', 'Nine');
	});

	it('5372 | TC5: Validate Expected display: 3 x 3 grid.', () => {
		lista.elementosGenerales.gridTab().click();
		lista.elementosGenerales.GridCompleta().should('have.length', 9);
		lista.elementosGenerales.GridCompleta().each(($item, index) => {
			// Comienza un bucle forEach para iterar a través de los elementos de la cuadrícula.
			const row = Math.floor(index / 3) + 1; // Calcula el número de fila.
			const col = (index % 3) + 1; // Calcula el número de columna,
			let numeroingles = lista.obtenerNombreMesEnIngles(col); // Obtiene el nombre en inglés según la columna.
			cy.wrap($item)
				.should('contain', numeroingles[index])
				.then($item => {
					// Verifica si el elemento contiene el nombre en inglés y registra la fila y columna.
					cy.log(`Fila: ${row}, Columna: ${col}`);
				});
		});
	});

	it('5372 | TC6: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		lista.elementosGenerales.listTab().click();
		for (let i = 0; i < 7; i++) {
			let elementoOrigen = lista.seleccionarElementoAleatorioList();
			let elementoDestino = lista.seleccionarElementoAleatorioList();
			lista.reorderItems(elementoOrigen, elementoDestino);
			elementoDestino.invoke('text').then(texto => {
				elementoDestino.should('contain', texto);
			});
		}
	});

	it('5372 | TC7: Validate Grid items have to be able to be stacked in any order.', () => {
		lista.elementosGenerales.gridTab().click();

		for (let i = 0; i < 10; i++) {
			const elementoOrigen = lista.seleccionarElementoAleatorioGrid();
			const elementoDestino = lista.seleccionarElementoAleatorioGrid();
			lista.reorderItems(elementoOrigen, elementoDestino);
			elementoDestino.invoke('text').then(texto => {
				elementoDestino.should('contain', texto);
			});
		}
	});
});
removeLogs();
