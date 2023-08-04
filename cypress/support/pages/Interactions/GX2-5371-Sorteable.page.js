class Lista {
	elementos = {
		uno: () => cy.get('div.vertical-list-container').children().eq(0),
		dos: () => cy.get('div.vertical-list-container').children().eq(1),
		tres: () => cy.get('div.vertical-list-container').children().eq(2),
		cuatro: () => cy.get('div.vertical-list-container').children().eq(3),
		cinco: () => cy.get('div.vertical-list-container').children().eq(4),
		seis: () => cy.get('div.vertical-list-container').children().eq(5),
		listaCompleta: () => cy.get('div.vertical-list-container').children(),
		GridCompleta: () => cy.get('.create-grid').children(),
		unoGrid: () => cy.get('.create-grid').children().eq(0),
		dosGrid: () => cy.get('.create-grid').children().eq(1),
		tresGrid: () => cy.get('.create-grid').children().eq(2),
		cuatroGrid: () => cy.get('.create-grid').children().eq(3),
		cincoGrid: () => cy.get('.create-grid').children().eq(4),
		seisGrid: () => cy.get('.create-grid').children().eq(5),
		sieteGrid: () => cy.get('.create-grid').children().eq(6),
		ochoGrid: () => cy.get('.create-grid').children().eq(7),
		nueveGrid: () => cy.get('.create-grid').children().eq(8),
	};

	reorderItems(source, destination, expectedText) {
		source().trigger('mousedown', { which: 1 });
		cy.wait(1000);
		destination().trigger('mousemove').trigger('mouseup');
		destination().should('contain', expectedText);
	}
}

export const lista = new Lista();
