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
		gridTab: () => cy.get('#demo-tab-grid'),
		listTab: () => cy.get('#demo-tab-list'),
	};

	reorderItems(source, destination) {
		source().trigger('mousedown', { which: 1 });
		cy.wait(1000);
		destination().trigger('mousemove').trigger('mouseup');
		destination()
			.invoke('text')
			.then(texto => {
				destination().should('contain', texto);
			});
		return;
	}
	obtenerNombreMesEnIngles(numero) {
		const numeroEnIngles = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
		return numeroEnIngles;
	}
	ordenarYVerificarLista(elementos) {
		elementos.sort((a, b) => {
			if (a == b) {
				return 0;
			}
			if (a < b) {
				return -1;
			}
			return 1;
		});
	}

	ordenarYVerificarListaDescendente(elementos) {
		elementos.sort((a, b) => {
			if (a == b) {
				return 0;
			}
			if (a > b) {
				return 1;
			}
			return -1;
		});
	}
}

export const lista = new Lista();
