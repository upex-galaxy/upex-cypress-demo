class simple {
	get = {
		dragMe: () => cy.get('#dragBox'),
	};
}

export const dragMeSimple = new simple();
