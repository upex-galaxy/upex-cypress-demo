let indiceAleatorio;
class Lista {
	elementosList = {
		uno: () => cy.get('div.vertical-list-container').children().eq(0),
		dos: () => cy.get('div.vertical-list-container').children().eq(1),
		tres: () => cy.get('div.vertical-list-container').children().eq(2),
		cuatro: () => cy.get('div.vertical-list-container').children().eq(3),
		cinco: () => cy.get('div.vertical-list-container').children().eq(4),
		seis: () => cy.get('div.vertical-list-container').children().eq(5),
	};

	elementosGrid = {
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
	elementosGenerales = {
		gridTab: () => cy.get('#demo-tab-grid'),
		listTab: () => cy.get('#demo-tab-list'),
		listaCompleta: () => cy.get('div.vertical-list-container').children(),
		GridCompleta: () => cy.get('.create-grid').children(),
	};

	seleccionarElementoAleatorioList() {
		const totalElementos = 6;
		indiceAleatorio = Math.floor(Math.random() * totalElementos);
		let elementoElegido = cy.get('div.vertical-list-container').children().eq(indiceAleatorio);
		return elementoElegido;
	}

	seleccionarElementoAleatorioGrid() {
		const totalElementos = 9;
		indiceAleatorio = Math.floor(Math.random() * totalElementos);
		let elementoElegido = cy.get('.create-grid').children().eq(indiceAleatorio);
		return elementoElegido;
	}

	reorderItems(source, destination) {
		if (source !== destination) {
			source.trigger('mousedown', { which: 1 }, { force: true });
			cy.wait(1000);
			destination.trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
			cy.wait(1000);
		}
		return;
	}

	obtenerNombreMesEnIngles(numero) {
		const numeroEnIngles = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
		return numeroEnIngles;
	}
}

export const lista = new Lista();
